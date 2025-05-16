import { MicrochipIcon } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { icon: <FaLinkedinIn className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <FaTwitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <FaFacebookF className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <FaInstagram className="h-5 w-5" />, href: "#", label: "Instagram" },
];

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#team", label: "Our Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "#", label: "IT Infrastructure" },
  { href: "#", label: "Cybersecurity" },
  { href: "#", label: "Software Development" },
  { href: "#", label: "Cloud Services" },
  { href: "#", label: "IT Consulting" },
  { href: "#", label: "IT Support & Maintenance" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MicrochipIcon className="h-7 w-7 text-white" />
              <span className="text-white font-heading font-bold text-xl">TechCore Solutions</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing innovative IT solutions and services to businesses of all sizes. Your technology partner for growth and success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors" 
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1"><i className="fas fa-map-marker-alt"></i></span>
                <span className="text-gray-400">123 Tech Boulevard, Suite 500<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary"><i className="fas fa-phone-alt"></i></span>
                <span className="text-gray-400">(800) 555-1234</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary"><i className="fas fa-envelope"></i></span>
                <span className="text-gray-400">info@techcoresolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-800" />
        
        <div className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TechCore Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
