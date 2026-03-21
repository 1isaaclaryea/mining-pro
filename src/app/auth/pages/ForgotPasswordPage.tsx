import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export function ForgotPasswordPage() {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await requestPasswordReset(email);
    setDone(true);
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white border border-border rounded-xl p-8 shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Forgot password</h1>
        <input className="w-full border rounded-md px-3 py-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        <button className="w-full bg-primary text-white rounded-md px-4 py-2">Send reset link</button>
        {done && <div className="text-sm text-green-700">If the account exists, a reset email has been sent.</div>}
        <Link to="/auth/login" className="text-sm text-primary">Back to login</Link>
      </form>
    </div>
  );
}
