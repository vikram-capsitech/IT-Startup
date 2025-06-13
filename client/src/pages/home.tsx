import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Clients from "@/components/sections/clients";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
