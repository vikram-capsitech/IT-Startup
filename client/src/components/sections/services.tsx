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
    <section id="services" className="py-16 bg-background relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="professional-card service-card h-full group">
                  <CardHeader className="pb-4">
                    <div className="mb-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
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
