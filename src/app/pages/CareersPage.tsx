import { Briefcase, TrendingUp, Users, Heart, Shield, Zap, Globe, DollarSign, Target, BookOpen, Star, MapPin, Clock, CheckCircle, Sparkles, ArrowRight, Trophy, Rocket, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '61', label: 'Associated Members', icon: Globe },
    { number: '10+', label: 'Years Excellence', icon: Trophy },
    { number: '100+', label: 'Projects Delivered', icon: Rocket },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance bonuses, profit-sharing, and comprehensive benefits package.',
      highlight: 'Market-leading pay',
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Clear career progression paths with regular promotions and opportunities to lead major projects.',
      highlight: 'Fast-track growth',
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual training budget, professional certifications, international conferences, and mentorship programs.',
      highlight: '40+ hours/year training',
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Premium medical insurance for you and family, wellness programs, and mental health support.',
      highlight: 'Full family coverage',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, generous leave policies, and family-friendly culture.',
      highlight: 'Flexible schedules',
    },
    {
      icon: Globe,
      title: 'International Exposure',
      description: 'Work on regional projects across West Africa and opportunities for international collaboration.',
      highlight: 'Regional projects',
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Cross-functional teams, open communication, and inclusive culture that values every voice.',
      highlight: 'Team-first culture',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Access to cutting-edge technology, innovation labs, and freedom to implement new ideas.',
      highlight: 'Tech-enabled',
    },
  ];

  const testimonials = [
    {
      name: 'Kwame Mensah',
      role: 'Senior Process Engineer',
      tenure: '4 years at MiningPro',
      quote: "The technical challenges here are incredible. I've grown from a junior engineer to leading major processing plant projects. The mentorship and training opportunities are unmatched.",
      image: 'https://images.unsplash.com/photo-1692248012641-89084e909488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlbmdpbmVlcnMlMjB0ZWFtfGVufDF8fHx8MTc2NzQ4MDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Ama Osei',
      role: 'Project Manager',
      tenure: '3 years at MiningPro',
      quote: "What I love most is the trust and responsibility given to our team. We manage multi-million dollar projects and the company supports us every step of the way.",
      image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY3NDgwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Kofi Asante',
      role: 'Graduate Engineer',
      tenure: '1 year at MiningPro',
      quote: "The graduate program exceeded my expectations. Real projects from day one, constant learning, and a supportive team that genuinely cares about my development.",
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3MzkzODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Process Engineer',
      department: 'Engineering',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead process design for mineral processing plants and optimization projects.',
      skills: ['Metallurgy', 'Process Design', 'Plant Operations', 'AutoCAD'],
      featured: true,
    },
    {
      title: 'Project Manager - EPCM',
      department: 'Project Management',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Manage large-scale EPCM projects from concept to commissioning.',
      skills: ['EPCM', 'Project Controls', 'Stakeholder Management', 'Risk Management'],
      featured: true,
    },
    {
      title: 'Mechanical Engineer',
      department: 'Engineering',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Design and oversee mechanical systems for mining and processing facilities.',
      skills: ['Mechanical Design', 'SolidWorks', 'Mining Equipment', 'Maintenance Planning'],
      featured: false,
    },
    {
      title: 'Metallurgist',
      department: 'Technical Services',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Conduct metallurgical testing and optimize recovery processes.',
      skills: ['Mineral Processing', 'Lab Testing', 'Data Analysis', 'Process Optimization'],
      featured: false,
    },
    {
      title: 'Construction Supervisor',
      department: 'Construction',
      location: 'Various Sites',
      type: 'Contract',
      experience: '5+ years',
      description: 'Supervise construction activities ensuring safety, quality, and schedule compliance.',
      skills: ['Construction Management', 'Site Safety', 'Team Leadership', 'Quality Control'],
      featured: false,
    },
    {
      title: 'HSE Coordinator',
      department: 'Health & Safety',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Implement and monitor HSE programs across all projects and sites.',
      skills: ['HSE Management', 'ISO 45001', 'Risk Assessment', 'Training Delivery'],
      featured: false,
    },
    {
      title: 'Graduate Engineer (Multiple Disciplines)',
      department: 'Graduate Program',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: 'Entry Level',
      description: 'Structured 18-month program with rotations across engineering disciplines.',
      skills: ['Engineering Degree', 'Analytical Skills', 'Team Work', 'Eager to Learn'],
      featured: true,
    },
    {
      title: 'Electrical Engineer',
      department: 'Engineering',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Design electrical systems and power distribution for mining operations.',
      skills: ['Electrical Design', 'Power Systems', 'AutoCAD Electrical', 'HV Systems'],
      featured: false,
    },
  ];

  const departments = ['All', 'Engineering', 'Project Management', 'Technical Services', 'Construction', 'Health & Safety', 'Graduate Program'];

  const filteredPositions = selectedDepartment === 'All' 
    ? openPositions 
    : openPositions.filter(pos => pos.department === selectedDepartment);

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Zero harm culture in everything we do',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Deliver world-class technical solutions',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Succeed together as one team',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Continuously improve and innovate',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm mb-6">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  We're Hiring - Join Our Team
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl text-white mb-6">
                Build Your Career in Mining Engineering
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Join West Africa's leading EPCM provider and work on world-class mining projects that shape the future of the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#openings" className="bg-accent text-accent-foreground px-8 py-4 rounded-md hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                  View Open Positions
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#culture" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 border border-white/20">
                  Explore Our Culture
                </a>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                  <stat.icon className="h-8 w-8 text-accent mb-3" />
                  <div className="text-3xl text-white mb-1">{stat.number}</div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Value Proposition */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">
              Why Choose MiningPro Group?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just offering a job—we're offering a career journey with purpose, growth, and impact
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-secondary rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl border-2 border-border hover:border-accent transition-all hover:shadow-xl group"
              >
                <div className="absolute -top-3 -right-3 bg-accent text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {benefit.highlight}
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials - Enhanced */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">
              Hear From Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people building exceptional careers at MiningPro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.tenure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - Enhanced */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find your perfect role and take the next step in your career
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedDepartment === dept
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-secondary text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {filteredPositions.map((position, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 ${
                  position.featured ? 'border-accent bg-accent/5' : 'border-border'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl text-foreground">{position.title}</h3>
                          {position.featured && (
                            <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">Featured</span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            {position.experience}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-secondary text-foreground text-xs px-3 py-1 rounded-full border border-border">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-secondary rounded-2xl border border-border">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl text-foreground mb-2">Don't See Your Dream Role?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented professionals. Submit a general application and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Submit General Application
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-border bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                Diversity & Inclusion
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At MiningPro Group, we celebrate diversity and foster an inclusive environment where every team member can thrive. We believe diverse perspectives drive innovation and create better solutions for our clients. We're committed to equal opportunity and actively work to build a workforce that reflects the communities we serve across West Africa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl text-primary mb-2">50%</div>
                  <p className="text-sm text-muted-foreground">Local Talent Development</p>
                </div>
                <div>
                  <div className="text-3xl text-accent mb-2">30%</div>
                  <p className="text-sm text-muted-foreground">Women in Engineering</p>
                </div>
                <div>
                  <div className="text-3xl text-primary mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">Nationalities Represented</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            Ready to Shape the Future of Mining?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join our team of passionate engineers and technical experts making an impact across West Africa. Your next career adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#openings" className="bg-accent text-accent-foreground px-10 py-4 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 text-lg">
              Browse Open Positions
              <ArrowRight className="h-6 w-6" />
            </a>
            <a href="mailto:careers@miningprogroup.com" className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 border border-white/20 text-lg">
              Contact Recruitment Team
            </a>
          </div>
          <p className="text-white/70 text-sm mt-8">
            Email us at <a href="mailto:careers@miningprogroup.com" className="text-accent hover:underline">careers@miningprogroup.com</a> for any questions
          </p>
        </div>
      </section>
    </div>
  );
}