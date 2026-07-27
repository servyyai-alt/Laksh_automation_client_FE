export const serviceCatalog = [
  {
    slug: 'single-phase-controllers',
    title: 'Single Phase Controllers',
    headline: 'Reliable water level control for homes and small buildings',
    description:
      'Our single phase water level controllers are designed for residential buildings, small offices, and individual homes. They automatically manage pump operation based on water levels.',
    keywords: ['single phase controller', 'home water level controller', 'automatic pump controller'],
    benefits: ['Automatic pump control', 'Overflow prevention', 'Motor protection'],
    deliverables: ['Controller unit', 'Sensor probes', 'Installation guide', 'Warranty card'],
    useCases: ['Independent homes', 'Small offices', 'Shops', 'Villas'],
    faqs: [
      {
        question: 'What is a single phase water level controller?',
        answer:
          'A single phase water level controller is a device that automatically controls the water pump connected to a single phase power supply based on water levels in the tank.'
      },
      {
        question: 'Can it work with my existing pump?',
        answer:
          'Yes. Our controllers are compatible with most single phase submersible and monoblock pumps available in India.'
      }
    ]
  },
  {
    slug: 'three-phase-controllers',
    title: 'Three Phase Controllers',
    headline: 'Heavy-duty water automation for commercial and industrial use',
    description:
      'Our three phase water level controllers with phase failure protection are built for apartments, commercial complexes, and industrial applications requiring heavy-duty pump control.',
    keywords: ['three phase controller', 'commercial water controller', 'industrial pump controller'],
    benefits: ['Phase failure protection', 'Overload protection', 'Heavy-duty design'],
    deliverables: ['Controller panel', 'Sensor kit', 'Wiring diagram', 'Installation support'],
    useCases: ['Apartments', 'Factories', 'Commercial buildings', 'Hospitals'],
    faqs: [
      {
        question: 'Does the three phase controller protect against phase failure?',
        answer:
          'Yes. Our three phase controllers include phase failure protection, overload protection, and dry run protection to safeguard your motor.'
      }
    ]
  },
  {
    slug: 'wireless-controllers',
    title: 'Wireless Controllers',
    headline: 'No wires between floors - install in 15 minutes',
    description:
      'Our wireless water level controllers eliminate the need for running wires between the overhead tank and the motor. Perfect for multi-story buildings and retrofits.',
    keywords: ['wireless water level controller', 'no wire water controller', 'wireless pump controller'],
    benefits: ['No wiring needed', 'Easy installation', 'Strong signal range'],
    deliverables: ['Transmitter unit', 'Receiver unit', 'Sensor probes', 'Installation guide'],
    useCases: ['Multi-story buildings', 'Apartments', 'Retrofits', 'Heritage buildings'],
    faqs: [
      {
        question: 'How far does the wireless signal work?',
        answer:
          'Our wireless controllers have a range of up to 100 meters through walls and multiple floors, making them suitable for most residential and commercial buildings.'
      }
    ]
  },
  {
    slug: 'borewell-protection',
    title: 'Borewell Protection',
    headline: 'Protect your expensive borewell pump from dry running',
    description:
      'Our borewell dry run protection systems detect low water levels and automatically shut off the pump to prevent motor burnout and expensive repairs.',
    keywords: ['borewell protection', 'dry run protection', 'motor protection system'],
    benefits: ['Prevents motor burnout', 'Saves repair costs', 'Automatic shutdown'],
    deliverables: ['Protection unit', 'Flow sensor', 'Installation kit', 'Warranty'],
    useCases: ['Borewell pumps', 'Agricultural pumps', 'Farm water supply', 'Industrial wells'],
    faqs: [
      {
        question: 'What happens when the borewell runs dry?',
        answer:
          'The protection system detects the drop in water flow and automatically switches off the motor within seconds, preventing dry run damage.'
      }
    ]
  },
  {
    slug: 'gsm-pump-controller',
    title: 'GSM Pump Controller',
    headline: 'Control your water pump from anywhere using your phone',
    description:
      'Our GSM mobile pump controller lets you start, stop, and monitor your water pump remotely using SMS commands. Works even in areas without internet.',
    keywords: ['GSM pump controller', 'SMS pump control', 'remote pump controller'],
    benefits: ['Remote control via SMS', 'Works without internet', 'Real-time status alerts'],
    deliverables: ['GSM controller unit', 'SIM card slot', 'Mobile app access', 'Installation guide'],
    useCases: ['Farm pumps', 'Remote locations', 'Multiple pump sites', 'Vacation homes'],
    faqs: [
      {
        question: 'Do I need internet for the GSM controller?',
        answer:
          'No. The GSM controller works with SMS commands, so it works in any area with mobile network coverage, even without internet access.'
      }
    ]
  },
  {
    slug: 'iot-smart-controllers',
    title: 'IoT Smart Controllers',
    headline: 'Smart water management with cloud monitoring and analytics',
    description:
      'Our IoT smart water controllers provide real-time monitoring, cloud-based dashboards, mobile app control, and automated scheduling for advanced water management.',
    keywords: ['IoT water controller', 'smart water management', 'cloud water monitoring'],
    benefits: ['Cloud dashboard', 'Mobile app control', 'Usage analytics'],
    deliverables: ['IoT controller', 'Cloud account', 'Mobile app', 'Setup support'],
    useCases: ['Smart homes', 'Corporate offices', 'Smart cities', 'Water utilities'],
    faqs: [
      {
        question: 'What features does the IoT dashboard provide?',
        answer:
          'The IoT dashboard shows real-time water levels, pump status, usage history, alerts, and allows you to set automation schedules and notifications.'
      }
    ]
  },
  {
    slug: 'apartment-automation',
    title: 'Apartment Water Automation',
    headline: 'Centralized water management for multi-unit residential buildings',
    description:
      'Our apartment water automation systems provide centralized monitoring and control of water supply for individual units, common areas, and overhead tanks in apartment complexes.',
    keywords: ['apartment water automation', 'society water management', 'multi-unit water controller'],
    benefits: ['Centralized monitoring', 'Individual unit control', 'Overflow prevention'],
    deliverables: ['Central panel', 'Individual controllers', 'Monitoring system', 'Installation'],
    useCases: ['Apartment complexes', 'Housing societies', 'Gated communities', 'Townships'],
    faqs: [
      {
        question: 'Can each apartment have separate water control?',
        answer:
          'Yes. Our system allows individual water level monitoring and control for each apartment unit while providing centralized monitoring at the security or admin office.'
      }
    ]
  },
  {
    slug: 'industrial-automation',
    title: 'Industrial Water Automation',
    headline: 'Robust water management systems for factories and plants',
    description:
      'Our industrial water automation solutions handle high-volume water management for manufacturing plants, chemical factories, textile mills, and other industrial facilities.',
    keywords: ['industrial water automation', 'factory water management', 'plant water controller'],
    benefits: ['High-volume handling', 'Industrial grade components', 'Custom solutions'],
    deliverables: ['Custom control panel', 'Industrial sensors', 'SCADA integration', 'Commissioning'],
    useCases: ['Manufacturing plants', 'Textile mills', 'Chemical factories', 'Food processing'],
    faqs: [
      {
        question: 'Can you customize the solution for our factory?',
        answer:
          'Yes. We design custom industrial water automation solutions based on your specific requirements, including SCADA integration and custom control logic.'
      }
    ]
  }
];

export const homeServices = serviceCatalog.map(({ slug, title, headline, description }) => ({
  slug,
  title,
  headline,
  description
}));

export const homeUseCases = [
  { title: 'Residential', description: 'Smart water level control for homes, villas, and independent buildings.' },
  { title: 'Commercial', description: 'Reliable water management for offices, hotels, and commercial complexes.' },
  { title: 'Industrial', description: 'Heavy-duty water automation for factories, mills, and processing plants.' },
  { title: 'Agricultural', description: 'Borewell protection and pump automation for farms and agriculture.' }
];

export const whyChoosePoints = [
  {
    title: 'High Quality Manufacturing',
    description: 'Every product is manufactured with premium components and rigorous quality checks.'
  },
  {
    title: 'Made in India',
    description: 'Proudly designed and manufactured in Coimbatore, Tamil Nadu for Indian conditions.'
  },
  {
    title: 'Advanced Technology',
    description: 'We use the latest microcontroller and wireless technology for smart water management.'
  },
  {
    title: 'Affordable Pricing',
    description: 'Premium quality water automation solutions at prices that fit every budget.'
  }
];

export const aiAutomationFaqs = [
  {
    question: 'What types of water level controllers do you manufacture?',
    answer:
      'We manufacture single phase, three phase, wireless, GSM-enabled, and IoT smart water level controllers for residential, commercial, industrial, and agricultural applications.'
  },
  {
    question: 'Do you provide borewell dry run protection?',
    answer:
      'Yes. Our borewell protection systems detect low water levels and automatically shut off the pump to prevent motor damage from dry running.'
  },
  {
    question: 'Can I control my pump remotely?',
    answer:
      'Yes. Our GSM and IoT smart controllers allow you to monitor and control your water pump from anywhere using your mobile phone.'
  },
  {
    question: 'Do you offer apartment water automation?',
    answer:
      'Yes. We provide centralized water automation systems for apartment complexes with individual unit monitoring and centralized management.'
  }
];
