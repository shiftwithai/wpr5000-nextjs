'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from './LocaleContext';

export default function LocaleSwitcher({ currentLocale: propLocale }: { currentLocale?: string }) {
  const { locale: contextLocale } = useLocale();
  const currentLocale = propLocale ?? contextLocale;
  const other = currentLocale === 'fr-CA' ? 'EN' : 'FR';
  const otherLocale = currentLocale === 'fr-CA' ? 'en' : 'fr-CA';
  const router = useRouter();

  const switchLocale = () => {
    // Store in cookie so the server can read it on next request
    document.cookie = `locale=${otherLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <button
      onClick={switchLocale}
      className="locale-switcher-btn"
      aria-label={`Switch to ${other}`}
      title={`Switch to ${other}`}
    >
      {other}
    </button>
  );
}
