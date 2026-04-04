import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { CheckCircle2, Target, Eye, Award } from 'lucide-react';
import { type Locale, isRtl } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import ContactCTA from '@/components/home/ContactCTA';
import clsx from 'clsx';

interface AboutPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: AboutPageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.about' });
  return { title: t('title'), description: t('description'), keywords: t('keywords') };
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  setRequestLocale(locale);

  const t = useTranslations('about');
  const rtl = isRtl(locale);
  const fp = t.raw('fullPage') as any;
  const keyPoints: string[] = t.raw('keyPoints');

  return (
    <div className="pt-header">
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">{t('sectionLabel')}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            {fp.headline}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{fp.intro}</p>
        </div>
      </section>

      {/* Story + Image */}
      <SectionWrapper className="bg-surface-warm py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ink-muted text-lg leading-relaxed mb-8">{fp.story}</p>
              <ul className="space-y-3">
                {keyPoints.map((point, i) => (
                  <li key={i} className={clsx('flex items-start gap-3', rtl ? 'flex-row-reverse' : '')}>
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-ink text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PlaceholderImage
              src="/assets/images/about/elite-horizon-facility-exterior.jpg"
              alt="Elite Horizon Catering Facility"
              aspectRatio="aspect-[4/3]"
              className="rounded-2xl overflow-hidden shadow-xl"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Vision, Mission, Values */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 bg-surface-warm rounded-2xl border border-surface-border">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Eye size={22} className="text-accent" />
              </div>
              <h3 className="text-primary-dark font-bold text-lg mb-3">{fp.vision.label}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{fp.vision.text}</p>
            </div>
            {/* Mission */}
            <div className="p-8 bg-primary-dark rounded-2xl border border-white/5">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5">
                <Target size={22} className="text-accent" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{fp.mission.label}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{fp.mission.text}</p>
            </div>
            {/* Values */}
            <div className="p-8 bg-accent rounded-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <Award size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-4">{fp.values.label}</h3>
              <div className="flex flex-wrap gap-2">
                {(fp.values.items as string[]).map((v) => (
                  <span key={v} className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Us */}
      <SectionWrapper className="bg-surface-warm py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <SectionHeader headline={fp.whyUs.headline} align="center" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(fp.whyUs.points as Array<{ title: string; desc: string }>).map((point, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-surface-border hover:border-accent/20 transition-colors duration-200 hover:shadow-md">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-sm">{i + 1}</span>
                </div>
                <h4 className="text-primary-dark font-bold text-base mb-2">{point.title}</h4>
                <p className="text-ink-muted text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA locale={locale} />
    </div>
  );
}
