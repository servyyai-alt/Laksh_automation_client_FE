import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function WhyUsPage() {
  return (
    <>
      <Seo
        title="Why Choose Us | Laksh Automations"
        description="Why choose Laksh Automations for water level control — quality manufacturing, 15+ years experience, in-house support, and proven reliability."
        canonical="/why-us"
      />
      <div className="min-h-screen overflow-hidden pt-16">
        <Navbar />
        <main>
          <WhyChooseUs />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
