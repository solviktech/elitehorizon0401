'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { isRtl, type Locale } from '@/i18n/config';
import clsx from 'clsx';

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rtl = isRtl(locale);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/sectors`, label: t('sectors') },
    { href: `/${locale}/facility`, label: t('facility') },
    { href: `/${locale}/equipment`, label: t('equipment') },
    { href: `/${locale}/gallery`, label: t('gallery') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-primary-dark/97 backdrop-blur-md shadow-xl'
          : 'bg-gradient-to-b from-primary-dark/80 to-transparent'
      )}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex flex-col group shrink-0">
            <span className="text-white font-bold text-lg lg:text-xl tracking-tight leading-tight group-hover:text-accent transition-colors duration-200">
              Elite Horizon
            </span>
            <span className="text-accent text-xs lg:text-sm font-medium tracking-widest uppercase">
              Catering
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-3 py-2 text-sm font-medium rounded transition-all duration-200 whitespace-nowrap',
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className={clsx('flex items-center gap-3', rtl ? 'flex-row-reverse' : '')}>
            <LanguageSwitcher locale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {t('getProposal')}
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'xl:hidden bg-primary-dark border-t border-white/10 transition-all duration-300 overflow-hidden',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'px-4 py-3 text-sm font-medium rounded transition-all duration-200',
                isActive(link.href)
                  ? 'text-accent bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="mt-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-3 rounded text-center transition-colors"
          >
            {t('getProposal')}
          </Link>
        </div>
      </div>
    </header>
  );
}
