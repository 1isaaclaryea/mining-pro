import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SafetyPage } from "./pages/SafetyPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { CalculationsSuitePage } from "./pages/CalculationsSuitePage";
import { PricingPage } from "./pages/PricingPage";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import { ProtectedRoute } from "./auth/components/ProtectedRoute";
import { LoginPage } from "./auth/pages/LoginPage";
import { SignupPage } from "./auth/pages/SignupPage";
import { ForgotPasswordPage } from "./auth/pages/ForgotPasswordPage";
import { ResetPasswordPage } from "./auth/pages/ResetPasswordPage";
import { VerifyEmailPage } from "./auth/pages/VerifyEmailPage";

const pageToPath: Record<string, string> = {
  home: "/",
  about: "/about",
  aboutus: "/about",
  services: "/services",
  projects: "/projects",
  calculations: "/calculations",
  pricing: "/pricing",
  safety: "/safety",
  careers: "/careers",
  contact: "/contact",
  login: "/auth/login",
};

const pathToPage = (pathname: string): string => {
  if (pathname === "/" || pathname === "") return "home";
  const key = pathname.slice(1);
  if (key === "auth/login") return "home";
  if (key === "auth/signup") return "home";
  return key;
};

function AppShell() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const onNavigate = (page: string) => {
    navigate(pageToPath[page] || "/");
  };

  const isAuthRoute = pathname.startsWith("/auth/");

  return (
    <div className="min-h-screen bg-background">
      {!isAuthRoute && (
        <Navigation
          activePage={pathToPage(pathname)}
          onNavigate={onNavigate}
          isAuthenticated={isAuthenticated}
          userName={user?.fullName}
          onLogout={logout}
        />
      )}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={onNavigate} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage onNavigate={onNavigate} />} />
          <Route path="/projects" element={<ProjectsPage onNavigate={onNavigate} />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/calculations"
            element={
              <ProtectedRoute>
                <CalculationsSuitePage />
              </ProtectedRoute>
            }
          />
          <Route path="/pricing" element={<PricingPage />} />

          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
          <Route path="/auth/verify-email" element={<VerifyEmailPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAuthRoute && <Footer onNavigate={onNavigate} />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppShell />
      </AuthProvider>
    </BrowserRouter>
  );
}
