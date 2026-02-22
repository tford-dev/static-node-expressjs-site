const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://terrance-ford.com';

export const siteOrigin = (rawSiteUrl.startsWith('http://') || rawSiteUrl.startsWith('https://') ? rawSiteUrl : `https://${rawSiteUrl}`).replace(
  /\/+$/,
  ''
);

export const metadataBase = new URL(siteOrigin);
export const siteName = 'Terrance Ford Portfolio';
export const defaultOgImage = '/static/img/side-image-no-smile-brighter.png';

export const absoluteUrl = (path = '/') => new URL(path, siteOrigin).toString();
