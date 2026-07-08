import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 10000, suffix: '+', label: 'Happy Customers', desc: 'Across Tamil Nadu and India', icon: '😊' },
  { value: 20, suffix: '+', label: 'Product Models', desc: 'For every application type', icon: '📦' },
  { value: 15, suffix: '+', label: 'Years Experience', desc: 'In water automation', icon: '🏆' },
  { value: 500, suffix: '+', label: 'Five-Star Reviews', desc: 'On Google Reviews', icon: '⭐' },
  { value: 24, suffix: '/7', label: 'Technical Support', desc: 'Always available for you', icon: '📞' },
  { value: 48, suffix: 'hr', label: 'Warranty Service', desc: 'Quick response guaranteed', icon: '⚡' }
];

const AnimatedCounter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
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
  }, [inView, target]);

  return <>{count.toLocaleString()}{suffix}</>;
};

export default function Statistics() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section-py relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628, #0D2347, #0077FF)' }} ref={ref}>
      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              left: `${Math.random() * 100}%`,
              bottom: 0,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 8 + 10}s`
            }}
          />
        ))}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,0 L0,0 Z" fill="#F4FBFF" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,45 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit" style={{ background: 'rgba(72, 202, 228, 0.15)', color: '#48CAE4', borderColor: 'rgba(72, 202, 228, 0.3)' }}>
            Our Numbers
          </div>
          <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>
            Numbers That Speak for Themselves
          </h2>
          <p className="text-white/70 text-base max-w-lg mx-auto">
            Over 15 years of consistent growth driven by quality products and customer trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card text-center"
              style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '28px 16px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div className="font-display text-3xl font-black text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-secondary-400 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/50 text-xs">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
