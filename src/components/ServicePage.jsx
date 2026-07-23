import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from './Seo';
import {
  aiAutomationFaqs,
  serviceCatalog
} from '../data/services';
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  pageSchema,
  serviceSchema,
  websiteSchema
} from '../utils/jsonld';

export default function ServicePage({ service }) {
  if (!service) return null;

  const faqItems = service.faqs?.length ? service.faqs : aiAutomationFaqs;

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        canonical={`/services/${service.slug}`}
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          pageSchema({
            name: `${service.title} | Laksh Automations`,
            description: service.description,
            path: `/services/${service.slug}`
          }),
          serviceSchema({
            name: service.title,
            description: service.description,
            path: `/services/${service.slug}`,
            serviceType: service.title
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` }
          ]),
          faqSchema(faqItems)
        ]}
      />

      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0A1628, #0D2347, #0077FF)' }}>
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, #48CAE4, transparent)' }} />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/services" className="text-secondary-300 text-sm font-medium mb-6 inline-flex">
              ← Back to Services
            </Link>
            <div className="badge-water mb-4 w-fit" style={{ background: 'rgba(72, 202, 228, 0.15)', color: '#48CAE4', borderColor: 'rgba(72, 202, 228, 0.3)' }}>
              {service.title}
            </div>
            <h1 className="font-display font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
              {service.headline}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div
                className="bg-[#F4FBFF] rounded-3xl p-8 border border-primary-100"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <h2 className="font-display font-bold text-2xl text-dark-navy mb-5">What You Get</h2>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 text-primary-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-3xl p-8 border border-primary-100 shadow-water"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <h2 className="font-display font-bold text-2xl text-dark-navy mb-5">Why It Works</h2>
                <div className="space-y-4">
                  {service.benefits.map((item) => (
                    <div key={item} className="p-4 rounded-2xl bg-[#F4FBFF] border border-primary-100">
                      <div className="font-semibold text-dark-navy mb-1">{item}</div>
                      <div className="text-sm text-gray-500">{service.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F4FBFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="badge-water mb-4 w-fit">Use Cases</div>
                <h2 className="section-heading mb-4">Best For Teams That Need <span style={{ color: '#0077FF' }}>Speed and Consistency</span></h2>
                <p className="section-subheading mb-6">
                  These are the common business situations where this service creates the biggest impact.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.useCases.map((item) => (
                    <div key={item} className="bg-white rounded-2xl p-5 border border-primary-100">
                      <h3 className="font-semibold text-dark-navy mb-1">{item}</h3>
                      <p className="text-sm text-gray-500">Reduce manual handling and keep the process moving.</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-primary-100 shadow-water">
                <div className="badge-water mb-4 w-fit">FAQ</div>
                <h2 className="font-display font-bold text-2xl text-dark-navy mb-6">Common Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((faq) => (
                    <details key={faq.question} className="group rounded-2xl border border-primary-100 p-4">
                      <summary className="cursor-pointer list-none font-semibold text-dark-navy">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-heading mb-4">
              Ready to build your <span style={{ color: '#0077FF' }}>automation plan</span>?
            </h2>
            <p className="section-subheading mx-auto mb-8">
              Talk to Laksh Automations about the workflow, AI agent, or chatbot you want to launch next.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="btn-aqua">
                Start a Project
              </Link>
              <Link to="/services" className="btn-outline-aqua">
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function findServiceBySlug(slug) {
  return serviceCatalog.find((item) => item.slug === slug);
}

