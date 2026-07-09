'use client';

// Built-in language-switcher UI is intentionally disabled.
// The site is deployed behind a custom domain that provides its own language
// switcher, so this button is hidden everywhere it's rendered (layout + pages).
//
// The locale system itself is unchanged. To switch language from a custom
// control, set the `locale` cookie to 'en' or 'fr-CA' and refresh the route:
//   document.cookie = `locale=fr-CA; path=/; max-age=31536000; SameSite=Lax`;
//   router.refresh();
// The server reads this cookie in app/layout.tsx and feeds it to LocaleProvider.
export default function LocaleSwitcher(_props?: { currentLocale?: string }) {
  return null;
}
