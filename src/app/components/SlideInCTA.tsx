import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface SlideInCTAProps {
  onNavigate: (page: string) => void;
}

export function SlideInCTA({ onNavigate }: SlideInCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 50 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 slide-in-cta">
      <div className="glass-card rounded-2xl shadow-2xl p-6 max-w-sm relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="pr-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Ready to Start Your Project?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get expert mining engineering consultation from our team.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              handleDismiss();
            }}
            className="group w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2"
          >
            Contact Us Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
