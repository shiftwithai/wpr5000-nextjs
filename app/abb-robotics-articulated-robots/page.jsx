'use client';

import { useState } from 'react'
import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

const smallRobotsData = [
  { id: 'irb-1010', name: 'IRB 1010', image: 'https://media-d.global.abb/is/image/abbc/IRB%201010-1:16x9-L', descKey: 'articulated:robot:irb-1010:desc', payload: '1.5 kg', reach: '0.37 m' },
  { id: 'irb-1090', name: 'IRB 1090', image: 'https://proax.ca/strapiv4/uploads/IRB_1090_1_1x1_L_8cec97c4c5.webp', descKey: 'articulated:robot:irb-1090:desc', payload: '3.5 kg', reach: '0.58 m' },
  { id: 'irb-1100', name: 'IRB 1100', image: 'https://media-d.global.abb/is/image/abbc/IRB%201100-2:16x9-L', descKey: 'articulated:robot:irb-1100:desc', payload: '4 kg', reach: '0.475 - 0.58 m' },
  { id: 'irb-1200-next-gen', name: 'IRB 1200 Next Generation', image: 'https://media-d.global.abb/is/image/abbc/IRB%201200%20next%20gen%20(1):16x9-L', descKey: 'articulated:robot:irb-1200-next-gen:desc', payload: '5 - 7 kg', reach: '0.7 - 0.9 m' },
  { id: 'irb-1200-hygienic', name: 'IRB 1200 Hygienic', image: 'https://proax.ca/strapiv4/uploads/IRB_1200_Hygienic_3_1x1_L_ba6ab4dc3b.webp', descKey: 'articulated:robot:irb-1200-hygienic:desc', payload: '5 - 7 kg', reach: '0.7 - 0.9 m' },
  { id: 'irb-1300', name: 'IRB 1300', image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L', descKey: 'articulated:robot:irb-1300:desc', payload: '7 - 12 kg', reach: '0.9 - 1.4 m' },
];

const mediumRobotsData = [
  { id: 'irb-1520id', name: 'IRB 1520ID', image: 'https://media-d.global.abb/is/image/abbc/IRB%201520ID-2:16x9-L', descKey: 'articulated:robot:irb-1520id:desc', payload: '4 kg', reach: '1.50 m' },
  { id: 'irb-1600', name: 'IRB 1600', image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L', descKey: 'articulated:robot:irb-1600:desc', payload: '6 - 10 kg', reach: '1.2 - 1.45 m' },
  { id: 'irb-1660id', name: 'IRB 1660ID', image: 'https://proax.ca/strapiv4/uploads/IRB_1660_ID_a3b8379895.webp', descKey: 'articulated:robot:irb-1660id:desc', payload: '6 kg', reach: '1.55 m' },
  { id: 'irb-2600', name: 'IRB 2600', image: 'https://media-d.global.abb/is/image/abbc/IRB%202600-1:16x9-L', descKey: 'articulated:robot:irb-2600:desc', payload: '12 - 20 kg', reach: '1.65 - 1.85 m' },
  { id: 'irb-2600id', name: 'IRB 2600ID', image: 'https://media-d.global.abb/is/image/abbc/IRB%202600ID-1:16x9-L', descKey: 'articulated:robot:irb-2600id:desc', payload: '8 - 15 kg', reach: '1.85 - 2.0 m' },
  { id: 'irb-460', name: 'IRB 460', image: 'https://proax.ca/strapiv4/uploads/IRB_460_1_1x1_L_64daed3161.webp', descKey: 'articulated:robot:irb-460:desc', payload: '110 kg', reach: '2.4 m', axes: '4-axis' },
  { id: 'irb-4400', name: 'IRB 4400', image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L', descKey: 'articulated:robot:irb-4400:desc', payload: '60 kg', reach: '1.95 m' },
  { id: 'irb-4600', name: 'IRB 4600', image: 'https://media-d.global.abb/is/image/abbc/IRB%204600-1:16x9-L', descKey: 'articulated:robot:irb-4600:desc', payload: '20 - 60 kg', reach: '2.05 - 2.55 m' },
];

const largeRobotsData = [
  { id: 'irb-5710', name: 'IRB 5710', image: 'https://proax.ca/strapiv4/uploads/IRB_5710_4163d6aa87.jpeg', descKey: 'articulated:robot:irb-5710:desc', payload: '70 - 110 kg', reach: '2.3 - 2.7 m' },
  { id: 'irb-5720', name: 'IRB 5720', image: 'https://proax.ca/strapiv4/uploads/IRB_5720_00bcf039d3.jpeg', descKey: 'articulated:robot:irb-5720:desc', payload: '90 - 180 kg', reach: '2.6 - 3.0 m' },
  { id: 'irb-660', name: 'IRB 660', image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp', descKey: 'articulated:robot:irb-660:desc', payload: '220 kg', reach: '3.15 m', axes: '4-axis' },
  { id: 'irb-6710', name: 'IRB 6710', image: 'https://proax.ca/strapiv4/uploads/IRB_6710_9be1a3a38f.jpeg', descKey: 'articulated:robot:irb-6710:desc', payload: '175 - 210 kg', reach: '2.65 - 2.95 m' },
  { id: 'irb-6720', name: 'IRB 6720', image: 'https://proax.ca/strapiv4/uploads/IRB_6720_162228470a.jpeg', descKey: 'articulated:robot:irb-6720:desc', payload: '150 - 240 kg', reach: '2.50 - 3.10 m' },
  { id: 'irb-6730', name: 'IRB 6730', image: 'https://proax.ca/strapiv4/uploads/IRB_6730_ceabfaf23f.jpeg', descKey: 'articulated:robot:irb-6730:desc', payload: '190 - 270 kg', reach: '2.70 - 3.10 m' },
  { id: 'irb-6730s', name: 'IRB 6730S', image: 'https://proax.ca/strapiv4/uploads/IRB_6730_S_60af79f14c.jpeg', descKey: 'articulated:robot:irb-6730s:desc', payload: '130 - 270 kg', reach: '3.1 - 4.0 m' },
  { id: 'irb-6740', name: 'IRB 6740', image: 'https://proax.ca/strapiv4/uploads/IRB_6740_0600740d03.jpeg', descKey: 'articulated:robot:irb-6740:desc', payload: '220 - 310 kg', reach: '2.80 - 3.20 m' },
  { id: 'irb-6760', name: 'IRB 6760', image: 'https://proax.ca/strapiv4/uploads/IRB_6760_88830cb8a2.jpeg', descKey: 'articulated:robot:irb-6760:desc', payload: '150 - 200 kg', reach: '3.2 - 3.5 m' },
  { id: 'irb-6790', name: 'IRB 6790', image: 'https://proax.ca/strapiv4/uploads/IRB_6790_2ca8b036ff.jpeg', descKey: 'articulated:robot:irb-6790:desc', payload: '205 - 235 kg', reach: '2.65 - 2.80 m' },
  { id: 'irb-760', name: 'IRB 760', image: 'https://proax.ca/strapiv4/uploads/IRB_760_1_1x1_L_643e1229b4.webp', descKey: 'articulated:robot:irb-760:desc', payload: '450 kg', reach: '3.18 m', axes: '4-axis' },
  { id: 'irb-7710', name: 'IRB 7710', image: 'https://proax.ca/strapiv4/uploads/IRB_7710_21f8e50d89.jpeg', descKey: 'articulated:robot:irb-7710:desc', payload: '280 - 500 kg', reach: '2.85 - 3.5 m' },
  { id: 'irb-7720', name: 'IRB 7720', image: 'https://proax.ca/strapiv4/uploads/IRB_7720_1_1x1_L_23da15dde6.avif', descKey: 'articulated:robot:irb-7720:desc', payload: '400 - 620 kg', reach: '2.9 - 3.5 m' },
  { id: 'irb-8700', name: 'IRB 8700', image: 'https://proax.ca/strapiv4/uploads/IRB_8700_1_1x1_L_1051862e45.avif', descKey: 'articulated:robot:irb-8700:desc', payload: '550 - 800 kg', reach: '3.5 - 4.2 m' },
];

function ArticulatedRobotCatalog() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState('small');

  const tabs = [
    { id: 'small', label: t('abb-articulated:catalog:tab-small'), data: smallRobotsData },
    { id: 'medium', label: t('abb-articulated:catalog:tab-medium'), data: mediumRobotsData },
    { id: 'large', label: t('abb-articulated:catalog:tab-large'), data: largeRobotsData },
  ];

  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <section className="robot-catalog-section" id="articulated-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-articulated:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-articulated:catalog:subheading')}
        </p>

        <div className="articulated-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`articulated-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="robot-cards-grid">
          {activeData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                {robot.axes && <span className="iso-badge">{robot.axes}</span>}
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{t(robot.descKey)}</p>
                
                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t('catalog:spec-payload')}</span>
                    <span className="grid-spec-value">{robot.payload}</span>
                  </div>
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t('catalog:spec-reach')}</span>
                    <span className="grid-spec-value">{robot.reach}</span>
                  </div>
                </div>

                <a href="#request-quote" className="robot-grid-cta">
                  {t('catalog:cta')}
                </a>
              </div>
            </div>
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
                <Tr id="abb-articulated:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-articulated:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-articulated:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-articulated:hero:cta-primary" />
                </a>
                <a href="#articulated-robots" className="cta-button-secondary">
                  <Tr id="abb-articulated:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://proax.ca/strapiv4/uploads/IRB_6710_9be1a3a38f.jpeg"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Articulated Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-articulated:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArticulatedRobotCatalog />

      <section className="why-proax-section">
        <div className="container">
          <div className="why-proax-grid">
            <div className="why-proax-image">
              <WhyProaxImage />
            </div>
            <div className="why-proax-content">
              <h2 className="why-proax-heading"><Tr id="abb-articulated:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-articulated:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-articulated:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-articulated:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-articulated:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-articulated:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-articulated:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-articulated:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-articulated:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-articulated:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-articulated:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-articulated:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-articulated:quote:feature3" /></span>
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
