import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reviews = [
  { category: 'Excellent Product Quality', text: 'The build quality of Laksh Automations products is outstanding. Premium components and solid construction ensure long-lasting performance.', avatar: 'PQ' },
  { category: 'Easy Installation', text: 'Our electrician installed the controller in just 30 minutes. Clear instructions and well-labeled terminals make setup hassle-free.', avatar: 'EI' },
  { category: 'Reliable Performance', text: 'Running non-stop for 2 years without a single issue. The automatic pump control works flawlessly day and night.', avatar: 'RP' },
  { category: 'Best Customer Support', text: 'Quick response on WhatsApp and phone. The support team helped us choose the right product and guided us through installation.', avatar: 'CS' },
  { category: 'Value for Money', text: 'Best water level controller at this price range. Saved us from water overflow and motor damage. Worth every rupee.', avatar: 'VM' }
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

  const prev = () => setActive(a => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive(a => (a + 1) % reviews.length);

  return (
    <section id="testimonials" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Customer Reviews</div>
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

        {/* Featured review */}
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
                  {reviews[active].avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-base">{reviews[active].category}</div>
                  <Stars count={5} />
                </div>
              </div>

              <blockquote className="text-white/85 text-base leading-relaxed mb-4 italic">
                &ldquo;{reviews[active].text}&rdquo;
              </blockquote>
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
              {reviews.map((_, i) => (
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {reviews.map((r, i) => (
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
              <div className="flex items-center gap-1 mb-1">
                <Stars count={5} />
              </div>
              <div className="text-xs font-semibold text-dark-navy">{r.category}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
