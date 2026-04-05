import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

const galleryImages = [
  { src: '/assets/images/gallery/central-kitchen-operations-floor.jpg', alt: 'Kitchen Operations', span: 'col-span-2 row-span-2' },
  { src: '/assets/images/gallery/industrial-food-production-line.jpg', alt: 'Food Production', span: '' },
  { src: '/assets/images/gallery/hospitality-catering-service-setup.jpg', alt: 'Catering Service', span: '' },
  { src: '/assets/images/gallery/cold-chain-storage-facility.jpg', alt: 'Cold Storage', span: '' },
  { src: '/assets/images/gallery/commercial-bakery-production-line.jpg', alt: 'Bakery', span: '' },
  { src: '/assets/images/gallery/meal-packaging-assembly-line.jpg', alt: 'Packaging Line', span: '' },
];

interface GalleryPreviewProps {
  locale: Locale;
}

export default function GalleryPreview({ locale }: GalleryPreviewProps) {
  const t = useTranslations('gallery');
  const rtl = isRtl(locale);

  return (
    <SectionWrapper className="bg-surface-warm py-20 lg:py-28" id="gallery">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              {t('sectionLabel')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">{t('headline')}</h2>
          </div>
          <Link
            href={`/${locale}/gallery`}
            className="hidden sm:inline-flex text-primary-dark border border-primary/20 hover:bg-primary-dark hover:text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-200 whitespace-nowrap"
          >
            {t('viewAll')}
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <Link
              key={i}
              href={`/${locale}/gallery`}
              className={`group overflow-hidden rounded-xl ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? 'aspect-square sm:aspect-auto sm:h-full min-h-[200px]' : 'aspect-square'}`}>
                <PlaceholderImage
                  src={img.src}
                  alt={img.alt}
                  aspectRatio="aspect-square"
                  label={img.alt}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex text-primary-dark border border-primary/20 hover:bg-primary-dark hover:text-white px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
