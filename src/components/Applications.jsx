import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const apps = [
  { icon: '🏠', title: 'Residential', desc: 'Home sump & overhead tanks, flats, and individual houses with automatic motor control.', color: '#0077FF' },
  { icon: '🏢', title: 'Apartments', desc: 'Multi-floor apartment complexes with centralized water distribution systems.', color: '#00B4D8' },
  { icon: '🏭', title: 'Industries', desc: 'Manufacturing plants, factories, and industrial facilities requiring continuous water supply.', color: '#48CAE4' },
  { icon: '🏫', title: 'Schools & Colleges', desc: 'Educational institutions needing reliable, automatic water management for large populations.', color: '#0096C7' },
  { icon: '🏨', title: 'Hotels & Resorts', desc: 'Hospitality sector water automation for consistent guest service and water conservation.', color: '#0077FF' },
  { icon: '🏥', title: 'Hospitals', desc: 'Critical healthcare facilities requiring uninterrupted, reliable water management systems.', color: '#00B4D8' },
  { icon: '🌾', title: 'Agriculture', desc: 'Farm irrigation pump automation with timer, GSM control, and dry run protection.', color: '#48CAE4' },
  { icon: '🏬', title: 'Commercial', desc: 'Malls, offices, and commercial complexes with smart water monitoring and automation.', color: '#0096C7' }
];

export default function Applications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="applications" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Applications</div>
          <h2 className="section-heading mb-4">
            Solutions for <span style={{ color: '#0077FF' }}>Every Sector</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            From individual homes to large industrial complexes — our water automation products are engineered for every application.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl border border-primary-100 hover:border-primary-300 transition-all duration-400 cursor-default text-center"
              style={{ background: 'linear-gradient(135deg, #F4FBFF, white)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0, 119, 255, 0.15)' }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                style={{ background: `${app.color}15`, border: `1.5px solid ${app.color}25` }}
              >
                {app.icon}
              </div>
              <h3 className="font-display font-semibold text-dark-navy mb-2 text-sm">{app.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{app.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-12 rounded-3xl p-10 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0A1628, #0D2347, #0077FF)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #48CAE4, transparent)' }} />
          </div>
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-bold mb-3">Don't see your application?</h3>
            <p className="text-white/80 mb-6">We design and manufacture custom water automation solutions. Tell us your requirement.</p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-aqua inline-flex"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Enquire Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
