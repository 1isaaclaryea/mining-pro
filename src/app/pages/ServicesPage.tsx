import { 
  FileText, 
  Cog, 
  BarChart, 
  Settings, 
  Wrench,
  Hammer,
  ClipboardCheck,
  TrendingUp,
  Package,
  Box,
  CheckCircle,
  PlayCircle
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SlideInCTA } from '../components/SlideInCTA';
import processingImage from '../../assets/8aef6e8f40dc4301a703dde7b2ba4362431f6f6f.png';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function ServicesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const services: Service[] = [
    {
      icon: Hammer,
      title: 'Engineering, Construction & Commissioning',
      description: 'Complete engineering designs, construction management, commissioning of new facilities, and professional decommissioning services for mining operations and plants.',
    },
    {
      icon: Settings,
      title: 'Operations Management & Maintenance',
      description: 'Comprehensive management and maintenance services for mining operations and processing plants to ensure optimal performance and reliability.',
    },
    {
      icon: FileText,
      title: 'Feasibility Studies & Technical Audits',
      description: 'Professional feasibility studies and comprehensive technical audits to evaluate project viability and optimize existing operations.',
    },
    {
      icon: PlayCircle,
      title: 'Project Implementation & Performance Testing',
      description: 'Expert implementation of mining projects and rigorous performance testing for operations and processing plants to ensure design specifications are met.',
    },
    {
      icon: Package,
      title: 'Mining & Industrial Supplies',
      description: 'General mining, engineering, and industrial supplies to support your operations with quality equipment and materials.',
    },
    {
      icon: Box,
      title: '3D Scanning & 3D Modeling',
      description: 'Advanced 3D scanning and modeling services for accurate site surveys, as-built documentation, and precise engineering design work.',
    },
  ];

  const ServiceCategory = ({ 
    title, 
    description, 
    services, 
    bgColor 
  }: { 
    title: string; 
    description: string; 
    services: Service[]; 
    bgColor: string;
  }) => (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Services
            </h1>
            <p className={`text-lg md:text-xl text-white/90 leading-relaxed ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              Comprehensive engineering, technical, and construction services tailored to the unique challenges of mining operations in West Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering & Project Services */}
      <section className="py-20 bg-white">
        <div ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${servicesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              MiningPro's Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services for mining operations and plant management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg border border-border hover-lift hover:border-primary/30 transition-all duration-300 ${servicesInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3">Full EPCM</div>
              <h3 className="text-white mb-2">Complete Project Delivery</h3>
              <p className="text-white/80 text-sm">
                End-to-end project management from feasibility to commissioning
              </p>
            </div>
            <div className="glass-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3">Local Expertise</div>
              <h3 className="text-white mb-2">West African Focus</h3>
              <p className="text-white/80 text-sm">
                Deep understanding of regional mining operations and regulations
              </p>
            </div>
            <div className="glass-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3">Quality Assured</div>
              <h3 className="text-white mb-2">ISO Certified Systems</h3>
              <p className="text-white/80 text-sm">
                Rigorous quality management and technical standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specialties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Our Technical Specialties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across all aspects of mining engineering and operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Feasibility Study',
              'Front End Engineering Design',
              'Detailed Engineering',
              'Engineering, Procurement, Construction Management',
              'Project Management and Controls',
              'Mining Technical Services',
              'Minerals & Metallurgical Processing',
              'Product Design & Manufacturing',
              'HAZOP Study',
              'Geotechnical Engineering',
              'Structural, Mechanical, Plate Work & Piping',
              'Electrical & Instrumentation',
              'Plant Commissioning',
              'Process Training',
              'Technical and Operation Support',
              'Plant Performance Testing',
              'Plant Maintenance',
              'Joint Venture Projects',
              'Partnership Proposals'
            ].map((specialty, index) => (
              <div
                key={index}
                className="bg-secondary border border-border rounded-lg p-4 text-center hover:shadow-md transition-all hover:border-primary/30"
              >
                <p className="text-foreground text-sm">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Industry Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized experience across diverse mining commodities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Gold', 'Copper', 'Bauxite', 'Manganese', 'Iron Ore', 'Diamond', 'Coal', 'Base Metals'].map((sector) => (
              <div
                key={sector}
                className="bg-white p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow"
              >
                <p className="text-foreground">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Facility Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src={processingImage}
                alt="Mining Processing Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                State-of-the-Art Processing Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our engineering team specializes in designing, installing, and commissioning advanced mineral processing equipment including grinding mills, flotation circuits, and gravity separation systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Cog className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Advanced Equipment Design</h4>
                    <p className="text-muted-foreground text-sm">
                      Engineering solutions for crushers, mills, separators, and all process equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Process Optimization</h4>
                    <p className="text-muted-foreground text-sm">
                      Maximizing throughput and recovery through systematic process improvements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team to discuss how we can support your mining engineering and construction needs.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Slide-in CTA */}
      <SlideInCTA onNavigate={onNavigate} />
    </div>
  );
}