import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, BookOpen, FlaskConical, UtensilsCrossed, Apple, Cake } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import clsx from 'clsx';

const serviceIcons = [BookOpen, FlaskConical, UtensilsCrossed, Apple, Cake];

const serviceImages = [
  '/assets/images/services/catering-consulting-research-team.jpg',
  '/assets/images/services/food-technology-production-lab.jpg',
  '/assets/images/services/mass-catering-meal-packaging-line.jpg',
  '/assets/images/services/healthy-meal-preparation-program.jpg',
  '/assets/images/services/industrial-bakery-dessert-production.jpg',
];

interface BusinessLinesProps {
  locale: Locale;
}

export default function BusinessLines({ locale }: BusinessLinesProps) {
  const t = useTranslations('services');
  const rtl = isRtl(locale);
  const items = t.raw('items') as Array<{ id: string; title: string; shortDesc: string }>;

  return (
    <SectionWrapper className="bg-white py-20 lg:py-28" id="services">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <SectionHeader
          label={t('sectionLabel')}
          headline={t('headline')}
          subheadline={t('subheadline')}
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {items.map((item, i) => {
            const Icon = serviceIcons[i] || UtensilsCrossed;
            return (
              <Link
                key={item.id}
                href={`/${locale}/services`}
                className="group relative bg-surface-warm border border-surface-border hover:border-accent/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <PlaceholderImage
                    src={serviceImages[i]}
                    alt={item.title}
                    aspectRatio="aspect-[4/3]"
                    label={item.title}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-colors duration-300" />
                  {/* Icon chip */}
                  <div className="absolute top-3 left-3 bg-accent rounded-lg p-2 shadow-md">
                    <Icon size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-primary-dark font-bold text-base mb-2 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed line-clamp-3 mb-3">
                    {item.shortDesc}
                  </p>
                  <div className={clsx(
                    'inline-flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider',
                    rtl ? 'flex-row-reverse' : ''
                  )}>
                    {t('learnMore')}
                    <ArrowRight size={12} className={clsx('transition-transform duration-200 group-hover:translate-x-1', rtl ? 'rotate-180 group-hover:-translate-x-1' : '')} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
