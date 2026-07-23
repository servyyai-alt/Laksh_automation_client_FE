import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reasons = [
  {
    icon: '🧠',
    title: 'Strategy First',
    desc: 'We start by understanding the process, the bottlenecks, and the business outcome you want.',
    highlight: 'Business Led'
  },
  {
    icon: '⚙️',
    title: 'Modern Stack',
    desc: 'We design automations that fit the tools you already use, including CRM, WhatsApp, email, and forms.',
    highlight: 'Integrated'
  },
  {
    icon: '🔧',
    title: 'Production Ready',
    desc: 'We think through retries, logging, handoff logic, and maintainability before launch.',
    highlight: 'Reliable'
  },
  {
    icon: '📞',
    title: 'Expert Support',
    desc: 'We stay involved through implementation so your team can adopt the automation smoothly.',
    highlight: 'Guided'
  },
  {
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'We move quickly from discovery to launch so you see value sooner.',
    highlight: 'Quick Launch'
  },
  {
    icon: '💰',
    title: 'Clear Scope',
    desc: 'You get a practical proposal focused on outcomes, not vague automation promises.',
    highlight: 'Transparent'
  },
  {
    icon: '😊',
    title: 'Better Conversations',
    desc: 'AI chatbots and agents help you reply consistently and professionally.',
    highlight: 'Always On'
  },
  {
    icon: '🇮🇳',
    title: 'Built in India',
    desc: 'We are based in Coimbatore and build solutions for Indian business workflows.',
    highlight: 'India First'
  }
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="why-us" className="section-py" style={{ background: '#F4FBFF' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Why Choose Us</div>
          <h2 className="section-heading mb-4">
            Why Businesses Trust <span style={{ color: '#0077FF' }}>Laksh Automations</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            We build automation around real workflows, real people, and real business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-primary-100 hover:border-primary-300 transition-all duration-400 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0, 119, 255, 0.12)' }}
            >
              {/* Highlight badge */}
              <div
                className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full"
                style={{ background: 'rgba(0,119,255,0.08)', color: '#0077FF' }}
              >
                {r.highlight}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-4">{r.icon}</div>

              <h3 className="font-display font-bold text-dark-navy text-sm mb-2 leading-snug">{r.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #0077FF, #48CAE4)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="tel:+918807500321" className="btn-aqua">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call +91 88075 00321
          </a>
          <a
            href="https://g.page/r/CbxD8A_VgFrbEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-aqua"
          >
            ⭐ Leave a Google Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}
