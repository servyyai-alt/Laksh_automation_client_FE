import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import logo from '../assets/logo.png';

const products = [
  "L10SS Single Phase Controller",
  "L30SS Three Phase Controller",
  "Wireless Water Level Controller",
  "Borewell Dry Run Protection",
  "Digital Water Level Indicator",
  "GSM Mobile Pump Controller",
  "IoT Smart Water Controller",
  "Agricultural Pump Controller",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Applications", href: "#applications" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const handleNav = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Animated water wave */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full animate-wave"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#0077FF"
          />
        </svg>
      </div>

      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${Math.random() * 20 + 8}px`,
              height: `${Math.random() * 20 + 8}px`,
              left: `${Math.random() * 100}%`,
              bottom: 0,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 8 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5 ">
              <div className="relative bg-white p-1 rounded-xl shadow-glow">
                <img src={logo} alt="Laksh Automations Logo" loading="lazy" className="w-15 h-12 rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">
                  LAKSH
                </div>
                <div className="text-secondary-400 text-xs font-medium leading-tight tracking-widest">
                  AUTOMATIONS
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              India's trusted automatic water level controller manufacturer.
              Smart water management solutions engineered in Coimbatore, Tamil
              Nadu.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+918807500321"
                className="flex items-center gap-2 text-secondary-400 text-sm hover:text-white transition-colors duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 88075 00321
              </a>

              <a
                href="https://www.facebook.com/saravanan.lakshmanan.148946?rdid=VzzHUfnjuch9W8Hy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18x7mAD3qT%2F#"
                className="flex items-center gap-2 text-secondary-400 text-sm hover:text-white transition-colors duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                  />
                </svg>
                facebook_lakshautomations
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="mt-0.5 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Coimbatore, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-white/60 text-sm hover:text-secondary-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary-500 text-xs">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/admin/login"
                  className="text-white/60 text-sm hover:text-secondary-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-primary-500 text-xs">›</span>
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    onClick={(e) => handleNav(e, "#products")}
                    className="text-white/60 text-sm hover:text-secondary-400 transition-colors duration-200 flex items-start gap-2"
                  >
                    <span className="text-secondary-500 text-xs mt-0.5 flex-shrink-0">
                      ›
                    </span>
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Review */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm mb-5 uppercase tracking-wider">
              Get In Touch
            </h3>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              Need help choosing the right product? Our experts are just a call
              away.
            </p>
            <a
              href="tel:+918807500321"
              className="btn-aqua w-full justify-center mb-4 text-sm py-3"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918807500321?text=Hello%20Laksh%20Automations%2C%20I%20need%20product%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: "rgba(37, 211, 102, 0.15)",
                color: "#25D366",
                border: "1.5px solid rgba(37, 211, 102, 0.3)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>

            <div className="mt-5 pt-5 border-t border-white/10">
              <a
                href="https://g.page/r/CbxD8A_VgFrbEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-400 text-sm hover:text-yellow-300 transition-colors duration-200"
              >
                ⭐ Leave us a Google Review
              </a>
            </div>
          </div>
        </div>

        <div className="sr-only" aria-hidden="true">
          Automatic Water Level Controller, Water Pump Controller Manufacturer Coimbatore, Wireless Water Level Controller, Tank Overflow Prevention System, Borewell Protection System, Motor Protection Controller, Industrial Water Automation, Agricultural Pump Controller, Smart Water Management System, Digital Water Level Indicator, Three Phase Pump Controller, Single Phase Pump Controller
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Laksh Automations. All rights reserved.
            Made with ❤️ in Coimbatore, Tamil Nadu, India.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-white/40 hover:text-white text-xs transition-colors duration-200">Terms & Conditions</Link>
            <span className="text-white/20 text-xs">|</span>
            <Link to="/privacy" className="text-white/40 hover:text-white text-xs transition-colors duration-200">Privacy Policy</Link>
            <span className="text-white/20 text-xs">|</span>
            <span className="text-white/30 text-xs">Powered by LEAST ACTION COMPANY 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
