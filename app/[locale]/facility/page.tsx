import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ChefHat, Thermometer, Package, FlaskConical, Truck, Building2 } from 'lucide-react';
import { type Locale, isRtl } from '@/i18n/config';
import { buildPageMetadata } from '@/lib/seo';
import { withBasePath } from '@/lib/site';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import OperationalMetrics from '@/components/home/OperationalMetrics';
import ProcessFlow from '@/components/home/ProcessFlow';
import ContactCTA from '@/components/home/ContactCTA';
import clsx from 'clsx';

const zoneIcons = [ChefHat, Thermometer, Package, FlaskConical, Truck];

interface FacilityPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: FacilityPageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.facility' });
  return buildPageMetadata({
    locale,
    pathname: '/facility',
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    imagePath: '/assets/images/facility/makkah-central-kitchen-facility-hero.jpg',
  });
}

export default function FacilityPage({ params: { locale } }: FacilityPageProps) {
  setRequestLocale(locale);

  const t = useTranslations('facility');
  const rtl = isRtl(locale);
  const zones = t.raw('zones') as Array<{ id: string; title: string; desc: string }>;
  const fp = t.raw('fullPage') as any;
  const floors = fp.floors.items as Array<{ level: string; desc: string }>;
  const zonesSection = fp.zones as { label: string; headline: string };

  return (
    <div className="pt-header">
      {/* Hero */}
      <section className="relative bg-primary-dark py-20 lg:py-28 overflow-hidden" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${withBasePath('/assets/images/facility/makkah-central-kitchen-facility-hero.jpg')})` }}
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

      {/* Intro */}
      <SectionWrapper className="bg-surface-warm py-16 lg:py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-ink-muted text-lg leading-relaxed">{fp.intro}</p>
            <PlaceholderImage
              src="/assets/images/facility/central-kitchen-main-production-hall.jpg"
              alt="Central Kitchen Main Hall"
              aspectRatio="aspect-video"
              className="rounded-2xl overflow-hidden shadow-xl"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Floor breakdown */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <SectionHeader headline={fp.floors.headline} align="center" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {floors.map((floor, i) => (
              <div
                key={i}
                className="relative p-6 bg-surface-warm rounded-2xl border border-surface-border hover:border-accent/20 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-200">
                  <Building2 size={18} className="text-white" />
                </div>
                <h4 className="text-primary-dark font-bold text-sm mb-2">{floor.level}</h4>
                <p className="text-ink-muted text-xs leading-relaxed">{floor.desc}</p>
                {/* Level indicator */}
                <div className="absolute top-3 right-3 text-accent/30 text-xs font-bold">
                  L{i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Production zones detail */}
      <SectionWrapper className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <SectionHeader
            label={zonesSection.label}
            headline={zonesSection.headline}
            align="center"
            light={true}
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, i) => {
              const Icon = zoneIcons[i] || ChefHat;
              return (
                <div
                  key={zone.id}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-accent/30 hover:bg-white/8 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{zone.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{zone.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <OperationalMetrics locale={locale} />
      <ProcessFlow locale={locale} />
      <ContactCTA locale={locale} />
    </div>
  );
}
