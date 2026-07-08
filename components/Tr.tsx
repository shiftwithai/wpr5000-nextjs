'use client';

import { useLocale } from './LocaleContext';

/**
 * <Tr id="wpr5000:hero:heading" />
 * <Tr id="robot-catalog:show-more" values={{ count: 5 }} />
 *
 * Renders the translated string for the given key.
 * Falls back to the key itself if not found.
 * Supports variable interpolation with the values prop.
 */
export default function Tr({ 
  id, 
  values,
  children 
}: { 
  id: string;
  values?: Record<string, string | number>;
  children?: (text: string) => React.ReactNode;
}) {
  const { t } = useLocale();
  const text = t(id, values);
  
  // If children is a function, pass the translated text to it
  if (typeof children === 'function') {
    return <>{children(text)}</>;
  }
  
  return <>{text}</>;
}
