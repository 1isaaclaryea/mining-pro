import { Target, Eye, Heart, Shield, CheckCircle, Users, Award, TrendingUp, Globe, Lightbulb, Zap, Building2, ChevronRight, Factory, Cog, Wrench } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: diffRef, inView: diffInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: expertiseRef, inView: expertiseInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const milestones = [
    { year: '2014', event: 'MiningPro Group Founded in Kumasi, Ghana' },
    { year: '2016', event: 'Expanded Services to West African Markets' },
    { year: '2018', event: 'Achieved ISO 9001 Certification' },
    { year: '2020', event: 'Reached 50+ Major Projects Milestone' },
    { year: '2023', event: 'Grew to 11-50 Employees with 61 Associated Members' },
    { year: '2026', event: 'Leading EPCM Provider in West Africa' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Zero harm is our goal. We prioritize the health and safety of our people and communities in every decision.',
    },
    {
      icon: CheckCircle,
      title: 'Technical Excellence',
      description: 'Delivering world-class engineering solutions backed by rigorous quality assurance and technical competence.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical standards in all our business relationships.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients, suppliers, and communities for mutual success.',
    },
  ];

  const expertise = [
    {
      icon: Cog,
      title: 'Metallurgy',
      description: 'Advanced metallurgical testing, process optimization, and recovery maximization for diverse ore types.',
    },
    {
      icon: Lightbulb,
      title: 'Studies & Consulting',
      description: 'Comprehensive feasibility studies, technical assessments, and strategic consulting for mining ventures.',
    },
    {
      icon: Building2,
      title: 'Engineering',
      description: 'Complete engineering solutions from conceptual design through detailed engineering and execution.',
    },
    {
      icon: Factory,
      title: 'Construction',
      description: 'Full-scale construction services including mechanical, electrical, and civil installation works.',
    },
    {
      icon: Wrench,
      title: 'Project Management',
      description: 'End-to-end project delivery with proven methodologies ensuring on-time, on-budget execution.',
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'Ongoing operational support, maintenance programs, and troubleshooting expertise.',
    },
  ];

  const achievements = [
    { value: '150+', label: 'Projects Completed', icon: Award },
    { value: '15+', label: 'Years Experience', icon: TrendingUp },
    { value: '5', label: 'Countries Served', icon: Globe },
    { value: '61', label: 'Expert Associates', icon: Users },
  ];

  const differentiators = [
    {
      title: 'Skilled & Positive Team',
      description: 'Our highly qualified engineers and technicians bring extensive mining industry experience combined with a collaborative, can-do attitude.',
      icon: Users,
    },
    {
      title: 'Enormous Experience',
      description: 'Over 15 years of proven project delivery across diverse mining operations, from gold to industrial minerals throughout West Africa.',
      icon: Award,
    },
    {
      title: 'Client-Centric Approach',
      description: 'Every project is executed with our client\'s success in mind. We leverage our expertise to maximize value and minimize risk.',
      icon: Heart,
    },
    {
      title: 'Local & Technical Knowledge',
      description: 'Deep understanding of regional mining regulations, geology, and operational challenges combined with world-class technical standards.',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,166,35,0.1),transparent_50%)]" />
        </div>
        
        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center gap-2 bg-accent/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
              <Building2 className="h-4 w-4" />
              <span className="text-sm">Engineering Excellence Since 2014</span>
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
              Building the Future of Mining in West Africa
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 leading-relaxed mb-8 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              MiningPro is an engineering and construction services provider specializing in metallurgy, studies, engineering, construction and projects across Ghana and West Africa.
            </p>
            <div className={`flex flex-wrap justify-center gap-6 text-white/90 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span>11-50 Employees</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span>61 Associated Members</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Founded 2014</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-24 bg-white">
        <div ref={missionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${missionInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Purpose & Direction
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by a clear mission and ambitious vision for the future
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`group relative bg-gradient-to-br from-primary to-primary/90 p-12 rounded-2xl overflow-hidden hover-lift shadow-2xl ${missionInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-24 -mb-24 blur-2xl" />
              
              <div className="relative">
                <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-white mb-6 text-3xl">Our Mission</h2>
                <p className="text-white/95 text-lg leading-relaxed">
                  To deliver engineering and construction services for medium to large scale mining projects by a skilled and positive team with enormous experience, utilized to our client's benefit.
                </p>
              </div>
            </div>

            <div className={`group relative bg-gradient-to-br from-accent to-accent/90 p-12 rounded-2xl overflow-hidden hover-lift shadow-2xl ${missionInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-2xl" />
              
              <div className="relative">
                <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-white mb-6 text-3xl">Our Vision</h2>
                <p className="text-white/95 text-lg leading-relaxed">
                  To be the most trusted partner in metallurgy, studies, engineering, construction and project delivery across Ghana and West Africa, recognized for technical excellence and client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-secondary">
        <div ref={diffRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${diffInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why leading mining companies choose MiningPro as their engineering partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border border-border hover-lift group ${diffInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-3 text-xl">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 bg-white">
        <div ref={expertiseRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${expertiseInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capabilities across the mining project lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className={`bg-secondary p-8 rounded-xl border border-border hover-lift hover:border-primary group ${expertiseInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-foreground mb-3 text-xl">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/95 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>
        <div ref={statsRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => {
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
              const suffix = stat.value.replace(/[0-9]/g, '');
              return (
              <div key={index} className={`text-center group ${statsInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:bg-white/20 transition-all group-hover:scale-110">
                  <stat.icon className="h-10 w-10 text-accent" />
                </div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                  {statsInView && numericValue ? (
                    <>
                      <CountUp end={numericValue} duration={2.5} separator="," />
                      {suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-white/90 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-secondary">
        <div ref={valuesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border border-border hover-lift group ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-accent to-accent/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-foreground mb-3 text-xl">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and development across West Africa
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`bg-secondary p-6 md:p-8 rounded-xl border-2 border-border hover:border-primary hover:shadow-xl transition-all group text-left ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                        <div className="text-xl md:text-2xl font-bold text-accent">{milestone.year}</div>
                      </div>
                      <p className="text-foreground text-base md:text-lg leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 group-hover:scale-125 transition-transform -translate-x-1/2" />
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Enhanced */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals driving technical excellence and innovation across West Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Leadership Member', role: 'Managing Director', specialty: 'Mining Engineering & Strategy' },
              { name: 'Leadership Member', role: 'Technical Director', specialty: 'Metallurgy & Process Engineering' },
              { name: 'Leadership Member', role: 'Projects Director', specialty: 'Construction & Commissioning' }
            ].map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1562167055-1afdc7ac7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjB0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2NzQ4MTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl mb-1">{leader.name}</h3>
                    <p className="text-accent text-sm mb-2">{leader.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {leader.specialty} • Extensive experience in mining project delivery across West Africa
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                Skilled, Positive & Experienced
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team combines technical expertise with a collaborative, solution-focused mindset. Every member brings extensive mining industry experience and a commitment to delivering exceptional results for our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Highly Qualified Professionals</h4>
                    <p className="text-muted-foreground text-sm">Engineers, metallurgists, and project managers with advanced degrees and industry certifications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Positive & Collaborative Culture</h4>
                    <p className="text-muted-foreground text-sm">A can-do attitude and teamwork approach that makes complex projects succeed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1">Deep Industry Experience</h4>
                    <p className="text-muted-foreground text-sm">Decades of combined experience across diverse mining operations and project types.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873268364-15bef4162221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY3NDgxOTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="MiningPro Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Culture */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Shield className="h-10 w-10 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Committed to Safety Excellence
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our comprehensive HSE management system ensures that safety, health, and environmental responsibility are embedded in every aspect of our operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-5xl text-accent mb-3">Zero</div>
              <p className="text-white/90 text-lg">Harm Goal</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-5xl text-accent mb-3">ISO</div>
              <p className="text-white/90 text-lg">Certified Systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-5xl text-accent mb-3">100%</div>
              <p className="text-white/90 text-lg">HSE Compliance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
