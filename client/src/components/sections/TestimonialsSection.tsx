import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  company: string;
  image: string;
  index: number;
}

const Testimonial = ({ content, name, role, company, image, index }: TestimonialProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;
  
  return (
    <div 
      ref={ref}
      className={`testimonial-card min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4 mb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <Card className="h-full glass-effect border-accent/10 relative overflow-hidden">
        <CardContent className="p-8 flex flex-col h-full relative z-10">
          {/* Decorative quote icon */}
          <div className="absolute top-4 right-4 text-accent/10">
            <Quote className="h-16 w-16 fill-current" />
          </div>
          
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-accent fill-current animate-pulse" style={{animationDelay: `${i * 0.15}s`}} />
            ))}
          </div>
          
          <p className="text-foreground/80 italic mb-6 flex-grow relative z-10">
            "{content}"
          </p>
          
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-sm animate-pulse"></div>
              <img 
                src={image} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover mr-4 relative border-2 border-white/50 dark:border-gray-800/50" 
              />
            </div>
            <div>
              <h4 className="font-heading font-semibold">{name}</h4>
              <p className="text-sm gradient-text">{role}, {company}</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent/50"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  
  // Responsive slide width calculation
  useEffect(() => {
    const calculateSlideWidth = () => {
      if (window.innerWidth >= 1024) {
        setSlideWidth(33.333); // 3 slides visible on large screens
      } else if (window.innerWidth >= 768) {
        setSlideWidth(50); // 2 slides visible on medium screens
      } else {
        setSlideWidth(100); // 1 slide visible on small screens
      }
    };
    
    // Calculate initially and on resize
    calculateSlideWidth();
    window.addEventListener('resize', calculateSlideWidth);
    
    return () => window.removeEventListener('resize', calculateSlideWidth);
  }, []);
  
  const testimonials = [
    {
      content: "TechCore Solutions transformed our outdated IT infrastructure into a modern, secure system. Their expertise and professionalism exceeded our expectations, and their ongoing support has been invaluable.",
      name: "Jessica Williams",
      role: "CFO",
      company: "Summit Financial",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      content: "The cybersecurity solution provided by TechCore has been a game-changer for our company. We now have peace of mind knowing our sensitive data is protected with the latest security measures.",
      name: "Robert Chen",
      role: "CEO",
      company: "Nexus Healthcare",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      content: "The custom software solution developed by TechCore has streamlined our operations and increased productivity by 35%. Their team was responsive, professional, and delivered exactly what we needed.",
      name: "Amanda Johnson",
      role: "Operations Director",
      company: "Global Logistics",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];
  
  const nextSlide = () => {
    const maxIndex = testimonials.length - 1;
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };
  
  const prevSlide = () => {
    const maxIndex = testimonials.length - 1;
    setCurrentIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  };
  
  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <section 
      id="testimonials" 
      className="py-16 lg:py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl animate-pulse opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 filter blur-3xl animate-pulse opacity-60 -z-10" style={{animationDelay: "1.5s"}}></div>
      
      {/* Light pattern overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 -z-10 dark:bg-[radial-gradient(#1a202c_1px,transparent_1px)]"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">Client Success Stories</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/80">Hear what our clients have to say about our services</p>
        </div>
        
        <div className="testimonials-slider overflow-hidden relative">
          <div 
            ref={containerRef}
            className="flex flex-nowrap transition-all duration-500"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                content={testimonial.content}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                index={index} 
              />
            ))}
          </div>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full z-10 lg:ml-4 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full z-10 lg:mr-4 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex justify-center space-x-3 mt-8 animate-fade-in-up" style={{animationDelay: "0.5s"}}>
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-10 bg-gradient-to-r from-primary to-accent' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
