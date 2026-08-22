import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { homeServices } from '../data/services';
import { breadcrumbSchema, organizationSchema, pageSchema, websiteSchema } from '../utils/jsonld';

const iconMap = {
  'single-phase-controllers': '💧',
  'three-phase-controllers': '⚡',
  'wireless-controllers': '📡',
  'borewell-protection': '🛡️',
  'gsm-pump-controller': '📱',
  'iot-smart-controllers': '🌐',
  'apartment-automation': '🏢',
  'industrial-automation': '🏭'
};

export default function Services() {
  return (
    <>
      <Seo
        title="Water Level Controllers & Automation Products"
        description="Explore Laksh Automations range of automatic water level controllers, wireless controllers, borewell protection systems, GSM pump controllers, and water automation solutions."
        canonical="/services"
        noindex
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          pageSchema({
            name: 'Products | Laksh Automations',
            description: 'Explore water automation products from Laksh Automations.',
            path: '/services'
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/services' }
          ])
        ]}
      />
      <main className="min-h-screen bg-white">
        <section className="pt-28 pb-16 bg-[#F4FBFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="badge-water mb-4 w-fit">Products</div>
            <h1 className="section-heading mb-4">
              Complete Range of <span style={{ color: '#0077FF' }}>Water Automation Solutions</span>
            </h1>
            <p className="section-subheading max-w-3xl">
              20+ product models designed for every water management scenario, from homes to industries.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {homeServices.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="group bg-white rounded-2xl p-6 border border-primary-100 hover:border-primary-300 transition-all duration-300">
                  <div className="text-3xl mb-4">{iconMap[service.slug] || '💧'}</div>
                  <h2 className="font-display font-bold text-dark-navy text-lg mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-primary-600 font-semibold text-sm">View product details →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
