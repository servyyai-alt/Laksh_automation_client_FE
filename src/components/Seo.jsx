import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://www.lakshautomations.com';
const defaultTitle = 'Laksh Automations – Automatic Water Level Controller Manufacturer, Coimbatore';
const defaultDesc = "India's trusted automatic water level controller manufacturer in Coimbatore. Smart water management solutions for homes, apartments, industries & agriculture.";

export default function Seo({ title, description, ogImage, ogType = 'website', canonical, noindex }) {
  const pageTitle = title ? `${title} | Laksh Automations` : defaultTitle;
  const pageDesc = description || defaultDesc;
  const image = ogImage || `${siteUrl}/og-image.jpg`;
  const url = canonical || siteUrl;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={image} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}

export { siteUrl };
