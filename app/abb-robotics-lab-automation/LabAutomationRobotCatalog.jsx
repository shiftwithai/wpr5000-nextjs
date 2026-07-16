'use client';

import { useLocale } from '../../components/LocaleContext';

const labRobotsData = [
  {
    id: 'gofa-crb-15000',
    name: 'GoFa CRB 15000',
    type: 'Collaborative',
    typeKey: 'catalog:type-collaborative',
    image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
    descKey: 'lab:robot:gofa-crb-15000:desc',
    variants: ['GoFa CRB 15000-5', 'GoFa CRB 15000-10', 'GoFa CRB 15000-12'],
    maxPayload: 12,
    maxReach: 0.95,
    appKeys: ['lab:robot:gofa-crb-15000:app1', 'lab:robot:gofa-crb-15000:app2', 'lab:robot:gofa-crb-15000:app3', 'lab:robot:gofa-crb-15000:app4'],
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
    descKey: 'lab:robot:irb-1300:desc',
    variants: ['IRB 1300-11/0.9', 'IRB 1300-10/1.15', 'IRB 1300-7/1.4'],
    maxPayload: 11,
    maxReach: 1.4,
    appKeys: ['lab:robot:irb-1300:app1', 'lab:robot:irb-1300:app2', 'lab:robot:irb-1300:app3', 'lab:robot:irb-1300:app4'],
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

export default function LabAutomationRobotCatalog() {
  const { t } = useLocale();
  return (
    <section className="robot-catalog-section" id="lab-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-lab:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-lab:catalog:subheading')}
        </p>

        <div className="robot-cards-grid lab-robots-grid">
          {labRobotsData.map((robot) => (
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
