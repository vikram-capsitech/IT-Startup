import { Check, Rocket, Headset, ShieldCheck } from 'lucide-react';

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start space-x-3">
    <span className="text-primary text-xl mt-1">{icon}</span>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">About TechCore Solutions</h2>
          <p className="text-lg text-foreground/80">A decade of excellence in delivering innovative IT solutions</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Our diverse IT team" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground">Your Partner in Digital Transformation</h3>
            <p className="text-foreground/80">
              Founded in 2012, TechCore Solutions has been at the forefront of the digital revolution, helping businesses of all sizes leverage technology to achieve their goals. Our team of experienced IT professionals is dedicated to delivering customized solutions that drive growth and innovation.
            </p>
            <p className="text-foreground/80">
              We believe in building long-term partnerships with our clients, understanding their unique challenges, and providing tailored technology solutions that deliver real business value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <FeatureItem 
                icon={<Check className="h-5 w-5" />} 
                title="Certified Experts" 
                description="Industry-recognized IT specialists" 
              />
              <FeatureItem 
                icon={<Rocket className="h-5 w-5" />} 
                title="Fast Deployment" 
                description="Quick implementation of solutions" 
              />
              <FeatureItem 
                icon={<Headset className="h-5 w-5" />} 
                title="24/7 Support" 
                description="Round-the-clock technical assistance" 
              />
              <FeatureItem 
                icon={<ShieldCheck className="h-5 w-5" />} 
                title="Security Focus" 
                description="Enterprise-grade protection" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
