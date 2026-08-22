import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const homepageFaqs = [
  {
    question: 'What is an automatic water level controller?',
    answer:
      'An automatic water level controller monitors tank levels and switches the pump on or off automatically so water stays within the desired range.'
  },
  {
    question: 'How does an automatic water level controller work?',
    answer:
      'Sensors or probes detect the water level in the tank or sump. When the level drops, the controller starts the pump, and when the tank fills up, it stops the pump.'
  },
  {
    question: 'Can the controller automatically switch the water pump ON and OFF?',
    answer:
      'Yes. That is the main job of the controller. It automates pump switching so you do not need to monitor the tank manually.'
  },
  {
    question: 'Does a water level controller prevent tank overflow?',
    answer:
      'Yes. By stopping the pump when the tank reaches the full level, it helps prevent overflow and unnecessary water wastage.'
  },
  {
    question: 'Can it work with both sump and overhead tanks?',
    answer:
      'Yes. Our water automation systems can be used for sump monitoring, overhead tank control, or both depending on the model and installation setup.'
  },
  {
    question: 'Do you provide wireless water level controllers?',
    answer:
      'Yes. Laksh Automations offers wireless water level controllers for situations where running wires between tanks and pumps is difficult or inconvenient.'
  },
  {
    question: 'Can these controllers be used in apartments and industries?',
    answer:
      'Yes. Our controllers are suitable for homes, apartments, commercial buildings, farms and industrial water management applications.'
  },
  {
    question: 'Do your controllers provide dry run protection?',
    answer:
      'Some of our models include dry run protection and pump protection features. The exact protection depends on the product model you choose.'
  },
  {
    question: 'Where is Laksh Automations located?',
    answer:
      'Laksh Automations is based in Coimbatore, Tamil Nadu, India, and serves customers looking for water automation solutions in Coimbatore and beyond.'
  },
  {
    question: 'How can I get the price or quotation for a water level controller?',
    answer:
      'You can contact us through the enquiry form, call us directly or send a WhatsApp message. We will recommend the right model and share pricing details.'
  }
];

const howItWorksPoints = [
  {
    title: 'Sense the water level',
    text:
      'Sensors in the sump or overhead tank detect when the water level drops below or rises above the desired point.'
  },
  {
    title: 'Trigger automatic control',
    text:
      'The controller starts or stops the pump automatically, reducing manual supervision and unnecessary motor operation.'
  },
  {
    title: 'Protect the pump',
    text:
      'Where supported, protection features help reduce dry run damage and other common pump-related issues.'
  }
];

const benefitPoints = [
  'Automatic motor ON/OFF control',
  'Overhead tank and sump monitoring',
  'Tank overflow prevention',
  'Dry run protection where supported',
  'Reduced manual intervention',
  'Better water and electricity efficiency'
];

export default function HomeSeoContent() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="how-it-works" className="section-py bg-white" ref={ref} aria-labelledby="how-it-works-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="badge-water mb-4 w-fit">Smart Water Automation</div>
          <h2 id="how-it-works-heading" className="section-heading mb-4">
            How Automatic Water Level Control Works
          </h2>
          <p className="section-subheading max-w-4xl">
            Laksh Automations helps homes, apartments, industries, schools, hospitals, hotels and farms manage water more efficiently with automatic water level controllers, pump controllers and water automation systems built for Coimbatore, Tamil Nadu and beyond.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 mb-10">
          {howItWorksPoints.map((point, index) => (
            <article key={point.title} className="rounded-3xl border border-primary-100 bg-[#F4FBFF] p-6 shadow-water">
              <div className="badge-water mb-4" style={{ transform: 'scale(0.95)', transformOrigin: 'left center' }}>
                Step {index + 1}
              </div>
              <h3 className="font-display text-xl font-bold text-dark-navy mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-7">{point.text}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl bg-dark-navy p-8 sm:p-10 text-white shadow-water mb-10">
          <div className="badge-water mb-4 w-fit" style={{ background: 'rgba(72, 202, 228, 0.15)', color: '#48CAE4', borderColor: 'rgba(72, 202, 228, 0.3)' }}>
            Benefits
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Benefits of Automatic Water Level Controllers
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-white/85">
            {benefitPoints.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                <span className="text-secondary-400 mt-1">✓</span>
                <span className="text-sm leading-6">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <section id="faq" aria-labelledby="faq-heading">
          <div className="badge-water mb-4 w-fit">FAQ</div>
          <h2 id="faq-heading" className="section-heading mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {homepageFaqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-dark-navy flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-primary-500 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-3xl bg-[#F4FBFF] p-8 sm:p-10 border border-primary-100">
          <div className="badge-water mb-4 w-fit">Call To Action</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-dark-navy mb-4">
            Ready to automate your water management?
          </h2>
          <p className="text-gray-600 max-w-3xl mb-6 leading-7">
            Talk to Laksh Automations about automatic water level controllers, wireless controllers, borewell protection, GSM pump controllers or custom water automation solutions for your home, business or farm.
          </p>
          <a href="#contact" className="btn-aqua">
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
