import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '*',
      },
      {
        userAgent: 'Yeti',
        allow: '*',
      },
      {
        userAgent: '*',
        disallow: '*',
      },
    ],
    sitemap: 'https://eunjios.com/sitemap.xml',
  };
}
