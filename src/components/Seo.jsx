import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  absoluteUrl,
  canonicalUrl,
  defaultDescription,
  defaultKeywords,
  defaultTitle,
  siteName
} from '../utils/site';

export default function Seo({
  title,
  description,
  keywords = defaultKeywords,
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
  jsonLd = [],
  titleAbsolute = false,
  themeColor = '#0A1628'
}) {
  const location = useLocation();
  const pageTitle = title
    ? titleAbsolute || title.includes(siteName) || title.includes('|')
      ? title
      : `${title} | ${siteName}`
    : defaultTitle;
  const pageDesc = description || defaultDescription;
  const image = absoluteUrl(ogImage || '/og-image.jpg');
  const url = canonical ? canonicalUrl(canonical) : canonicalUrl(location.pathname);
  const schemaList = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  const robots = noindex ? 'noindex, nofollow, noarchive' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  const favicon = absoluteUrl('/favicon.svg');
  const manifest = absoluteUrl('/manifest.webmanifest');

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={siteName} />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content="light" />
      <link rel="icon" href={favicon} />
      <link rel="shortcut icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
      <link rel="manifest" href={manifest} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={pageTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={pageTitle} />

      {schemaList.filter(Boolean).map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
