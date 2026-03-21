import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { AuthShell } from "../components/AuthShell";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

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
    <AuthShell
      eyebrow="Verify Email"
      title="Complete your registration"
      description="Please check your inbox and open the verification link to activate your MiningPro account."
      footer={
        <div className="flex justify-center">
          <Link to="/auth/login" className="font-medium text-primary transition-colors hover:text-primary/80">
            Go to login
          </Link>
        </div>
      }
    >
      <div className="space-y-6">
        {!token && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            Please check your inbox and open the verification link.
          </div>
        )}
        {status === "idle" && token && (
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-700">
            Verifying...
          </div>
        )}
        {status === "success" && (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Email verified successfully. You can now login to your account.
          </div>
        )}
        {status === "error" && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Verification failed. Token may be expired or invalid.
          </div>
        )}

        {!token && (
          <form onSubmit={onResend} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="verify-email">Email</Label>
              <Input
                id="verify-email"
                className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter your signup email"
                required
              />
            </div>
            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-white shadow-[0_18px_40px_rgba(49,81,140,0.28)] hover:bg-primary/95"
            >
              Resend verification email
            </Button>
          </form>
        )}

        {resendInfo && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            {resendInfo}
          </div>
        )}
      </div>
    </AuthShell>
  );
}
