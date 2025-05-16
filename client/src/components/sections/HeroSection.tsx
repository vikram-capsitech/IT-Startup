import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      {/* Animated Background with modern pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 -z-10"></div>
      
      {/* Animated gradient circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/10 filter blur-3xl animate-pulse opacity-70 -z-10"></div>
      <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-accent/10 filter blur-3xl animate-pulse opacity-70 -z-10" style={{animationDelay: "1s"}}></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              Transform Your Business With <span className="gradient-text">Cutting-Edge IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 animate-fade-in-up stagger-1">
              We deliver innovative technology services to help your business thrive in the digital age. Expert solutions, exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-medium btn-hover-effect relative overflow-hidden group">
                <a href="#services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium btn-hover-effect">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4 animate-fade-in-up stagger-3">
              <div className="flex space-x-1 text-accent">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <p className="text-foreground/80 font-medium">500+ satisfied clients worldwide</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10 animate-pulse" style={{animationDelay: "0.5s"}}></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="IT professionals collaborating" 
                className="rounded-xl shadow-xl w-full h-auto transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
