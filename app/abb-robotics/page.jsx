'use client';

import { useState, useMemo, useEffect, useRef } from 'react'
import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

const industriesData = [
  {
    titleKey: 'solutions-explorer:industry-automotive:title',
    descKey: 'solutions-explorer:industry-automotive:desc',
    image: 'https://proax.ca/strapiv4/uploads/automotive_6cf6d32373.png',
  },
  {
    titleKey: 'solutions-explorer:industry-construction:title',
    descKey: 'solutions-explorer:industry-construction:desc',
    image: 'https://proax.ca/strapiv4/uploads/construction_bb8218919c.png',
  },
  {
    titleKey: 'solutions-explorer:industry-education:title',
    descKey: 'solutions-explorer:industry-education:desc',
    image: 'https://proax.ca/strapiv4/uploads/educational_a329d4fe22.png',
  },
  {
    titleKey: 'solutions-explorer:industry-electronics:title',
    descKey: 'solutions-explorer:industry-electronics:desc',
    image: 'https://proax.ca/strapiv4/uploads/electronics_82045e6a85.png',
  },
  {
    titleKey: 'solutions-explorer:industry-food-beverage:title',
    descKey: 'solutions-explorer:industry-food-beverage:desc',
    image: 'https://proax.ca/strapiv4/uploads/food_and_bev_032e9192ff.png',
  },
  {
    titleKey: 'solutions-explorer:industry-foundry:title',
    descKey: 'solutions-explorer:industry-foundry:desc',
    image: 'https://proax.ca/strapiv4/uploads/Foundry_and_Forging_6944e2115b.png',
  },
  {
    titleKey: 'solutions-explorer:industry-life-sciences:title',
    descKey: 'solutions-explorer:industry-life-sciences:desc',
    image: 'https://proax.ca/strapiv4/uploads/Life_Sciences_and_Healthcare_bb40e8c9a8.png',
  },
  {
    titleKey: 'solutions-explorer:industry-logistics:title',
    descKey: 'solutions-explorer:industry-logistics:desc',
    image: 'https://proax.ca/strapiv4/uploads/logistics_9ac4c96569.png',
  },
  {
    titleKey: 'solutions-explorer:industry-metal-fab:title',
    descKey: 'solutions-explorer:industry-metal-fab:desc',
    image: 'https://proax.ca/strapiv4/uploads/metal_fabrication_c15f51fd98.png',
  },
];

const applicationsData = [
  {
    titleKey: 'solutions-explorer:app-food-beverage:title',
    descKey: 'solutions-explorer:app-food-beverage:desc',
    link: '/abb-robotics-food-beverage',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="80" width="24" height="8" rx="2"/>
        <rect x="28" y="72" width="8" height="8"/>
        <rect x="28" y="50" width="8" height="24" rx="2"/>
        <circle cx="32" cy="50" r="6"/>
        <rect x="32" y="46" width="24" height="8" rx="2"/>
        <circle cx="56" cy="50" r="5"/>
        <rect x="56" y="38" width="6" height="16" rx="2"/>
        <circle cx="59" cy="38" r="4"/>
        <rect x="52" y="28" width="4" height="12" rx="1"/>
        <rect x="62" y="28" width="4" height="12" rx="1"/>
        <rect x="54" y="16" width="10" height="12" rx="1"/>
        <rect x="76" y="58" width="12" height="22" rx="3"/>
        <rect x="79" y="52" width="6" height="8" rx="1"/>
        <circle cx="82" cy="52" r="3"/>
        <circle cx="67" cy="72" r="8"/>
        <rect x="66" y="62" width="2" height="4" rx="1"/>
        <ellipse cx="71" cy="65" rx="3" ry="2"/>
        <rect x="50" y="82" width="40" height="6" rx="2"/>
        <circle cx="56" cy="85" r="2"/>
        <circle cx="70" cy="85" r="2"/>
        <circle cx="84" cy="85" r="2"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-cleanroom:title',
    descKey: 'solutions-explorer:app-cleanroom:desc',
    link: '/abb-robotics-cleanroom-robots',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="78" width="24" height="8" rx="2"/>
        <rect x="24" y="70" width="8" height="8"/>
        <rect x="24" y="48" width="8" height="24" rx="2"/>
        <circle cx="28" cy="48" r="6"/>
        <rect x="28" y="44" width="26" height="8" rx="2"/>
        <circle cx="54" cy="48" r="5"/>
        <rect x="54" y="32" width="6" height="18" rx="2"/>
        <rect x="50" y="24" width="4" height="10" rx="1"/>
        <rect x="60" y="24" width="4" height="10" rx="1"/>
        <circle cx="57" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M70 14 L86 14 L86 72 L70 72" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="74" y="22" width="2" height="6" rx="1"/>
        <rect x="74" y="34" width="2" height="6" rx="1"/>
        <rect x="74" y="46" width="2" height="6" rx="1"/>
        <rect x="74" y="58" width="2" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-lab:title',
    descKey: 'solutions-explorer:app-lab:desc',
    link: '/abb-robotics-lab-automation',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="78" width="24" height="8" rx="2"/>
        <rect x="20" y="70" width="8" height="8"/>
        <rect x="20" y="48" width="8" height="24" rx="2"/>
        <circle cx="24" cy="48" r="6"/>
        <rect x="24" y="44" width="26" height="8" rx="2"/>
        <circle cx="50" cy="48" r="5"/>
        <rect x="50" y="32" width="6" height="18" rx="2"/>
        <rect x="46" y="24" width="4" height="10" rx="1"/>
        <rect x="56" y="24" width="4" height="10" rx="1"/>
        <rect x="49" y="10" width="8" height="20" rx="4"/>
        <path d="M72 82 L64 82 L64 58 L68 50 L78 50 L82 58 L82 82 L72 82" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <rect x="68" y="44" width="10" height="6" rx="1"/>
        <rect x="66" y="68" width="14" height="12" rx="1"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-material-handling:title',
    descKey: 'solutions-explorer:app-material-handling:desc',
    link: '/abb-robotics-material-handling',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="78" width="24" height="8" rx="2"/>
        <rect x="20" y="70" width="8" height="8"/>
        <rect x="20" y="48" width="8" height="24" rx="2"/>
        <circle cx="24" cy="48" r="6"/>
        <rect x="24" y="44" width="26" height="8" rx="2"/>
        <circle cx="50" cy="48" r="5"/>
        <rect x="50" y="32" width="6" height="18" rx="2"/>
        <rect x="46" y="24" width="4" height="10" rx="1"/>
        <rect x="56" y="24" width="4" height="10" rx="1"/>
        <rect x="46" y="12" width="14" height="14" rx="2"/>
        <rect x="72" y="70" width="16" height="16" rx="2"/>
        <rect x="72" y="52" width="16" height="16" rx="2"/>
        <path d="M62 20 L70 20 L70 16 L80 22 L70 28 L70 24 L62 24 Z"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-packaging:title',
    descKey: 'solutions-explorer:app-packaging:desc',
    link: '/abb-robotics-packaging',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="78" width="24" height="8" rx="2"/>
        <rect x="16" y="70" width="8" height="8"/>
        <rect x="16" y="48" width="8" height="24" rx="2"/>
        <circle cx="20" cy="48" r="6"/>
        <rect x="20" y="44" width="26" height="8" rx="2"/>
        <circle cx="46" cy="48" r="5"/>
        <rect x="46" y="32" width="6" height="18" rx="2"/>
        <rect x="42" y="24" width="4" height="10" rx="1"/>
        <rect x="52" y="24" width="4" height="10" rx="1"/>
        <rect x="42" y="12" width="14" height="14" rx="2"/>
        <rect x="64" y="64" width="12" height="12" rx="2"/>
        <rect x="78" y="64" width="12" height="12" rx="2"/>
        <rect x="64" y="50" width="12" height="12" rx="2"/>
        <rect x="78" y="50" width="12" height="12" rx="2"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-palletizing:title',
    descKey: 'solutions-explorer:app-palletizing:desc',
    link: '/abb-robotics-palletizing-robots',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="78" width="24" height="8" rx="2"/>
        <rect x="16" y="70" width="8" height="8"/>
        <rect x="16" y="48" width="8" height="24" rx="2"/>
        <circle cx="20" cy="48" r="6"/>
        <rect x="20" y="44" width="26" height="8" rx="2"/>
        <circle cx="46" cy="48" r="5"/>
        <rect x="46" y="32" width="6" height="18" rx="2"/>
        <rect x="42" y="24" width="4" height="10" rx="1"/>
        <rect x="52" y="24" width="4" height="10" rx="1"/>
        <rect x="42" y="12" width="14" height="14" rx="2"/>
        <rect x="62" y="82" width="30" height="4" rx="1"/>
        <rect x="64" y="78" width="4" height="4"/>
        <rect x="76" y="78" width="4" height="4"/>
        <rect x="88" y="78" width="4" height="4"/>
        <rect x="64" y="64" width="12" height="12" rx="2"/>
        <rect x="78" y="64" width="12" height="12" rx="2"/>
        <rect x="64" y="50" width="12" height="12" rx="2"/>
        <rect x="78" y="50" width="12" height="12" rx="2"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-sanding:title',
    descKey: 'solutions-explorer:app-sanding:desc',
    link: '/abb-robotics-sanding-polishing',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="78" width="24" height="8" rx="2"/>
        <rect x="16" y="70" width="8" height="8"/>
        <rect x="16" y="48" width="8" height="24" rx="2"/>
        <circle cx="20" cy="48" r="6"/>
        <rect x="20" y="44" width="26" height="8" rx="2"/>
        <circle cx="46" cy="48" r="5"/>
        <rect x="46" y="32" width="6" height="18" rx="2"/>
        <rect x="42" y="24" width="4" height="10" rx="1"/>
        <rect x="52" y="24" width="4" height="10" rx="1"/>
        <rect x="42" y="12" width="14" height="14" rx="2"/>
        <circle cx="70" cy="35" r="18" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="70" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M82 47 L88 53" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="75" cy="28" r="2"/>
        <circle cx="65" cy="28" r="2"/>
        <circle cx="75" cy="42" r="2"/>
        <circle cx="65" cy="42" r="2"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-paint:title',
    descKey: 'solutions-explorer:app-paint:desc',
    link: '/abb-robotics-paint-automation',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="78" width="24" height="8" rx="2"/>
        <rect x="16" y="70" width="8" height="8"/>
        <rect x="16" y="48" width="8" height="24" rx="2"/>
        <circle cx="20" cy="48" r="6"/>
        <rect x="20" y="44" width="26" height="8" rx="2"/>
        <circle cx="46" cy="48" r="5"/>
        <rect x="46" y="32" width="6" height="18" rx="2"/>
        <rect x="44" y="22" width="10" height="12" rx="2"/>
        <rect x="47" y="16" width="4" height="8" rx="1"/>
        <circle cx="49" cy="10" r="2"/>
        <circle cx="42" cy="6" r="1.5"/>
        <circle cx="56" cy="6" r="1.5"/>
        <circle cx="38" cy="12" r="1.5"/>
        <circle cx="60" cy="12" r="1.5"/>
        <rect x="68" y="24" width="24" height="48" rx="4"/>
        <rect x="72" y="32" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="80" cy="58" r="3"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:app-welding:title',
    descKey: 'solutions-explorer:app-welding:desc',
    link: '/abb-robotics-welding-robots',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="78" width="24" height="8" rx="2"/>
        <rect x="16" y="70" width="8" height="8"/>
        <rect x="16" y="48" width="8" height="24" rx="2"/>
        <circle cx="20" cy="48" r="6"/>
        <rect x="20" y="44" width="26" height="8" rx="2"/>
        <circle cx="46" cy="48" r="5"/>
        <rect x="46" y="32" width="6" height="18" rx="2"/>
        <rect x="44" y="24" width="10" height="10" rx="2"/>
        <rect x="47" y="16" width="4" height="10" rx="1"/>
        <circle cx="49" cy="12" r="2"/>
        <path d="M44 8 L40 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M54 8 L58 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 14 L36 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M56 14 L62 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="66" y="10" width="26" height="8" rx="1"/>
        <rect x="78" y="10" width="8" height="36" rx="1"/>
        <circle cx="82" cy="14" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const robotTypesData = [
  {
    titleKey: 'solutions-explorer:robot-mobile:title',
    descKey: 'solutions-explorer:robot-mobile:desc',
    link: '/abb-robotics-mobile-robots',
    isNew: true,
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="40" width="64" height="28" rx="5"/>
        <rect x="26" y="30" width="30" height="12" rx="3"/>
        <circle cx="34" cy="72" r="7"/>
        <circle cx="64" cy="72" r="7"/>
        <path d="M62 54 L82 54 M76 48 L84 54 L76 60" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:robot-cobot:title',
    descKey: 'solutions-explorer:robot-cobot:desc',
    link: '/abb-robotics-collaborative-robots',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 95 C42 95 38 95 38 91 L38 75 C38 71 42 71 45 71 L55 71 C58 71 62 71 62 75 L62 91 C62 95 58 95 58 95 Z"/>
        <circle cx="50" cy="65" r="8"/>
        <path d="M44 65 L44 35 C44 31 46 29 50 29 C54 29 56 31 56 35 L56 65 Z"/>
        <circle cx="50" cy="26" r="7"/>
        <path d="M50 26 L50 22 C50 19 52 17 55 17 L75 17 C79 17 81 19 81 23 C81 27 79 29 75 29 L55 29 C52 29 50 27 50 26 Z"/>
        <circle cx="81" cy="23" r="5"/>
        <path d="M84 18 L89 10 C90 8 89 6 87 6 C85 6 84 7 83 9 L79 16 Z"/>
        <path d="M84 28 L89 36 C90 38 89 40 87 40 C85 40 84 39 83 37 L79 30 Z"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:robot-articulated:title',
    descKey: 'solutions-explorer:robot-articulated:desc',
    link: '/abb-robotics-articulated-robots',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 95 L70 95 L65 85 L35 85 Z"/>
        <circle cx="50" cy="80" r="10"/>
        <circle cx="50" cy="68" r="7"/>
        <path d="M45 68 L30 40 C28 36 30 33 34 33 C38 33 40 36 42 40 L55 68 Z"/>
        <circle cx="32" cy="32" r="6"/>
        <path d="M32 38 L32 26 L58 12 C62 10 65 12 65 16 C65 20 63 22 60 24 L38 38 Z"/>
        <circle cx="65" cy="14" r="5"/>
        <path d="M70 14 L82 10 C85 9 87 11 87 14 C87 17 85 19 82 18 L70 16 Z"/>
        <circle cx="87" cy="14" r="4"/>
        <path d="M91 10 L96 6 C97 5 98 6 98 8 L95 14 C95 16 94 17 92 16 L91 14 Z"/>
        <path d="M91 18 L96 22 C97 23 98 22 98 20 L95 14 C95 12 94 11 92 12 L91 14 Z"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:robot-scara:title',
    descKey: 'solutions-explorer:robot-scara:desc',
    link: '/abb-robotics-scara-robots',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 95 L36 95 L36 90 L20 90 Z"/>
        <path d="M22 90 L34 90 L34 45 L22 45 Z"/>
        <circle cx="28" cy="40" r="9"/>
        <path d="M28 34 L60 30 C64 29 66 32 66 36 C66 40 64 43 60 42 L28 46 Z"/>
        <circle cx="66" cy="36" r="7"/>
        <path d="M66 30 L88 22 C91 21 93 23 93 26 C93 29 91 31 88 30 L66 42 Z"/>
        <circle cx="90" cy="26" r="5"/>
        <path d="M87 31 L93 31 L93 60 L87 60 Z"/>
        <circle cx="90" cy="63" r="4"/>
        <path d="M86 67 L88 75 L86 78 L84 75 Z"/>
        <path d="M94 67 L96 75 L94 78 L92 75 Z"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:robot-delta:title',
    descKey: 'solutions-explorer:robot-delta:desc',
    link: '/abb-robotics-delta-robots',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 8L12 20L20 8L12 3ZM12 3V20M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:robot-paint:title',
    descKey: 'solutions-explorer:robot-paint:desc',
    link: '/abb-robotics-paint-automation',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="78" width="24" height="8" rx="2"/>
        <rect x="16" y="70" width="8" height="8"/>
        <rect x="16" y="48" width="8" height="24" rx="2"/>
        <circle cx="20" cy="48" r="6"/>
        <rect x="20" y="44" width="26" height="8" rx="2"/>
        <circle cx="46" cy="48" r="5"/>
        <rect x="46" y="32" width="6" height="18" rx="2"/>
        <rect x="44" y="22" width="10" height="12" rx="2"/>
        <rect x="47" y="16" width="4" height="8" rx="1"/>
        <circle cx="49" cy="10" r="2"/>
        <circle cx="42" cy="6" r="1.5"/>
        <circle cx="56" cy="6" r="1.5"/>
        <circle cx="38" cy="12" r="1.5"/>
        <circle cx="60" cy="12" r="1.5"/>
        <rect x="68" y="24" width="24" height="48" rx="4"/>
        <rect x="72" y="32" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="80" cy="58" r="3"/>
      </svg>
    ),
  },
  {
    titleKey: 'solutions-explorer:robot-palletizing:title',
    descKey: 'solutions-explorer:robot-palletizing:desc',
    link: '/palletizing-robots',
    icon: (
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="78" width="24" height="8" rx="2"/>
        <rect x="16" y="70" width="8" height="8"/>
        <rect x="16" y="48" width="8" height="24" rx="2"/>
        <circle cx="20" cy="48" r="6"/>
        <rect x="20" y="44" width="26" height="8" rx="2"/>
        <circle cx="46" cy="48" r="5"/>
        <rect x="46" y="32" width="6" height="18" rx="2"/>
        <rect x="42" y="24" width="4" height="10" rx="1"/>
        <rect x="52" y="24" width="4" height="10" rx="1"/>
        <rect x="42" y="12" width="14" height="14" rx="2"/>
        <rect x="62" y="82" width="30" height="4" rx="1"/>
        <rect x="64" y="78" width="4" height="4"/>
        <rect x="76" y="78" width="4" height="4"/>
        <rect x="88" y="78" width="4" height="4"/>
        <rect x="64" y="64" width="12" height="12" rx="2"/>
        <rect x="78" y="64" width="12" height="12" rx="2"/>
        <rect x="64" y="50" width="12" height="12" rx="2"/>
        <rect x="78" y="50" width="12" height="12" rx="2"/>
      </svg>
    ),
  },
];

const tabs = [
  { id: 'applications', label: 'Applications', data: applicationsData },
  { id: 'robot-types', label: 'Robot Types', data: robotTypesData },
  { id: 'industries', label: 'Industries', data: industriesData },
];

function SolutionsExplorer() {
  const [activeTab, setActiveTab] = useState('applications');

  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <section className="solutions-explorer-section" id="explore-robots">
      <div className="container">
        <h2 className="solutions-explorer-heading"><Tr id="solutions-explorer:heading" /></h2>
        <p className="solutions-explorer-subheading">
          <Tr id="solutions-explorer:subheading" />
        </p>

        <div className="solutions-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`solutions-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Tr id={`solutions-explorer:tab-${tab.id}`} />
            </button>
          ))}
        </div>

        <div className="solutions-grid">
          {activeData.map((item, index) => {
            const CardContent = (
              <>
                {item.image ? (
                  <div className="solution-card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                ) : (
                  <div className="solution-card-icon">{item.icon}</div>
                )}
                <h3 className="solution-card-title"><Tr id={item.titleKey} />{item.isNew && <span className="new-badge"><Tr id="abb:new-badge" /></span>}</h3>
                <p className="solution-card-description"><Tr id={item.descKey} /></p>
                {item.link && (
                  <span className="solution-card-link"><Tr id="solutions-explorer:learn-more" /></span>
                )}
              </>
            );
            
            const cardClass = `solution-card${item.image ? ' solution-card-with-image' : ''}${item.link ? ' solution-card-clickable' : ''}${item.isNew ? ' solution-card-new' : ''}`;
            
            return item.link ? (
              <a key={index} href={item.link} className={cardClass}>
                {CardContent}
              </a>
            ) : (
              <div key={index} className={cardClass}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Placeholder data - will be replaced with actual robot data
const robotsData = [
  {
    id: 'powa',
    name: 'PoWa™ (CRB 1910 / 1920)',
    isNew: true,
    applications: ['Machine tending', 'Palletizing', 'Screwdriving', 'Arc welding', 'Material handling', 'Assembly'],
    payload: '7 - 30 kg',
    reach: '1.34 - 1.96 m',
    payloadCategory: 'A,B,C',
    reachCategory: 'A,B',
    controllers: ['OmniCore']
  },
  {
    id: 'flexley-tug',
    name: 'Flexley Tug (AMR T701 / T702)',
    isNew: true,
    applications: ['Material handling', 'Towing'],
    payload: 'up to 2,000 kg',
    reach: 'Visual SLAM',
    payloadCategory: 'E',
    reachCategory: '',
    controllers: ['AMR Studio']
  },
  {
    id: 'flexley-mover',
    name: 'Flexley Mover (AMR P603 / P604)',
    isNew: true,
    applications: ['Material handling', 'Warehouse logistics'],
    payload: 'up to 1,500 kg',
    reach: 'Visual SLAM',
    payloadCategory: 'E',
    reachCategory: '',
    controllers: ['AMR Studio']
  },
  {
    id: 'flexley-stack',
    name: 'Flexley Stack (AMR F712)',
    isNew: true,
    applications: ['Material handling', 'Palletizing'],
    payload: 'up to 2,000 kg',
    reach: 'Visual SLAM',
    payloadCategory: 'E',
    reachCategory: '',
    controllers: ['AMR Studio']
  },
  {
    id: 'gofa-5',
    name: 'GoFa 5 (CRB 15000)',
    applications: ['Material handling', 'Machine tending', 'Assembly', 'Screwdriving', 'Collaboration', 'Small parts assembly', 'Picking', 'Packaging'],
    payload: '5 kg',
    reach: '0.95 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore C30'],
    productUrl: 'https://proax.ca/en/product/2742138/abbcrb1500050:95'
  },
  {
    id: 'gofa-10',
    name: 'GoFa 10 (CRB 15000)',
    applications: ['Material handling', 'Machine tending', 'Assembly', 'Screwdriving', 'Collaboration', 'Small parts assembly', 'Picking', 'Packaging'],
    payload: '10 kg',
    reach: '1.62 m',
    payloadCategory: 'B',
    reachCategory: 'A',
    controllers: ['OmniCore C30'],
    productUrl: 'https://proax.ca/en/product/2742136/abbcrb15000101:52'
  },
  {
    id: 'gofa-12',
    name: 'GoFa 12 (CRB 15000)',
    applications: ['Material handling', 'Machine tending', 'Assembly', 'Screwdriving', 'Collaboration', 'Small parts assembly', 'Picking', 'Packaging'],
    payload: '12 kg',
    reach: '1.40 m',
    payloadCategory: 'B',
    reachCategory: 'A',
    controllers: ['OmniCore C30'],
    productUrl: 'https://proax.ca/en/product/2742137/abbcrb15000121:27'
  },
  {
    id: 'irb-1010',
    name: 'IRB 1010',
    applications: ['Education', 'Electronics'],
    payload: '1.5 kg',
    reach: '0.37 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30']
  },
  {
    id: 'irb-1090',
    name: 'IRB 1090',
    applications: ['Education'],
    payload: '3.5 kg',
    reach: '0.58 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10']
  },
  {
    id: 'irb-1100',
    name: 'IRB 1100',
    applications: ['Assembly', 'Testing', 'Loading and unloading', 'Screwdriving', 'Rubber insertion'],
    payload: '4 kg',
    reach: '0.475-0.58 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  },
  {
    id: 'irb-1200',
    name: 'IRB 1200',
    applications: ['Assembly', 'Material handling', 'Machine tending'],
    payload: '5-7 kg',
    reach: '0.7-0.9 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT', 'IRC5']
  },
  {
    id: 'irb-1200-hygienic',
    name: 'IRB 1200 Hygienic',
    applications: ['Food & Beverage', 'Packaging', 'Picking'],
    payload: '5-7 kg',
    reach: '0.7-0.9 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT', 'IRC5']
  },
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    applications: ['Assembly', 'Material handling', 'Machine tending', 'Polishing', 'Loading and unloading', 'Welding', 'Item picking'],
    payload: '7-12 kg',
    reach: '0.9-1.4 m',
    payloadCategory: 'A,B',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT', 'V250XT', 'V400XT']
  },
  {
    id: 'irb-14050-single-arm-yumi',
    name: 'IRB 14050 Single-arm YuMi',
    applications: ['Small parts assembly', 'Assembly', 'Collaboration'],
    payload: '0.5 kg',
    reach: '0.5 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore C30']
  },
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    applications: ['Cleaning', 'Spraying', 'Arc welding', 'Assembly', 'Die casting', 'Injection moulding', 'Machine tending', 'Material handling', 'Packaging'],
    payload: '6-10 kg',
    reach: '1.2-1.45 m',
    payloadCategory: 'A,B',
    reachCategory: 'A',
    controllers: ['IRC5', 'OmniCore C30', 'C90', 'V250XT', 'V400XT']
  },
  {
    id: 'irb-2600',
    name: 'IRB 2600',
    applications: ['Machine tending', 'Material handling', 'Arc welding', 'Cutting', 'Dispensing', 'Assembly', 'Palletizing', 'Packaging', 'Measuring'],
    payload: '12-20 kg',
    reach: '1.65-1.85 m',
    payloadCategory: 'B,C',
    reachCategory: 'A,B',
    controllers: ['OmniCore V250XT', 'V400XT', 'IRC5']
  },
  {
    id: 'irb-360',
    name: 'IRB 360',
    applications: ['Assembly', 'Material handling', 'Packaging', 'Picking'],
    payload: '1-8 kg',
    reach: 'Ø1.13 m',
    payloadCategory: 'A,B',
    reachCategory: 'A',
    controllers: ['OmniCore C30', 'IRC5']
  },
  {
    id: 'irb-365',
    name: 'IRB 365',
    applications: ['Food & Beverage', 'Packaging', 'Picking', 'Consumer Packaged Goods', 'E-commerce', 'Pharmaceutical'],
    payload: '1.5 kg',
    reach: 'Ø1.10 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore C30']
  },
  {
    id: 'irb-390',
    name: 'IRB 390',
    applications: ['Assembly', 'Material handling', 'Packaging', 'Picking'],
    payload: '8-15 kg',
    reach: 'Ø1.30 m',
    payloadCategory: 'B',
    reachCategory: 'A',
    controllers: ['OmniCore V250XT', 'V400XT', 'IRC5']
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    applications: ['Machine tending', 'Material handling', 'Arc welding', 'Cutting', 'Dispensing', 'Assembly', 'Palletizing', 'Packaging', 'Measuring', 'Deburring', 'Polishing'],
    payload: '20-60 kg',
    reach: '2.05-2.55 m',
    payloadCategory: 'C',
    reachCategory: 'B',
    controllers: ['OmniCore V250XT', 'V400XT', 'IRC5']
  },
  {
    id: 'irb-910inv',
    name: 'IRB 910INV',
    applications: ['Small parts assembly', 'Material handling', 'Parts inspection'],
    payload: '3-6 kg',
    reach: '0.35-0.55 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  },
  {
    id: 'irb-920t',
    name: 'IRB 920T',
    applications: ['Small parts assembly', 'Material handling', 'Parts inspection'],
    payload: '6 kg',
    reach: '0.45-0.65 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  },
  {
    id: 'irb-930',
    name: 'IRB 930',
    applications: ['Assembly', 'Picking', 'Placing', 'Material handling', 'Screwdriving', 'Packaging', 'Testing'],
    payload: '12, 22 kg',
    reach: '0.85, 1.05 m',
    payloadCategory: 'B,C',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  }
];

// Payload category mapping (internal codes to display labels)
const payloadOptions = [
  { label: '-All-', code: null, key: 'robot-catalog:filter-all' },
  { label: 'up to 7 kg', code: 'A', key: 'rc:payload:up-to-7' },
  { label: '7 - 16 kg', code: 'B', key: 'rc:payload:7-16' },
  { label: '16 - 60 kg', code: 'C', key: 'rc:payload:16-60' },
  { label: '60 - 225 kg', code: 'D', key: 'rc:payload:60-225' },
  { label: 'over 225 kg', code: 'E', key: 'rc:payload:over-225' },
];

// Reach category mapping (internal codes to display labels)
const reachOptions = [
  { label: '-All-', code: null, key: 'robot-catalog:filter-all' },
  { label: 'up to 1.8 m', code: 'A', key: 'rc:reach:up-to-1.8' },
  { label: '1.8 - 2.55 m', code: 'B', key: 'rc:reach:1.8-2.55' },
  { label: 'over 2.55 m', code: 'C', key: 'rc:reach:over-2.55' },
];

function RobotCatalog() {
  const { t } = useLocale();
  const tApp = (app) => t('rc:app:' + app) || app;
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    application: '-All-',
    payload: '-All-',
    reach: '-All-',
    controller: '-All-',
  });
  const [showAll, setShowAll] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [appDropdownOpen, setAppDropdownOpen] = useState(false);
  const [appSearchQuery, setAppSearchQuery] = useState('');
  const [expandedApps, setExpandedApps] = useState({});
  const appDropdownRef = useRef(null);
  const INITIAL_DISPLAY_COUNT = 5;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (appDropdownRef.current && !appDropdownRef.current.contains(event.target)) {
        setAppDropdownOpen(false);
        setAppSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get unique applications from data
  const allApplications = useMemo(() => {
    const apps = new Set();
    robotsData.forEach(robot => {
      robot.applications.forEach(app => apps.add(app));
    });
    return ['-All-', ...Array.from(apps).sort()];
  }, []);

  // Get unique controllers from data
  const allControllers = useMemo(() => {
    const controllers = new Set();
    robotsData.forEach(robot => {
      robot.controllers.forEach(ctrl => controllers.add(ctrl));
    });
    return ['-All-', ...Array.from(controllers).sort()];
  }, []);

  // Filter robots based on search and filters
  const filteredRobots = useMemo(() => {
    return robotsData.filter((robot) => {
      // Search filter
      if (searchQuery && !robot.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Application filter
      if (filters.application !== '-All-' && !robot.applications.includes(filters.application)) {
        return false;
      }

      // Payload filter
      if (filters.payload !== '-All-') {
        const payloadCode = payloadOptions.find(p => p.label === filters.payload)?.code;
        if (payloadCode && !robot.payloadCategory.split(',').includes(payloadCode)) {
          return false;
        }
      }

      // Reach filter
      if (filters.reach !== '-All-') {
        const reachCode = reachOptions.find(r => r.label === filters.reach)?.code;
        if (reachCode && !robot.reachCategory.split(',').includes(reachCode)) {
          return false;
        }
      }

      // Controller filter
      if (filters.controller !== '-All-' && !robot.controllers.includes(filters.controller)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  // Sort robots
  const sortedRobots = useMemo(() => {
    if (!sortConfig.key) return filteredRobots;

    return [...filteredRobots].sort((a, b) => {
      let aVal, bVal;

      if (sortConfig.key === 'name') {
        aVal = a.name.toLowerCase();
        bVal = b.name.toLowerCase();
      } else if (sortConfig.key === 'payload') {
        aVal = parseFloat(a.payload) || 0;
        bVal = parseFloat(b.payload) || 0;
      } else if (sortConfig.key === 'reach') {
        aVal = parseFloat(a.reach) || 0;
        bVal = parseFloat(b.reach) || 0;
      } else {
        return 0;
      }

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredRobots, sortConfig]);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
    setShowAll(false); // Reset to 5 rows when filter changes
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setShowAll(false); // Reset to 5 rows when search changes
  };

  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      application: '-All-',
      payload: '-All-',
      reach: '-All-',
      controller: '-All-',
    });
    setShowAll(false);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const displayedRobots = showAll ? sortedRobots : sortedRobots.slice(0, INITIAL_DISPLAY_COUNT);
  const remainingCount = sortedRobots.length - INITIAL_DISPLAY_COUNT;

  // Filter applications based on search
  const filteredApplications = useMemo(() => {
    if (!appSearchQuery) return allApplications;
    return allApplications.filter(app =>
      app === '-All-' || app.toLowerCase().includes(appSearchQuery.toLowerCase())
    );
  }, [allApplications, appSearchQuery]);

  const toggleExpandedApps = (robotId) => {
    setExpandedApps(prev => ({
      ...prev,
      [robotId]: !prev[robotId]
    }));
  };

  return (
    <section className="robot-catalog-section" id="robot-catalog">
      <div className="container">
        <h2 className="robot-catalog-heading"><Tr id="robot-catalog:heading" /></h2>
        <p className="robot-catalog-subheading">
          <Tr id="robot-catalog:subheading" />
        </p>
        
        <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #0284c7', borderRadius: '4px' }}>
          <p style={{ margin: 0, color: '#0c4a6e', fontSize: '0.95rem' }}>
            <strong>Note:</strong> <Tr id="robot-catalog:note" /> <a href="#request-quote" style={{ color: '#0284c7', textDecoration: 'underline' }}><Tr id="robot-catalog:note-contact" /></a> <Tr id="robot-catalog:note-suffix" />
          </p>
        </div>

        {/* Search Input */}
        <div className="catalog-search">
          <svg className="catalog-search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <Tr id="robot-catalog:search-placeholder">
            {(text) => (
              <input
                type="text"
                className="catalog-search-input"
                placeholder={text}
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            )}
          </Tr>
        </div>

        {/* Filters Row */}
        <div className="catalog-filters">
          <div className="filter-group">
            <label className="filter-label"><Tr id="robot-catalog:filter-applications" /></label>
            <div className="filter-dropdown-wrapper" ref={appDropdownRef}>
              <button
                type="button"
                className="filter-select filter-dropdown-trigger"
                onClick={() => setAppDropdownOpen(!appDropdownOpen)}
              >
                {filters.application === '-All-' ? t('robot-catalog:filter-all') : tApp(filters.application)}
                <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {appDropdownOpen && (
                <div className="filter-dropdown-menu">
                  <div className="dropdown-search-wrapper">
                    <Tr id="robot-catalog:search-apps-placeholder">
                      {(text) => (
                        <input
                          type="text"
                          className="dropdown-search-input"
                          placeholder={text}
                          value={appSearchQuery}
                          onChange={(e) => setAppSearchQuery(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      )}
                    </Tr>
                  </div>
                  <div className="dropdown-options">
                    {filteredApplications.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`dropdown-option ${filters.application === option ? 'selected' : ''}`}
                        onClick={() => {
                          handleFilterChange('application', option);
                          setAppDropdownOpen(false);
                          setAppSearchQuery('');
                        }}
                      >
                        {option === '-All-' ? t('robot-catalog:filter-all') : tApp(option)}
                      </button>
                    ))}
                    {filteredApplications.length === 0 && (
                      <div className="dropdown-no-results"><Tr id="robot-catalog:no-apps-found" /></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label"><Tr id="robot-catalog:filter-payload" /></label>
            <select
              className="filter-select"
              value={filters.payload}
              onChange={(e) => handleFilterChange('payload', e.target.value)}
            >
              {payloadOptions.map((option) => (
                <option key={option.label} value={option.label}>{t(option.key)}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label"><Tr id="robot-catalog:filter-reach" /></label>
            <select
              className="filter-select"
              value={filters.reach}
              onChange={(e) => handleFilterChange('reach', e.target.value)}
            >
              {reachOptions.map((option) => (
                <option key={option.label} value={option.label}>{t(option.key)}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label"><Tr id="robot-catalog:filter-controllers" /></label>
            <select
              className="filter-select"
              value={filters.controller}
              onChange={(e) => handleFilterChange('controller', e.target.value)}
            >
              {allControllers.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Filters Link */}
        <div className="catalog-reset-row">
          <button className="reset-filters-link" onClick={resetFilters}>
            <Tr id="robot-catalog:reset-filters" />
          </button>
        </div>

        {/* Results Count */}
        <div className="catalog-results-count">
          <Tr id="robot-catalog:showing" /> {displayedRobots.length} <Tr id="robot-catalog:of" /> {sortedRobots.length} <Tr id="robot-catalog:robots" />
        </div>

        {/* Robot Cards Table */}
        <div className="robot-cards-table">
          {/* Table Header */}
          <div className="robot-table-header">
            <div className="header-cell sortable" onClick={() => handleSort('name')}>
              <Tr id="robot-catalog:header-model" /> {getSortIndicator('name')}
            </div>
            <div className="header-cell"><Tr id="robot-catalog:header-applications" /></div>
            <div className="header-cell sortable" onClick={() => handleSort('payload')}>
              <Tr id="robot-catalog:header-payload" /> {getSortIndicator('payload')}
            </div>
            <div className="header-cell sortable" onClick={() => handleSort('reach')}>
              <Tr id="robot-catalog:header-reach" /> {getSortIndicator('reach')}
            </div>
            <div className="header-cell"><Tr id="robot-catalog:header-controllers" /></div>
          </div>

          {/* Robot Card Rows */}
          <div className="robot-cards-list">
            {displayedRobots.length === 0 ? (
              <div className="no-results-card">
                <Tr id="robot-catalog:no-results" />
              </div>
            ) : (
              displayedRobots.map((robot, index) => (
                <div
                  key={robot.id}
                  className="robot-card-row"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="card-cell card-cell-model">
                    <a
                      href={robot.productUrl || `#${robot.id}`}
                      className="robot-model-link"
                      target={robot.productUrl ? "_blank" : undefined}
                      rel={robot.productUrl ? "noopener noreferrer" : undefined}
                    >
                      {robot.name}
                    </a>
                    {robot.isNew && <span className="new-badge">{t('abb:new-badge')}</span>}
                  </div>
                  <div className="card-cell card-cell-applications">
                    <div className="application-pills">
                      {(expandedApps[robot.id] ? robot.applications : robot.applications.slice(0, 3)).map((app, idx) => (
                        <span key={idx} className="application-pill">{tApp(app)}</span>
                      ))}
                      {robot.applications.length > 3 && (
                        <button
                          type="button"
                          className="application-pill application-pill-more"
                          onClick={() => toggleExpandedApps(robot.id)}
                        >
                          {expandedApps[robot.id] ? (
                            <Tr id="robot-catalog:show-less" />
                          ) : (
                            <Tr id="robot-catalog:show-more" values={{ count: robot.applications.length - 3 }} />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="card-cell card-cell-payload">{robot.payload}</div>
                  <div className="card-cell card-cell-reach">{robot.reach}</div>
                  <div className="card-cell card-cell-controllers">{robot.controllers.join(', ')}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* View More / Show Less Button */}
        {sortedRobots.length > INITIAL_DISPLAY_COUNT && (
          <div className="view-more-wrapper">
            <button
              className="view-more-button"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <Tr id="robot-catalog:show-less-btn" />
              ) : (
                <Tr id="robot-catalog:view-more" values={{ count: remainingCount }} />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const faqData = [
  { questionKey: 'faq:q1', answerKey: 'faq:a1', hasLink: true },
  { questionKey: 'faq:q2', answerKey: 'faq:a2' },
  { questionKey: 'faq:q3', answerKey: 'faq:a3' },
  { questionKey: 'faq:q4', answerKey: 'faq:a4' },
  { questionKey: 'faq:q5', answerKey: 'faq:a5' },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-heading"><Tr id="faq:heading" /></h2>
        <p className="faq-subheading">
          <Tr id="faq:subheading" />
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span><Tr id={item.questionKey} /></span>
                <svg 
                  className="faq-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d={openIndex === index ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                {item.hasLink ? (
                  <p>
                    <Tr id="faq:a1-part1" />{' '}
                    <a href="https://proax.ca/en/services/robot-maintenance-services" target="_blank" rel="noopener noreferrer" className="faq-link">
                      <Tr id="faq:a1-link" />
                    </a>{' '}
                    <Tr id="faq:a1-part2" />
                  </p>
                ) : (
                  <p><Tr id={item.answerKey} /></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-heading-center"><Tr id="testimonials:heading" /></h2>
        <p className="section-subheading-center">
          <Tr id="testimonials:subheading" />
        </p>

        <div className="testimonials-carousel-wrapper">
          <button 
            className="carousel-nav carousel-nav-prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div 
            className="testimonials-carousel"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-industry"><Tr id={`testimonials:${testimonial.id}:industry`} /></div>
                    <blockquote className="testimonial-quote">
                      "<Tr id={`testimonials:${testimonial.id}:quote`} />"
                    </blockquote>
                    <p className="testimonial-detail">
                      <Tr id={`testimonials:${testimonial.id}:detail`} />
                    </p>
                    <div className="testimonial-author">
                      <span className="testimonial-name"><Tr id={`testimonials:${testimonial.id}:name`} /></span>
                      <span className="testimonial-company"><Tr id={`testimonials:${testimonial.id}:company`} /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav carousel-nav-next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        <LocaleSwitcher />
      </div>

      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-heading">
                <Tr id="abb:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb:hero:cta-primary" />
                </a>
                <a href="#explore-robots" className="cta-button-secondary">
                  <Tr id="abb:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <img 
                src="https://proax.ca/strapiv4/uploads/gemini_hero_ad9e7a0064.png"
                  style={{ borderRadius: '16px' }}
                alt="ABB Robotics Solutions"
                width="600"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <SolutionsExplorer />

      <RobotCatalog />

      <section className="why-proax-section">
        <div className="container">
          <div className="why-proax-grid">
            <div className="why-proax-image">
              <WhyProaxImage />
            </div>
            <div className="why-proax-content">
              <h2 className="why-proax-heading"><Tr id="abb:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb:why-proax:stat3-label" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abb-value-section">
        <div className="container">
          <div className="abb-value-grid">
            <div className="abb-value-image">
              <img 
                src="https://proax.ca/strapiv4/uploads/abb_value_provider_74bac938d7.png" 
                alt="ABB Value Provider"
                loading="lazy"
              />
            </div>
            <div className="abb-value-content">
              <h2 className="abb-value-heading"><Tr id="abb:value:heading" /></h2>
              <p className="abb-value-text">
                <Tr id="abb:value:text" />
              </p>

              <h3 className="abb-value-subheading"><Tr id="abb:value:subheading" /></h3>
              <div className="feature-badges-vertical">
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit1" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit2" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit3" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit4" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit5" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit6" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <FAQ />

      <section className="quote-section" id="request-quote">
        <div className="container">
          <div className="quote-grid">
            <div className="quote-content">
              <h2 className="quote-heading"><Tr id="abb:quote:heading" /></h2>
              <p className="quote-subheading"><Tr id="abb:quote:subheading" /></p>
              <div className="quote-benefits">
                <div className="quote-benefit">
                  <svg className="quote-benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span><Tr id="abb:quote:benefit1" /></span>
                </div>
                <div className="quote-benefit">
                  <svg className="quote-benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span><Tr id="abb:quote:benefit2" /></span>
                </div>
                <div className="quote-benefit">
                  <svg className="quote-benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb:quote:benefit3" /></span>
                </div>
              </div>
            </div>
            <div className="quote-form-wrapper">
              <HubSpotForm formType="abb" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
