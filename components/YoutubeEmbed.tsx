'use client';

import { useLocale } from './LocaleContext';

export default function YoutubeEmbed() {
  const { t } = useLocale();
  const src = t('wpr5000:hero:youtube');

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px' }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src={src}
        title="Zimmer WPR5000 Tool Changers"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
