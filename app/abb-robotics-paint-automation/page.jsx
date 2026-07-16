import HubSpotForm from '../../components/HubSpotForm'
import PaintRobotCatalog from './PaintRobotCatalog'
import Tr from '../../components/Tr'
import WhyProaxImage from '../../components/WhyProaxImage'

export const metadata = {
  title: 'Paint Automation Robots - ABB Robotic Solutions | Proax',
  description: 'ABB robotic automation solutions for paint and coating applications. Consistent finish quality, improved safety, and high throughput for automotive and industrial painting.',
};

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
