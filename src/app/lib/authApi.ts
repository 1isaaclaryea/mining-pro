export type ModuleCode = "ball-charge" | "power-wear-insights" | "throughput" | "power-draw" | "liner-wear";

export interface ModuleSubscription {
  moduleCode: ModuleCode;
  status: "ACTIVE" | "INACTIVE";
  planCode?: string;
  currentPeriodEnd?: string;
  paystackCustomerCode?: string;
  paystackSubscriptionCode?: string;
  lastPaymentAt?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  role: "USER" | "ADMIN";
  isEmailVerified: boolean;
  moduleSubscriptions: ModuleSubscription[];
}

export class ApiError extends Error {
  constructor(message: string, public readonly code?: string) {
    super(message);
    this.name = "ApiError";
  }
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api/v1";

type JsonBody = Record<string, unknown> | undefined;

export async function request<T>(path: string, method: string, body?: JsonBody, accessToken?: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    const message = payload?.error?.message || "Request failed";
    const code = payload?.error?.code;
    throw new ApiError(message, code);
  }

  return response.json();
}

export const authApi = {
  register: (payload: { email: string; fullName: string; password: string }) =>
    request<{ success: true; message: string }>("/auth/register", "POST", payload),
  resendVerification: (email: string) =>
    request<{ success: boolean }>("/auth/resend-verification", "POST", { email }),
  login: (payload: { email: string; password: string }) =>
    request<{ accessToken: string; user: AuthUser }>("/auth/login", "POST", payload),
  refresh: () => request<{ accessToken: string; user: AuthUser }>("/auth/refresh", "POST"),
  logout: () => request<{ success: boolean }>("/auth/logout", "POST"),
  logoutAll: (accessToken: string) =>
    request<{ success: boolean }>("/auth/logout-all", "POST", undefined, accessToken),
  verifyEmail: (token: string) => request<{ success: boolean }>("/auth/verify-email", "POST", { token }),
  forgotPassword: (email: string) => request<{ success: boolean }>("/auth/forgot-password", "POST", { email }),
  resetPassword: (payload: { token: string; newPassword: string }) =>
    request<{ success: boolean }>("/auth/reset-password", "POST", payload),
  me: (accessToken: string) => request<{ user: AuthUser }>("/auth/me", "GET", undefined, accessToken),
};
