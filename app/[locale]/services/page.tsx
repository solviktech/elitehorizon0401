import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { CheckCircle2, BookOpen, FlaskConical, UtensilsCrossed, Apple, Cake } from 'lucide-react';
import { type Locale, isRtl } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import ContactCTA from '@/components/home/ContactCTA';
import clsx from 'clsx';

const serviceIcons = [BookOpen, FlaskConical, UtensilsCrossed, Apple, Cake];
const serviceImages = [
  '/assets/images/services/catering-consulting-research-team.jpg',
  '/assets/images/services/food-technology-production-lab.jpg',
  '/assets/images/services/mass-catering-meal-packaging-line.jpg',
  '/assets/images/services/healthy-meal-preparation-program.jpg',
  '/assets/images/services/industrial-bakery-dessert-production.jpg',
];

interface ServicesPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: ServicesPageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.services' });
  return { title: t('title'), description: t('description'), keywords: t('keywords') };
}

export default function ServicesPage({ params: { locale } }: ServicesPageProps) {
  setRequestLocale(locale);

  const t = useTranslations('services');
  const rtl = isRtl(locale);
  const items = t.raw('items') as Array<{
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
  }>;

  return (
    <div className="pt-header">
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">{t('sectionLabel')}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {t('headline')}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{t('subheadline')}</p>
        </div>
      </section>

      {/* Services */}
      {items.map((item, i) => {
        const Icon = serviceIcons[i] || UtensilsCrossed;
        const isEven = i % 2 === 0;

        return (
          <SectionWrapper
            key={item.id}
            className={clsx('py-20 lg:py-28', isEven ? 'bg-white' : 'bg-surface-warm')}
            id={item.id}
          >
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
              <div className={clsx(
                'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
                !isEven ? 'lg:flex lg:flex-row-reverse' : ''
              )}>
                {/* Image */}
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl group">
                    <PlaceholderImage
                      src={serviceImages[i]}
                      alt={item.title}
                      aspectRatio="aspect-[4/3]"
                      label={item.title}
                    />
                  </div>
                  {/* Icon badge */}
                  <div className="absolute -bottom-5 -right-5 bg-accent rounded-2xl p-4 shadow-xl">
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:px-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent/50 font-bold text-4xl tabular-nums leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark leading-tight mb-4">
                    {item.title}
                  </h2>
                  <p className="text-ink-muted text-base leading-relaxed mb-6">{item.fullDesc}</p>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {item.features.map((feature, fi) => (
                      <li key={fi} className={clsx('flex items-start gap-3', rtl ? 'flex-row-reverse' : '')}>
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-ink text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      <ContactCTA locale={locale} />
    </div>
  );
}
