import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import clsx from 'clsx';

interface AboutSnapshotProps {
  locale: Locale;
}

export default function AboutSnapshot({ locale }: AboutSnapshotProps) {
  const t = useTranslations('about');
  const rtl = isRtl(locale);

  const keyPoints: string[] = t.raw('keyPoints');

  return (
    <SectionWrapper className="bg-surface-warm py-20 lg:py-28" id="about-snapshot">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className={clsx('relative', rtl ? 'lg:order-last' : '')}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <PlaceholderImage
                src="/assets/images/about/elite-horizon-facility-exterior.jpg"
                alt="Elite Horizon Catering Facility"
                aspectRatio="aspect-[4/3]"
                imgClassName="object-top"
                label="Facility Exterior"
              />
              {/* Accent border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-primary-dark text-white rounded-xl shadow-2xl p-4 text-center min-w-[110px]">
              <div className="text-accent text-2xl font-bold">15+</div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">Years</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              {t('sectionLabel')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark leading-tight mb-6">
              {t('headline')}
            </h2>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-8">
              {t('body')}
            </p>

            {/* Key points */}
            <ul className="space-y-3 mb-8">
              {keyPoints.map((point, i) => (
                <li key={i} className={clsx('flex items-start gap-3', rtl ? 'flex-row-reverse' : '')}>
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-ink text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/about`}
              className={clsx(
                'inline-flex items-center gap-2 text-primary-dark border border-primary/20 hover:bg-primary-dark hover:text-white hover:border-primary-dark px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200',
                rtl ? 'flex-row-reverse' : ''
              )}
            >
              {t('learnMore')}
              <ArrowRight size={14} className={rtl ? 'rotate-180' : ''} />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
