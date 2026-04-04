'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { type Locale, isRtl } from '@/i18n/config';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import ContactCTA from '@/components/home/ContactCTA';
import clsx from 'clsx';

const galleryItems = [
  { src: '/assets/images/gallery/gallery-01.jpg', alt: 'Industrial Kitchen Operations', category: 'Facility' },
  { src: '/assets/images/gallery/gallery-02.jpg', alt: 'Food Production Line', category: 'Production' },
  { src: '/assets/images/gallery/gallery-03.jpg', alt: 'Catering Service Setup', category: 'Catering' },
  { src: '/assets/images/gallery/gallery-04.jpg', alt: 'Cold Storage Facility', category: 'Facility' },
  { src: '/assets/images/gallery/gallery-05.jpg', alt: 'Bakery Production', category: 'Production' },
  { src: '/assets/images/gallery/gallery-06.jpg', alt: 'Packaging Line', category: 'Production' },
  { src: '/assets/images/gallery/gallery-07.jpg', alt: 'Event Catering', category: 'Events' },
  { src: '/assets/images/gallery/gallery-08.jpg', alt: 'Delivery Fleet', category: 'Delivery' },
  { src: '/assets/images/gallery/gallery-09.jpg', alt: 'Kitchen Equipment', category: 'Facility' },
  { src: '/assets/images/gallery/gallery-10.jpg', alt: 'Hajj Catering Operations', category: 'Catering' },
  { src: '/assets/images/gallery/gallery-11.jpg', alt: 'Staff Training', category: 'Production' },
  { src: '/assets/images/gallery/gallery-12.jpg', alt: 'Buffet Setup', category: 'Events' },
];

interface GalleryGridProps {
  locale: Locale;
}

export default function GalleryGrid({ locale }: GalleryGridProps) {
  const t = useTranslations('gallery');
  const rtl = isRtl(locale);
  const categories: string[] = t.raw('categories');

  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">{t('sectionLabel')}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {t('headline')}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{t('subheadline')}</p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="bg-surface-warm py-16 lg:py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          {/* Category filter */}
          <div className={clsx('flex flex-wrap gap-2 mb-10', rtl ? 'justify-end' : '')}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === categories[0] ? 'All' : cat)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  (cat === categories[0] && activeCategory === 'All') || activeCategory === cat
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white text-ink-muted border border-surface-border hover:border-accent/30 hover:text-primary-dark'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-zoom-in"
              >
                <PlaceholderImage
                  src={item.src}
                  alt={item.alt}
                  aspectRatio={i % 3 === 0 ? 'aspect-square' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-[3/4]'}
                  label={item.alt}
                  className="w-full"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/50 transition-colors duration-300 flex items-end">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 w-full">
                    <p className="text-white font-medium text-sm">{item.alt}</p>
                    <span className="text-accent/80 text-xs">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}
