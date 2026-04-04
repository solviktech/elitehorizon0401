import { useTranslations } from 'next-intl';
import { ShieldCheck } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';

interface CertificationsStripProps {
  locale: Locale;
}

export default function CertificationsStrip({ locale }: CertificationsStripProps) {
  const t = useTranslations('certifications');
  const rtl = isRtl(locale);
  const items = t.raw('items') as Array<{ title: string; desc: string }>;

  return (
    <SectionWrapper className="bg-primary-dark py-20 lg:py-24" id="certifications">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <SectionHeader
          label={t('sectionLabel')}
          headline={t('headline')}
          subheadline={t('subheadline')}
          align="center"
          light={true}
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 bg-white/5 border border-white/10 rounded-xl hover:border-accent/30 hover:bg-white/8 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-3 group-hover:bg-accent/25 transition-colors">
                <ShieldCheck size={22} className="text-accent" />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
