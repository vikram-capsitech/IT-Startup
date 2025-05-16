import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ContactSection from '@/components/sections/ContactSection';
import BackToTop from '@/components/ui/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TeamSection />
        <TestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
