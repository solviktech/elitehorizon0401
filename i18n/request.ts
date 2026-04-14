import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './config';

const isStaticExport = process.env.STATIC_EXPORT === 'true';

export default getRequestConfig(async ({ requestLocale }) => {
  let resolvedLocale = isStaticExport ? defaultLocale : await requestLocale;

  if (!resolvedLocale || !locales.includes(resolvedLocale as Locale)) {
    resolvedLocale = defaultLocale;
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`./locales/${resolvedLocale}.json`)).default,
  };
});
