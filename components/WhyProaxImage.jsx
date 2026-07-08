'use client';

import { useLocale } from './LocaleContext';

const EN_IMAGE = 'https://proax.ca/strapiv4/uploads/why_proax_image_7ce2960833.webp';
const FR_IMAGE = 'https://proax.ca/strapiv4/uploads/why_proax_fr_a34a39c3e2.png';

export default function WhyProaxImage() {
  const { locale } = useLocale();
  const src = locale === 'fr-CA' ? FR_IMAGE : EN_IMAGE;

  return (
    <img
      src={src}
      alt="Why Proax"
      width="1200"
      loading="lazy"
    />
  );
}
