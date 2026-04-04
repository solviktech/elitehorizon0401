'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronUp, Flame, Croissant, Snowflake, Coffee, Wrench } from 'lucide-react';
import { type Locale, isRtl } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ContactCTA from '@/components/home/ContactCTA';
import clsx from 'clsx';

const categoryIcons = [Flame, Croissant, Snowflake, Coffee, Wrench];

interface EquipmentAccordionProps {
  locale: Locale;
}

export default function EquipmentAccordion({ locale }: EquipmentAccordionProps) {
  const t = useTranslations('equipment');
  const rtl = isRtl(locale);
  const categories = t.raw('categories') as Array<{
    id: string;
    title: string;
    items: Array<{ name: string; desc: string }>;
  }>;

  const [openCategory, setOpenCategory] = useState<string | null>(categories[0]?.id || null);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">{t('sectionLabel')}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {t('headline')}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{t('subheadline')}</p>
        </div>
      </section>

      {/* Equipment accordion */}
      <SectionWrapper className="bg-surface-warm py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <div className="space-y-4">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[i] || Wrench;
              const isOpen = openCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  className={clsx(
                    'bg-white rounded-2xl border overflow-hidden transition-all duration-300',
                    isOpen ? 'border-accent/30 shadow-md' : 'border-surface-border hover:border-accent/15'
                  )}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenCategory(isOpen ? null : cat.id)}
                    className={clsx(
                      'w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200',
                      rtl ? 'flex-row-reverse' : ''
                    )}
                  >
                    <div className={clsx('flex items-center gap-4', rtl ? 'flex-row-reverse' : '')}>
                      <div className={clsx(
                        'w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200',
                        isOpen ? 'bg-accent text-white' : 'bg-surface-warm text-primary'
                      )}>
                        <Icon size={18} />
                      </div>
                      <h3 className={clsx(
                        'font-bold text-base transition-colors duration-200',
                        isOpen ? 'text-accent' : 'text-primary-dark'
                      )}>
                        {cat.title}
                      </h3>
                      <span className="text-ink-faint text-xs">
                        {cat.items.length} items
                      </span>
                    </div>
                    <div className={clsx('text-ink-faint transition-transform duration-200', isOpen ? 'text-accent' : '')}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Expanded content */}
                  <div className={clsx(
                    'transition-all duration-300 overflow-hidden',
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  )}>
                    <div className="px-6 pb-6 border-t border-surface-border">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
                        {cat.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex gap-3 p-4 bg-surface-warm rounded-xl hover:bg-accent/5 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5" />
                            <div>
                              <h5 className="text-primary-dark font-semibold text-sm mb-0.5">{item.name}</h5>
                              <p className="text-ink-muted text-xs leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA locale={locale} />
    </>
  );
}
