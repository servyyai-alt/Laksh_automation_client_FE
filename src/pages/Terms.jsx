import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function Terms() {
  return (
    <>
      <Seo title="Terms and Conditions" description="Terms and Conditions for Laksh Automations - Read our terms of service, warranty policy, and usage guidelines." />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/" className="text-primary-500 hover:text-primary-600 text-sm font-medium mb-8 inline-block">&larr; Back to Home</Link>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark-navy mb-8">Terms and Conditions</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: July 2025</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">1. Introduction</h2>
              <p>Welcome to Laksh Automations. By accessing or using our website, products, and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>"Company"</strong>, <strong>"We"</strong>, <strong>"Us"</strong>, <strong>"Our"</strong> refers to Laksh Automations, Coimbatore, Tamil Nadu.</li>
                <li><strong>"Customer"</strong>, <strong>"You"</strong>, <strong>"Your"</strong> refers to the user or purchaser of our products or services.</li>
                <li><strong>"Products"</strong> refers to all automatic water level controllers, pump controllers, and related equipment manufactured or supplied by Laksh Automations.</li>
                <li><strong>"Website"</strong> refers to www.lakshautomations.com.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">3. Products and Services</h2>
              <p>Laksh Automations manufactures and sells automatic water level controllers, pump protection systems, and related automation equipment. We reserve the right to modify, update, or discontinue any product without prior notice. Product images on our website are for illustration purposes; actual products may vary slightly.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">4. Pricing and Payments</h2>
              <p>All prices are quoted in Indian Rupees (INR) unless otherwise specified. Prices are subject to change without prior notice. Payment terms are as agreed upon during the order placement. We reserve the right to refuse or cancel any order.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">5. Shipping and Delivery</h2>
              <p>Delivery timelines are estimates and not guaranteed. Laksh Automations is not liable for delays caused by third-party logistics, natural disasters, or other force majeure events. Risk of loss passes to the customer upon delivery to the shipping carrier.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">6. Warranty Policy</h2>
              <p>Laksh Automations provides warranty on its products as specified at the time of purchase. The warranty covers manufacturing defects only and does not cover damage caused by misuse, unauthorized repairs, electrical surges, or natural wear and tear. Warranty claims must be accompanied by the original invoice.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">7. Returns and Refunds</h2>
              <p>Returns are accepted within 7 days of delivery only for defective products. The product must be in its original condition and packaging. Refunds will be processed after inspection. Customized products are not eligible for return or refund.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">8. Intellectual Property</h2>
              <p>All content on this website, including text, images, logos, product designs, and technical specifications, is the intellectual property of Laksh Automations. Unauthorized reproduction, distribution, or use is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">9. Limitation of Liability</h2>
              <p>Laksh Automations shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our products or website. Our total liability shall not exceed the purchase price of the product in question.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">10. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.</p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-xl text-dark-navy mb-3">11. Contact Information</h2>
              <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
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
