import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "15+ years building scalable tech solutions for Fortune 500 companies. Passionate about innovation and team leadership.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Rodriguez",
    role: "Chief Technology Officer",
    bio: "Expert in cloud architecture and AI/ML. Former Google engineer with a PhD in Computer Science from Stanford.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Thompson",
    role: "Lead UI/UX Designer",
    bio: "Award-winning designer with 10+ years creating user-centered experiences for major brands and startups.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "Senior Full-Stack Developer",
    bio: "Full-stack expert specializing in React, Node.js, and cloud infrastructure. Open source contributor and tech blogger.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Foster",
    role: "Senior Project Manager",
    bio: "Agile certified PM with expertise in coordinating complex tech projects. Ensures on-time delivery and client satisfaction.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ryan Walsh",
    role: "DevOps Engineer",
    bio: "Infrastructure automation specialist with expertise in AWS, Docker, and Kubernetes. Ensures scalable and secure deployments.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate technologists and innovators dedicated to delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="team-card glass-card overflow-hidden h-full">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="team-overlay absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex space-x-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-white hover:text-primary-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-white hover:text-primary-foreground transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} className="text-white hover:text-primary-foreground transition-colors">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
