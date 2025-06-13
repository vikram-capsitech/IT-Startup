import { motion } from "framer-motion";
import { Code, Cloud, Lightbulb, Palette, Settings, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and technologies. From responsive websites to complex web platforms.",
    features: [
      "React & Next.js Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
    ],
    color: "text-primary",
  },
  {
    icon: Cloud,
    title: "Cloud Consulting",
    description: "Strategic cloud migration and optimization services to enhance scalability, security, and cost-efficiency.",
    features: [
      "AWS & Azure Solutions",
      "Cloud Migration Strategy",
      "DevOps Implementation",
      "Infrastructure as Code",
    ],
    color: "text-accent",
  },
  {
    icon: Lightbulb,
    title: "AI Integrations",
    description: "Intelligent automation and AI-powered solutions to streamline operations and enhance user experiences.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Chatbot Development",
    ],
    color: "text-primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive, engaging, and conversion-optimized digital experiences.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Design Systems",
      "Mobile App Design",
    ],
    color: "text-accent",
  },
  {
    icon: Settings,
    title: "Support & Maintenance",
    description: "Comprehensive support services ensuring your systems run smoothly with proactive monitoring and rapid issue resolution.",
    features: [
      "24/7 System Monitoring",
      "Regular Updates & Patches",
      "Performance Optimization",
      "Security Audits",
    ],
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "React Native & Flutter",
      "iOS & Android Native",
      "Progressive Web Apps",
      "App Store Optimization",
    ],
    color: "text-accent",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to accelerate your business growth and digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="service-card glass-card h-full hover-lift">
                  <CardHeader>
                    <div className="mb-4">
                      <Icon className={`w-12 h-12 ${service.color} mb-4`} />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
