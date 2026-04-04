import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import clsx from 'clsx';
import HeroBackgroundMedia from '@/components/home/HeroBackgroundMedia';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations('hero');
  const rtl = isRtl(locale);

  const stats = [
    { value: '50,000+', label: t('stats.meals') },
    { value: '8', label: t('stats.sectors') },
    { value: '15+', label: t('stats.years') },
    { value: '6', label: t('stats.certifications') },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end md:justify-center overflow-hidden bg-primary-dark"
      dir={rtl ? 'rtl' : 'ltr'}
    >
      {/* Background media */}
      <div className="absolute inset-0 z-0">
        <HeroBackgroundMedia />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08140f]/72 via-[#0a1711]/44 via-35% to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(7,18,14,0.34),transparent_42%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/24" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#07120e]/58 via-[#07120e]/22 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(110deg,rgba(196,152,58,0.09)_0%,rgba(196,152,58,0.05)_18%,transparent_38%)]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(196,152,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,152,58,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-14 sm:pb-20">
        <div className="hero-copy-shell max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-[#102017]/48 px-4 py-1.5 mb-5 sm:mb-8 backdrop-blur-[6px]">
            <MapPin size={13} className="text-accent shrink-0" />
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              {t('badge')}
            </span>
          </div>

          <div className="hero-brand-lockup mb-4 sm:mb-6">
            <div className="hero-kicker text-accent/80 text-sm sm:text-xl font-arabic font-medium">
              مسارات النخبة للإعاشة
            </div>
          </div>

          {/* Headline */}
          <h1 className="hero-title text-[2.8rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] sm:leading-tight mb-4 sm:mb-6 tracking-tight">
            {t('headline')}
          </h1>

          {/* Subheadline */}
          <p className="hero-body text-white/85 text-[1rem] sm:text-xl leading-[1.6] sm:leading-relaxed max-w-2xl mb-7 sm:mb-10">
            {t('subheadline')}
          </p>

          {/* CTAs */}
          <div className={clsx('hero-cta-row flex flex-wrap gap-3 sm:gap-4', rtl ? 'flex-row-reverse' : '')}>
            <Link
              href={`/${locale}/contact`}
              className="hero-primary-cta inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3.5 rounded transition-all duration-200 shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.26)] hover:-translate-y-0.5 text-sm sm:text-base"
            >
              {t('ctaProposal')}
              <ArrowRight size={16} className={rtl ? 'rotate-180' : ''} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hero-secondary-cta inline-flex items-center gap-2.5 bg-white/8 hover:bg-white/12 border border-white/18 text-white font-semibold px-6 py-3.5 rounded backdrop-blur-[8px] transition-all duration-200 text-sm sm:text-base"
            >
              {t('ctaContact')}
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats-shell mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 border-t border-white/10 pt-8 sm:pt-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={clsx(
                'text-center sm:text-left py-2',
                i < stats.length - 1 ? 'sm:border-r sm:border-white/10 sm:pr-8' : '',
                i > 0 ? 'sm:pl-8' : ''
              )}
            >
              <div className="hero-stat-value text-3xl sm:text-4xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="hero-stat-label text-white/60 text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={24} className="text-white/30" />
      </div>
    </section>
  );
}
