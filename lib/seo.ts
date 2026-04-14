import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import { siteUrl, withBasePath } from '@/lib/site';

const DEFAULT_OG_IMAGE = withBasePath('/assets/images/elite-horizon-catering-logo.jpg');
const SITE_NAME = 'Elite Horizon Catering';

function normalizePathname(pathname = '') {
  if (!pathname || pathname === '/') {
    return '';
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function getLocalizedPath(locale: Locale, pathname = '') {
  return `/${locale}${normalizePathname(pathname)}`;
}

export function getLocalizedUrl(locale: Locale, pathname = '') {
  return new URL(withBasePath(getLocalizedPath(locale, pathname)), siteUrl).toString();
}

export function getLanguageAlternates(pathname = '') {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, getLocalizedUrl(locale, pathname)])),
    'x-default': getLocalizedUrl('en', pathname),
  };
}

interface BuildPageMetadataInput {
  locale: Locale;
  pathname?: string;
  title: string;
  description: string;
  keywords?: string;
  imagePath?: string;
}

export function buildPageMetadata({
  locale,
  pathname = '',
  title,
  description,
  keywords,
  imagePath = DEFAULT_OG_IMAGE,
}: BuildPageMetadataInput): Metadata {
  const canonical = getLocalizedUrl(locale, pathname);
  const languages = getLanguageAlternates(pathname);
  const image = new URL(withBasePath(imagePath), siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      locale,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
