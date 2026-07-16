import HubSpotForm from '../../components/HubSpotForm'
import PalletizingRobotsCatalog from './PalletizingRobotsCatalog'
import Tr from '../../components/Tr'
import WhyProaxImage from '../../components/WhyProaxImage'

export const metadata = {
  title: 'Palletizing Robots - ABB 4-Axis Palletizing & Depalletizing | Proax',
  description: 'ABB palletizing and depalletizing robots featuring the fastest 4-axis robots in the industry. From IRB 460 to heavy-duty solutions for end-of-line automation.',
};

export default function Page() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-heading">
                <Tr id="abb-palletizing:hero:heading" />
              </h1>

              <div className="hero-subheading">
                <Tr id="abb-palletizing:hero:subheading" />
              </div>

              <p className="hero-supporting-text">
                <Tr id="abb-palletizing:hero:text" />
              </p>

              <div className="cta-wrapper">
                <a href="#request-quote" className="cta-button-inline">
                  <Tr id="abb-palletizing:hero:cta1" />
                </a>
                <a href="#palletizing-robots" className="cta-button-secondary">
                  <Tr id="abb-palletizing:hero:cta2" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="product-video-wrapper">
                <img 
                  src="https://proax.ca/strapiv4/uploads/IRB_460_1_1x1_L_64daed3161.webp"
                  style={{ borderRadius: '16px' }}
                  alt="ABB Palletizing Robot"
                  width="600"
                  loading="eager"
                />
                <div className="image-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-palletizing:hero:badge" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-benefits-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-palletizing:benefits:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-palletizing:benefits:subheading" />
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-palletizing:benefit1:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-palletizing:benefit1:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16ZM12 6V18M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-palletizing:benefit2:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-palletizing:benefit2:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-palletizing:benefit3:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-palletizing:benefit3:desc" />
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title"><Tr id="abb-palletizing:benefit4:title" /></h3>
              <p className="benefit-description">
                <Tr id="abb-palletizing:benefit4:desc" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <PalletizingRobotsCatalog />

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-palletizing:industries:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-palletizing:industries:subheading" />
          </p>

          <div className="industries-grid industries-grid-3x3">
            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/automotive_6cf6d32373.png"
                  alt="Automotive"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-automotive:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-automotive:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/construction_bb8218919c.png"
                  alt="Construction"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-construction:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-construction:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/educational_a329d4fe22.png"
                  alt="Education"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-education:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-education:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/electronics_82045e6a85.png"
                  alt="Electronics"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-electronics:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-electronics:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/food_and_bev_032e9192ff.png"
                  alt="Food & Beverage"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-food:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-food:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/Foundry_and_Forging_6944e2115b.png"
                  alt="Foundry & Forging"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-foundry:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-foundry:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/Life_Sciences_and_Healthcare_bb40e8c9a8.png"
                  alt="Life Sciences"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-life-sciences:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-life-sciences:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/logistics_9ac4c96569.png"
                  alt="Logistics"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-logistics:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-logistics:description" />
                </p>
              </div>
            </div>

            <div className="industry-card industry-card-compact">
              <div className="industry-image">
                <img 
                  src="https://proax.ca/strapiv4/uploads/metal_fabrication_c15f51fd98.png"
                  alt="Metal Fabrication"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:industry-metal-fab:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:industry-metal-fab:description" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleanroom-industries-section">
        <div className="container">
          <h2 className="section-heading-center"><Tr id="abb-palletizing:applications:heading" /></h2>
          <p className="section-subheading-center">
            <Tr id="abb-palletizing:applications:subheading" />
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
                  alt="Packaging"
                  loading="lazy"
                />
              </div>
              <div className="industry-content">
                <h3 className="industry-title"><Tr id="abb-cobot:app-packaging-standalone:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-packaging-standalone:description" />
                </p>
                <span className="solution-card-link"><Tr id="abb-cobot:app-link" /></span>
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
                <h3 className="industry-title"><Tr id="abb-cobot:app-sanding:title" /></h3>
                <p className="industry-description">
                  <Tr id="abb-cobot:app-sanding:description" />
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
              <h2 className="why-proax-heading"><Tr id="abb-palletizing:why-proax:heading" /></h2>
              <p className="why-proax-text">
                <Tr id="abb-palletizing:why-proax:text" />
              </p>
              <div className="why-proax-stats">
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-palletizing:why-proax:stat1-number" /></span>
                  <span className="stat-label"><Tr id="abb-palletizing:why-proax:stat1-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-palletizing:why-proax:stat2-number" /></span>
                  <span className="stat-label"><Tr id="abb-palletizing:why-proax:stat2-label" /></span>
                </div>
                <div className="why-proax-stat">
                  <span className="stat-number"><Tr id="abb-palletizing:why-proax:stat3-number" /></span>
                  <span className="stat-label"><Tr id="abb-palletizing:why-proax:stat3-label" /></span>
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
              <h2 className="quote-heading"><Tr id="abb-palletizing:quote:heading" /></h2>
              <p className="quote-description">
                <Tr id="abb-palletizing:quote:description" />
              </p>

              <div className="quote-features">
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-palletizing:quote:feature1" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-palletizing:quote:feature2" /></span>
                </div>
                <div className="quote-feature">
                  <svg className="quote-feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><Tr id="abb-palletizing:quote:feature3" /></span>
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
