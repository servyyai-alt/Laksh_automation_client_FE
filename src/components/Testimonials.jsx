import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  { name: 'Rajesh Kumar', location: 'Chennai, Tamil Nadu', rating: 5, product: 'L10SS Single Phase Controller', text: 'Excellent product quality! The L10SS works perfectly for my home water tank. Easy to install and no issues in 2 years of use. My electricity bill also reduced significantly.', avatar: 'RK' },
  { name: 'Priya Subramaniam', location: 'Coimbatore, Tamil Nadu', rating: 5, product: 'Wireless Water Level Controller', text: 'The wireless controller is amazing! No drilling holes through walls for wires. Setup in 15 minutes and works flawlessly. The signal is strong across my entire property.', avatar: 'PS' },
  { name: 'Mohammed Farooq', location: 'Madurai, Tamil Nadu', rating: 5, product: 'Three Phase Motor Controller', text: 'We installed the L30SS for our factory water system. Outstanding performance and the phase failure protection saved our motor multiple times. Best customer support team.', avatar: 'MF' },
  { name: 'Anitha Krishnaswamy', location: 'Bangalore, Karnataka', rating: 5, product: 'Borewell Dry Run Protection', text: 'The borewell protection system is a must-have. Our previous motor burned due to dry running. After installing Laksh\'s protection, no motor failures in 18 months!', avatar: 'AK' },
  { name: 'Suresh Venkataraman', location: 'Erode, Tamil Nadu', rating: 5, product: 'GSM Mobile Pump Controller', text: 'I control my farm pump from my phone using SMS. Even in areas without internet, it works perfectly. Laksh Automations has changed how I manage my farm water.', avatar: 'SV' },
  { name: 'Deepa Nair', location: 'Trichy, Tamil Nadu', rating: 5, product: 'Apartment Water Automation', text: 'Installed in our 24-apartment complex. Zero water overflow complaints since installation. The central panel is easy to monitor. Excellent value for money solution.', avatar: 'DN' }
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? '#F59E0B' : '#E5E7EB'}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Testimonials</div>
          <h2 className="section-heading mb-4">
            What Our <span style={{ color: '#0077FF' }}>Customers</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Stars count={5} />
            <span className="text-gray-600 text-sm font-medium">4.9/5 from 500+ reviews</span>
          </div>
          <a
            href="https://g.page/r/CbxD8A_VgFrbEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 text-sm hover:underline"
          >
            View all Google Reviews →
          </a>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-2xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-8 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0A1628, #0D2347)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #48CAE4, transparent)' }} />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0077FF, #00B4D8)' }}
                >
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">{testimonials[active].name}</div>
                  <div className="text-secondary-400 text-sm">{testimonials[active].location}</div>
                  <Stars count={testimonials[active].rating} />
                </div>
              </div>

              <blockquote className="text-white/85 text-base leading-relaxed mb-4 italic">
                "{testimonials[active].text}"
              </blockquote>

              <div className="text-xs text-secondary-500 font-medium">
                Product: {testimonials[active].product}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-primary-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0077FF" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    background: i === active ? 'linear-gradient(90deg, #0077FF, #00B4D8)' : '#D1E8FF'
                  }}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border-2 border-primary-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0077FF" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className="p-3 rounded-xl text-left transition-all duration-300 border"
              style={{
                background: i === active ? 'rgba(0,119,255,0.06)' : 'white',
                borderColor: i === active ? '#0077FF' : 'rgba(0,119,255,0.1)',
                opacity: i === active ? 1 : 0.7
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: i === active ? 1 : 0.7, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-2" style={{ background: 'linear-gradient(135deg, #0077FF, #00B4D8)' }}>
                {t.avatar}
              </div>
              <div className="text-xs font-semibold text-dark-navy truncate">{t.name}</div>
              <div className="text-xs text-gray-400 truncate">{t.location.split(',')[0]}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
