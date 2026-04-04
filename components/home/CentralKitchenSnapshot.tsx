import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Thermometer, Package, FlaskConical, Truck, ChefHat } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import clsx from 'clsx';

const zoneIcons = [ChefHat, Thermometer, Package, FlaskConical, Truck];

interface CentralKitchenSnapshotProps {
  locale: Locale;
}

export default function CentralKitchenSnapshot({ locale }: CentralKitchenSnapshotProps) {
  const t = useTranslations('facility');
  const tCommon = useTranslations('common');
  const rtl = isRtl(locale);
  const zones = t.raw('zones') as Array<{ id: string; title: string; desc: string }>;

  return (
    <SectionWrapper className="bg-surface-warm py-20 lg:py-28" id="facility">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: content */}
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              {t('sectionLabel')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark leading-tight mb-4">
              {t('headline')}
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-8">
              {t('subheadline')}
            </p>

            {/* Zones list */}
            <div className="space-y-4">
              {zones.map((zone, i) => {
                const Icon = zoneIcons[i] || ChefHat;
                return (
                  <div
                    key={zone.id}
                    className={clsx(
                      'flex gap-4 p-4 bg-white rounded-xl border border-surface-border hover:border-accent/20 transition-colors duration-200',
                      rtl ? 'flex-row-reverse' : ''
                    )}
                  >
                    <div className="shrink-0 w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-primary-dark font-semibold text-sm mb-1">{zone.title}</h4>
                      <p className="text-ink-muted text-xs leading-relaxed line-clamp-2">{zone.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href={`/${locale}/facility`}
                className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary-mid text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
              >
                {tCommon('learnMore')}
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <PlaceholderImage
                src="/assets/images/facility/central-kitchen-production-hall.jpg"
                alt="Central Kitchen Production Hall"
                aspectRatio="aspect-[4/3]"
                label="Central Kitchen Hall"
              />
            </div>
            {/* Accent accent strip */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
