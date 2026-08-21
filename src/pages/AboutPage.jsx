import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Laksh Automations Coimbatore"
        description="Learn about Laksh Automations — leading manufacturer of automatic water level controllers and water automation solutions in Coimbatore, Tamil Nadu."
        canonical="/about"
      />
      <div className="min-h-screen overflow-hidden pt-16">
        <Navbar />
        <main>
          <About />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
