import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import {
  Star, Hotel, HeartPulse, GraduationCap, Factory,
  Calendar, Heart, Tent, AlertTriangle, Lightbulb
} from 'lucide-react';
import { type Locale, isRtl } from '@/i18n/config';
import { buildPageMetadata } from '@/lib/seo';
import { withBasePath } from '@/lib/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import ContactCTA from '@/components/home/ContactCTA';
import clsx from 'clsx';

const sectorIcons = [Star, Hotel, HeartPulse, GraduationCap, Factory, Calendar, Heart, Tent];
const sectorImages = [
  '/assets/images/sectors/hajj-umrah-meal-distribution.jpg',
  '/assets/images/sectors/hotel-hospitality-catering-service.jpg',
  '/assets/images/sectors/hospital-clinical-meal-service.jpg',
  '/assets/images/sectors/school-university-meal-program.jpg',
  '/assets/images/sectors/industrial-site-workforce-catering.jpg',
  '/assets/images/sectors/corporate-event-catering-function.jpg',
  '/assets/images/sectors/charity-community-meal-distribution.jpg',
  '/assets/images/sectors/military-remote-camp-catering.jpg',
];
const sectorColors = [
  { bg: 'bg-amber-500', light: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  { bg: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
  { bg: 'bg-rose-500', light: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700' },
  { bg: 'bg-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
  { bg: 'bg-orange-600', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
  { bg: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
  { bg: 'bg-teal-600', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700' },
  { bg: 'bg-slate-700', light: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700' },
];

interface SectorsPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: SectorsPageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.sectors' });
  return buildPageMetadata({
    locale,
    pathname: '/sectors',
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    imagePath: '/assets/images/sectors/sectors-catering-solutions-hero.jpg',
  });
}

export default function SectorsPage({ params: { locale } }: SectorsPageProps) {
  setRequestLocale(locale);

  const t = useTranslations('sectors');
  const rtl = isRtl(locale);
  const items = t.raw('items') as Array<{
    id: string;
    title: string;
    shortDesc: string;
    challenge: string;
    solution: string;
  }>;

  return (
    <div className="pt-header">
      {/* Hero */}
      <section className="relative bg-primary-dark py-20 lg:py-28 overflow-hidden" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${withBasePath('/assets/images/sectors/sectors-catering-solutions-hero.jpg')})` }}
          />
          <div className="absolute inset-0 bg-primary-dark/70" />
        </div>
        <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">{t('sectionLabel')}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {t('headline')}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{t('subheadline')}</p>
        </div>
      </section>

      {/* Sectors overview grid */}
      <SectionWrapper className="bg-surface-warm py-20 lg:py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {items.map((item, i) => {
              const Icon = sectorIcons[i] || Star;
              const color = sectorColors[i];
              return (
                <a
                  key={item.id}
                  href={`#sector-${item.id}`}
                  className="group p-5 bg-white rounded-xl border border-surface-border hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`w-10 h-10 ${color.bg} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-primary-dark font-semibold text-sm group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Individual sector sections */}
      {items.map((item, i) => {
        const Icon = sectorIcons[i] || Star;
        const color = sectorColors[i];
        const isEven = i % 2 === 0;

        return (
          <SectionWrapper
            key={item.id}
            id={`sector-${item.id}`}
            className={clsx('py-16 lg:py-20', isEven ? 'bg-white' : 'bg-surface-warm')}
          >
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sector header */}
                <div>
                  <div className={`w-14 h-14 ${color.bg} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                    Sector {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mt-1 mb-3">{item.title}</h2>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.shortDesc}</p>
                  <PlaceholderImage
                    src={sectorImages[i]}
                    alt={item.title}
                    aspectRatio="aspect-[4/3]"
                    className="rounded-2xl mt-6 shadow-lg"
                  />
                </div>

                {/* Challenge */}
                <div className={`p-6 rounded-2xl border ${color.light} ${color.border}`}>
                  <div className={clsx('flex items-center gap-2 mb-3', rtl ? 'flex-row-reverse' : '')}>
                    <AlertTriangle size={16} className={color.text} />
                    <h4 className={`font-bold text-sm uppercase tracking-wider ${color.text}`}>Challenge</h4>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.challenge}</p>
                </div>

                {/* Solution */}
                <div className="p-6 bg-primary-dark rounded-2xl border border-white/5">
                  <div className={clsx('flex items-center gap-2 mb-3', rtl ? 'flex-row-reverse' : '')}>
                    <Lightbulb size={16} className="text-accent" />
                    <h4 className="font-bold text-sm uppercase tracking-wider text-accent">Our Solution</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.solution}</p>
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
