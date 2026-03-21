import { FormEvent, useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export function SignupPage() {
  const { signup } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const message = await signup(fullName, email, password);
      setSuccessMessage(message);
      setPassword("");
      setConfirmPassword("");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Signup failed");
    } finally {
      setIsSubmitting(false);
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
        <h1 className="text-2xl font-bold text-foreground">Create account</h1>
        {error && <div className="text-sm text-red-600">{error}</div>}
        {successMessage && <div className="text-sm text-green-700">{successMessage}</div>}
        <input className="w-full border rounded-md px-3 py-2" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <input className="w-full border rounded-md px-3 py-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        <div className="relative">
          <input
            className="w-full border rounded-md px-3 py-2 pr-10"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
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
        <div className="relative">
          <input
            className="w-full border rounded-md px-3 py-2 pr-10"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showConfirmPassword ? "text" : "password"}
            required
            minLength={8}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((current) => !current)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
            aria-label={showConfirmPassword ? "Hide confirmation password" : "Show confirmation password"}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <button className="w-full bg-primary text-white rounded-md px-4 py-2 disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Sign up"}
        </button>
        <div className="text-sm flex justify-between">
          <Link to="/auth/verify-email" className="text-primary">Verification help</Link>
          <Link to="/auth/login" className="text-primary">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}
