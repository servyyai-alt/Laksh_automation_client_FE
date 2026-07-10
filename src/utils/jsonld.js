const siteUrl = 'https://www.lakshautomations.com';

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Laksh Automations",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "India's trusted automatic water level controller manufacturer based in Coimbatore, Tamil Nadu.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16/5, Sathy Main Road, Saravanampatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641035",
      "addressCountry": "IN"
    },
    "telephone": "+918807500321",
    "email": "laksh10xautomations@gmail.com",
    "sameAs": [
      "https://g.page/r/CbxD8A_VgFrbEBM/review"
    ],
    "areaServed": "IN"
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#business`,
    "name": "Laksh Automations",
    "image": `${siteUrl}/og-image.jpg`,
    "url": siteUrl,
    "telephone": "+918807500321",
    "email": "laksh10xautomations@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16/5, Sathy Main Road, Saravanampatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641035",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0725,
      "longitude": 76.9986
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
    ],
    "areaServed": "IN"
  };
}

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}#rating`,
    "name": "Laksh Automations Products",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "500",
      "reviewCount": "500"
    }
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an automatic water level controller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An automatic water level controller is a device that automatically monitors and controls the water level in a tank or reservoir. It turns the pump on when water is low and off when the tank is full, preventing overflow and dry running."
        }
      },
      {
        "@type": "Question",
        "name": "How does a wireless water level controller work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A wireless water level controller uses RF signals to communicate between the tank unit and the pump control unit, eliminating the need for physical wiring between the tank and the pump. This makes installation easier and more reliable."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer water level controllers for borewell motors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer specialized borewell water level controllers and protection systems designed for submersible pumps and borewell motors, including dry run protection and single-phase preventors."
        }
      },
      {
        "@type": "Question",
        "name": "What is the warranty on Laksh Automations products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Laksh Automations products come with a comprehensive warranty. Contact us for specific warranty details for each product category."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Laksh Automations located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Laksh Automations is headquartered in Coimbatore, Tamil Nadu, India. We serve customers across India with our range of water management solutions."
        }
      }
    ]
  };
}

export function productSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDescription || product.description,
    "category": product.category,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "Laksh Automations"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR"
      }
    }
  };
}
