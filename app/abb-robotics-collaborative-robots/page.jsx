'use client';

import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

function CollaborativeRobotCatalog() {
  const { t } = useLocale();

  const collaborativeRobotsData = [
    {
      id: 'powa',
      name: 'PoWa™',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/PoWa?wid=600',
      description: t('abb-cobot:catalog:powa:description'),
      spec1: { label: 'abb-cobot:catalog:spec-payload', value: '7 - 30 kg' },
      spec2: { label: 'abb-cobot:catalog:spec-speed', value: 'up to 5.8 m/s' },
      applications: [
        t('abb-cobot:catalog:powa:app1'),
        t('abb-cobot:catalog:powa:app2'),
        t('abb-cobot:catalog:powa:app3'),
        t('abb-cobot:catalog:powa:app4'),
      ],
    },
    {
      id: 'gofa',
      name: 'GoFa™',
      image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
      description: t('abb-cobot:catalog:gofa:description'),
      spec1: { label: 'abb-cobot:catalog:spec-payload', value: '5 - 12 kg' },
      spec2: { label: 'abb-cobot:catalog:spec-reach', value: '0.95 m' },
      applications: [
        t('abb-cobot:catalog:gofa:app1'),
        t('abb-cobot:catalog:gofa:app2'),
        t('abb-cobot:catalog:gofa:app3'),
        t('abb-cobot:catalog:gofa:app4'),
      ],
    },
  ];

  return (
    <section className="robot-catalog-section" id="collaborative-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-cobot:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-cobot:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {collaborativeRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                {robot.isNew && <span className="new-badge-corner">{t('abb:new-badge')}</span>}
                <img
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t('abb-cobot:catalog:badge')}</span>
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{robot.description}</p>

                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t(robot.spec1.label)}</span>
                    <span className="grid-spec-value">{robot.spec1.value}</span>
                  </div>
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t(robot.spec2.label)}</span>
                    <span className="grid-spec-value">{robot.spec2.value}</span>
                  </div>
                </div>

                <div className="robot-grid-applications">
                  {robot.applications.slice(0, 3).map((app, index) => (
                    <span key={index} className="application-tag">{app}</span>
                  ))}
                  {robot.applications.length > 3 && (
                    <span className="application-tag more">+{robot.applications.length - 3}</span>
                  )}
                </div>

                <a href="#request-quote" className="robot-grid-cta">
                  {t('abb-cobot:catalog:cta')}
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
                <Tr id="abb-cobot:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-cobot:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-cobot:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-cobot:hero:cta-primary" />
                </a>
                <a href="#collaborative-robots" className="cta-button-secondary">
                  <Tr id="abb-cobot:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:1x1-L"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Collaborative Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cobot:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-cobot:benefits:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-cobot:benefits:subheading" />
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cobot:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cobot:benefit1:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cobot:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cobot:benefit2:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16ZM12 6V18M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cobot:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cobot:benefit3:description" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-cobot:benefit4:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-cobot:benefit4:description" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <CollaborativeRobotCatalog />

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-cobot:applications:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-cobot:applications:subheading" />
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
              <h2 className="why-proax-heading"><Tr id="abb-cobot:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-cobot:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-cobot:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-cobot:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-cobot:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-cobot:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-cobot:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-cobot:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-cobot:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-cobot:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cobot:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cobot:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-cobot:quote:feature3" /></span>
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
