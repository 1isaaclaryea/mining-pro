import { FormEvent, useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { ApiError } from "../../lib/authApi";

export function LoginPage() {
  const { login, resendVerification } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnverified, setIsUnverified] = useState(false);
  const [resendInfo, setResendInfo] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setResendInfo(null);
    setIsUnverified(false);
    setIsSubmitting(true);
    try {
      await login(email, password);
      const next = (location.state as { from?: string } | null)?.from || "/calculations";
      navigate(next, { replace: true });
    } catch (submissionError) {
      if (submissionError instanceof ApiError && submissionError.code === "EMAIL_NOT_VERIFIED") {
        setIsUnverified(true);
      }
      setError(submissionError instanceof Error ? submissionError.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onResendVerification = async () => {
    setResendInfo(null);
    try {
      await resendVerification(email);
      setResendInfo("Verification email sent. Please check your inbox.");
    } catch (resendError) {
      setResendInfo(resendError instanceof Error ? resendError.message : "Unable to resend verification email.");
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white border border-border rounded-xl p-8 shadow-lg space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-1 py-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft size={16} />
          Back to website
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Sign in</h1>
        <p className="text-sm text-muted-foreground">Access MiningPro MET modules</p>
        {error && <div className="text-sm text-red-600">{error}</div>}
        {resendInfo && <div className="text-sm text-blue-700">{resendInfo}</div>}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full border rounded-md px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <input
              className="w-full border rounded-md px-3 py-2 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <button className="w-full bg-primary text-white rounded-md px-4 py-2 disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Login"}
        </button>
        {isUnverified && (
          <button
            type="button"
            onClick={onResendVerification}
            className="w-full border border-primary text-primary rounded-md px-4 py-2"
            disabled={!email}
          >
            Resend verification email
          </button>
        )}
        <div className="flex justify-between text-sm">
          <Link to="/auth/forgot-password" className="text-primary">Forgot password?</Link>
          <Link to="/auth/signup" className="text-primary">Create account</Link>
        </div>
      </form>
    </div>
  );
}
