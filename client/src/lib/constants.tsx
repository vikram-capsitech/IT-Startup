export const COMPANY_INFO = {
  name: "Osperra Technology",
  tagline: "Empowering Businesses Through Innovative IT Solutions",
  description: "We build, scale, and future-proof your digital presence with cutting-edge technology and innovative strategies.",
  email: "hello@osperratech.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Tech Street",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States",
  },
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
] as const;

export const SERVICE_CATEGORIES = [
  "web-development",
  "cloud-consulting", 
  "ai-integration",
  "uiux-design",
  "support-maintenance",
  "mobile-development",
] as const;
