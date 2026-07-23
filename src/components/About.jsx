import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  { icon: '🧠', title: 'AI Strategy', desc: 'We map the business workflow before we build, so automation solves the right problem.' },
  { icon: '🔗', title: 'Integrations', desc: 'We connect your CRM, WhatsApp, inbox, forms, and internal tools into one workflow.' },
  { icon: '🚀', title: 'Launch Ready', desc: 'We design systems with testing, handoff logic, and maintainability in mind.' },
  { icon: '🤝', title: 'Support', desc: 'We stay involved through launch so your team can adopt the automation smoothly.' }
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden shadow-water" style={{ background: 'linear-gradient(135deg, #0A1628, #0D2347)' }}>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C12 2 4 8.5 4 14a8 8 0 0016 0C20 8.5 12 2 12 2Z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold font-display text-xl">Laksh Automations</div>
                      <div className="text-secondary-400 text-sm">AI Automation Specialists</div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  {[
                    { label: 'Workflow Clarity', pct: 98 },
                    { label: 'Integration Readiness', pct: 96 },
                    { label: 'Launch Reliability', pct: 95 },
                    { label: 'Ongoing Support', pct: 99 }
                  ].map((item, i) => (
                    <div key={i} className="mb-5">
                      <div className="flex justify-between mb-1">
                        <span className="text-white/80 text-sm font-medium">{item.label}</span>
                        <span className="text-secondary-400 text-sm font-bold">{item.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, #0077FF, #48CAE4)' }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.pct}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl p-5 shadow-glow">
                <div className="text-3xl font-display font-black">1</div>
                <div className="text-xs font-medium opacity-90">Focused Brand</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="badge-water mb-5">About Us</div>
            <h2 className="section-heading mb-5">
              Pioneers in Smart{' '}
              <span style={{ color: '#0077FF' }}>Automation</span>
            </h2>
            <p className="section-subheading mb-6">
              Founded in Coimbatore, Tamil Nadu, Laksh Automations builds AI automation systems for growing businesses across India. We help teams reduce repetitive work, connect tools, and respond faster with AI agents, chatbots, and workflow automation.
            </p>
            <p className="section-subheading mb-8">
              Every solution is designed around your process, your stack, and your business goals so the automation actually gets used.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-2xl border border-primary-100 hover:border-primary-200 hover:shadow-water transition-all duration-300"
                  style={{ background: '#F4FBFF' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <div className="font-display font-semibold text-dark-navy text-sm mb-1">{v.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
