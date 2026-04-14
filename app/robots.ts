import type { MetadataRoute } from 'next';
import { siteUrl, withBasePath } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [new URL(withBasePath('/sitemap.xml'), siteUrl).toString()],
    host: siteUrl,
  };
}
