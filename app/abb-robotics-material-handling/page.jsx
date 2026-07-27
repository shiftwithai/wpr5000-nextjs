'use client';

import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

const materialHandlingRobotsData = [
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    typeKey: 'material:robot:irb-1600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L',
    descKey: 'material:robot:irb-1600:desc',
    maxPayload: 10,
    maxReach: 1.45,
    appKeys: ['material:robot:irb-1600:app1', 'material:robot:irb-1600:app2', 'material:robot:irb-1600:app3', 'material:robot:irb-1600:app4'],
  },
  {
    id: 'irb-4400',
    name: 'IRB 4400',
    typeKey: 'material:robot:irb-4400:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L',
    descKey: 'material:robot:irb-4400:desc',
    maxPayload: 60,
    maxReach: 1.96,
    appKeys: ['material:robot:irb-4400:app1', 'material:robot:irb-4400:app2', 'material:robot:irb-4400:app3', 'material:robot:irb-4400:app4'],
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    typeKey: 'material:robot:irb-660:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp',
    descKey: 'material:robot:irb-660:desc',
    maxPayload: 250,
    maxReach: 3.15,
    appKeys: ['material:robot:irb-660:app1', 'material:robot:irb-660:app2', 'material:robot:irb-660:app3', 'material:robot:irb-660:app4'],
  },
  {
    id: 'irb-6650s',
    name: 'IRB 6650S',
    typeKey: 'material:robot:irb-6650s:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%206650S-1:16x9-L',
    descKey: 'material:robot:irb-6650s:desc',
    maxPayload: 200,
    maxReach: 3.0,
    appKeys: ['material:robot:irb-6650s:app1', 'material:robot:irb-6650s:app2', 'material:robot:irb-6650s:app3', 'material:robot:irb-6650s:app4'],
  },
];

function MaterialHandlingRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="material-handling-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-material:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-material:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {materialHandlingRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
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
                <Tr id="abb-material:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-material:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-material:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-material:hero:cta-primary" />
                </a>
                <a href="#material-handling-robots" className="cta-button-secondary">
                  <Tr id="abb-material:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Material Handling Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-material:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-material:benefits:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-material:benefits:subheading" />
          </p>

          <div className="benefits-grid benefits-grid-3">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20M8 6V18M16 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-material:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-material:benefit1:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-material:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-material:benefit2:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-material:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-material:benefit3:description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <MaterialHandlingRobotCatalog />

      <section className="why-proax-section">
        <div className="container">
          <div className="why-proax-grid">
            <div className="why-proax-image">
              <WhyProaxImage />
            </div>
            <div className="why-proax-content">
              <h2 className="why-proax-heading"><Tr id="abb-material:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-material:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-material:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-material:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-material:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-material:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-material:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-material:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-material:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-material:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-material:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-material:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-material:quote:feature3" /></span>
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
