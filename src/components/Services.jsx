import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { homeServices } from '../data/services';

const iconMap = {
  'ai-automation': '⚙️',
  'ai-agents': '🤖',
  'workflow-automation': '🔁',
  'whatsapp-automation': '💬',
  'crm-automation': '📈',
  'business-process-automation': '🧩',
  'ai-chatbots': '💡',
  'custom-ai-solutions': '🛠️'
};

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="services" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Services</div>
          <h2 className="section-heading mb-4">
            AI Automation Services Built for <span style={{ color: '#0077FF' }}>Business Growth</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            From AI agents and WhatsApp automation to CRM integrations and custom workflows, we build systems that save time and improve response speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeServices.map((service, i) => (
            <motion.div
              key={service.slug}
              className="group bg-white rounded-2xl p-6 border border-primary-100 hover:border-primary-300 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(0,119,255,0.10)' }}
            >
              <div className="text-3xl mb-4">{iconMap[service.slug] || '⚡'}</div>
              <h3 className="font-display font-bold text-dark-navy text-base mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors duration-200"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #0077FF, #48CAE4)' }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link to="/services" className="btn-aqua inline-flex">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

