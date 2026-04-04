import clsx from 'clsx';
import { withBasePath } from '@/lib/site';

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  label?: string;
}

export default function PlaceholderImage({
  src,
  alt,
  className,
  imgClassName,
  aspectRatio = 'aspect-video',
  label,
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={clsx('overflow-hidden', aspectRatio, className)}>
        <img
          src={withBasePath(src)}
          alt={alt}
          className={clsx(
            'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
            imgClassName
          )}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary-light/10 border border-primary/10',
        aspectRatio,
        className
      )}
    >
      <div className="text-center p-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/40">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15l-5-5-4 4-2-2-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {label && <p className="text-primary/40 text-xs font-medium">{label}</p>}
        {!label && <p className="text-primary/40 text-xs font-medium">{alt}</p>}
      </div>
    </div>
  );
}
