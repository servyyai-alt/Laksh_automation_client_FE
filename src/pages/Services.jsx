import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { homeServices } from '../data/services';
import { breadcrumbSchema, organizationSchema, pageSchema, websiteSchema } from '../utils/jsonld';

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore Laksh Automations services for AI automation, AI agents, workflow automation, WhatsApp automation, CRM automation, AI chatbots, and custom AI solutions."
        canonical="/services"
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          pageSchema({
            name: 'Services | Laksh Automations',
            description: 'Explore AI automation services from Laksh Automations.',
            path: '/services'
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' }
          ])
        ]}
      />
      <main className="min-h-screen bg-white">
        <section className="pt-28 pb-16 bg-[#F4FBFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="badge-water mb-4 w-fit">Services</div>
            <h1 className="section-heading mb-4">
              AI Automation Services for Modern <span style={{ color: '#0077FF' }}>Businesses</span>
            </h1>
            <p className="section-subheading max-w-3xl">
              We design and implement automation systems that save time, improve response speed, and make your operations more consistent.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {homeServices.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="group bg-white rounded-2xl p-6 border border-primary-100 hover:border-primary-300 transition-all duration-300">
                  <div className="text-3xl mb-4">⚡</div>
                  <h2 className="font-display font-bold text-dark-navy text-lg mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-primary-600 font-semibold text-sm">Open service page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

