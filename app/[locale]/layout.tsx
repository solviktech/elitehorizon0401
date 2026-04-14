import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, isRtl, type Locale } from '@/i18n/config';
import { siteUrl, withBasePath } from '@/lib/site';
import { getLanguageAlternates, getLocalizedUrl } from '@/lib/seo';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: LocaleLayoutProps) {
  const t = await getTranslations({ locale, namespace: 'meta.home' });

  return {
    title: {
      default: t('title'),
      template: '%s',
    },
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: getLocalizedUrl(locale as Locale),
      languages: getLanguageAlternates(),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  const messages = await getMessages();
  const rtl = isRtl(locale as Locale);

  return (
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="x-default" href={getLocalizedUrl('en')} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": `${siteUrl}#organization`,
                "name": "Elite Horizon Catering",
                "alternateName": "مسارات النخبة للإعاشة",
                "url": siteUrl,
                "logo": `${siteUrl}${withBasePath('/assets/images/elite-horizon-catering-logo.jpg')}`,
                "description": "Integrated catering and central kitchen solutions in Makkah, Saudi Arabia",
                "telephone": "+966533666850",
                "email": "el8hzn.cater@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Makkah",
                  "addressCountry": "SA"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+966533666850",
                  "email": "el8hzn.cater@gmail.com",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Arabic", "Urdu", "Malay", "Turkish"]
                },
                "sameAs": []
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": `${siteUrl}#website`,
                "url": siteUrl,
                "name": "Elite Horizon Catering",
                "inLanguage": locales,
                "publisher": {
                  "@id": `${siteUrl}#organization`
                }
              }
            ])
          }}
        />
      </head>
      <body className={rtl ? 'font-arabic' : ''}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale as Locale} />
          <main className="min-h-screen page-enter">
            {children}
          </main>
          <Footer locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
