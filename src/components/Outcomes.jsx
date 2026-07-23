import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const outcomes = [
  {
    title: 'Less manual work',
    description: 'Reduce repetitive tasks across lead handling, support, and internal operations.'
  },
  {
    title: 'Faster response times',
    description: 'Use AI agents and chatbots to respond quickly, even outside business hours.'
  },
  {
    title: 'Better system visibility',
    description: 'Keep CRM, inbox, and workflow updates consistent across your stack.'
  },
  {
    title: 'More scalable processes',
    description: 'Create automation that can grow as your business and volume increase.'
  }
];

export default function Outcomes() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="results" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Outcomes</div>
          <h2 className="section-heading mb-4">
            What Your Business Gets with <span style={{ color: '#0077FF' }}>Automation</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            The best automation projects are measurable. We focus on outcomes that improve day-to-day operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl p-6 border border-primary-100 bg-[#F4FBFF] hover:shadow-water transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="text-2xl mb-3">✓</div>
              <h3 className="font-display font-bold text-dark-navy mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

