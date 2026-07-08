'use client';

import { useState, useMemo } from 'react';
import { useLocale } from './LocaleContext';

const cleanroomRobotsData = [
  {
    id: 'gofa-crb-15000',
    name: 'GoFa CRB 15000',
    type: 'Collaborative',
    typeKey: 'catalog:type-collaborative',
    image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
    descKey: 'cleanroom:robot:gofa-crb-15000:desc',
    variants: ['GoFa CRB 15000-5', 'GoFa CRB 15000-10', 'GoFa CRB 15000-12'],
    maxPayload: 12,
    payloadRange: '6-15',
    maxReach: 1.52,
    reachRange: '1.5-2.0',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:gofa-crb-15000:app1', 'cleanroom:robot:gofa-crb-15000:app2', 'cleanroom:robot:gofa-crb-15000:app3', 'cleanroom:robot:gofa-crb-15000:app4'],
    specs: {
      'Payload Options': '5 / 10 / 12 kg',
      'Reach': '950 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP54',
      'Repeatability': '±0.05 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1010',
    name: 'IRB 1010',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201010-1:16x9-L',
    descKey: 'cleanroom:robot:irb-1010:desc',
    variants: ['IRB 1010-1.5/0.37'],
    maxPayload: 1.5,
    payloadRange: '0-5',
    maxReach: 0.37,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:irb-1010:app1', 'cleanroom:robot:irb-1010:app2', 'cleanroom:robot:irb-1010:app3', 'cleanroom:robot:irb-1010:app4'],
    specs: {
      'Payload': '1.5 kg',
      'Reach': '370 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1100',
    name: 'IRB 1100',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201100-2:16x9-L',
    descKey: 'cleanroom:robot:irb-1100:desc',
    variants: ['IRB 1100-4/0.475', 'IRB 1100-4/0.58'],
    maxPayload: 4,
    payloadRange: '0-5',
    maxReach: 0.58,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:irb-1100:app1', 'cleanroom:robot:irb-1100:app2', 'cleanroom:robot:irb-1100:app3', 'cleanroom:robot:irb-1100:app4'],
    specs: {
      'Payload': '4 kg',
      'Reach': '475 / 580 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1200-gen2',
    name: 'IRB 1200 (Gen 2)',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201200%20next%20gen%20(1):16x9-L',
    descKey: 'cleanroom:robot:irb-1200-gen2:desc',
    variants: ['IRB 1200-5/0.9', 'IRB 1200-7/0.7'],
    maxPayload: 7,
    payloadRange: '6-15',
    maxReach: 0.9,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:irb-1200-gen2:app1', 'cleanroom:robot:irb-1200-gen2:app2', 'cleanroom:robot:irb-1200-gen2:app3', 'cleanroom:robot:irb-1200-gen2:app4'],
    specs: {
      'Payload': '5 / 7 kg',
      'Reach': '700 / 900 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.025 mm',
      'Controller': 'IRC5',
    },
  },
  {
    id: 'irb-1200-omnicore',
    name: 'IRB 1200 OmniCore',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201200%20next%20gen%20(1):16x9-L',
    descKey: 'cleanroom:robot:irb-1200-omnicore:desc',
    variants: ['IRB 1200-5/0.9 OmniCore', 'IRB 1200-7/0.7 OmniCore'],
    maxPayload: 7,
    payloadRange: '6-15',
    maxReach: 0.9,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:irb-1200-omnicore:app1', 'cleanroom:robot:irb-1200-omnicore:app2', 'cleanroom:robot:irb-1200-omnicore:app3', 'cleanroom:robot:irb-1200-omnicore:app4'],
    specs: {
      'Payload': '5 / 7 kg',
      'Reach': '700 / 900 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.02 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
    descKey: 'cleanroom:robot:irb-1300:desc',
    variants: ['IRB 1300-11/0.9', 'IRB 1300-10/1.15', 'IRB 1300-7/1.4'],
    maxPayload: 11,
    payloadRange: '6-15',
    maxReach: 1.4,
    reachRange: '1.0-1.5',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:irb-1300:app1', 'cleanroom:robot:irb-1300:app2', 'cleanroom:robot:irb-1300:app3', 'cleanroom:robot:irb-1300:app4'],
    specs: {
      'Payload': '7 / 10 / 11 kg',
      'Reach': '900 / 1150 / 1400 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.02 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-910inv',
    name: 'IRB 910INV',
    type: 'SCARA',
    typeKey: 'catalog:type-scara',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20910INV-2:16x9-L',
    descKey: 'cleanroom:robot:irb-910inv:desc',
    variants: ['IRB 910INV-3/0.35', 'IRB 910INV-3/0.55'],
    maxPayload: 3,
    payloadRange: '0-5',
    maxReach: 0.55,
    reachRange: '0-1.0',
    isoClass: 'ISO 4',
    appKeys: ['cleanroom:robot:irb-910inv:app1', 'cleanroom:robot:irb-910inv:app2', 'cleanroom:robot:irb-910inv:app3', 'cleanroom:robot:irb-910inv:app4'],
    specs: {
      'Payload': '3 kg',
      'Reach': '350 / 550 mm',
      'ISO Class': 'ISO 4 (Class 10)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-920',
    name: 'IRB 920',
    type: 'SCARA',
    typeKey: 'catalog:type-scara',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20920-2:16x9-L',
    descKey: 'cleanroom:robot:irb-920:desc',
    variants: ['IRB 920-6/0.45', 'IRB 920-6/0.55', 'IRB 920-12/0.5'],
    maxPayload: 12,
    payloadRange: '6-15',
    maxReach: 0.55,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:irb-920:app1', 'cleanroom:robot:irb-920:app2', 'cleanroom:robot:irb-920:app3', 'cleanroom:robot:irb-920:app4'],
    specs: {
      'Payload': '6 / 12 kg',
      'Reach': '450 / 500 / 550 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-930',
    name: 'IRB 930',
    type: 'SCARA',
    typeKey: 'catalog:type-scara',
    image: 'https://proax.ca/strapiv4/uploads/IRB_930_ed0218f9a2.webp',
    descKey: 'cleanroom:robot:irb-930:desc',
    variants: ['IRB 930-6/0.65', 'IRB 930-12/0.65'],
    maxPayload: 12,
    payloadRange: '6-15',
    maxReach: 0.65,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    appKeys: ['cleanroom:robot:irb-930:app1', 'cleanroom:robot:irb-930:app2', 'cleanroom:robot:irb-930:app3', 'cleanroom:robot:irb-930:app4'],
    specs: {
      'Payload': '6 / 12 kg',
      'Reach': '650 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
];

export default function CleanroomRobotCatalog() {
  const { t } = useLocale();

  const filterOptions = {
    type: [
      { value: 'all', label: t('catalog:filter-all-types') },
      { value: 'Collaborative', label: t('catalog:type-collaborative') },
      { value: 'Articulated', label: t('catalog:type-articulated') },
      { value: 'SCARA', label: t('catalog:type-scara') },
    ],
    isoClass: [
      { value: 'all', label: t('catalog:filter-all-iso') },
      { value: 'ISO 4', label: 'ISO 4' },
      { value: 'ISO 5', label: 'ISO 5' },
    ],
    payload: [
      { value: 'all', label: t('catalog:filter-all-payloads') },
      { value: '0-5', label: t('catalog:filter-payload-0-5') },
      { value: '6-15', label: t('catalog:filter-payload-6-15') },
    ],
  };

  const [filters, setFilters] = useState({
    type: 'all',
    isoClass: 'all',
    payload: 'all',
  });

  const filteredRobots = useMemo(() => {
    return cleanroomRobotsData.filter((robot) => {
      if (filters.type !== 'all' && robot.type !== filters.type) return false;
      if (filters.isoClass !== 'all' && robot.isoClass !== filters.isoClass) return false;
      if (filters.payload !== 'all' && robot.payloadRange !== filters.payload) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  };

  return (
    <section className="robot-catalog-section" id="cleanroom-catalog">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-cleanroom:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-cleanroom:catalog:subheading')}
        </p>

        <div className="catalog-filters">
          <div className="filter-group">
            <label className="filter-label">{t('catalog:filter-robot-type')}</label>
            <select
              className="filter-select"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              {filterOptions.type.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">{t('catalog:filter-iso-class')}</label>
            <select
              className="filter-select"
              value={filters.isoClass}
              onChange={(e) => handleFilterChange('isoClass', e.target.value)}
            >
              {filterOptions.isoClass.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">{t('catalog:filter-payload-range')}</label>
            <select
              className="filter-select"
              value={filters.payload}
              onChange={(e) => handleFilterChange('payload', e.target.value)}
            >
              {filterOptions.payload.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="catalog-results-count">
          {t('catalog:showing')} {filteredRobots.length} {t('catalog:of')} {cleanroomRobotsData.length} {t('catalog:cleanroom-robots-label')}
        </div>

        <div className="robot-cards-grid">
          {filteredRobots.length === 0 ? (
            <div className="no-results">
              <p>{t('catalog:no-results')}</p>
            </div>
          ) : (
            filteredRobots.map((robot) => (
              <div key={robot.id} className="robot-grid-card">
                <div className="robot-grid-image">
                  <img 
                    src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                    alt={robot.name}
                    loading="lazy"
                  />
                  <span className="iso-badge">{robot.isoClass}</span>
                </div>
                <div className="robot-grid-content">
                  <span className="robot-type-badge">{t(robot.typeKey)}</span>
                  <h3 className="robot-grid-name">{robot.name}</h3>
                  <p className="robot-grid-description">{t(robot.descKey)}</p>
                  
                  <div className="robot-grid-specs">
                    <div className="grid-spec-item">
                      <span className="grid-spec-label">{t('catalog:spec-payload')}</span>
                      <span className="grid-spec-value">{robot.maxPayload} kg</span>
                    </div>
                    <div className="grid-spec-item">
                      <span className="grid-spec-label">{t('catalog:spec-reach')}</span>
                      <span className="grid-spec-value">{robot.maxReach} m</span>
                    </div>
                  </div>

                  <div className="robot-grid-applications">
                    {robot.appKeys.slice(0, 3).map((appKey, index) => (
                      <span key={index} className="application-tag">{t(appKey)}</span>
                    ))}
                    {robot.appKeys.length > 3 && (
                      <span className="application-tag more">+{robot.appKeys.length - 3}</span>
                    )}
                  </div>

                  <a href="#request-quote" className="robot-grid-cta">
                    {t('catalog:cta')}
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
