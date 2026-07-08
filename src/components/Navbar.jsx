import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-navy/95 backdrop-blur-md shadow-lg border-b border-primary-500/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-3 group">
            <div className="relative">
             
              <img src={logo} alt="Laksh Automations Logo" className="w-15 h-12 rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300" />
              
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg leading-tight">LAKSH</div>
              <div className="text-xs text-secondary-400 font-medium leading-tight tracking-widest">AUTOMATIONS</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map(item => (
              <a key={item.label} href={item.href} onClick={(e) => handleNav(e, item.href)} className="nav-link text-sm">
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918807500321"
              className="flex items-center gap-2 text-secondary-400 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 88075 00321
            </a>
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="btn-aqua text-sm py-2 px-5">
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-dark-navy/98 backdrop-blur-md border-t border-primary-500/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-primary-500/10 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex gap-3">
                <a href="tel:+918807500321" className="flex-1 btn-outline-aqua text-center justify-center text-sm py-2">
                  Call Now
                </a>
                <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="flex-1 btn-aqua text-center justify-center text-sm py-2">
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
