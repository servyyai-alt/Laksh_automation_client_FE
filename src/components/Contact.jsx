import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import toast from 'react-hot-toast';
import API from '../utils/api';

const productOptions = [
  'AUTO GUN + JET Automatic Water Pump Controller',
  'L10SS Single Phase Automatic Water Level Controller',
  'L30SS Three Phase Automatic Water Level Controller',
  'Wireless Water Level Controller',
  'Borewell Dry Run Protection System',
  'Digital Water Level Indicator',
  'Single Phase Motor Protection Panel',
  'Three Phase Motor Protection Panel',
  'Underground Sump Automation Controller',
  'Apartment Water Automation System',
  'Industrial Water Automation System',
  'Agricultural Pump Automation Controller',
  'Smart IoT Water Level Controller',
  'GSM Mobile Pump Controller',
  'Customized Automation Solutions',
  'General Enquiry / Not Sure'
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      await API.post('/enquiries', data);
      setSubmitted(true);
      reset();
      toast.success('Enquiry submitted! We will call you shortly.');
    } catch (err) {
      const msg = err.response?.data?.errors?.[0]?.msg || err.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-py bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-water mb-4 mx-auto w-fit">Contact Us</div>
          <h2 className="section-heading mb-4">
            Get in Touch with <span style={{ color: '#0077FF' }}>Our Experts</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            Fill the form and our team will call you back with the best solution for your water management needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl p-7 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628, #0D2347)' }}>
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #48CAE4, transparent)' }} />
              <h3 className="font-display font-bold text-xl mb-6">Contact Information</h3>

              {[
                { icon: '📞', label: 'Phone', value: '+91 88075 00321', href: 'tel:+918807500321' },
                { icon: '🌐', label: 'Website', value: 'www.lakshautomations.com', href: 'https://www.lakshautomations.com' },
                { icon: '📍', label: 'Location', value: 'Coimbatore, Tamil Nadu, India', href: null }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(0,119,255,0.2)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium text-sm hover:text-secondary-400 transition-colors duration-200">{item.value}</a>
                    ) : (
                      <div className="text-white font-medium text-sm">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-white/10">
                <div className="text-white/50 text-xs mb-3">Leave a Review</div>
                <a
                  href="https://g.page/r/CbxD8A_VgFrbEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors duration-200"
                >
                  ⭐ Google Review Page →
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918807500321?text=Hello%20Laksh%20Automations%2C%20I%20need%20information%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 group"
              style={{ background: 'linear-gradient(135deg, #F0FDF4, white)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-dark-navy text-sm">Chat on WhatsApp</div>
                <div className="text-gray-500 text-xs">Quick replies guaranteed</div>
              </div>
              <div className="ml-auto text-green-500 group-hover:translate-x-1 transition-transform duration-200">→</div>
            </a>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-display font-bold text-2xl text-dark-navy mb-3">Enquiry Submitted!</h3>
                <p className="text-gray-600 mb-6">Thank you! Our team will call you back within 24 hours with the best solution.</p>
                <button onClick={() => setSubmitted(false)} className="btn-aqua">Submit Another Enquiry</button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-primary-100 p-8 shadow-water">
                <h3 className="font-display font-bold text-dark-navy text-xl mb-6">Quick Enquiry Form</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="form-input"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                      <input
                        {...register('mobile', {
                          required: 'Mobile number is required',
                          pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit mobile number' }
                        })}
                        className="form-input"
                        placeholder="10-digit mobile number"
                        maxLength={10}
                      />
                      {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">City *</label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      className="form-input"
                      placeholder="Your city"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Required *</label>
                    <select
                      {...register('productRequired', { required: 'Please select a product' })}
                      className="form-input"
                    >
                      <option value="">Select a product...</option>
                      {productOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.productRequired && <p className="text-red-500 text-xs mt-1">{errors.productRequired.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Tell us more about your requirements, tank capacity, application type..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-aqua w-full justify-center text-base py-4"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    We'll contact you within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
