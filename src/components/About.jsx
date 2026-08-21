import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/logo.png';

const values = [
  { icon: '💧', title: 'Water Management', desc: 'We specialize in smart water level control and automation for every application type.' },
  { icon: '🔬', title: 'Innovation', desc: 'We use the latest microcontroller and wireless technology for reliable water automation.' },
  { icon: '🏭', title: 'Manufacturing', desc: 'All products are designed and manufactured in-house at our Coimbatore facility.' },
  { icon: '🤝', title: 'Support', desc: 'Our technical team provides installation guidance and after-sales support nationwide.' }
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
                    <div className="bg-white p-1 rounded-xl shadow-glow">
                      <img src={logo} alt="Laksh Automations logo" className="w-14 h-11 rounded-xl object-contain" />
                    </div>
                    <div>
                      <div className="text-white font-bold font-display text-xl">Laksh Automations</div>
                      <div className="text-secondary-400 text-sm">Water Automation Specialists</div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  {[
                    { label: 'Product Quality', pct: 98 },
                    { label: 'Customer Satisfaction', pct: 99 },
                    { label: 'Installation Success', pct: 96 },
                    { label: 'After-Sales Support', pct: 97 }
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
                <div className="text-3xl font-display font-black">15+</div>
                <div className="text-xs font-medium opacity-90">Years Experience</div>
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
              Leading Manufacturer of{' '}
              <span style={{ color: '#0077FF' }}>Water Level Controllers</span>
            </h2>
            <p className="section-subheading mb-6">
              Founded in Coimbatore, Tamil Nadu, Laksh Automations is a leading manufacturer of automatic water level controllers and water automation solutions. We help homes, apartments, industries, and farms manage water efficiently with our reliable and affordable products.
            </p>
            <p className="section-subheading mb-8">
              Every product is designed and manufactured in India with advanced technology to deliver smart control and sure protection for your water management needs.
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
