import Seo from '../components/Seo';
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
  pageSchema,
  websiteSchema
} from '../utils/jsonld';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Seo
        title="Automatic Water Level Controller Manufacturer in Coimbatore | Laksh Automations"
        titleAbsolute
        description="Laksh Automations is a leading manufacturer of automatic water level controllers, pump controllers, motor protection systems and smart water automation solutions in Coimbatore, Tamil Nadu."
        keywords="Automatic Water Level Controller, Water Level Controller Manufacturer, Water Level Controller Coimbatore, Automatic Pump Controller, Water Pump Controller, Automatic Motor Controller, Wireless Water Level Controller, Water Automation System, Tank Overflow Prevention System, Borewell Protection System, Motor Protection Controller, Industrial Water Automation, Laksh Automations"
        ogImage="/og-image.jpg"
        canonical="/"
        themeColor="#0A1628"
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          pageSchema({
            name: 'Laksh Automations',
            description: 'Laksh Automations is a leading manufacturer of automatic water level controllers, pump controllers and smart water automation solutions in Coimbatore, Tamil Nadu.',
            path: '/'
          }),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
        ]}
      />
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
