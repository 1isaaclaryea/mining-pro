import { FormEvent, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../AuthContext";

export function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const [searchParams] = useSearchParams();
  const token = useMemo(() => searchParams.get("token") || "", [searchParams]);
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      await resetPassword(token, password);
      setDone(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Reset failed");
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white border border-border rounded-xl p-8 shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Reset password</h1>
        {!token && <div className="text-sm text-red-600">Missing reset token.</div>}
        {error && <div className="text-sm text-red-600">{error}</div>}
        {done ? <div className="text-sm text-green-700">Password reset successful.</div> : (
          <>
            <input className="w-full border rounded-md px-3 py-2" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required minLength={8} />
            <button className="w-full bg-primary text-white rounded-md px-4 py-2" disabled={!token}>Update password</button>
          </>
        )}
        <Link to="/auth/login" className="text-sm text-primary">Back to login</Link>
      </form>
    </div>
  );
}
