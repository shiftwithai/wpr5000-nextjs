import HubSpotForm from '../../components/HubSpotForm'
import WeldingRobotCatalog from './WeldingRobotCatalog'
import Tr from '../../components/Tr'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import WhyProaxImage from '../../components/WhyProaxImage'

export const metadata = {
  title: 'Welding Robots - ABB Robotic Solutions | Proax',
  description: 'ABB robotic welding automation solutions. Improve efficiency, minimize scrap, increase quality and improve the working environment with robot-based welding.',
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

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-welding:industries:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-welding:industries:subheading" />
          </p>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/automotive_6cf6d32373.png"
                  alt="Automotive Welding"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-welding:industry-automotive:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-welding:industry-automotive:description" />
                </p>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/metal_fabrication_c15f51fd98.png"
                  alt="Metal Fabrication Welding"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-welding:industry-metal:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-welding:industry-metal:description" />
                </p>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/heavy_equipment_manufacturing_5c96aa3607.jpeg"
                  alt="Heavy Equipment Welding"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-welding:industry-heavy:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-welding:industry-heavy:description" />
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
