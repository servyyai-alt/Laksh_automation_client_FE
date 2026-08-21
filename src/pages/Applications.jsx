import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Applications from '../components/Applications';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ApplicationsPage() {
  return (
    <>
      <Seo
        title="Water Automation Applications | Laksh Automations"
        description="Discover where Laksh Automations products are used — residential homes, apartments, industries, schools, hotels, hospitals, and farms."
        canonical="/applications"
      />
      <div className="min-h-screen overflow-hidden pt-16">
        <Navbar />
        <main>
          <Applications />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
