'use client';

import { useEffect } from 'react';

export default function ElevenLabsWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <elevenlabs-convai agent-id="agent_7101k97wygvjf9gas4p1zb39z4cn"></elevenlabs-convai>
  );
}
