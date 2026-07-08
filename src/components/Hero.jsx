import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const highlights = [
  { icon: '⚡', text: 'Automatic Motor ON/OFF' },
  { icon: '🛡️', text: 'Overflow Prevention' },
  { icon: '🔒', text: 'Dry Run Protection' },
  { icon: '💡', text: 'Electricity Saving' },
  { icon: '🔧', text: 'Easy Installation' },
  { icon: '🏭', text: 'Made in India' }
];

const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D2347 40%, #0077FF 100%)' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0077FF, transparent)' }} />

        {/* Floating bubbles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 50}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 6 + 8}s`
            }}
          />
        ))}

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="#F4FBFF"
              opacity="1"
            />
            <path
              d="M0,80 C360,40 720,110 1080,70 C1260,50 1380,90 1440,80 L1440,120 L0,120 Z"
              fill="#F4FBFF"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-water mb-6 w-fit" style={{ background: 'rgba(72, 202, 228, 0.15)', color: '#48CAE4', borderColor: 'rgba(72, 202, 228, 0.3)' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 4 8.5 4 14a8 8 0 0016 0C20 8.5 12 2 12 2Z"/>
                </svg>
                India's Trusted Manufacturer
              </div>

              <h1 className="font-display text-white leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 800 }}>
                India's Trusted{' '}
                <span style={{ background: 'linear-gradient(135deg, #48CAE4, #00B4D8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Automatic Water Level
                </span>{' '}
                Controller Manufacturer
              </h1>

              <p className="text-blue-100/80 text-lg leading-relaxed mb-8" style={{ maxWidth: '520px' }}>
                Smart Water Management Solutions for Homes, Apartments, Industries & Agriculture. Made in Coimbatore, Tamil Nadu.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <span className="text-sm">{h.icon}</span>
                    <span className="text-white/85 text-xs font-medium">{h.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button onClick={() => handleNav('#contact')} className="btn-aqua">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </button>
                <button
                  onClick={() => handleNav('#products')}
                  className="btn-outline-aqua"
                  style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  View Products
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: 10000, suffix: '+', label: 'Happy Customers', icon: '😊' },
                { value: 20, suffix: '+', label: 'Product Models', icon: '📦' },
                { value: 15, suffix: '+', label: 'Years Experience', icon: '🏆' },
                { value: 100, suffix: '%', label: 'Made in India', icon: '🇮🇳' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-card-dark rounded-2xl p-7 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="font-display text-3xl font-bold text-white mb-1">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-blue-300/80 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-5 glass-card-dark rounded-2xl p-5 flex items-center justify-between">
              <div>
                <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Call Now</div>
                <a href="tel:+918807500321" className="text-white font-display font-bold text-xl hover:text-secondary-400 transition-colors duration-200">
                  +91 88075 00321
                </a>
              </div>
              <div className="text-right">
                <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Location</div>
                <div className="text-white font-medium text-sm">Coimbatore, Tamil Nadu</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
