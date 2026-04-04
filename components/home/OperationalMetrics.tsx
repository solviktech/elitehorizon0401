import { useTranslations } from 'next-intl';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

interface OperationalMetricsProps {
  locale: Locale;
}

export default function OperationalMetrics({ locale }: OperationalMetricsProps) {
  const t = useTranslations('metrics');
  const rtl = isRtl(locale);
  const items = t.raw('items') as Array<{ value: number; label: string; suffix: string }>;

  return (
    <SectionWrapper
      className="bg-primary py-20 lg:py-24"
      id="metrics"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="text-center mb-14">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {t('headline')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {items.map((item, i) => (
            <div key={i} className="relative">
              <AnimatedCounter
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                light={true}
              />
              {/* Divider for desktop */}
              {i < items.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
