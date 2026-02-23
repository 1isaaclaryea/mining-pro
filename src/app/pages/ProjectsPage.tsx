import { MapPin, Calendar, Wrench } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { SlideInCTA } from '../components/SlideInCTA';
import facilityImage from '../../assets/7c41b55675b210e7fcdc5d2947889d4a645b8e5b.png';
import processingImage from '../../assets/8aef6e8f40dc4301a703dde7b2ba4362431f6f6f.png';
import miningImage from '../../assets/2723739ca054cf2ae611ed627550fcd579cdeb1c.png';

export function ProjectsPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const projects = [
    {
      title: 'Gold Processing Plant Expansion',
      location: 'Ashanti Region, Ghana',
      service: 'EPCM Services',
      year: '2024-2025',
      image: facilityImage,
      description: 'Complete EPCM delivery for 2.5 Mtpa gold processing facility expansion including crushing, milling, and CIL circuits.',
    },
    {
      title: 'Copper Concentrator Commissioning',
      location: 'Burkina Faso',
      service: 'Commissioning & Startup',
      year: '2024',
      image: processingImage,
      description: 'Commissioning support and operational readiness for new 1.8 Mtpa copper flotation plant.',
    },
    {
      title: 'Bauxite Mine Infrastructure',
      location: 'Western Region, Ghana',
      service: 'Engineering & Construction',
      year: '2023-2024',
      image: miningImage,
      description: 'Design and construction of crushing and screening facilities for bauxite mining operation.',
    },
    {
      title: 'Gold Plant Optimization',
      location: 'Central Region, Ghana',
      service: 'Technical Services',
      year: '2023',
      image: facilityImage,
      description: 'Process audit and optimization program resulting in 12% increase in gold recovery.',
    },
    {
      title: 'Manganese Processing Facility',
      location: 'Côte d\'Ivoire',
      service: 'Detailed Engineering',
      year: '2022-2023',
      image: processingImage,
      description: 'Complete detailed engineering package for new manganese beneficiation plant.',
    },
    {
      title: 'Diamond Plant Upgrade',
      location: 'Sierra Leone',
      service: 'EPCM Services',
      year: '2022',
      image: miningImage,
      description: 'Upgrade and modernization of existing diamond recovery plant with new dense media separation circuit.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Projects
            </h1>
            <p className={`text-lg md:text-xl text-white/90 leading-relaxed ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              Showcasing our track record of successful project delivery across West Africa. From feasibility studies to full EPCM execution, we bring technical excellence to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-secondary">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className={`${statsInView ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                {statsInView ? <><CountUp end={150} duration={2.5} />+</> : '150+'}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Projects Completed</p>
            </div>
            <div className={`${statsInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                {statsInView ? <>$<CountUp end={500} duration={2.5} />M+</> : '$500M+'}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Project Value</p>
            </div>
            <div className={`${statsInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                {statsInView ? <CountUp end={5} duration={2.5} /> : '5'}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Countries Served</p>
            </div>
            <div className={`${statsInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                {statsInView ? <><CountUp end={98} duration={2.5} />%</> : '98%'}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div ref={projectsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${projectsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent and ongoing projects demonstrating our capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border border-border overflow-hidden hover-lift ${projectsInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs mb-3">
                    {project.service}
                  </div>
                  <h3 className="text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Project Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse experience across all aspects of mining projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">Greenfield Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Complete project delivery for new mining and processing facilities from concept to commissioning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">Plant Expansions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Capacity increases and process improvements for existing operations with minimal downtime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">Brownfield Optimization</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Process audits, debottlenecking, and retrofit projects to maximize performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Let's Discuss Your Next Project
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us to learn how our proven project delivery approach can benefit your mining operation.
          </p>
          <button 
            onClick={() => onNavigate?.('contact')}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Slide-in CTA */}
      {onNavigate && <SlideInCTA onNavigate={onNavigate} />}
    </div>
  );
}