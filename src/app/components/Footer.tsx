import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logoImage from '../../assets/fd215dcfee7893030ea59d9c628620e5c910acb7.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logoImage} alt="MiningPro Group" className="h-24 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Engineering & Project Delivery for the Mining Industry
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects', 'Careers'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Engineering & PM</li>
              <li>Mineral Processing</li>
              <li>Construction</li>
              <li>Technical Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Adum Kwadaso Nsuom, Off Abuakwa Road, Kumasi, Ghana
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +233 XXX XXX XXX
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  info@miningprogroup.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/company/miningprogroup/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/70">
            © 2026 MiningPro Group. All rights reserved. | Mining Process Project Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}