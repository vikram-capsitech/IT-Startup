import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MicrochipIcon, Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import LogoSvg from "../../Assets/Adobe Express - file.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Add scroll event listener for header styling
  const isScrolled = scrollY > 50;

  return (
    <header
      className={`fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center space-x-2">
          <img src={LogoSvg} alt="Logo" className="h-10 w-auto" />
          <span className="text-foreground font-heading font-bold text-xl">
            TechCore Solutions
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-foreground hover:text-primary py-2 transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <Separator className="my-2" />
            <Button asChild className="w-full" onClick={handleLinkClick}>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
