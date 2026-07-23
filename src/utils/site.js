const configuredSiteUrl = String(import.meta.env.VITE_SITE_URL || 'https://www.lakshautomations.in').trim();

export const siteUrl = configuredSiteUrl.replace(/\/+$/, '');

export const siteName = 'Laksh Automations';

export const defaultTitle = 'Laksh Automations | AI Automation, AI Agents & Business Workflow Automation';

export const defaultDescription =
  'Laksh Automations helps businesses automate workflows using AI Agents, WhatsApp Automation, CRM integrations, AI Chatbots, and custom AI solutions.';

export const defaultKeywords = [
  'Laksh Automations',
  'AI Automation',
  'AI Agents',
  'Workflow Automation',
  'Business Automation',
  'CRM Automation',
  'WhatsApp Automation',
  'AI Chatbots',
  'Business Process Automation',
  'Custom AI Solutions',
  'Automation Company India'
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
