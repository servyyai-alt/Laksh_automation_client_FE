import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const outcomes = [
  {
    title: 'No More Water Overflow',
    description: 'Prevent tank overflow and save water with automatic level detection and pump control.'
  },
  {
    title: 'Motor Protection',
    description: 'Protect your pump motor from dry run, overload, and phase failure with built-in safety systems.'
  },
  {
    title: 'Remote Monitoring',
    description: 'Monitor and control your water systems from anywhere using GSM and IoT-enabled controllers.'
  },
  {
    title: 'Reduced Maintenance',
    description: 'Reliable automation reduces manual intervention and extends the life of your water pump systems.'
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
            What You Get with <span style={{ color: '#0077FF' }}>Laksh Automations</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            Our water automation solutions deliver measurable results for every application.
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
