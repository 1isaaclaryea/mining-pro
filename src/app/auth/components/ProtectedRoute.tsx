import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="min-h-screen pt-40 text-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
