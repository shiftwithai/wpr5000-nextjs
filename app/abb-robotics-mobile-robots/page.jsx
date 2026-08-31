'use client';

import HubSpotForm from '../../components/HubSpotForm'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'
import { useLocale } from '../../components/LocaleContext'

function MobileRobotCatalog() {
  const { t } = useLocale();

  const mobileRobotsData = [
    {
      id: 'flexley-tug',
      name: 'Flexley Tug',
      models: 'AMR T701 / T702',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/AMR-T701_front:4x3-L?wid=600&hei=450&fit=crop',
      description: t('abb-amr:tug:desc'),
      type: t('abb-amr:type-tug'),
      payload: 'up to 2,000 kg',
      applications: [t('abb-amr:app:towing'), t('abb-amr:app:transport'), t('abb-amr:app:lineside')],
    },
    {
      id: 'flexley-mover',
      name: 'Flexley Mover',
      models: 'AMR P603 / P604',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/AMR%20P603_front:4x3-L?wid=600&hei=450&fit=crop',
      description: t('abb-amr:mover:desc'),
      type: t('abb-amr:type-mover'),
      payload: 'up to 1,500 kg',
      applications: [t('abb-amr:app:transport'), t('abb-amr:app:racking'), t('abb-amr:app:logistics')],
    },
    {
      id: 'flexley-stack',
      name: 'Flexley Stack',
      models: 'AMR F712 autonomous forklift',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/AMR%20F712_side:4x3-L?wid=600&hei=450&fit=crop',
      description: t('abb-amr:stack:desc'),
      type: t('abb-amr:type-forklift'),
      payload: 'up to 2,000 kg',
      applications: [t('abb-amr:app:palletizing'), t('abb-amr:app:racking'), t('abb-amr:app:logistics')],
    },
  ];

  return (
    <section className="robot-catalog-section" id="mobile-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-amr:intro:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-amr:intro:subheading')}
        </p>

        <div className="robot-cards-grid">
          {mobileRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                {robot.isNew && <span className="new-badge-corner">{t('abb:new-badge')}</span>}
                <img
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{robot.type}</span>
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-models">{robot.models}</p>
                <p className="robot-grid-description">{robot.description}</p>

                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t('abb-amr:spec-payload')}</span>
                    <span className="grid-spec-value">{robot.payload.replace(/^up to\b/i, t('rc:up-to'))}</span>
                  </div>
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t('abb-amr:spec-nav')}</span>
                    <span className="grid-spec-value">{t('abb-amr:nav-vslam')}</span>
                  </div>
                </div>

                <div className="robot-grid-applications">
                  {robot.applications.map((app, index) => (
                    <span key={index} className="application-tag">{app}</span>
                  ))}
                </div>

                <a href="#request-quote" className="robot-grid-cta">
                  {t('abb-amr:catalog:cta')}
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
                <Tr id="abb-amr:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-amr:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-amr:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-amr:hero:cta-primary" />
                </a>
                <a href="#mobile-robots" className="cta-button-secondary">
                  <Tr id="abb-amr:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img
                  src="https://media-d.global.abb/is/image/abbc/AMR%20Portfolio%20header-1:16x9-L?wid=1000&hei=560&fit=crop"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Autonomous Mobile Robots"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-amr:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileRobotCatalog />

      <section className="why-proax-section">
        <div className="container">
          <div className="why-proax-grid">
            <div className="why-proax-image">
              <WhyProaxImage />
            </div>
            <div className="why-proax-content">
              <h2 className="why-proax-heading"><Tr id="abb:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb:quote:heading" /></h2>
              <p className="quote-subheading"><Tr id="abb:quote:subheading" /></p>
              <div className="quote-benefits">
                <div className="quote-benefit">
                  <svg className="quote-benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span><Tr id="abb:quote:benefit1" /></span>
                </div>
                <div className="quote-benefit">
                  <svg className="quote-benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span><Tr id="abb:quote:benefit2" /></span>
                </div>
                <div className="quote-benefit">
                  <svg className="quote-benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb:quote:benefit3" /></span>
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
