import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import logoImage from '../../assets/fd215dcfee7893030ea59d9c628620e5c910acb7.png';

export function ContactPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Get in touch with our team to discuss your mining engineering and project delivery needs. We're here to help with technical consultations, project inquiries, and partnership opportunities.
              </p>
            </div>
            <div className={`flex justify-center lg:justify-end ${heroInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <img 
                src={logoImage} 
                alt="MiningPro Group Logo" 
                className="h-36 lg:h-48 w-auto opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">Office Location</h4>
                      <p className="text-muted-foreground text-sm">
                        MiningPro<br />
                        Adum Kwadaso Nsuom, Off Abuakwa Road<br />
                        Digital Address: AK-222-8214<br />
                        Kumasi, 00233, GH
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">
                        +233 XXX XXX XXX<br />
                        +233 XXX XXX XXX
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">
                        info@miningprogroup.com<br />
                        projects@miningprogroup.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/company/miningprogroup/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        Connect with us on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-secondary p-6 rounded-lg border border-border">
                <h4 className="text-foreground mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div ref={formRef} className={`glass-card p-8 rounded-2xl shadow-xl ${formInView ? 'animate-scale-in' : 'opacity-0'}`}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 text-sm font-medium">
                      Thank you for your inquiry! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-foreground mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                          errors.name ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-foreground mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                          errors.email ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-foreground mb-2 font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-foreground mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+233 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-foreground mb-2 font-medium">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        errors.subject ? 'border-red-500' : 'border-border'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="project-inquiry">Project Inquiry</option>
                      <option value="technical-consultation">Technical Consultation</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all ${
                        errors.message ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-accent text-accent-foreground px-6 py-4 rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in Kumasi, Ghana - The heart of West African mining
            </p>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Office Location & Directions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Physical Address</h4>
                  <p className="text-foreground">
                    Adum Kwadaso Nsuom, Off Abuakwa Road<br />
                    Kumasi, 00233<br />
                    Ghana
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm text-muted-foreground mb-2">Ghana Digital Address</h4>
                  <div className="bg-accent/10 px-4 py-3 rounded-md inline-block">
                    <p className="text-accent font-mono">AK-222-8214</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Use this digital address for GPS navigation and delivery services
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm text-muted-foreground mb-2">Getting Here</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    We are located off Abuakwa Road in the Adum Kwadaso Nsuom area of Kumasi. 
                    Use the Ghana Digital Address <span className="text-accent font-mono">AK-222-8214</span> for 
                    accurate GPS navigation.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-lg border border-border overflow-hidden h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d-1.6351549!3d6.6907298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDEnMjYuNiJOIDHCsDM4JzA2LjYiVw!5e0!3m2!1sen!2sgh!4v1234567890!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MiningPro Group Location"
              />
              <a
                href="https://www.google.com/maps/search/Adum+Kwadaso+Nsuom+Off+Abuakwa+Road+Kumasi+Ghana+AK-222-8214/@6.6907298,-1.6351549,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white text-primary px-4 py-2 rounded-md shadow-md hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-white/90">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
              <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-white mb-2">Call Us</h3>
              <p className="text-white/80 text-sm mb-4">
                Speak directly with our team
              </p>
              <a 
                href="tel:+233XXXXXXXX"
                className="text-accent hover:text-accent/80 transition-colors text-sm"
              >
                +233 XXX XXX XXX
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
              <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-white mb-2">Email Us</h3>
              <p className="text-white/80 text-sm mb-4">
                Send us a detailed inquiry
              </p>
              <a 
                href="mailto:info@miningprogroup.com"
                className="text-accent hover:text-accent/80 transition-colors text-sm"
              >
                info@miningprogroup.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
              <Linkedin className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-white mb-2">Connect on LinkedIn</h3>
              <p className="text-white/80 text-sm mb-4">
                Follow us for updates
              </p>
              <a
                href="https://www.linkedin.com/company/miningprogroup/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors text-sm"
              >
                MiningPro Group
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}