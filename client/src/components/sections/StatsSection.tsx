import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Trophy, Users, CheckCircle, Calendar } from 'lucide-react';

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  index: number;
}

const Counter = ({ end, label, icon, index }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isVisible) {
      let start = 0;
      const step = Math.ceil(end / 50); // Adjust for animation speed
      
      const updateCount = () => {
        start += step;
        if (start < end) {
          setCount(start);
          timeout = setTimeout(updateCount, 30);
        } else {
          setCount(end);
        }
      };
      
      // Delay start for staggered effect
      timeout = setTimeout(updateCount, index * 200);
    }
    
    return () => clearTimeout(timeout);
  }, [isVisible, end, index]);
  
  return (
    <div 
      ref={ref} 
      className={`relative transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="text-center p-6 rounded-xl relative z-10 backdrop-blur-sm">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-white/10 rounded-xl -z-10"></div>
        
        {/* Icon with pulse animation */}
        <div className="flex justify-center mb-3">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
            <div className="relative p-3 rounded-full bg-white/10 text-white">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Counter value */}
        <div className="text-5xl md:text-6xl font-bold mb-2 flex items-center justify-center relative">
          <span 
            className={`animate-counter ${isVisible ? 'visible' : ''} font-heading`}
            style={{
              background: "linear-gradient(to right, #ffffff, #a9ddfb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {count}
          </span>
          <span className="ml-1 text-white">+</span>
          
          {/* Animated line under the number */}
          <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-white/50 rounded-full transition-all duration-1000 ${
            isVisible ? 'w-16' : 'w-0'
          }`}></div>
        </div>
        
        {/* Label */}
        <p className="text-xl text-white/90 font-medium">{label}</p>
      </div>
    </div>
  );
};

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  
  const stats = [
    { value: 10, label: "Years of Experience", icon: <Calendar className="h-8 w-8" /> },
    { value: 500, label: "Clients Worldwide", icon: <Users className="h-8 w-8" /> },
    { value: 2500, label: "Projects Completed", icon: <CheckCircle className="h-8 w-8" /> },
    { value: 75, label: "IT Professionals", icon: <Trophy className="h-8 w-8" /> },
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent -z-10"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Blurred circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="w-full max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
              Our Success in Numbers
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Counter 
              key={index} 
              end={stat.value} 
              label={stat.label} 
              icon={stat.icon}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
