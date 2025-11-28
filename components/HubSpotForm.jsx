"use client";

import { useEffect } from 'react';

export default function HubSpotForm() {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      // Create the form after script loads
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "3958257",
          formId: "da5647fe-8a05-4502-acf2-40a664ae5a00",
          region: "na1",
          target: "#hubspot-form"
        });
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
