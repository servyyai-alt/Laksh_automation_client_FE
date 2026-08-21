import Seo from '../components/Seo';
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
  pageSchema,
  faqSchema,
  serviceSchema,
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
import { aiAutomationFaqs } from '../data/services';

const homeFaqs = [
  {
    question: 'What types of water level controllers does Laksh Automations offer?',
    answer:
      'We offer single phase controllers, three phase controllers, wireless controllers, GSM-enabled controllers, IoT smart controllers, borewell protection systems, and apartment water automation solutions.'
  },
  {
    question: 'Do you ship water level controllers across India?',
    answer:
      'Yes. We ship our products across India from our manufacturing facility in Coimbatore, Tamil Nadu. We also serve international markets on request.'
  },
  {
    question: 'Can I control my water pump remotely?',
    answer:
      'Yes. Our GSM and IoT smart controllers allow you to monitor and control your water pump from anywhere using your mobile phone through SMS or a mobile app.'
  },
  {
    question: 'Do you provide installation support?',
    answer:
      'Yes. Our products come with easy installation guides and our technical support team is available to help with installation and troubleshooting over phone or WhatsApp.'
  }
];

export default function Home() {
  return (
    <>
      <Seo
        title="Automatic Water Level Controller Manufacturer Coimbatore"
        titleAbsolute
        description="Laksh Automations is a leading manufacturer of automatic water level controllers, wireless water level controllers, borewell protection systems, and water automation solutions in Coimbatore, Tamil Nadu."
        keywords="Automatic Water Level Controller, Water Pump Controller Manufacturer, Water Level Controller Coimbatore, Wireless Water Level Controller, Tank Overflow Prevention System, Borewell Protection System, Motor Protection Controller, Industrial Water Automation, Agricultural Pump Controller, Smart Water Management System"
        ogImage="/og-image.jpg"
        canonical="/"
        themeColor="#0A1628"
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          pageSchema({
            name: 'Laksh Automations',
            description: 'Leading manufacturer of automatic water level controllers in Coimbatore, Tamil Nadu, India.',
            path: '/'
          }),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          serviceSchema({
            name: 'Automatic Water Level Controllers',
            description: 'Automatic water level controllers, wireless controllers, borewell protection, GSM pump controllers, and water automation solutions.',
            path: '/'
          }),
          faqSchema([...aiAutomationFaqs, ...homeFaqs])
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
