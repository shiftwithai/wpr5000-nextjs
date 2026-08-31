import { cookies } from 'next/headers';
import enLocale from '../locales/en';
import frLocale from '../locales/fr-CA';

const BASE_URL = 'https://wpr5000-nextjs-psi.vercel.app';

// Locale-aware metadata for the ABB pages. Titles, descriptions and og alt
// text live in locales/en.ts and locales/fr-CA.ts under meta:<route>:*,
// resolved against the same locale cookie the pages themselves use.
export function abbPageMetadata({ route, image, width = 1200, height = 630 }) {
  return async function generateMetadata() {
    const store = await cookies();
    const isFr = store.get('locale')?.value === 'fr-CA';
    const terms = (isFr ? frLocale : enLocale).terms;
    const t = (key) => terms[key] ?? enLocale.terms[key] ?? key;

    const title = t(`meta:${route}:title`);
    const description = t(`meta:${route}:description`);
    const url = `${BASE_URL}/${route}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: 'Proax',
        images: [{ url: image, width, height, alt: t(`meta:${route}:og-alt`) }],
        locale: isFr ? 'fr_CA' : 'en_CA',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
      },
    };
  };
}
