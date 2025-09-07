import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import UnderConstruction from '@/components/UnderConstruction';

export default function Home() {
  // Check if under construction mode is enabled
  const isUnderConstruction = process.env.UNDER_CONSTRUCTION === 'true';
  
  // Debug log (remove in production)
  console.log('UNDER_CONSTRUCTION env var:', process.env.UNDER_CONSTRUCTION);
  console.log('isUnderConstruction:', isUnderConstruction);

  // If under construction mode is enabled, show only the under construction page
  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  // Otherwise, show the normal website
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
