import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../AuthContext";

export function VerifyEmailPage() {
  const { verifyEmail, resendVerification } = useAuth();
  const [searchParams] = useSearchParams();
  const token = useMemo(() => searchParams.get("token") || "", [searchParams]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [resendInfo, setResendInfo] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    verifyEmail(token)
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  }, [token]);

  const onResend = async (event: FormEvent) => {
    event.preventDefault();
    setResendInfo(null);
    try {
      await resendVerification(email);
      setResendInfo("Verification email sent. Please check your inbox.");
    } catch (error) {
      setResendInfo(error instanceof Error ? error.message : "Unable to resend verification email.");
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-border rounded-xl p-8 shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Verify email</h1>
        {!token && <p className="text-sm">Please check your inbox and open the verification link.</p>}
        {status === "idle" && token && <p className="text-sm">Verifying...</p>}
        {status === "success" && <p className="text-sm text-green-700">Email verified successfully.</p>}
        {status === "error" && <p className="text-sm text-red-600">Verification failed. Token may be expired.</p>}

        {!token && (
          <form onSubmit={onResend} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your signup email"
              className="w-full border rounded-md px-3 py-2"
              required
            />
            <button type="submit" className="w-full border border-primary text-primary rounded-md px-4 py-2">
              Resend verification email
            </button>
          </form>
        )}

        {resendInfo && <p className="text-sm text-blue-700">{resendInfo}</p>}
        <Link to="/auth/login" className="text-sm text-primary">Go to login</Link>
      </div>
    </div>
  );
}
