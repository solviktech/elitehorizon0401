import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { getLocalizedUrl } from '@/lib/seo';

const localizedRoutes = ['', '/about', '/services', '/sectors', '/facility', '/equipment', '/gallery', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return localizedRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: getLocalizedUrl(locale, route),
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    }))
  );
}
