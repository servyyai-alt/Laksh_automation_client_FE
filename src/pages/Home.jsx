import Seo from '../components/Seo';
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  pageSchema,
  productCollectionSchema,
  serviceSchema,
  websiteSchema
} from '../utils/jsonld';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Applications from '../components/Applications';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Seo
        title="Automatic Water Level Controller Manufacturer"
        description="Laksh Automations manufactures automatic water level controllers, wireless tank systems, and pump protection solutions for homes, apartments, industries and agriculture."
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          pageSchema({
            name: 'Laksh Automations',
            description: 'Automatic water level controller manufacturer in Coimbatore, Tamil Nadu.',
            path: '/'
          }),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          productCollectionSchema(),
          serviceSchema(),
          faqSchema()
        ]}
      />
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Applications />
          <WhyChooseUs />
          <Statistics />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
