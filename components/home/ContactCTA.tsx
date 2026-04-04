import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import clsx from 'clsx';

interface ContactCTAProps {
  locale: Locale;
}

export default function ContactCTA({ locale }: ContactCTAProps) {
  const t = useTranslations('contact');
  const tNav = useTranslations('nav');
  const rtl = isRtl(locale);

  return (
    <SectionWrapper className="bg-white py-20 lg:py-28" id="contact-cta">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
        <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl overflow-hidden relative">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196,152,58,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          />

          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-14 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: Text */}
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  {t('sectionLabel')}
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  {t('headline')}
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  {t('subheadline')}
                </p>

                {/* Contact info */}
                <div className="space-y-3">
                  <div className={clsx('flex items-center gap-3', rtl ? 'flex-row-reverse' : '')}>
                    <Phone size={16} className="text-accent shrink-0" />
                    <a href={`tel:${t('info.phone')}`} className="text-white/80 hover:text-white text-sm transition-colors">
                      {t('info.phone')}
                    </a>
                  </div>
                  <div className={clsx('flex items-center gap-3', rtl ? 'flex-row-reverse' : '')}>
                    <Mail size={16} className="text-accent shrink-0" />
                    <a href={`mailto:${t('info.email')}`} className="text-white/80 hover:text-white text-sm transition-colors">
                      {t('info.email')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Action buttons */}
              <div className={clsx('flex flex-col gap-4', rtl ? 'items-end' : 'items-start lg:items-end')}>
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${t('info.whatsapp').replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fbb57] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center text-sm sm:text-base',
                    rtl ? 'flex-row-reverse' : ''
                  )}
                >
                  <MessageCircle size={20} />
                  {t('whatsappBtn')}
                </a>

                {/* Inquiry Form */}
                <Link
                  href={`/${locale}/contact`}
                  className={clsx(
                    'inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center text-sm sm:text-base',
                    rtl ? 'flex-row-reverse' : ''
                  )}
                >
                  {tNav('getProposal')}
                  <ArrowRight size={18} className={rtl ? 'rotate-180' : ''} />
                </Link>

                {/* Email */}
                <a
                  href={`mailto:${t('info.email')}`}
                  className={clsx(
                    'inline-flex items-center gap-3 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center text-sm sm:text-base',
                    rtl ? 'flex-row-reverse' : ''
                  )}
                >
                  <Mail size={18} />
                  {t('emailBtn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
