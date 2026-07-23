import { absoluteUrl, canonicalUrl, contactDetails, siteName, siteUrl } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl('/og-image.jpg'),
    description:
      'Laksh Automations helps businesses automate workflows using AI Agents, WhatsApp Automation, CRM integrations, AI Chatbots, and custom AI solutions.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contactDetails.phone,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['en']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      ...contactDetails.address
    },
    sameAs: [
      'https://www.linkedin.com',
      'https://www.instagram.com'
    ],
    areaServed: 'IN'
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: siteName,
    description:
      'AI automation, AI agents, WhatsApp automation, CRM automation and custom AI solutions.',
    publisher: {
      '@id': `${siteUrl}#organization`
    },
    inLanguage: 'en-IN'
  };
}

export function serviceSchema({
  name,
  description,
  path = '/',
  serviceType = 'AI Automation Service'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl(path)}#service`,
    name,
    serviceType,
    description,
    provider: {
      '@id': `${siteUrl}#organization`
    },
    areaServed: 'IN'
  };
}

export function pageSchema({ name, description, path = '/' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name,
    description,
    isPartOf: {
      '@id': `${siteUrl}#website`
    },
    about: {
      '@id': `${siteUrl}#organization`
    },
    inLanguage: 'en-IN'
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path)
    }))
  };
}

export function faqSchema(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

