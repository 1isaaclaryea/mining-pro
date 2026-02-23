import { Shield, Heart, Leaf, Award, CheckCircle, AlertTriangle, Users, FileCheck } from 'lucide-react';
import facilityImage from '../../assets/7c41b55675b210e7fcdc5d2947889d4a645b8e5b.png';

export function SafetyPage() {
  const hseCommitments = [
    {
      icon: Shield,
      title: 'Zero Harm Philosophy',
      description: 'Our ultimate goal is zero harm to people, property, and the environment. Every decision is evaluated through this lens.',
    },
    {
      icon: Users,
      title: 'Safety Leadership',
      description: 'Leadership accountability and visible safety commitment from executive level to frontline workers.',
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Proactive hazard identification, risk assessment, and implementation of effective control measures.',
    },
    {
      icon: FileCheck,
      title: 'Training & Competence',
      description: 'Comprehensive safety training programs ensuring all personnel are competent for their roles.',
    },
  ];

  const qualityPillars = [
    {
      icon: Award,
      title: 'ISO 9001 Certified',
      description: 'International quality management standards applied to all our engineering and construction activities.',
    },
    {
      icon: CheckCircle,
      title: 'Technical Assurance',
      description: 'Rigorous design reviews, calculations checks, and peer reviews throughout project lifecycle.',
    },
    {
      icon: FileCheck,
      title: 'Quality Controls',
      description: 'Systematic inspection and testing programs ensuring compliance with specifications.',
    },
    {
      icon: Award,
      title: 'Continuous Improvement',
      description: 'Lessons learned systems and continuous improvement culture driving excellence.',
    },
  ];

  const sustainabilityFocus = [
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'Minimizing environmental impact through sustainable design and responsible practices.',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Working with local communities to create shared value and positive social impact.',
    },
    {
      icon: Heart,
      title: 'Local Content',
      description: 'Maximizing employment and procurement opportunities for Ghanaian and West African talent.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              Safety, Quality & Sustainability
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Our commitment to health, safety, environmental responsibility, and quality excellence is fundamental to everything we do. We believe sustainable operations create long-term value for all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-accent mb-2">Zero</div>
              <p className="text-muted-foreground">Fatalities Target</p>
            </div>
            <div>
              <div className="text-4xl text-accent mb-2">0.5</div>
              <p className="text-muted-foreground">LTIFR Target</p>
            </div>
            <div>
              <div className="text-4xl text-accent mb-2">ISO</div>
              <p className="text-muted-foreground">Certified Systems</p>
            </div>
            <div>
              <div className="text-4xl text-accent mb-2">100%</div>
              <p className="text-muted-foreground">HSE Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Health, Safety & Environment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive HSE management system protecting our people and the environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hseCommitments.map((item, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* HSE Management System */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-10 text-white">
            <h3 className="text-2xl mb-6">Our HSE Management System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Comprehensive HSE policies and procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Regular safety inspections and audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Incident reporting and investigation systems</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Emergency response and crisis management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Contractor HSE management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Performance monitoring and KPI tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Safety Image Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl text-foreground mb-4">
                  World-Class Safety Standards in Mining Operations
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our HSE protocols are designed specifically for the unique challenges of mining and mineral processing facilities. From flotation circuits to grinding mills, we ensure every aspect of our operations meets or exceeds international safety standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Rigorous safety protocols for all processing equipment and facilities
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Comprehensive hazard identification and risk mitigation strategies
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Ongoing safety training and certification programs for all personnel
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
                <img
                  src={facilityImage}
                  alt="Mining Processing Facility with Safety Systems"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering technical excellence through systematic quality management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPillars.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Processes */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="text-foreground mb-3">Engineering Quality</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Design verification and validation</li>
                <li>• Multi-discipline design reviews</li>
                <li>• Calculation checking procedures</li>
                <li>• Document control systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="text-foreground mb-3">Construction Quality</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Material inspection and testing</li>
                <li>• Welding quality assurance</li>
                <li>• Installation verification</li>
                <li>• As-built documentation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="text-foreground mb-3">Project Quality</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Quality planning and control</li>
                <li>• Non-conformance management</li>
                <li>• Supplier quality assurance</li>
                <li>• Final acceptance testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Sustainability Commitment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating long-term value through responsible and sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sustainabilityFocus.map((item, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary to-white rounded-lg p-10 border border-border">
            <h3 className="text-2xl text-foreground mb-6">Our Sustainability Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-foreground mb-3">Environmental</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Resource efficiency and waste minimization</li>
                  <li>• Water and energy conservation</li>
                  <li>• Biodiversity protection</li>
                  <li>• Climate change mitigation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground mb-3">Social</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Local employment and skills development</li>
                  <li>• Community development programs</li>
                  <li>• Stakeholder engagement</li>
                  <li>• Human rights and fair labor practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-12">
            Certifications & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-white mb-2">ISO 9001:2015</h3>
              <p className="text-white/80 text-sm">Quality Management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-white mb-2">ISO 45001:2018</h3>
              <p className="text-white/80 text-sm">Occupational H&S</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <Leaf className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-white mb-2">ISO 14001:2015</h3>
              <p className="text-white/80 text-sm">Environmental Mgmt</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}