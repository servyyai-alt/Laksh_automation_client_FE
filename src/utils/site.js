const CANONICAL_SITE_URL = 'https://lakshautomations.in';

const normalizeHost = (url) =>
  String(url || '')
    .trim()
    .replace(/^http:\/\/www\.lakshautomations\.in/i, 'https://lakshautomations.in')
    .replace(/^https:\/\/www\.lakshautomations\.in/i, 'https://lakshautomations.in')
    .replace(/^http:\/\/lakshautomations\.in/i, 'https://lakshautomations.in')
    .replace(/\/+$/, '');

const configuredSiteUrl = normalizeHost(import.meta.env.VITE_SITE_URL || CANONICAL_SITE_URL);

export const siteUrl = configuredSiteUrl || CANONICAL_SITE_URL;

export const siteName = 'Laksh Automations';

export const defaultTitle = 'Laksh Automations | Automatic Water Level Controller Manufacturer Coimbatore';

export const defaultDescription =
  'Leading manufacturer of automatic water level controllers, wireless water level controllers, borewell protection systems, and water automation solutions in Coimbatore, Tamil Nadu.';

export const defaultKeywords = [
  'Automatic Water Level Controller',
  'Water Pump Controller Manufacturer',
  'Water Level Controller Coimbatore',
  'Automatic Motor Controller',
  'Wireless Water Level Controller',
  'Tank Overflow Prevention System',
  'Borewell Protection System',
  'Motor Protection Controller',
  'Industrial Water Automation',
  'Agricultural Pump Controller',
  'Smart Water Management System',
  'Water Tank Controller',
  'Pump Automation Controller',
  'Digital Water Level Indicator',
  'Three Phase Pump Controller',
  'Single Phase Pump Controller'
].join(', ');

export const contactDetails = {
  phoneDisplay: '+91 88075 00321',
  phone: '+918807500321',
  email: 'laksh10xautomations@gmail.com',
  address: {
    streetAddress: '16/5, Sathy Main Road, Saravanampatti',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641035',
    addressCountry: 'IN'
  },
  geo: {
    latitude: 11.0725,
    longitude: 76.9986
  }
};

export function absoluteUrl(path = '') {
  if (!path) return siteUrl;
  if (path.startsWith('http://') || path.startsWith('https://')) return normalizeHost(path);
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function canonicalUrl(path = '/') {
  const cleanPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return absoluteUrl(cleanPath);
}

export function normalizeCanonicalUrl(url = '') {
  return normalizeHost(url) || siteUrl;
}
