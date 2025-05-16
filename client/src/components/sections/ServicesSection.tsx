import { Network, ShieldCheck, Code, Cloud, Headset, Laptop, Check, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const Service = ({ icon, title, description, features, index }: ServiceProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;
  
  return (
    <div 
      ref={ref}
      className={`service-card rounded-lg p-8 shadow-md transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="text-3xl mb-6 relative">
        <div className="absolute -inset-1 rounded-full bg-primary/10 animate-pulse"></div>
        <div className="relative gradient-text">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-foreground/80 mb-4">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2 transition-all duration-300 hover:translate-x-1">
            <div className="h-5 w-5 rounded-full flex items-center justify-center bg-accent/10">
              <Check className="h-3 w-3 text-accent" />
            </div>
            <span className="text-foreground/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
        Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      icon: <Network className="h-8 w-8" />,
      title: "IT Infrastructure",
      description: "Design, implementation, and management of robust IT infrastructure solutions tailored to your business requirements.",
      features: ["Network Design & Setup", "Server Management", "Cloud Migration"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats and ensure data integrity.",
      features: ["Vulnerability Assessment", "Threat Monitoring", "Security Training"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Custom software solutions designed to streamline your operations and enhance business efficiency.",
      features: ["Web Applications", "Mobile Solutions", "API Integration"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      description: "Scalable cloud solutions that provide flexibility, accessibility, and cost efficiency for your business.",
      features: ["Cloud Strategy", "Migration Services", "Cloud Management"]
    },
    {
      icon: <Headset className="h-8 w-8" />,
      title: "IT Consulting",
      description: "Strategic guidance to help you leverage technology effectively and achieve your business objectives.",
      features: ["Digital Strategy", "Process Optimization", "Technology Roadmap"]
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "IT Support & Maintenance",
      description: "Reliable technical support and maintenance services to keep your systems running smoothly.",
      features: ["24/7 Helpdesk", "Proactive Monitoring", "Regular Maintenance"]
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  
  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">Our Expertise</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-foreground/80">Comprehensive IT solutions tailored to your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              features={service.features} 
              index={index} 
            />
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-primary/20 rounded-lg -z-10 animate-float"></div>
    </section>
  );
}
