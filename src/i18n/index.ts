import type { Locale, Translation } from './types';
import en from './en';
import es from './es';

export type { Locale, Translation };
export const locales: Locale[] = ['en', 'es'];

export const translations: Record<Locale, Translation> = { en, es };

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'es';
}

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}
