import { absoluteUrl, canonicalUrl, contactDetails, siteName, siteUrl } from './site';

const featuredProducts = [
  {
    name: 'AUTO GUN + JET Automatic Water Pump Controller',
    category: 'Single Phase',
    description: 'Automatic pump control for domestic water systems',
  },
  {
    name: 'L10SS Single Phase Automatic Water Level Controller',
    category: 'Single Phase',
    description: 'Smart single-phase motor automation with level sensing',
  },
  {
    name: 'L30SS Three Phase Automatic Water Level Controller',
    category: 'Three Phase',
    description: 'Heavy-duty three-phase automation for industrial use',
  },
  {
    name: 'Wireless Water Level Controller',
    category: 'Wireless',
    description: 'No wire needed for remote tank monitoring',
  },
  {
    name: 'Borewell Dry Run Protection System',
    category: 'Protection',
    description: 'Critical protection for borewell pump motors',
  },
  {
    name: 'Digital Water Level Indicator',
    category: 'Accessories',
    description: 'Clear digital display of tank water level percentage',
  },
  {
    name: 'Smart IoT Water Level Controller',
    category: 'IoT/Smart',
    description: 'WiFi-enabled smart controller with app monitoring',
  },
  {
    name: 'Agricultural Pump Automation Controller',
    category: 'Agricultural',
    description: 'Field-ready pump automation for irrigation',
  }
];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl('/og-image.jpg'),
    description: "India's trusted automatic water level controller manufacturer based in Coimbatore, Tamil Nadu.",
    address: {
      '@type': 'PostalAddress',
      ...contactDetails.address
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contactDetails.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'ta']
      }
    ],
    sameAs: [
      'https://g.page/r/CbxD8A_VgFrbEBM/review',
      'https://www.facebook.com/saravanan.lakshmanan.148946'
    ],
    areaServed: 'IN'
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#business`,
    name: siteName,
    image: absoluteUrl('/og-image.jpg'),
    url: siteUrl,
    telephone: contactDetails.phone,
    email: contactDetails.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      ...contactDetails.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactDetails.geo.latitude,
      longitude: contactDetails.geo.longitude
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' }
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
    description: "Smart water management solutions for homes, apartments, industries and agriculture.",
    publisher: {
      '@id': `${siteUrl}#organization`
    },
    inLanguage: 'en-IN'
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

export function productCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}#products`,
    name: 'Laksh Automations Product Range',
    description: 'Automatic water level controllers, pump protection systems and smart water automation products.',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: featuredProducts.length,
    itemListElement: featuredProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: siteName
        }
      }
    }))
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an automatic water level controller?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An automatic water level controller monitors the water level in a tank or reservoir and turns the pump on when the level is low and off when the tank is full.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does a wireless water level controller work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A wireless water level controller uses RF communication between the tank unit and the pump control unit, reducing the need for long physical wiring.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer water level controllers for borewell motors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Laksh Automations offers borewell dry run protection and motor protection systems for submersible pumps and borewell motors.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Laksh Automations located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Laksh Automations is based in Coimbatore, Tamil Nadu, India and serves customers across India.'
        }
      }
    ]
  };
}

export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}#service`,
    serviceType: 'Water Automation Solutions',
    provider: {
      '@id': `${siteUrl}#organization`
    },
    areaServed: 'IN',
    description: 'Manufacturing and installation support for automatic water level controllers, pump protection systems, and smart water management solutions.'
  };
}
