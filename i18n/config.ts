export const locales = ['en', 'ar', 'ms', 'ur', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const rtlLocales: Locale[] = ['ar', 'ur'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
  ms: 'Melayu',
  ur: 'اردو',
  tr: 'Türkçe',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  ar: '🇸🇦',
  ms: '🇲🇾',
  ur: '🇵🇰',
  tr: '🇹🇷',
};

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
