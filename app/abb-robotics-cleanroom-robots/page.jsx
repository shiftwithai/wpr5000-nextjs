'use client';

import { useState, useMemo } from 'react'
import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

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

function CleanroomRobotCatalog() {
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

export default function Page() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-heading">
                <Tr id="abb-cleanroom:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-cleanroom:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-cleanroom:hero:text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-cleanroom:hero:cta1" />
                </a>
                <a href="#cleanroom-catalog" className="cta-button-secondary">
                  <Tr id="abb-cleanroom:hero:cta2" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://proax.ca/strapiv4/uploads/IRB_930_ed0218f9a2.webp"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Cleanroom Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cleanroom:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-cleanroom:benefits:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-cleanroom:benefits:subheading" />
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cleanroom:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cleanroom:benefit1:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cleanroom:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cleanroom:benefit2:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6L6 7M6 7L3 8M6 7V4M6 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 10.2289 3.48 8.56775 4.32 7.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cleanroom:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cleanroom:benefit3:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cleanroom:benefit4:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cleanroom:benefit4:desc" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <CleanroomRobotCatalog />

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-cleanroom:industries:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-cleanroom:industries:subheading" />
          </p>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/Life_Sciences_and_Healthcare_bb40e8c9a8.png"
                  alt="Life Sciences and Healthcare"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cleanroom:industry1:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cleanroom:industry1:desc" />
                </p>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/electronics_82045e6a85.png"
                  alt="Electronics Manufacturing"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cleanroom:industry2:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cleanroom:industry2:desc" />
                </p>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/food_and_bev_032e9192ff.png"
                  alt="Food and Beverage"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cleanroom:industry3:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cleanroom:industry3:desc" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-proax-section">
        <div className="container">
          <div className="why-proax-grid">
            <div className="why-proax-image">
              <WhyProaxImage />
            </div>
            <div className="why-proax-content">
              <h2 className="why-proax-heading"><Tr id="abb-cleanroom:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-cleanroom:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-cleanroom:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-cleanroom:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-cleanroom:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-cleanroom:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-cleanroom:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-cleanroom:why-proax:stat3-label" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section" id="request-quote">
        <div className="container">
          <div className="quote-grid">
            <div className="quote-content">
              <h2 className="quote-heading"><Tr id="abb-cleanroom:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-cleanroom:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cleanroom:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cleanroom:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cleanroom:quote:feature3" /></span>
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
