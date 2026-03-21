import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/fd215dcfee7893030ea59d9c628620e5c910acb7.png";

interface NavigationProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isAuthenticated: boolean;
  userName?: string;
  onLogout: () => Promise<void>;
}

export function Navigation({ activePage, onNavigate, isAuthenticated, userName, onLogout }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "MET Modules", id: "calculations" },
    { name: "Pricing", id: "pricing" },
    { name: "Safety & Quality", id: "safety" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ];

  const authAction = async () => {
    if (isAuthenticated) {
      await onLogout();
      onNavigate("home");
      return;
    }
    onNavigate("login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => onNavigate("home")} className="flex-shrink-0 transition-opacity hover:opacity-80">
            <img src={logoImage} alt="MiningPro Group" className="h-20 w-auto" />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent hover:scale-105 ${
                  activePage === item.id ? "text-accent" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={authAction}
              className="bg-accent text-accent-foreground px-6 py-2.5 rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold"
            >
              {isAuthenticated ? `Logout${userName ? ` (${userName.split(" ")[0]})` : ""}` : "Login"}
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-md hover:bg-white/10">
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md transition-all duration-300 font-medium ${
                  activePage === item.id
                    ? "bg-accent text-accent-foreground scale-105"
                    : "hover:bg-white/10 text-white hover:scale-105"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={async () => {
                await authAction();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-accent text-accent-foreground px-4 py-3 rounded-md hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
