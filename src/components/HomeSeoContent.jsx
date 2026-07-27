import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: 'What is an automatic water level controller?',
    answer:
      'An automatic water level controller is a device that monitors the water level in tanks and automatically switches the pump on or off to maintain the desired level. It prevents overflow and dry running of the motor.'
  },
  {
    question: 'How does a wireless water level controller work?',
    answer:
      'A wireless water level controller uses radio frequency or IoT technology to communicate between the sensor unit in the tank and the motor controller unit, eliminating the need for wiring between floors.'
  },
  {
    question: 'Can I control my water pump from my phone?',
    answer:
      'Yes. Our GSM and IoT smart controllers allow you to monitor and control your water pump remotely using your mobile phone through SMS or a mobile app.'
  },
  {
    question: 'Do you provide borewell dry run protection?',
    answer:
      'Yes. Our borewell protection systems detect when the water level drops below a safe threshold and automatically shut off the pump to prevent motor damage from dry running.'
  },
  {
    question: 'Which types of pumps are compatible with your controllers?',
    answer:
      'We offer controllers for single phase and three phase pumps, submersible motors, monoblock pumps, and agricultural borewell pumps. Our range covers residential, commercial, and industrial applications.'
  },
  {
    question: 'Do you ship across India?',
    answer:
      'Yes. We ship our products across India from our manufacturing facility in Coimbatore, Tamil Nadu. We also serve international markets on request.'
  }
];

const sections = [
  {
    title: 'Automatic Water Level Controllers for Every Application',
    body: [
      'Laksh Automations is a leading manufacturer of automatic water level controllers based in Coimbatore, Tamil Nadu. Our products are designed to provide smart control and reliable water management for homes, apartments, industries, schools, hospitals, hotels, and agricultural farms.',
      'Our automatic water level controllers monitor the water level in your overhead and underground tanks using sensor probes. When the water level drops below the set point, the controller automatically starts the pump. When the tank is full, it switches off the pump to prevent overflow. This eliminates the need for manual monitoring and prevents water wastage.',
      'We offer a wide range of models including single phase controllers for homes, three phase controllers for heavy-duty applications, wireless controllers for multi-floor buildings, and GSM-enabled controllers for remote locations. Each product is manufactured with high-quality components and tested for durability and performance.'
    ]
  },
  {
    title: 'Wireless Water Level Controllers for Modern Buildings',
    body: [
      'Our wireless water level controllers are ideal for apartments, multi-story buildings, and commercial complexes where running wires between floors is impractical. The wireless technology eliminates the need for drilling holes and running cables through walls.',
      'The wireless system consists of a sensor unit installed in the water tank and a motor controller unit near the pump. They communicate using a strong radio signal that works across multiple floors and walls. Installation takes just 15-20 minutes and requires no special tools.',
      'Wireless water level controllers from Laksh Automations provide the same reliability as wired systems with the added convenience of easy installation. They are perfect for both new construction and retrofitting existing buildings where water management needs improvement.'
    ]
  },
  {
    title: 'Borewell Protection and Motor Safety Systems',
    body: [
      'Protecting your borewell pump from dry running is essential to avoid costly motor repairs. Our borewell dry run protection systems continuously monitor the water flow and pressure, automatically shutting off the motor if water supply drops below safe levels.',
      'In addition to dry run protection, our controllers offer overload protection, phase failure protection for three-phase motors, and surge protection. These safety features extend the life of your pump motor and reduce maintenance costs significantly.',
      'Agricultural farms and industrial facilities that rely on borewell pumps benefit greatly from our protection systems. The automatic shutdown prevents motor burnout and the need for expensive rewinding or replacement, saving thousands of rupees in repair costs.'
    ]
  },
  {
    title: 'GSM and IoT Smart Water Management Solutions',
    body: [
      'For applications where remote monitoring is essential, our GSM mobile pump controllers allow you to start, stop, and monitor your water pump from anywhere using your mobile phone. Simply send an SMS command or use our mobile app to control the pump.',
      'Our IoT smart water controllers provide real-time water level data, pump status, and usage analytics through a cloud-based dashboard. You can set alerts, schedules, and automation rules to optimize your water management system.',
      'These smart solutions are particularly valuable for farm owners, factory managers, and property owners who need to manage water systems across multiple locations. The combination of automation and remote access ensures your water supply is always reliable and efficient.'
    ]
  },
  {
    title: 'Why Choose Laksh Automations for Water Management',
    body: [
      'With over 15 years of experience in water automation, Laksh Automations has earned the trust of more than 10,000 customers across Tamil Nadu and India. Our products are proudly Made in India, manufactured at our facility in Coimbatore with strict quality control standards.',
      'We offer the complete range of water management solutions from basic single phase controllers to advanced IoT-enabled systems. Every product comes with a warranty and our dedicated technical support team is always available to help with installation and troubleshooting.',
      'Customer satisfaction is our top priority. We continuously improve our products based on customer feedback and invest in new technology to stay ahead in water automation. Our affordable pricing ensures that smart water management is accessible to everyone, from individual homes to large industrial facilities.'
    ]
  }
];

export default function HomeSeoContent() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="seo-content" className="section-py bg-white" ref={ref} aria-labelledby="seo-content-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="badge-water mb-4 w-fit">SEO Overview</div>
          <h2 id="seo-content-heading" className="section-heading mb-4">
            Automatic Water Level Controllers, Pump Controllers & Water Automation Solutions
          </h2>
          <p className="section-subheading max-w-4xl">
            Laksh Automations is a leading manufacturer of automatic water level controllers, wireless water level controllers, borewell protection systems, and smart water management solutions in Coimbatore, Tamil Nadu, India.
          </p>
        </motion.div>

        <div className="space-y-10 text-gray-700 leading-8">
          {sections.map((section, index) => (
            <article key={section.title} className="rounded-3xl border border-primary-100 bg-[#F4FBFF] p-6 sm:p-8 shadow-water">
              <h3 className="font-display text-2xl font-bold text-dark-navy mb-4">
                {index + 1}. {section.title}
              </h3>
              <div className="space-y-4 text-[15px] sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-dark-navy p-8 sm:p-10 text-white shadow-water">
          <div className="badge-water mb-4 w-fit" style={{ background: 'rgba(72, 202, 228, 0.15)', color: '#48CAE4', borderColor: 'rgba(72, 202, 228, 0.3)' }}>
            Call To Action
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Ready to automate your water management?
          </h3>
          <p className="text-white/80 max-w-3xl mb-6">
            Talk to Laksh Automations about automatic water level controllers, wireless controllers, borewell protection, GSM pump controllers, or custom water automation solutions for your home, business, or farm.
          </p>
          <a href="#contact" className="btn-aqua">
            Get Free Consultation
          </a>
        </div>

        <div className="mt-10" aria-labelledby="seo-faq-heading">
          <div className="badge-water mb-4 w-fit">FAQ</div>
          <h3 id="seo-faq-heading" className="font-display text-2xl font-bold text-dark-navy mb-6">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-dark-navy flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-primary-500 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
