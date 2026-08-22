import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Water Automation Products | Laksh Automations"
        description="Explore our full range of automatic water level controllers, wireless controllers, 3-phase controllers, and motor protection systems."
        canonical="/products"
        noindex
      />
      <div className="min-h-screen overflow-hidden pt-16">
        <Navbar />
        <main>
          <Products />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
