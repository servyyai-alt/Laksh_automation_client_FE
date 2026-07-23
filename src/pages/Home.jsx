import Seo from '../components/Seo';
import {
  breadcrumbSchema,
  organizationSchema,
  pageSchema,
  faqSchema,
  serviceSchema,
  websiteSchema
} from '../utils/jsonld';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Applications from '../components/Applications';
import WhyChooseUs from '../components/WhyChooseUs';
import Outcomes from '../components/Outcomes';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { aiAutomationFaqs } from '../data/services';

export default function Home() {
  return (
    <>
      <Seo
        title="Laksh Automations | AI Automation, AI Agents & Business Workflow Automation"
        titleAbsolute
        description="Laksh Automations helps businesses automate workflows using AI Agents, WhatsApp Automation, CRM integrations, AI Chatbots, and custom AI solutions."
        keywords="Laksh Automations, AI Automation, AI Agents, Workflow Automation, Business Automation, CRM Automation, WhatsApp Automation, AI Chatbots, Business Process Automation, Custom AI Solutions, Automation Company India"
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          pageSchema({
            name: 'Laksh Automations',
            description: 'AI automation company in Coimbatore, Tamil Nadu.',
            path: '/'
          }),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          serviceSchema({
            name: 'AI Automation',
            description: 'AI automation services, AI agents, WhatsApp automation, CRM automation and custom AI solutions.',
            path: '/'
          }),
          faqSchema(aiAutomationFaqs)
        ]}
      />
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Applications />
          <WhyChooseUs />
          <Outcomes />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
