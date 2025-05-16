import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  image: string;
  category: string;
  title: string;
  description: string;
  result: string;
}

const CaseStudy = ({ image, category, title, description, result }: CaseStudyProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <Badge variant="secondary" className="mb-3">{category}</Badge>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80 mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-medium">{result}</span>
        <a href="#" className="text-primary hover:text-primary/80 transition-colors flex items-center">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Financial Services",
      title: "Digital Transformation for Regional Bank",
      description: "Helped a regional bank modernize their infrastructure and implement secure digital banking solutions.",
      result: "40% cost reduction"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Healthcare",
      title: "IT Infrastructure for Medical Center",
      description: "Designed and implemented a secure, compliant IT infrastructure for a multi-location medical center.",
      result: "99.9% uptime achieved"
    },
    {
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Manufacturing",
      title: "Cloud Migration for Manufacturer",
      description: "Migrated a manufacturing company's legacy systems to a secure, scalable cloud infrastructure.",
      result: "60% faster processing"
    }
  ];
  
  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-foreground/80">Success stories that demonstrate our expertise and impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="#contact">View All Case Studies</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
