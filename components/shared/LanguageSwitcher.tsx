'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';
import clsx from 'clsx';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // Replace the current locale segment in the path
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium px-2 py-1.5 rounded hover:bg-white/10 transition-all duration-200"
        aria-label="Switch language"
      >
        <Globe size={15} className="shrink-0" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown
          size={13}
          className={clsx('transition-transform duration-200', open ? 'rotate-180' : '')}
        />
      </button>

      {open && (
        <div className="absolute top-full mt-1 right-0 bg-primary-dark border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50 min-w-[160px]">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={clsx(
                'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-150 text-left',
                loc === locale
                  ? 'bg-accent/20 text-accent font-medium'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              )}
            >
              <span className="text-base">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
