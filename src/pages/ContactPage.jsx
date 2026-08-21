import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | Laksh Automations"
        description="Get in touch with Laksh Automations for product enquiries, quotes, and technical assistance."
        canonical="/contact"
      />
      <div className="min-h-screen overflow-hidden pt-16">
        <Navbar />
        <main>
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
