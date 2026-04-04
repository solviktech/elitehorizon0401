import clsx from 'clsx';

interface SectionHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  headline,
  subheadline,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  }[align];

  return (
    <div className={clsx('max-w-3xl', alignClass, className)}>
      {label && (
        <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          {label}
        </p>
      )}
      <h2
        className={clsx(
          'text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4',
          light ? 'text-white' : 'text-primary-dark'
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={clsx(
            'text-base sm:text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-ink-muted'
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
