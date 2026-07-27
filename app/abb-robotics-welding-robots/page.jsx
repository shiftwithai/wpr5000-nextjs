'use client';

import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

const weldingRobotsData = [
  {
    id: 'irb-1520id',
    name: 'IRB 1520ID',
    typeKey: 'welding:robot:irb-1520id:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201520ID-2:16x9-L',
    descKey: 'welding:robot:irb-1520id:desc',
    maxPayload: 4,
    maxReach: 1.5,
    appKeys: ['welding:robot:irb-1520id:app1', 'welding:robot:irb-1520id:app2', 'welding:robot:irb-1520id:app3', 'welding:robot:irb-1520id:app4'],
  },
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    typeKey: 'welding:robot:irb-1600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L',
    descKey: 'welding:robot:irb-1600:desc',
    maxPayload: 10,
    maxReach: 1.45,
    appKeys: ['welding:robot:irb-1600:app1', 'welding:robot:irb-1600:app2', 'welding:robot:irb-1600:app3', 'welding:robot:irb-1600:app4'],
  },
  {
    id: 'irb-2600',
    name: 'IRB 2600',
    typeKey: 'welding:robot:irb-2600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600-1:16x9-L',
    descKey: 'welding:robot:irb-2600:desc',
    maxPayload: 20,
    maxReach: 1.85,
    appKeys: ['welding:robot:irb-2600:app1', 'welding:robot:irb-2600:app2', 'welding:robot:irb-2600:app3', 'welding:robot:irb-2600:app4'],
  },
  {
    id: 'irb-2600id',
    name: 'IRB 2600ID',
    typeKey: 'welding:robot:irb-2600id:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600ID-1:16x9-L',
    descKey: 'welding:robot:irb-2600id:desc',
    maxPayload: 15,
    maxReach: 1.85,
    appKeys: ['welding:robot:irb-2600id:app1', 'welding:robot:irb-2600id:app2', 'welding:robot:irb-2600id:app3', 'welding:robot:irb-2600id:app4'],
  },
  {
    id: 'irb-4400',
    name: 'IRB 4400',
    typeKey: 'welding:robot:irb-4400:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L',
    descKey: 'welding:robot:irb-4400:desc',
    maxPayload: 60,
    maxReach: 1.96,
    appKeys: ['welding:robot:irb-4400:app1', 'welding:robot:irb-4400:app2', 'welding:robot:irb-4400:app3', 'welding:robot:irb-4400:app4'],
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    typeKey: 'welding:robot:irb-4600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204600-1:16x9-L',
    descKey: 'welding:robot:irb-4600:desc',
    maxPayload: 60,
    maxReach: 2.05,
    appKeys: ['welding:robot:irb-4600:app1', 'welding:robot:irb-4600:app2', 'welding:robot:irb-4600:app3', 'welding:robot:irb-4600:app4'],
  },
];

function WeldingRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="welding-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-welding:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-welding:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {weldingRobotsData.map((robot) => (
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
                <Tr id="abb-welding:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-welding:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-welding:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-welding:hero:cta-primary" />
                </a>
                <a href="#welding-robots" className="cta-button-secondary">
                  <Tr id="abb-welding:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://proax.ca/strapiv4/uploads/IRB_1660_ID_a3b8379895.webp"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Welding Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-welding:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-welding:benefits:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-welding:benefits:subheading" />
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-welding:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-welding:benefit1:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-welding:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-welding:benefit2:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-welding:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-welding:benefit3:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 16.79 14.21 15 12 15H6C3.79 15 2 16.79 2 19V21M22 21V19C22 17.14 20.73 15.57 19 15.13M15 3.13C16.73 3.57 18 5.14 18 7C18 8.86 16.73 10.43 15 10.87M12 7C12 9.21 10.21 11 8 11C5.79 11 4 9.21 4 7C4 4.79 5.79 3 8 3C10.21 3 12 4.79 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-welding:benefit4:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-welding:benefit4:description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <WeldingRobotCatalog />

      <section className="why-proax-section">
        <div className="container">
          <div className="why-proax-grid">
            <div className="why-proax-image">
              <WhyProaxImage />
            </div>
            <div className="why-proax-content">
              <h2 className="why-proax-heading"><Tr id="abb-welding:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-welding:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-welding:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-welding:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-welding:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-welding:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-welding:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-welding:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-welding:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-welding:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-welding:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-welding:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-welding:quote:feature3" /></span>
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
