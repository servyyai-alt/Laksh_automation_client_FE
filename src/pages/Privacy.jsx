import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="Laksh Automations Privacy Policy - Learn how we collect, use, and protect your personal information." />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/" className="text-primary-500 hover:text-primary-600 text-sm font-medium mb-8 inline-block">&larr; Back to Home</Link>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark-navy mb-8">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: July 2025</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">1. Introduction</h2>
              <p>Laksh Automations ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website www.lakshautomations.com or interact with our services.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and any other information you voluntarily provide through our contact forms or enquiry forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and browsing behavior on our website.</li>
                <li><strong>Communication Data:</strong> Records of your correspondence with us, including emails, phone calls, and WhatsApp messages.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your enquiries and provide product information.</li>
                <li>To process orders and provide customer support.</li>
                <li>To improve our website, products, and services.</li>
                <li>To send periodic emails or messages regarding our products, offers, and updates (only with your consent).</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">4. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookie preferences through your browser settings. We use essential cookies for website functionality and analytics cookies to understand how visitors use our site.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">5. Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Service providers who assist us in operating our website and business (e.g., hosting, analytics, email services).</li>
                <li>Legal authorities when required by law or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">6. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">7. Data Retention</h2>
              <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. When no longer needed, your data will be securely deleted or anonymized.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of your data (subject to legal obligations).</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us using the information below.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">9. Third-Party Links</h2>
              <p>Our website may contain links to third-party sites (e.g., Google Maps, WhatsApp). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">11. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
              <p className="mt-2">
                <strong>Laksh Automations</strong><br />
                Coimbatore, Tamil Nadu, India<br />
                Phone: <a href="tel:+918807500321" className="text-primary-500">+91 88075 00321</a><br />
                Email: <a href="mailto:laksh10xautomations@gmail.com" className="text-primary-500">laksh10xautomations@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
