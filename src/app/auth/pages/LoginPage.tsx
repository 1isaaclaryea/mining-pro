import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { AuthShell } from "../components/AuthShell";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
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
    <AuthShell
      eyebrow="Sign In"
      title="Access your MiningPro workspace"
      description="Secure sign-in for MiningPro MET modules and engineering tools. Your existing authentication flow and account protections remain unchanged."
      footer={
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/auth/forgot-password" className="font-medium text-primary transition-colors hover:text-primary/80">
            Forgot password?
          </Link>
          <p>
            New here?{" "}
            <Link to="/auth/signup" className="font-medium text-primary transition-colors hover:text-primary/80">
              Create account
            </Link>
          </p>
        </div>
      }
    >
      <form onSubmit={onSubmit} className="space-y-5">
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
        {resendInfo && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            {resendInfo}
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input
            id="login-email"
            className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="login-password">Password</Label>
          <div className="relative">
            <Input
              id="login-password"
              className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4 pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="absolute right-3 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-white shadow-[0_18px_40px_rgba(49,81,140,0.28)] hover:bg-primary/95"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Login"}
        </Button>

        {isUnverified && (
          <Button
            type="button"
            variant="outline"
            onClick={onResendVerification}
            className="h-12 w-full rounded-xl border-primary/25 bg-primary/5 text-primary hover:bg-primary hover:text-white"
            disabled={!email}
          >
            Resend verification email
          </Button>
        )}
      </form>
    </AuthShell>
  );
}
