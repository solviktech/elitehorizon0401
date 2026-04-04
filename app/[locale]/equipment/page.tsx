import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import EquipmentAccordion from '@/components/equipment/EquipmentAccordion';

interface EquipmentPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: EquipmentPageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.equipment' });
  return { title: t('title'), description: t('description'), keywords: t('keywords') };
}

export default function EquipmentPage({ params: { locale } }: EquipmentPageProps) {
  setRequestLocale(locale);

  return (
    <div className="pt-header">
      <EquipmentAccordion locale={locale} />
    </div>
  );
}
