export const serviceCatalog = [
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    headline: 'Automate repetitive work with intelligent AI systems',
    description:
      'We design AI-powered workflows that reduce manual tasks, move data between tools, and keep your team focused on higher-value work.',
    keywords: ['AI automation', 'business automation', 'workflow automation'],
    benefits: ['Reduce manual work', 'Speed up operations', 'Improve consistency'],
    deliverables: ['Workflow mapping', 'Automation design', 'Integration setup', 'Testing and launch'],
    useCases: ['Lead routing', 'Email triage', 'Data sync', 'Internal approvals'],
    faqs: [
      {
        question: 'What is AI automation?',
        answer:
          'AI automation uses intelligent workflows and integrations to handle repetitive business tasks with less manual effort and faster execution.'
      },
      {
        question: 'Can you integrate with the tools we already use?',
        answer:
          'Yes. We design automations around your existing tools such as CRMs, inboxes, forms, WhatsApp, and internal systems.'
      }
    ]
  },
  {
    slug: 'ai-agents',
    title: 'AI Agents',
    headline: 'Deploy AI agents that can assist, qualify, and respond automatically',
    description:
      'Build specialized AI agents that answer questions, qualify leads, route requests, and support your team 24/7.',
    keywords: ['AI agents', 'agent automation', 'customer support automation'],
    benefits: ['24/7 support', 'Faster lead qualification', 'Better customer response'],
    deliverables: ['Agent design', 'Prompt workflows', 'Knowledge base tuning', 'Escalation logic'],
    useCases: ['Sales qualification', 'Support triage', 'FAQ handling', 'Task orchestration'],
    faqs: [
      {
        question: 'How are AI agents different from chatbots?',
        answer:
          'AI agents can take actions, use business rules, and work through multi-step tasks, while chatbots usually focus on conversation only.'
      },
      {
        question: 'Can AI agents hand off to a human?',
        answer:
          'Yes. We include escalation paths so a human can take over whenever a conversation needs a person.'
      }
    ]
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    headline: 'Connect your apps and automate the steps between them',
    description:
      'We streamline approvals, notifications, data movement, and operational handoffs with reliable workflow automation.',
    keywords: ['workflow automation', 'process automation', 'automation company India'],
    benefits: ['Fewer errors', 'Faster handoffs', 'Cleaner operations'],
    deliverables: ['Process audit', 'Automation blueprint', 'Integration build', 'Documentation'],
    useCases: ['Approvals', 'Notifications', 'CRM updates', 'File handling'],
    faqs: [
      {
        question: 'What workflows can be automated?',
        answer:
          'Almost any repetitive workflow can be automated, including lead routing, reminders, updates, approvals, and syncs between systems.'
      }
    ]
  },
  {
    slug: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    headline: 'Use WhatsApp to respond faster and capture more leads',
    description:
      'We build WhatsApp automation for instant replies, lead capture, follow-ups, and conversational support.',
    keywords: ['WhatsApp automation', 'WhatsApp chatbot', 'lead automation'],
    benefits: ['Instant replies', 'Better lead capture', 'Reduced response time'],
    deliverables: ['Message flows', 'Lead routing', 'Template setup', 'Human handoff'],
    useCases: ['Inquiry handling', 'Order updates', 'Appointment reminders', 'Customer support'],
    faqs: [
      {
        question: 'Can WhatsApp automation work with my CRM?',
        answer:
          'Yes. We can connect WhatsApp conversations to your CRM so leads and conversations stay in sync.'
      }
    ]
  },
  {
    slug: 'crm-automation',
    title: 'CRM Automation',
    headline: 'Keep your CRM updated without manual data entry',
    description:
      'We automate lead capture, lead scoring, pipeline updates, notifications, and follow-up tasks inside your CRM.',
    keywords: ['CRM automation', 'CRM integration', 'sales automation'],
    benefits: ['Cleaner CRM data', 'Better follow-up', 'Improved visibility'],
    deliverables: ['CRM mapping', 'Pipeline automation', 'Lead scoring', 'Reporting setup'],
    useCases: ['Sales handoff', 'Follow-up tasks', 'Deal stage updates', 'Customer lifecycle alerts'],
    faqs: [
      {
        question: 'Which CRMs do you support?',
        answer:
          'We can integrate with popular CRMs and adapt the automation to your sales process and tooling.'
      }
    ]
  },
  {
    slug: 'business-process-automation',
    title: 'Business Process Automation',
    headline: 'Automate operations across teams, tools, and departments',
    description:
      'From internal requests to operations handoffs, we automate business processes that slow teams down.',
    keywords: ['business process automation', 'automation consulting', 'operations automation'],
    benefits: ['Less admin work', 'More visibility', 'Stronger team productivity'],
    deliverables: ['Process discovery', 'Automation plan', 'Cross-team workflows', 'QA and monitoring'],
    useCases: ['HR requests', 'Finance approvals', 'Operations tracking', 'Admin automation'],
    faqs: [
      {
        question: 'Do you help identify what to automate?',
        answer:
          'Yes. We start with a process review to find the highest-impact tasks that are worth automating first.'
      }
    ]
  },
  {
    slug: 'ai-chatbots',
    title: 'AI Chatbots',
    headline: 'Create helpful chatbots that answer, guide, and convert',
    description:
      'We build AI chatbots for websites and messaging channels that can answer questions and move users to the next step.',
    keywords: ['AI chatbots', 'website chatbot', 'conversational AI'],
    benefits: ['24/7 answers', 'Better conversions', 'Less support load'],
    deliverables: ['Conversation design', 'Knowledge base setup', 'Website embed', 'Analytics'],
    useCases: ['Lead capture', 'Support FAQ', 'Product guidance', 'Appointment booking'],
    faqs: [
      {
        question: 'Can the chatbot be customized to our brand voice?',
        answer:
          'Yes. We tailor the chatbot tone, responses, and escalation rules to match your brand and business goals.'
      }
    ]
  },
  {
    slug: 'custom-ai-solutions',
    title: 'Custom AI Solutions',
    headline: 'Build a custom AI system around your exact workflow',
    description:
      'If you need something beyond standard templates, we design custom AI solutions for your business.',
    keywords: ['custom AI solutions', 'AI consulting', 'custom automation'],
    benefits: ['Built for your process', 'Flexible architecture', 'Long-term scalability'],
    deliverables: ['Discovery workshop', 'Solution architecture', 'Prototype build', 'Launch support'],
    useCases: ['Specialized workflows', 'Internal tools', 'Niche automations', 'Industry-specific needs'],
    faqs: [
      {
        question: 'Do you build from scratch?',
        answer:
          'Yes. When off-the-shelf tools are not enough, we create a custom solution that fits your workflow and scale.'
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
  { title: 'Sales teams', description: 'Route leads, answer questions, and keep follow-ups moving.' },
  { title: 'Operations teams', description: 'Automate approvals, notifications, and repeat admin tasks.' },
  { title: 'Support teams', description: 'Use AI chatbots and agents for faster first-response handling.' },
  { title: 'Founders and SMEs', description: 'Connect tools and save time across the business.' }
];

export const whyChoosePoints = [
  {
    title: 'Built for business outcomes',
    description: 'We focus on measurable workflow improvements, not just technical demos.'
  },
  {
    title: 'Custom to your stack',
    description: 'We adapt to the tools and processes you already use.'
  },
  {
    title: 'Production-ready setup',
    description: 'We plan for retries, handoff logic, logging, and maintainability.'
  },
  {
    title: 'Scalable from day one',
    description: 'The automation architecture is designed to grow with your business.'
  }
];

export const aiAutomationFaqs = [
  {
    question: 'What types of businesses do you help?',
    answer:
      'We help businesses that want to automate lead handling, support, internal operations, WhatsApp workflows, CRM updates, and custom business processes.'
  },
  {
    question: 'Do you offer WhatsApp automation and AI chatbots?',
    answer:
      'Yes. We build WhatsApp automation, AI chatbots, and AI agents that can answer, route, and qualify conversations.'
  },
  {
    question: 'Can you integrate with CRM tools?',
    answer:
      'Yes. CRM integration and automation are core parts of the solutions we design.'
  },
  {
    question: 'Do you build custom AI solutions?',
    answer:
      'Yes. We design custom AI solutions when your workflow needs a tailored approach instead of a standard template.'
  }
];

