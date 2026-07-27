'use client';

import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

const packagingRobotsData = [
  {
    id: 'irb-460',
    name: 'IRB 460',
    typeKey: 'packaging:robot:irb-460:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_460_1_1x1_L_64daed3161.webp',
    descKey: 'packaging:robot:irb-460:desc',
    maxPayload: 110,
    maxReach: 2.4,
    appKeys: ['packaging:robot:irb-460:app1', 'packaging:robot:irb-460:app2', 'packaging:robot:irb-460:app3', 'packaging:robot:irb-460:app4'],
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    typeKey: 'packaging:robot:irb-660:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp',
    descKey: 'packaging:robot:irb-660:desc',
    maxPayload: 250,
    maxReach: 3.15,
    appKeys: ['packaging:robot:irb-660:app1', 'packaging:robot:irb-660:app2', 'packaging:robot:irb-660:app3', 'packaging:robot:irb-660:app4'],
  },
  {
    id: 'irb-760',
    name: 'IRB 760',
    typeKey: 'packaging:robot:irb-760:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_760_1_1x1_L_643e1229b4.webp',
    descKey: 'packaging:robot:irb-760:desc',
    maxPayload: 450,
    maxReach: 3.2,
    appKeys: ['packaging:robot:irb-760:app1', 'packaging:robot:irb-760:app2', 'packaging:robot:irb-760:app3', 'packaging:robot:irb-760:app4'],
  },
  {
    id: 'irb-360',
    name: 'IRB 360 FlexPicker',
    typeKey: 'packaging:robot:irb-360:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20360-2:16x9-L',
    descKey: 'packaging:robot:irb-360:desc',
    maxPayload: 8,
    maxReach: 1.6,
    appKeys: ['packaging:robot:irb-360:app1', 'packaging:robot:irb-360:app2', 'packaging:robot:irb-360:app3', 'packaging:robot:irb-360:app4'],
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    typeKey: 'packaging:robot:irb-365:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    descKey: 'packaging:robot:irb-365:desc',
    maxPayload: 1.5,
    maxReach: 1.3,
    appKeys: ['packaging:robot:irb-365:app1', 'packaging:robot:irb-365:app2', 'packaging:robot:irb-365:app3', 'packaging:robot:irb-365:app4'],
  },
];

function PackagingRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="packaging-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-packaging:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-packaging:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {packagingRobotsData.map((robot) => (
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
      <LocaleSwitcher />

      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-heading">
                <Tr id="abb-packaging:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-packaging:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-packaging:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-packaging:hero:cta-primary" />
                </a>
                <a href="#packaging-robots" className="cta-button-secondary">
                  <Tr id="abb-packaging:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://media-d.global.abb/is/image/abbc/IRB%20360-2:1x1-L"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Packaging Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-packaging:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-packaging:benefits:heading" /></h2>
          <div className="section-subheading-center">
            <Tr id="abb-packaging:benefits:subheading" />
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-packaging:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-packaging:benefit1:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-packaging:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-packaging:benefit2:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16ZM12 6V18M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-packaging:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-packaging:benefit3:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21M5 21V11H9V21M10 21V7H14V21M15 21V3H19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-packaging:benefit4:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-packaging:benefit4:description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <PackagingRobotCatalog />

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-packaging:applications:heading" /></h2>
          <div className="section-subheading-center">
            <Tr id="abb-packaging:applications:subheading" />
          </div>

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
                <h3 className="industry-title">Welding</h3>
                <p className="industry-description">
                  Arc welding, MIG/TIG welding, and laser welding automation.
                </p>
                <span className="solution-card-link">Learn More →</span>
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
                <h3 className="industry-title">Paint</h3>
                <p className="industry-description">
                  Automated spray painting and surface finishing for industrial applications.
                </p>
                <span className="solution-card-link">Learn More →</span>
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
                <h3 className="industry-title">Material Handling</h3>
                <p className="industry-description">
                  Pick and place, machine tending, and automated material transport.
                </p>
                <span className="solution-card-link">Learn More →</span>
              </div>
            </a>

            <a href="/abb-robotics-palletizing-robots" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/IRB_460_123a6dc579.avif"
                  alt="Palletizing"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title">Palletizing</h3>
                <p className="industry-description">
                  End-of-line palletizing solutions for bags, boxes, crates, and bottles.
                </p>
                <span className="solution-card-link">Learn More →</span>
              </div>
            </a>

            <a href="/abb-robotics-sanding-polishing" className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img 
                  src="https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L"
                  alt="Sanding & Polishing"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title">Sanding & Polishing</h3>
                <p className="industry-description">
                  Precision surface finishing, deburring, and grinding for consistent quality.
                </p>
                <span className="solution-card-link">Learn More →</span>
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
                <h3 className="industry-title">Cleanroom</h3>
                <p className="industry-description">
                  ISO-certified cleanroom robots for semiconductor and pharmaceutical manufacturing.
                </p>
                <span className="solution-card-link">Learn More →</span>
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
                <h3 className="industry-title">Lab Automation</h3>
                <p className="industry-description">
                  Precision robots for laboratory testing, sample handling, and research.
                </p>
                <span className="solution-card-link">Learn More →</span>
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
                <h3 className="industry-title">Food & Beverage</h3>
                <p className="industry-description">
                  Hygienic robotic automation for food processing and beverage production.
                </p>
                <span className="solution-card-link">Learn More →</span>
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
              <h2 className="why-proax-heading"><Tr id="abb-packaging:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-packaging:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-packaging:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-packaging:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-packaging:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-packaging:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-packaging:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-packaging:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-packaging:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-packaging:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-packaging:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-packaging:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-packaging:quote:feature3" /></span>
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
