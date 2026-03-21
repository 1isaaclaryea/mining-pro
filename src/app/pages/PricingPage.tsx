import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useAuth } from "../auth/AuthContext";
import { ApiError, type ModuleCode } from "../lib/authApi";
import { paymentsApi, type PaymentCatalogResponse, type PricingModule } from "../lib/paymentsApi";

const formatPrice = (module: PricingModule) => {
  if (module.billingType === "free") {
    return "Free";
  }
  return `${module.currency} ${module.monthlyPrice}/month`;
};

export function PricingPage() {
  const { isAuthenticated, accessToken, user, refresh } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [catalog, setCatalog] = useState<PaymentCatalogResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [submittingModuleCode, setSubmittingModuleCode] = useState<ModuleCode | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await paymentsApi.catalog();
        setCatalog(response);
      } catch (error) {
        setMessage(error instanceof Error ? error.message : "Unable to load pricing information.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    const finalizeRedirectCheckout = async () => {
      if (!isAuthenticated || !accessToken) {
        return;
      }

      const params = new URLSearchParams(location.search);
      const reference = params.get("reference") || params.get("trxref");
      if (!reference) {
        return;
      }

      try {
        await paymentsApi.verify(accessToken, reference);
        await refresh();
        setMessage("Subscription activated successfully.");
      } catch (error) {
        const verifyMessage =
          error instanceof ApiError ? error.message : "Unable to verify subscription.";
        setMessage(verifyMessage);
      } finally {
        navigate("/pricing", { replace: true });
      }
    };

    finalizeRedirectCheckout();
  }, [accessToken, isAuthenticated, location.search, navigate, refresh]);

  const activeModules = useMemo(() => {
    const active = new Set<ModuleCode>(["ball-charge"]);
    if (user?.role === "ADMIN") {
      active.add("power-wear-insights");
      active.add("throughput");
      active.add("power-draw");
      active.add("liner-wear");
      return active;
    }

    for (const subscription of user?.moduleSubscriptions || []) {
      if (subscription.status === "ACTIVE") {
        active.add(subscription.moduleCode);
      }
    }

    return active;
  }, [user]);

  const handleSubscribe = async (moduleCode: ModuleCode) => {
    if (!isAuthenticated || !accessToken) {
      navigate("/auth/login", { state: { from: location.pathname } });
      return;
    }

    setSubmittingModuleCode(moduleCode);
    setMessage(null);

    try {
      const initialized = await paymentsApi.initialize(accessToken, moduleCode);
      if (initialized.bypass) {
        await refresh();
        setMessage("Access already active for this module.");
        return;
      }

      if (
        !initialized.publicKey ||
        !initialized.email ||
        !initialized.amountMinor ||
        !initialized.currency ||
        !initialized.reference ||
        !initialized.planCode ||
        !initialized.authorizationUrl
      ) {
        throw new Error("Incomplete payment initialization response.");
      }

      setMessage("Redirecting to secure checkout...");
      window.location.assign(initialized.authorizationUrl);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to start checkout.");
    } finally {
      setSubmittingModuleCode(null);
    }
  };

  return (
    <div className="min-h-screen bg-secondary pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Pricing</h1>
          <p className="text-muted-foreground text-lg">Monthly plans and module subscriptions for MET tools.</p>
        </div>

        {loading && <p className="text-center text-muted-foreground">Loading pricing...</p>}
        {message && <p className="text-center text-primary text-sm">{message}</p>}

        {!loading && catalog && (
          <>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {catalog.tiers.map((tier) => (
                <Card key={tier.id} className="h-full">
                  <CardHeader>
                    <CardTitle>{tier.title}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="text-2xl font-bold text-foreground">{tier.monthlyPrice}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Per-module pricing matrix</h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="text-left p-4">Module</th>
                      <th className="text-left p-4">Billing</th>
                      <th className="text-left p-4">Availability</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {catalog.modules.map((module) => {
                      const active = activeModules.has(module.moduleCode);
                      const isSubmittingThisModule = submittingModuleCode === module.moduleCode;
                      return (
                        <tr key={module.moduleCode} className="border-t border-border">
                          <td className="p-4 font-medium">{module.title}</td>
                          <td className="p-4">{formatPrice(module)}</td>
                          <td className="p-4">{module.available ? "Available" : "Coming soon"}</td>
                          <td className="p-4">{active ? "Active" : module.billingType === "free" ? "Included" : "Inactive"}</td>
                          <td className="p-4">
                            {module.billingType === "free" ? (
                              <Button variant="outline" onClick={() => navigate("/calculations")}>Use module</Button>
                            ) : active ? (
                              <Button variant="outline" onClick={() => navigate("/calculations")}>
                                Use module
                              </Button>
                            ) : (
                              <Button
                                disabled={!module.available || isSubmittingThisModule}
                                onClick={() => handleSubscribe(module.moduleCode)}
                              >
                                {isSubmittingThisModule ? "Opening..." : "Subscribe"}
                              </Button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
