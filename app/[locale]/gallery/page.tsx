import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { buildPageMetadata } from '@/lib/seo';
import GalleryGrid from '@/components/gallery/GalleryGrid';

interface GalleryPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: GalleryPageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.gallery' });
  return buildPageMetadata({
    locale,
    pathname: '/gallery',
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    imagePath: '/assets/images/gallery/central-kitchen-operations-floor.jpg',
  });
}

export default function GalleryPage({ params: { locale } }: GalleryPageProps) {
  setRequestLocale(locale);

  return (
    <div className="pt-header">
      <GalleryGrid locale={locale} />
    </div>
  );
}
