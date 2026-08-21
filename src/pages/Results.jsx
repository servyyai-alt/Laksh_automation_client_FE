import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Outcomes from '../components/Outcomes';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ResultsPage() {
  return (
    <>
      <Seo
        title="What You Get with Laksh Automations | Results"
        description="Key outcomes of using Laksh Automations water level controllers: overflow prevention, motor protection, remote monitoring, and reduced maintenance."
        canonical="/results"
      />
      <div className="min-h-screen overflow-hidden pt-16">
        <Navbar />
        <main>
          <Outcomes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
