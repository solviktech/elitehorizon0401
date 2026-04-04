import { useTranslations } from 'next-intl';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import clsx from 'clsx';

interface ProcessFlowProps {
  locale: Locale;
}

export default function ProcessFlow({ locale }: ProcessFlowProps) {
  const t = useTranslations('process');
  const rtl = isRtl(locale);
  const steps = t.raw('steps') as Array<{ id: number; title: string; desc: string }>;

  return (
    <SectionWrapper className="bg-white py-20 lg:py-28" id="process">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <SectionHeader
          label={t('sectionLabel')}
          headline={t('headline')}
          subheadline={t('subheadline')}
          align="center"
          className="mb-14"
        />

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-7 gap-2">
            {steps.map((step, i) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-surface-border group-hover:border-accent flex items-center justify-center transition-colors duration-200 shadow-sm mb-4">
                  <span className="text-xl font-bold text-primary-dark group-hover:text-accent transition-colors">
                    {step.id}
                  </span>
                </div>
                {/* Title */}
                <h4 className="text-primary-dark font-bold text-sm mb-2">{step.title}</h4>
                {/* Desc */}
                <p className="text-ink-muted text-xs leading-relaxed">{step.desc}</p>
                {/* Arrow connector (not last) */}
                {i < steps.length - 1 && (
                  <div className={clsx(
                    'absolute top-8 -translate-y-1/2 text-accent/40 text-lg font-bold',
                    rtl ? '-left-3' : '-right-3'
                  )}>
                    {rtl ? '←' : '→'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={clsx(
                'flex gap-4 p-4 bg-surface-warm rounded-xl border border-surface-border',
                rtl ? 'flex-row-reverse' : ''
              )}
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary-dark text-white flex items-center justify-center font-bold text-sm">
                {step.id}
              </div>
              <div>
                <h4 className="text-primary-dark font-bold text-sm mb-1">{step.title}</h4>
                <p className="text-ink-muted text-xs leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-9 mt-14 w-px h-4 bg-surface-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
