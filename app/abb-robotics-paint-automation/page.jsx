'use client';

import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

const paintRobotsData = [
  {
    id: 'gofa-crb-15000',
    name: 'GoFa CRB 15000',
    type: 'Collaborative',
    typeKey: 'catalog:type-collaborative',
    image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
    descKey: 'paint:robot:gofa-crb-15000:desc',
    variants: ['GoFa CRB 15000-5', 'GoFa CRB 15000-10', 'GoFa CRB 15000-12'],
    maxPayload: 12,
    maxReach: 0.95,
    appKeys: ['paint:robot:gofa-crb-15000:app1', 'paint:robot:gofa-crb-15000:app2', 'paint:robot:gofa-crb-15000:app3', 'paint:robot:gofa-crb-15000:app4'],
    specs: {
      'Payload Options': '5 / 10 / 12 kg',
      'Reach': '950 mm',
      'Repeatability': '±0.05 mm',
      'Controller': 'OmniCore',
      'Safety': 'Collaborative - No fencing required',
      'IP Rating': 'IP54',
    },
  },
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
    descKey: 'paint:robot:irb-1300:desc',
    variants: ['IRB 1300-11/0.9', 'IRB 1300-10/1.15', 'IRB 1300-7/1.4'],
    maxPayload: 11,
    maxReach: 1.4,
    appKeys: ['paint:robot:irb-1300:app1', 'paint:robot:irb-1300:app2', 'paint:robot:irb-1300:app3', 'paint:robot:irb-1300:app4'],
    specs: {
      'Payload': '7 / 10 / 11 kg',
      'Reach': '900 / 1150 / 1400 mm',
      'Repeatability': '±0.02 mm',
      'Controller': 'OmniCore',
      'Cycle Time': 'Industry-leading speed',
      'IP Rating': 'IP40',
    },
  },
];

function PaintRobotCatalog() {
  const { t } = useLocale();
  return (
    <section className="robot-catalog-section" id="paint-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-paint:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-paint:catalog:subheading')}
        </p>

        <div className="robot-cards-grid lab-robots-grid">
          {paintRobotsData.map((robot) => (
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
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-heading">
                <Tr id="abb-paint:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-paint:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-paint:hero:text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-paint:hero:cta1" />
                </a>
                <a href="#paint-robots" className="cta-button-secondary">
                  <Tr id="abb-paint:hero:cta2" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:1x1-L"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Paint Automation Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-paint:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-expertise-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-paint:process:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-paint:process:subheading" />
          </p>

          <div className="process-tags-grid">
            <span className="process-tag"><Tr id="abb-paint:process:tag1" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag2" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag3" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag4" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag5" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag6" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag7" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag8" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag9" /></span>
            <span className="process-tag"><Tr id="abb-paint:process:tag10" /></span>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-paint:benefits:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-paint:benefits:subheading" />
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-paint:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-paint:benefit1:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-paint:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-paint:benefit2:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-paint:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-paint:benefit3:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20M8 6V18M16 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-paint:benefit4:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-paint:benefit4:desc" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <PaintRobotCatalog />

      <section className="other-models-note">
        <div className="container">
          <div className="note-card paint-note">
            <p className="note-text">
              <strong><Tr id="abb-paint:note:text" /></strong>
            </p>
            <p className="note-subtext">
              <Tr id="abb-paint:note:subtext1" />
            </p>
            <p className="note-subtext">
              <Tr id="abb-paint:note:subtext2" />
            </p>
            <a href="#request-quote" className="note-cta">
              <Tr id="abb-paint:note:cta" />
            </a>
          </div>
        </div>
      </section>

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-paint:industries:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-paint:industries:subheading" />
          </p>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/automotive_6cf6d32373.png"
                  alt="Automotive Paint Automation"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-paint:industry1:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-paint:industry1:desc" />
                </p>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/general_industry_9212827856.png"
                  alt="General Industry Paint Automation"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-paint:industry2:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-paint:industry2:desc" />
                </p>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/aerospace_b82f1add2b.png"
                  alt="Aerospace Paint Automation"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-paint:industry3:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-paint:industry3:desc" />
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
              <h2 className="why-proax-heading"><Tr id="abb-paint:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-paint:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-paint:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-paint:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-paint:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-paint:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-paint:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-paint:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-paint:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-paint:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-paint:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-paint:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-paint:quote:feature3" /></span>
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
