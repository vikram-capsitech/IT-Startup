import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  index: number;
}

const TeamMember = ({ image, name, role, bio, index }: TeamMemberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md relative transition-all duration-500 hover:shadow-lg text-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Decorative accent bar at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
      
      <div className="relative group">
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={`${name} - ${role}`} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
          <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="font-medium">{bio}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 relative">
        {/* Animated glow effect on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <h3 className="text-xl font-heading font-semibold mb-1">{name}</h3>
        <p className="gradient-text font-medium mb-3">{role}</p>
        
        <div className="flex justify-center space-x-4 mt-4">
          <a 
            href="#" 
            className="text-foreground/70 hover:text-primary bg-gray-100 dark:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1" 
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-foreground/70 hover:text-primary bg-gray-100 dark:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1" 
            aria-label="Twitter"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-foreground/70 hover:text-primary bg-gray-100 dark:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1" 
            aria-label="Email"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "With 20+ years of IT leadership experience, Sarah drives our vision and strategy."
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      name: "David Chen",
      role: "Chief Technology Officer",
      bio: "David leads our technology innovation and ensures we stay ahead of industry trends."
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      name: "Emily Rodriguez",
      role: "Security Director",
      bio: "Emily ensures our clients' data and infrastructure are protected against threats."
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      name: "Michael Turner",
      role: "Client Solutions Director",
      bio: "Michael works closely with clients to deliver tailored technology solutions."
    }
  ];
  
  return (
    <section id="team" className="py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 -z-10"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5 filter blur-3xl animate-pulse opacity-70 -z-10"></div>
      <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-accent/5 filter blur-3xl animate-pulse opacity-70 -z-10" style={{animationDelay: "1s"}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">Meet Our Leadership</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Our Expert <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-foreground/80">The talented professionals behind our success</p>
          
          {/* Animated divider */}
          <div className="w-16 h-1 bg-accent/30 mx-auto mt-6 rounded-full relative overflow-hidden">
            <div className={`absolute top-0 left-0 h-full bg-accent animate-shimmer ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              image={member.image}
              name={member.name}
              role={member.role}
              bio={member.bio}
              index={index}
            />
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-primary/10 rounded-lg -z-10"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-accent/10 rounded-full -z-10"></div>
      </div>
    </section>
  );
}
