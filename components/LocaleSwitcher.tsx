'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const other = currentLocale === 'fr-CA' ? 'EN' : 'FR';
  const otherLocale = currentLocale === 'fr-CA' ? 'en' : 'fr-CA';
  const router = useRouter();
  const pathname = usePathname();

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
