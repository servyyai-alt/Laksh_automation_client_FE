import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import API from '../utils/api';

const defaultProducts = [
  { _id: '1', name: 'AUTO GUN + JET Automatic Water Pump Controller', category: 'Single Phase', shortDescription: 'Automatic pump control for domestic water systems', features: ['Auto ON/OFF', 'Dry Run Protection', 'Overflow Prevention'] },
  { _id: '2', name: 'L10SS Single Phase Automatic Water Level Controller', category: 'Single Phase', shortDescription: 'Smart single-phase motor automation with level sensing', features: ['Level Sensing', 'Motor Protection', 'LED Indicators'] },
  { _id: '3', name: 'L30SS Three Phase Automatic Water Level Controller', category: 'Three Phase', shortDescription: 'Heavy-duty three-phase automation for industrial use', features: ['3-Phase Control', 'Phase Failure Protection', 'Timer Function'] },
  { _id: '4', name: 'Wireless Water Level Controller', category: 'Wireless', shortDescription: 'No wire needed — 100% wireless tank monitoring', features: ['Wireless Sensors', 'RF Technology', 'Easy Setup'] },
  { _id: '5', name: 'Wireless Transmitter – 500 Meter Range', category: 'Wireless', shortDescription: 'Long-range wireless signal transmitter for remote tanks', features: ['500m Range', 'Battery Powered', 'Weatherproof'] },
  { _id: '6', name: 'Wireless Receiver – 500 Meter Range', category: 'Wireless', shortDescription: 'Paired receiver unit for 500m wireless controller', features: ['500m Range', 'Signal Indicator', 'Auto Reconnect'] },
  { _id: '7', name: 'Wireless Transmitter – 1000 Meter Range', category: 'Wireless', shortDescription: 'Extended 1KM range transmitter for large properties', features: ['1000m Range', 'Strong Signal', 'Farm Suitable'] },
  { _id: '8', name: 'Wireless Receiver – 1000 Meter Range', category: 'Wireless', shortDescription: 'Extended range receiver unit for agricultural use', features: ['1000m Range', 'Weatherproof', 'Night Vision LED'] },
  { _id: '9', name: 'Borewell Dry Run Protection System', category: 'Protection', shortDescription: 'Critical protection for borewell pump motors', features: ['Dry Run Sensing', 'Auto Cut-off', 'Motor Saver'] },
  { _id: '10', name: 'Digital Water Level Indicator', category: 'Accessories', shortDescription: 'Clear digital display of tank water level percentage', features: ['Digital Display', '5 Level Display', 'Buzzer Alert'] },
  { _id: '11', name: 'Single Phase Motor Protection Panel', category: 'Protection', shortDescription: 'Complete panel protection for single-phase motors', features: ['Overload Protection', 'Volt Guard', 'IP65 Panel'] },
  { _id: '12', name: 'Three Phase Motor Protection Panel', category: 'Protection', shortDescription: 'Industrial grade three-phase protection panel', features: ['3-Phase Guard', 'Phase Reversal', 'Digital Meter'] },
  { _id: '13', name: 'Underground Sump Automation Controller', category: 'Single Phase', shortDescription: 'Automated underground sump level management', features: ['Sump Level Control', 'Overflow Stop', 'Auto Fill'] },
  { _id: '14', name: 'Apartment Water Automation System', category: 'Industrial', shortDescription: 'Central water management for multi-floor apartments', features: ['Multi-tank Control', 'Central Panel', 'Floor-wise Control'] },
  { _id: '15', name: 'Industrial Water Automation System', category: 'Industrial', shortDescription: 'Complete industrial water process automation', features: ['SCADA Ready', 'Multi-pump Control', 'Data Logging'] },
  { _id: '16', name: 'Agricultural Pump Automation Controller', category: 'Agricultural', shortDescription: 'Field-ready pump automation for irrigation', features: ['Timer Control', 'GSM Alert', 'Solar Compatible'] },
  { _id: '17', name: 'Smart IoT Water Level Controller', category: 'IoT/Smart', shortDescription: 'WiFi-enabled smart controller with app monitoring', features: ['WiFi Connected', 'Mobile App', 'Voice Control'] },
  { _id: '18', name: 'GSM Mobile Pump Controller', category: 'IoT/Smart', shortDescription: 'Control your pump via SMS from anywhere', features: ['SMS Control', 'Status SMS', 'Any Phone'] },
  { _id: '19', name: 'Float Switch Water Level Controller', category: 'Accessories', shortDescription: 'Reliable float switch based level controller', features: ['Float Switch', 'Simple Setup', 'Long Life'] },
  { _id: '20', name: 'Customized Automation Solutions', category: 'Industrial', shortDescription: 'Bespoke water automation engineered for your needs', features: ['Custom Design', 'On-site Survey', 'Full Support'] }
];

const categories = ['All', 'Single Phase', 'Three Phase', 'Wireless', 'Protection', 'Industrial', 'Agricultural', 'IoT/Smart', 'Accessories'];

const categoryColors = {
  'Single Phase': { bg: '#E6F1FF', text: '#0047CC' },
  'Three Phase': { bg: '#E0F7FC', text: '#006B82' },
  'Wireless': { bg: '#E8F5E9', text: '#2E7D32' },
  'Protection': { bg: '#FFF3E0', text: '#E65100' },
  'Industrial': { bg: '#F3E5F5', text: '#6A1B9A' },
  'Agricultural': { bg: '#E8F5E9', text: '#1B5E20' },
  'IoT/Smart': { bg: '#E0F2F1', text: '#004D40' },
  'Accessories': { bg: '#FCE4EC', text: '#880E4F' }
};

const ProductCard = ({ product, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const colors = categoryColors[product.category] || { bg: '#E6F1FF', text: '#0047CC' };

  return (
    <motion.div
      ref={ref}
      className="product-card group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
    >
      {/* Image area */}
      <div className="h-44 flex items-center justify-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.bg}, white)` }}>
        {product.image && !product.image.includes('default') ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" fill={colors.bg} stroke={colors.text} strokeWidth="1.5" opacity="0.3"/>
              <path d="M32 10C32 10 18 22 18 32a14 14 0 0028 0C46 22 32 10 32 10Z" fill={colors.text} opacity="0.4"/>
              <path d="M32 20C32 20 24 27 24 32a8 8 0 0016 0C40 27 32 20 32 20Z" fill={colors.text} opacity="0.7"/>
            </svg>
            <span className="text-xs font-medium" style={{ color: colors.text, opacity: 0.7 }}>Water Controller</span>
          </div>
        )}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.text}22` }}
        >
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-dark-navy text-sm leading-snug mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4">
          {product.shortDescription || product.description?.substring(0, 80) + '...'}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(product.features || []).slice(0, 3).map((f, i) => (
            <span key={i} className="text-xs px-2.5 py-1 rounded-full" style={{ background: colors.bg, color: colors.text }}>
              {f}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #0077FF, #00B4D8)',
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,119,255,0.2)'
          }}
        >
          Get Quote
        </a>
      </div>
    </motion.div>
  );
};

export default function Products() {
  const [products, setProducts] = useState(defaultProducts);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await API.get('/products?limit=20');
        if (res.data.data?.length > 0) setProducts(res.data.data);
      } catch {
        // Use defaults
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section-py" style={{ background: '#F4FBFF' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Our Products</div>
          <h2 className="section-heading mb-4">
            Complete Range of <span style={{ color: '#0077FF' }}>Water Automation</span> Solutions
          </h2>
          <p className="section-subheading mx-auto text-center">
            20+ product models designed for every water management scenario — from a single home to large industrial complexes.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat ? 'linear-gradient(135deg, #0077FF, #00B4D8)' : 'white',
                color: activeCategory === cat ? 'white' : '#4a6190',
                border: activeCategory === cat ? 'none' : '1.5px solid rgba(0,119,255,0.2)',
                boxShadow: activeCategory === cat ? '0 4px 15px rgba(0,119,255,0.3)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="product-card animate-pulse">
                <div className="h-44 bg-gray-200 rounded-t-xl" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-3 bg-gray-100 rounded w-3/4" />
                  <div className="h-8 bg-gray-200 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product._id} product={product} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">Need a custom solution? We engineer products for specific requirements.</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-aqua inline-flex"
          >
            Request Custom Solution
          </a>
        </motion.div>
      </div>
    </section>
  );
}
