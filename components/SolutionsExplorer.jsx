'use client';

import { useState } from 'react';

const industriesData = [
  {
    title: 'Automotive',
    description: 'High-speed assembly, welding, and material handling for automotive manufacturing.',
    image: 'https://proax.ca/strapiv4/uploads/automotive_6cf6d32373.png',
  },
  {
    title: 'Construction',
    description: 'Robotic solutions for prefabrication, welding, and heavy material handling in construction.',
    image: 'https://proax.ca/strapiv4/uploads/construction_bb8218919c.png',
  },
  {
    title: 'Education',
    description: 'Training and educational robotics for schools, universities, and research institutions.',
    image: 'https://proax.ca/strapiv4/uploads/educational_a329d4fe22.png',
  },
  {
    title: 'Electronics',
    description: 'Precision assembly and handling for electronics manufacturing.',
    image: 'https://proax.ca/strapiv4/uploads/electronics_82045e6a85.png',
  },
  {
    title: 'Food and Beverage',
    description: 'Hygienic robots for packaging, palletizing, and processing applications.',
    image: 'https://proax.ca/strapiv4/uploads/food_and_bev_032e9192ff.png',
  },
  {
    title: 'Foundry and Forging',
    description: 'Heavy-duty robots for harsh foundry environments, die casting, and forging operations.',
    image: 'https://proax.ca/strapiv4/uploads/Foundry_and_Forging_6944e2115b.png',
  },
  {
    title: 'Life Sciences and Healthcare',
    description: 'Cleanroom-compatible robots for pharmaceutical, medical device, and laboratory applications.',
    image: 'https://proax.ca/strapiv4/uploads/Life_Sciences_and_Healthcare_bb40e8c9a8.png',
  },
  {
    title: 'Logistics',
    description: 'Automated picking, packing, and warehouse management solutions.',
    image: 'https://proax.ca/strapiv4/uploads/logistics_9ac4c96569.png',
  },
  {
    title: 'Metal Fabrication',
    description: 'Welding, cutting, and material handling for metal working industries.',
    image: 'https://proax.ca/strapiv4/uploads/metal_fabrication_c15f51fd98.png',
  },
];

const applicationsData = [
  {
    title: 'Food and Beverage',
    description: 'Hygienic robotic automation for food processing, packaging, and beverage production.',
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
    title: 'Cleanroom Applications',
    description: 'ISO-certified cleanroom robots for semiconductor, pharmaceutical, and medical manufacturing.',
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
    title: 'Lab Automation',
    description: 'Precision robots for laboratory testing, sample handling, and research applications.',
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
    title: 'Material Handling',
    description: 'Pick and place, machine tending, and automated material transport.',
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
    title: 'Packaging',
    description: 'High-speed picking, packing, and case handling for manufacturing and logistics.',
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
    title: 'Palletizing and Depalletizing',
    description: 'End-of-line palletizing and depalletizing solutions for bags, boxes, crates, and bottles.',
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
    title: 'Sanding & Polishing',
    description: 'Precision surface finishing, deburring, and grinding for consistent quality.',
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
    title: 'Paint',
    description: 'Automated spray painting and surface finishing for automotive and industrial applications.',
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
    title: 'Welding',
    description: 'Arc welding, MIG/TIG welding, and laser welding automation.',
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
    title: 'Collaborative Robots (Cobots)',
    description: 'Safe human-robot collaboration without safety fencing. Ideal for flexible, space-constrained applications.',
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
    title: 'Articulated Robots',
    description: '6-axis industrial robots for maximum flexibility. Payloads from 3kg to 800kg.',
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
    title: 'SCARA Robots',
    description: 'High-speed, precise robots for assembly and pick-and-place operations.',
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
    title: 'Delta Robots',
    description: 'Ultra-fast picking robots for packaging and sorting applications.',
    link: '/abb-robotics-delta-robots',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 8L12 20L20 8L12 3ZM12 3V20M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Paint Robots',
    description: 'Specialized robots for automotive and industrial painting applications.',
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
    title: 'Palletizing Robots',
    description: 'Heavy-duty robots designed for end-of-line palletizing operations.',
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

export default function SolutionsExplorer() {
  const [activeTab, setActiveTab] = useState('applications');

  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <section className="solutions-explorer-section" id="explore-robots">
      <div className="container">
        <h2 className="solutions-explorer-heading">Explore ABB Robotics Solutions</h2>
        <p className="solutions-explorer-subheading">
          Find the right automation solution for your needs
        </p>

        <div className="solutions-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`solutions-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
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
                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-description">{item.description}</p>
                {item.link && (
                  <span className="solution-card-link">Learn More →</span>
                )}
              </>
            );
            
            const cardClass = `solution-card${item.image ? ' solution-card-with-image' : ''}${item.link ? ' solution-card-clickable' : ''}`;
            
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
