import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();
  const rtl = isRtl(locale);

  const companyLinks = [
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/facility`, label: t('nav.facility') },
    { href: `/${locale}/equipment`, label: t('nav.equipment') },
    { href: `/${locale}/gallery`, label: t('nav.gallery') },
  ];

  const serviceLinks = [
    { href: `/${locale}/services`, label: 'Mass Catering' },
    { href: `/${locale}/services`, label: 'Healthy Meals' },
    { href: `/${locale}/services`, label: 'Bakery' },
    { href: `/${locale}/services`, label: 'Consulting' },
  ];

  const sectorLinks = [
    { href: `/${locale}/sectors`, label: 'Hajj & Umrah' },
    { href: `/${locale}/sectors`, label: 'Hotels' },
    { href: `/${locale}/sectors`, label: 'Healthcare' },
    { href: `/${locale}/sectors`, label: 'Education' },
  ];

  return (
    <footer className="bg-primary-dark text-white" dir={rtl ? 'rtl' : 'ltr'}>
      {/* Main Footer */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-white font-bold text-xl tracking-tight">Elite Horizon</div>
              <div className="text-accent text-xs font-medium tracking-widest uppercase mt-0.5">
                Catering
              </div>
              <div className="text-white/60 text-xs mt-1 font-arabic">مسارات النخبة للإعاشة</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer.description')}
            </p>
            {/* Contact quick info */}
            <div className="space-y-2.5">
              <a href={`tel:${t('contact.info.phone')}`} className="flex items-center gap-2.5 text-white/60 hover:text-accent transition-colors text-sm">
                <Phone size={14} className="shrink-0 text-accent" />
                <span>{t('contact.info.phone')}</span>
              </a>
              <a href={`mailto:${t('contact.info.email')}`} className="flex items-center gap-2.5 text-white/60 hover:text-accent transition-colors text-sm">
                <Mail size={14} className="shrink-0 text-accent" />
                <span>{t('contact.info.email')}</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin size={14} className="shrink-0 text-accent mt-0.5" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer.links.company')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer.links.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors + CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t('footer.links.sectors')}
            </h3>
            <ul className="space-y-3 mb-8">
              {sectorLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${t('contact.info.whatsapp').replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbb57] text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors duration-200"
            >
              <MessageCircle size={16} />
              {t('contact.whatsappBtn')}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{t('footer.copyright')}</p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/contact`} className="text-white/40 hover:text-white/60 text-xs transition-colors">
              {t('common.contactUs')}
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-white/40 text-xs">{t('footer.location')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
