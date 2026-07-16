import HubSpotForm from '../../components/HubSpotForm'
import SolutionsExplorer from './SolutionsExplorer'
import RobotCatalog from './RobotCatalog'
import FAQ from './FAQ'
import TestimonialsCarousel from './TestimonialsCarousel'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'

export const metadata = {
  title: 'ABB Robotics Solutions - Authorized Distributor | Proax',
  description: 'Authorized ABB Robotics Distributor & Value Provider across Canada. From collaborative robots to high-performance industrial systems, Proax delivers ABB-certified automation expertise.',
};

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
                <Tr id="abb:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb:hero:supporting-text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb:hero:cta-primary" />
                </a>
                <a href="#explore-robots" className="cta-button-secondary">
                  <Tr id="abb:hero:cta-secondary" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <img 
                src="https://proax.ca/strapiv4/uploads/gemini_hero_ad9e7a0064.png"
                  style={{ borderRadius: '16px' }}
                alt="ABB Robotics Solutions"
                width="600"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <SolutionsExplorer />

      <RobotCatalog />

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

      <section className="abb-value-section">
        <div className="container">
          <div className="abb-value-grid">
            <div className="abb-value-image">
              <img 
                src="https://proax.ca/strapiv4/uploads/abb_value_provider_74bac938d7.png" 
                alt="ABB Value Provider"
                loading="lazy"
              />
            </div>
            <div className="abb-value-content">
              <h2 className="abb-value-heading"><Tr id="abb:value:heading" /></h2>
              <p className="abb-value-text">
                <Tr id="abb:value:text" />
              </p>

              <h3 className="abb-value-subheading"><Tr id="abb:value:subheading" /></h3>
              <div className="feature-badges-vertical">
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit1" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit2" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit3" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit4" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit5" /></span>
                </div>
                <div className="feature-badge">
                  <div className="checkmark-circle">
                    <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text"><Tr id="abb:value:benefit6" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <FAQ />

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
