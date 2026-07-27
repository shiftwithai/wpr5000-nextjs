'use client';

import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

const deltaRobotsData = [
  {
    id: 'irb-360',
    name: 'IRB 360 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20360-2:16x9-L',
    descKey: 'delta:robot:irb-360:desc',
    payload: '1 - 8 kg',
    reach: '0.8 - 1.6 m',
    appKeys: ['delta:robot:irb-360:app1', 'delta:robot:irb-360:app2', 'delta:robot:irb-360:app3', 'delta:robot:irb-360:app4'],
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    descKey: 'delta:robot:irb-365:desc',
    payload: '1.5 kg',
    reach: '0.8 - 1.3 m',
    appKeys: ['delta:robot:irb-365:app1', 'delta:robot:irb-365:app2', 'delta:robot:irb-365:app3', 'delta:robot:irb-365:app4'],
  },
  {
    id: 'irb-390',
    name: 'IRB 390 FlexPacker',
    type: 'Delta',
    image: 'https://proax.ca/strapiv4/uploads/IRB_390_2_1x1_L_0996fedc16.webp',
    descKey: 'delta:robot:irb-390:desc',
    payload: '10 - 15 kg',
    reach: '1.3 m',
    appKeys: ['delta:robot:irb-390:app1', 'delta:robot:irb-390:app2', 'delta:robot:irb-390:app3', 'delta:robot:irb-390:app4'],
  },
];

function DeltaRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="delta-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-delta:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-delta:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {deltaRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t('abb-delta:catalog:badge')}</span>
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

                <div className="robot-grid-applications">
                  {robot.appKeys.slice(0, robot.appKeys.length > 4 ? 3 : 4).map((appKey, index) => (
                    <span key={index} className="application-tag">{t(appKey)}</span>
                  ))}
                  {robot.appKeys.length > 4 && (
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
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-heading">
                <Tr id="abb-delta:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-delta:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-delta:hero:text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-delta:hero:cta1" />
                </a>
                <a href="#delta-robots" className="cta-button-secondary">
                  <Tr id="abb-delta:hero:cta2" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://proax.ca/strapiv4/uploads/IRB_390_2_1x1_L_0996fedc16.webp"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Delta Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-delta:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-delta:benefits:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-delta:benefits:subheading" />
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-delta:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-delta:benefit1:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-delta:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-delta:benefit2:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16ZM12 6V18M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-delta:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-delta:benefit3:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4V20M20 4V20M4 12H20M8 8H16M8 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-delta:benefit4:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-delta:benefit4:desc" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <DeltaRobotCatalog />

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-delta:applications:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-delta:applications:subheading" />
          </p>

          <div className="industries-grid">
            <a href="/abb-robotics-welding-robots" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/welding_2cb503997a.png"
                  alt="Welding"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-welding:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-welding:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
              </div>
            </a>

            <a href="/abb-robotics-paint-automation" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/paint_6e13a8ccb9.png"
                  alt="Paint"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-paint:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-paint:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
              </div>
            </a>

            <a href="/abb-robotics-material-handling" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/Material_Handling_a1a81f10c5.png"
                  alt="Material Handling"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-material:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-material:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
              </div>
            </a>

            <a href="/abb-robotics-packaging" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/Packaging_023d75eb6e.png"
                  alt="Packaging & Palletizing"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-packaging:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-packaging:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
              </div>
            </a>

            <a href="/abb-robotics-cleanroom-robots" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/Cleanroom_cc5704fa5f.png"
                  alt="Cleanroom"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-cleanroom:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-cleanroom:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
              </div>
            </a>

            <a href="/abb-robotics-lab-automation" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/Lab_Automation_c28ff07576.png"
                  alt="Lab Automation"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-lab:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-lab:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
              </div>
            </a>

            <a href="/abb-robotics-food-beverage" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/food_and_bev_032e9192ff.png"
                  alt="Food & Beverage"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-food:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-food:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
              </div>
            </a>
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
              <h2 className="why-proax-heading"><Tr id="abb-delta:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-delta:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-delta:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-delta:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-delta:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-delta:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-delta:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-delta:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-delta:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-delta:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-delta:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-delta:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-delta:quote:feature3" /></span>
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
