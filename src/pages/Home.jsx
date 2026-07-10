import Seo from '../components/Seo';
import { organizationSchema, localBusinessSchema, aggregateRatingSchema, faqSchema } from '../utils/jsonld';
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
      <Seo />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(aggregateRatingSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema())}
      </script>
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
