import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  absoluteUrl,
  canonicalUrl,
  defaultDescription,
  defaultKeywords,
  defaultTitle,
  siteName,
  siteUrl
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
  titleAbsolute = false
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

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={siteName} />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="format-detection" content="telephone=yes" />
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

      {schemaList.filter(Boolean).map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export { siteUrl };
