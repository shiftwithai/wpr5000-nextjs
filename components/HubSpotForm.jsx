"use client";

import { useEffect } from 'react';
import { useLocale } from './LocaleContext';

const FORM_CONFIG = {
  en: {
    portalId: "3958257",
    formId: "da5647fe-8a05-4502-acf2-40a664ae5a00",
    region: "na1",
  },
  'fr-CA': {
    portalId: "3958257",
    formId: "4577c007-a883-45f5-af91-32e618855223",
    region: "na1",
  },
};

export default function HubSpotForm() {
  const { locale } = useLocale();
  const config = FORM_CONFIG[locale] ?? FORM_CONFIG.en;

  useEffect(() => {
    const containerId = 'hubspot-form';
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = '';

    const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]');

    const createForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: config.portalId,
          formId: config.formId,
          region: config.region,
          target: `#${containerId}`,
        });
      }
    };

    if (existingScript) {
      // Script already loaded — just create the form
      createForm();
    } else {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = createForm;
      document.head.appendChild(script);
    }
  }, [config.formId, config.portalId]);

  return null;
}
