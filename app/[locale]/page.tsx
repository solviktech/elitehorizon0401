import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { buildPageMetadata } from '@/lib/seo';
import Hero from '@/components/home/Hero';
import AboutSnapshot from '@/components/home/AboutSnapshot';
import BusinessLines from '@/components/home/BusinessLines';
import SectorsGrid from '@/components/home/SectorsGrid';
import CentralKitchenSnapshot from '@/components/home/CentralKitchenSnapshot';
import OperationalMetrics from '@/components/home/OperationalMetrics';
import ProcessFlow from '@/components/home/ProcessFlow';
import GalleryPreview from '@/components/home/GalleryPreview';
import CertificationsStrip from '@/components/home/CertificationsStrip';
import ContactCTA from '@/components/home/ContactCTA';

interface HomePageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: HomePageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.home' });
  return buildPageMetadata({
    locale,
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    imagePath: '/assets/images/hero/hero-central-kitchen-main.jpg',
  });
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <AboutSnapshot locale={locale} />
      <BusinessLines locale={locale} />
      <SectorsGrid locale={locale} />
      <CentralKitchenSnapshot locale={locale} />
      <OperationalMetrics locale={locale} />
      <ProcessFlow locale={locale} />
      <GalleryPreview locale={locale} />
      <CertificationsStrip locale={locale} />
      <ContactCTA locale={locale} />
    </>
  );
}
