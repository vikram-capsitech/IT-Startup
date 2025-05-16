import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent -z-10"></div>
      
      {/* Animated light particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Blurred decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm p-8 rounded-xl bg-white/5 border border-white/10">
          <div className={`w-full lg:w-2/3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-white">
              Ready to Transform Your <span className="relative inline-block">
                IT Infrastructure?
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white/30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg text-white/90">
              Let's discuss how we can help your business leverage technology for growth and efficiency.
            </p>
          </div>
          <div className={`w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '0.2s'}}>
            <Button 
              asChild 
              size="lg" 
              className="font-medium bg-white text-primary hover:bg-white/90 group"
            >
              <a href="#contact" className="flex items-center justify-center">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 font-medium group"
            >
              <a href="tel:+18005551234" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 animate-pulse" />
                Call (800) 555-1234
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
