import { motion } from "framer-motion";
import ProjectCarousel from "@/components/ui/project-carousel";

const projects = [
  {
    id: 1,
    title: "EcoMarket Platform",
    stack: "Next.js • Stripe • MongoDB",
    description: "Sustainable products marketplace with integrated payment processing and inventory management system.",
    result: "300% increase in conversion rates",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "E-commerce",
  },
  {
    id: 2,
    title: "HealthTech Analytics",
    stack: "React • D3.js • AWS",
    description: "Real-time healthcare analytics platform with interactive data visualizations and comprehensive reporting dashboard.",
    result: "50% reduction in processing time",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "FinFlow Mobile App",
    stack: "React Native • Node.js • PostgreSQL",
    description: "Personal finance management app with AI-powered insights and intelligent budgeting tools.",
    result: "4.8/5 app store rating",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "FinTech",
  },
  {
    id: 4,
    title: "EduTech Platform",
    stack: "Vue.js • Laravel • MySQL",
    description: "Comprehensive learning management system with video streaming and advanced progress tracking capabilities.",
    result: "10K+ active learners",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Education",
  },
  {
    id: 5,
    title: "CloudSync Enterprise",
    stack: "Python • Docker • Kubernetes",
    description: "Enterprise cloud migration and synchronization platform with automated scaling and monitoring.",
    result: "99.9% uptime achieved",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Cloud",
  },
  {
    id: 6,
    title: "AI Vision Pro",
    stack: "TensorFlow • FastAPI • React",
    description: "Computer vision application for quality control in manufacturing with real-time defect detection.",
    result: "95% accuracy improvement",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "AI/ML",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-background/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how we transform ideas into powerful digital solutions that drive real business results
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProjectCarousel projects={projects} />
        </motion.div>
      </div>
    </section>
  );
}
