'use client';

import React, { createContext, useContext } from 'react';
import enLocale from '../locales/en';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const frCALocale = require('../locales/fr-CA').default;

export type LocaleKey = 'en' | 'fr-CA';

interface LocaleData {
  key: string;
  locale: string;
  terms: Record<string, string>;
}

const localeMap: Record<LocaleKey, LocaleData> = {
  'en': enLocale as unknown as LocaleData,
  'fr-CA': frCALocale as unknown as LocaleData,
};


interface LocaleContextValue {
  locale: LocaleKey;
  t: (id: string, values?: Record<string, string | number>) => string;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  t: (id, values) => id,
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: LocaleKey;
  children: React.ReactNode;
}) {
  const data = localeMap[locale] ?? enLocale;

  const t = (id: string, values?: Record<string, string | number>): string => {
    let text = (data.terms as Record<string, string>)[id] ?? id;
    
    // Replace placeholders like {count} with actual values
    if (values) {
      Object.keys(values).forEach((key) => {
        text = text.replace(new RegExp(`\{${key}\}`, 'g'), String(values[key]));
      });
    }
    
    return text;
  };

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
