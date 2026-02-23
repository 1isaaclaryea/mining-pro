import { ArrowRight, Cog, Factory, Wrench, Shield, Award, Users, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { SlideInCTA } from '../components/SlideInCTA';
import heroImage from '../../assets/2723739ca054cf2ae611ed627550fcd579cdeb1c.png';
import facilityImage from '../../assets/7c41b55675b210e7fcdc5d2947889d4a645b8e5b.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: whyUsRef, inView: whyUsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const services = [
    {
      icon: Cog,
      title: 'Engineering & Project Management',
      description: 'Complete EPCM services, feasibility studies, and detailed engineering for mining projects.',
    },
    {
      icon: Factory,
      title: 'Mineral Processing & Metallurgy',
      description: 'Metallurgical testing, process optimization, and plant design for maximum efficiency.',
    },
    {
      icon: Wrench,
      title: 'Construction & Commissioning',
      description: 'Mechanical, electrical, and instrumentation installation with expert commissioning support.',
    },
    {
      icon: Shield,
      title: 'Maintenance & Technical Support',
      description: 'Ongoing maintenance programs and technical expertise to ensure operational excellence.',
    },
  ];

  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '15+', label: 'Years Experience' },
    { value: '5', label: 'Regions Served' },
    { value: '100%', label: 'Safety Focus' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[800px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/75" />
        </div>
        
        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 mt-10 max-w-5xl mx-auto leading-tight ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Engineering & Project Delivery for the Mining Industry
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Delivering technical excellence through mining process engineering, project management, and construction services across West Africa.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <button
              onClick={() => onNavigate('services')}
              className="group bg-accent text-accent-foreground px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 font-semibold"
            >
              Our Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 font-semibold"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${servicesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering and technical solutions for the mining industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg border border-border hover-lift hover:border-primary/30 transition-all duration-300 ${servicesInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="group text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 text-lg font-semibold"
            >
              View All Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
              const suffix = stat.value.replace(/[0-9]/g, '');
              return (
                <div key={index} className={`text-center ${statsInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-2">
                    {statsInView && numericValue ? (
                      <>
                        <CountUp end={numericValue} duration={2.5} separator="," />
                        {suffix}
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HSE Emphasis */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-1">
                  Safety & Quality First
                </h3>
                <p className="text-white/80 text-sm">
                  Committed to HSE excellence and quality assurance in every project
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('safety')}
              className="bg-white text-primary px-6 py-3 rounded-md hover:bg-white/90 hover:scale-105 transition-all duration-300 flex-shrink-0 font-semibold shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div ref={whyUsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${whyUsInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Why Partner with MiningPro Group
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Technical Excellence</h4>
                    <p className="text-muted-foreground text-sm">
                      Industry-leading expertise in mining process engineering and project delivery
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Experienced Team</h4>
                    <p className="text-muted-foreground text-sm">
                      Dedicated professionals with deep understanding of West African mining operations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Proven Track Record</h4>
                    <p className="text-muted-foreground text-sm">
                      Successfully delivered 150+ projects across Ghana and West Africa
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold"
              >
                About MiningPro Group
              </button>
            </div>
            <div className={`relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl ${whyUsInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <img
                src={facilityImage}
                alt="Mining Processing Facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide-in CTA */}
      <SlideInCTA onNavigate={onNavigate} />
    </div>
  );
}