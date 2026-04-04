import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Star, Hotel, HeartPulse, GraduationCap, Factory,
  Calendar, Heart, Tent
} from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import clsx from 'clsx';

const sectorIcons = [Star, Hotel, HeartPulse, GraduationCap, Factory, Calendar, Heart, Tent];

interface SectorsGridProps {
  locale: Locale;
}

export default function SectorsGrid({ locale }: SectorsGridProps) {
  const t = useTranslations('sectors');
  const tCommon = useTranslations('common');
  const rtl = isRtl(locale);
  const items = t.raw('items') as Array<{ id: string; title: string; shortDesc: string }>;

  return (
    <SectionWrapper className="bg-primary-dark py-20 lg:py-28" id="sectors">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <SectionHeader
          label={t('sectionLabel')}
          headline={t('headline')}
          subheadline={t('subheadline')}
          align="center"
          light={true}
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, i) => {
            const Icon = sectorIcons[i] || Star;
            return (
              <Link
                key={item.id}
                href={`/${locale}/sectors`}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/30 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors duration-200">
                  <Icon size={18} className="text-accent" />
                </div>
                {/* Content */}
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed line-clamp-3">
                  {item.shortDesc}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/sectors`}
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2.5 rounded text-sm font-semibold transition-all duration-200"
          >
            {tCommon('viewAll')}
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
