import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const apps = [
  { icon: '🏠', title: 'Residential Homes', desc: 'Automatic water level controllers help homeowners manage sump and overhead tank levels while reducing overflow and unnecessary motor use.', color: '#0077FF' },
  { icon: '🏢', title: 'Apartments', desc: 'Water automation systems simplify distribution across multiple tanks and pumps, making apartment water management more reliable.', color: '#00B4D8' },
  { icon: '🏭', title: 'Industries', desc: 'Industrial water automation keeps utility tanks and process water under control while protecting pumps from dry running and overload.', color: '#48CAE4' },
  { icon: '🏫', title: 'Schools & Colleges', desc: 'Educational institutions can reduce manual supervision and keep campus water supply available for daily operations.', color: '#0096C7' },
  { icon: '🏨', title: 'Hotels', desc: 'Hotels benefit from consistent water availability for guest rooms, kitchens and service areas with less manual pump switching.', color: '#0077FF' },
  { icon: '🏥', title: 'Hospitals', desc: 'Hospitals need dependable water supply, and automation helps maintain safe tank levels with fewer interruptions.', color: '#00B4D8' },
  { icon: '🚜', title: 'Agriculture & Farms', desc: 'Borewell protection and pump automation support irrigation needs while helping prevent dry run damage in farm applications.', color: '#48CAE4' },
  { icon: '🏢', title: 'Commercial Complexes', desc: 'Offices and commercial buildings can centralize pump control and reduce the effort required to monitor water storage.', color: '#0096C7' }
];

export default function Applications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="applications" className="section-py bg-white" ref={ref} aria-labelledby="applications-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Applications</div>
          <h2 id="applications-heading" className="section-heading mb-4">
            Applications of Our Water Automation Systems
          </h2>
          <p className="section-subheading mx-auto text-center">
            Our automatic water level controllers are trusted across residential, commercial, industrial, and agricultural applications.
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
            <h3 className="font-display text-2xl font-bold mb-3">Looking for a Custom Solution?</h3>
            <p className="text-white/80 mb-6">We provide water automation solutions tailored to your specific application and requirements.</p>
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
