export const siteUrl = 'https://www.lakshautomations.com';

export const siteName = 'Laksh Automations';

export const defaultTitle = 'Laksh Automations - Automatic Water Level Controller Manufacturer, Coimbatore';

export const defaultDescription =
  "India's trusted automatic water level controller manufacturer in Coimbatore. Smart water management solutions for homes, apartments, industries & agriculture.";

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
  'Smart Water Management System'
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
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function canonicalUrl(path = '/') {
  const cleanPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return absoluteUrl(cleanPath);
}
