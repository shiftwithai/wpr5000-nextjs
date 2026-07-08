"use client";

import { useEffect } from 'react';
import { useLocale } from './LocaleContext';

const FORM_CONFIG = {
  // ABB Robotics forms
  abb: {
    en: {
      portalId: "3958257",
      formId: "abd801f8-3d81-4164-aef7-db375eb56347",
      region: "na1",
    },
    'fr-CA': {
      portalId: "3958257",
      formId: "ebf7f99a-880a-4ea2-953b-d52b2a79d35e",
      region: "na1",
    },
  },
  // Zimmer forms (default)
  zimmer: {
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
  },
};

export default function HubSpotForm({ formType = 'zimmer' }) {
  const { locale } = useLocale();
  const formConfig = FORM_CONFIG[formType] ?? FORM_CONFIG.zimmer;
  const config = formConfig[locale] ?? formConfig.en;
  // Use formId in the containerId to ensure each unique form gets its own container
  const containerId = `hubspot-form-${formType}-${config.formId.slice(0, 8)}`;

  useEffect(() => {
    let cancelled = false;

    const container = document.getElementById(containerId);
    if (container) container.innerHTML = '';

    const createForm = () => {
      if (cancelled) return;
      if (!window.hbspt) return;
      const target = document.getElementById(containerId);
      if (!target) return;
      window.hbspt.forms.create({
        portalId: config.portalId,
        formId: config.formId,
        region: config.region,
        target: `#${containerId}`,
      });
    };

    // Poll until hbspt is available (handles the case where the script tag
    // exists in DOM but hbspt object hasn't been initialized yet)
    const waitForHbspt = () => {
      if (cancelled) return;
      if (window.hbspt) {
        createForm();
      } else {
        setTimeout(waitForHbspt, 100);
      }
    };

    const existingScript = document.querySelector(
      'script[src="//js.hsforms.net/forms/embed/v2.js"]'
    );

    if (existingScript) {
      // Script tag exists — poll for hbspt to be ready
      waitForHbspt();
    } else {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = waitForHbspt;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, [config.formId, config.portalId, containerId]);

  return <div id={containerId} className="quote-form-container" />;
}
