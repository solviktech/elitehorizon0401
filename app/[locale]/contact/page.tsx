import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { type Locale, isRtl } from '@/i18n/config';
import SectionWrapper from '@/components/shared/SectionWrapper';
import InquiryForm from '@/components/forms/InquiryForm';
import CertificationsStrip from '@/components/home/CertificationsStrip';
import clsx from 'clsx';

interface ContactPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: ContactPageProps) {
  const t = await getTranslations({ locale, namespace: 'meta.contact' });
  return { title: t('title'), description: t('description'), keywords: t('keywords') };
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  setRequestLocale(locale);

  const t = useTranslations('contact');
  const rtl = isRtl(locale);

  const contactItems = [
    {
      icon: Phone,
      label: t('info.phone'),
      value: t('info.phone'),
      href: `tel:${t('info.phone')}`,
    },
    {
      icon: Mail,
      label: t('info.email'),
      value: t('info.email'),
      href: `mailto:${t('info.email')}`,
    },
    {
      icon: MessageCircle,
      label: t('info.whatsapp'),
      value: t('info.whatsapp'),
      href: `https://wa.me/${t('info.whatsapp').replace(/\D/g, '')}`,
    },
    {
      icon: MapPin,
      label: t('mapLocation'),
      value: t('mapLocation'),
      href: `https://maps.google.com/?q=Makkah+Saudi+Arabia`,
    },
    {
      icon: Clock,
      label: t('responseTimeLabel'),
      value: t('responseTimeValue'),
      href: null,
    },
  ];

  return (
    <div className="pt-header">
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

      {/* Contact layout */}
      <SectionWrapper className="bg-surface-warm py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" dir={rtl ? 'rtl' : 'ltr'}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: contact info + quick actions */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact info */}
              <div className="bg-white rounded-2xl border border-surface-border p-6">
                <h3 className="text-accent text-xs font-semibold uppercase tracking-wider mb-5">
                  {t('infoTitle')}
                </h3>
                <div className="space-y-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className={clsx('flex items-start gap-3', rtl ? 'flex-row-reverse' : '')}>
                        <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-ink-faint text-xs font-medium mb-0.5">{item.label}</p>
                          <p className="text-primary-dark text-sm font-medium">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block hover:bg-surface-warm rounded-xl px-2 py-2 -mx-2 transition-colors duration-200"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className="px-2 py-2">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${t('info.whatsapp').replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  'flex items-center gap-3 bg-[#25D366] hover:bg-[#1fbb57] text-white font-bold px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl w-full justify-center',
                  rtl ? 'flex-row-reverse' : ''
                )}
              >
                <MessageCircle size={22} />
                <span>{t('whatsappBtn')}</span>
              </a>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-surface-border overflow-hidden">
                <div className="aspect-video bg-primary/5 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin size={32} className="text-accent mx-auto mb-2" />
                    <p className="text-primary-dark font-semibold text-sm">{t('mapLocation')}</p>
                    <p className="text-ink-muted text-xs mt-1">{t('mapAvailable')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Inquiry form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-surface-border p-8">
                <h2 className="text-primary-dark font-bold text-xl mb-2">{t('inquiryTitle')}</h2>
                <p className="text-ink-muted text-sm mb-6">
                  {t('inquiryDesc')}
                </p>
                <InquiryForm locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CertificationsStrip locale={locale} />
    </div>
  );
}
