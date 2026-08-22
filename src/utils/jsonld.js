import { absoluteUrl, canonicalUrl, contactDetails, siteName, siteUrl } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl('/favicon.svg'),
    description:
      'Laksh Automations is a Coimbatore-based manufacturer of automatic water level controllers, pump controllers, motor protection systems, and water automation solutions.',
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
    sameAs: ['https://www.facebook.com/saravanan.lakshmanan.148946?rdid=VzzHUfnjuch9W8Hy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18x7mAD3qT%2F#'],
    areaServed: 'IN'
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#localbusiness`,
    name: siteName,
    url: siteUrl,
    image: absoluteUrl('/og-image.jpg'),
    logo: absoluteUrl('/favicon.svg'),
    telephone: contactDetails.phone,
    email: contactDetails.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...contactDetails.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactDetails.geo.latitude,
      longitude: contactDetails.geo.longitude
    },
    areaServed: 'Coimbatore, Tamil Nadu, India',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ]
  };
}

export function productSchema({
  name,
  description,
  path = '/',
  image = '/og-image.jpg',
  brand = siteName,
  category = 'Water Automation Product',
  sku
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${canonicalUrl(path)}#product`,
    name,
    description,
    image: absoluteUrl(image),
    brand: {
      '@type': 'Brand',
      name: brand
    },
    category,
    url: canonicalUrl(path)
  };

  if (sku) {
    schema.sku = sku;
  }

  return schema;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: siteName,
    description:
      'Automatic water level controllers, wireless water level controllers, borewell protection systems, and water automation solutions.',
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
  serviceType = 'Water Automation Products'
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
