import { request, type ModuleCode, type ModuleSubscription } from "./authApi";

export interface PricingTier {
  id: "free" | "pro" | "team";
  title: string;
  monthlyPrice: string;
  description: string;
  features: string[];
}

export interface PricingModule {
  moduleCode: ModuleCode;
  title: string;
  billingType: "free" | "recurring";
  monthlyPrice: number;
  currency: string;
  available: boolean;
}

export interface PaymentCatalogResponse {
  tiers: PricingTier[];
  modules: PricingModule[];
}

export interface InitializePaymentResponse {
  bypass: boolean;
  moduleCode?: ModuleCode;
  email?: string;
  amountMinor?: number;
  currency?: string;
  planCode?: string;
  reference?: string;
  accessCode?: string;
  authorizationUrl?: string;
  publicKey?: string;
}

export interface VerifyPaymentResponse {
  moduleCode: ModuleCode;
  moduleSubscriptions: ModuleSubscription[];
}

export const paymentsApi = {
  catalog: () => request<PaymentCatalogResponse>("/payments/catalog", "GET"),
  initialize: (accessToken: string, moduleCode: ModuleCode) =>
    request<InitializePaymentResponse>("/payments/initialize", "POST", { moduleCode }, accessToken),
  verify: (accessToken: string, reference: string) =>
    request<VerifyPaymentResponse>(`/payments/verify?reference=${encodeURIComponent(reference)}`, "GET", undefined, accessToken),
};
