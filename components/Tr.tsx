'use client';

import { useLocale } from './LocaleContext';

/**
 * <Tr id="wpr5000:hero:heading" />
 *
 * Renders the translated string for the given key.
 * Falls back to the key itself if not found.
 */
export default function Tr({ id }: { id: string }) {
  const { t } = useLocale();
  return <>{t(id)}</>;
}
