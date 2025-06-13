import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "EcoMarket Platform",
    stack: "Next.js • Stripe • MongoDB",
    description: "Sustainable products marketplace with integrated payment processing and inventory management.",
    result: "300% increase in conversion rates",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 2,
    title: "HealthTech Analytics",
    stack: "React • D3.js • AWS",
    description: "Real-time healthcare analytics platform with interactive data visualizations and reporting.",
    result: "50% reduction in processing time",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 3,
    title: "FinFlow Mobile App",
    stack: "React Native • Node.js • PostgreSQL",
    description: "Personal finance management app with AI-powered insights and budgeting tools.",
    result: "4.8/5 app store rating",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  {
    id: 4,
    title: "EduTech Platform",
    stack: "Vue.js • Laravel • MySQL",
    description: "Comprehensive learning management system with video streaming and progress tracking.",
    result: "10K+ active learners",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="project-card relative group overflow-hidden hover-lift h-full">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="project-overlay absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-lg mb-4 text-white/90">{project.stack}</p>
                      <p className="text-sm mb-4 text-white/80">{project.result}</p>
                      <Button className="bg-white text-primary hover:bg-white/90">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.stack}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
