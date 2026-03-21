import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authApi, type AuthUser } from "../lib/authApi";

interface AuthContextValue {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (fullName: string, email: string, password: string) => Promise<string>;
  resendVerification: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const ACCESS_TOKEN_KEY = "miningpro_access_token";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem(ACCESS_TOKEN_KEY));
  const [isLoading, setIsLoading] = useState(true);

  const updateSession = (token: string | null, nextUser: AuthUser | null) => {
    setAccessToken(token);
    setUser(nextUser);
    if (token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
  };

  const refresh = async () => {
    const data = await authApi.refresh();
    updateSession(data.accessToken, data.user);
  };

  const login = async (email: string, password: string) => {
    const data = await authApi.login({ email, password });
    updateSession(data.accessToken, data.user);
  };

  const signup = async (fullName: string, email: string, password: string) => {
    const data = await authApi.register({ fullName, email, password });
    updateSession(null, null);
    return data.message;
  };

  const resendVerification = async (email: string) => {
    await authApi.resendVerification(email);
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      updateSession(null, null);
    }
  };

  const requestPasswordReset = async (email: string) => {
    await authApi.forgotPassword(email);
  };

  const resetPassword = async (token: string, newPassword: string) => {
    await authApi.resetPassword({ token, newPassword });
  };

  const verifyEmail = async (token: string) => {
    await authApi.verifyEmail(token);
    if (accessToken) {
      const me = await authApi.me(accessToken);
      updateSession(accessToken, me.user);
    }
  };

  useEffect(() => {
    const bootstrap = async () => {
      try {
        if (!accessToken) {
          await refresh();
          return;
        }

        const me = await authApi.me(accessToken);
        updateSession(accessToken, me.user);
      } catch {
        try {
          await refresh();
        } catch {
          updateSession(null, null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    bootstrap();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      accessToken,
      isAuthenticated: Boolean(user && accessToken),
      isLoading,
      login,
      signup,
      resendVerification,
      logout,
      refresh,
      requestPasswordReset,
      resetPassword,
      verifyEmail,
    }),
    [user, accessToken, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
