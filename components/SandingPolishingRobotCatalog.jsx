'use client';

import { useLocale } from './LocaleContext';

const sandingPolishingRobotsData = [
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
    descKey: 'sanding:robot:irb-1300:desc',
    payload: '7-12 kg',
    reach: '0.9-1.4 m',
    appKeys: ['sanding:robot:irb-1300:app1', 'sanding:robot:irb-1300:app2', 'sanding:robot:irb-1300:app3', 'sanding:robot:irb-1300:app4'],
    specs: {
      'Payload': '7 / 10 / 11 / 12 kg',
      'Reach': '900 / 1150 / 1400 mm',
      'Controllers': 'OmniCore E10, C30, C90XT, V250XT, V400XT',
      'Applications': 'Polishing, Assembly, Material handling',
      'Precision': 'High accuracy motion control',
    },
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    type: 'Articulated',
    typeKey: 'catalog:type-articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204600-2:16x9-L',
    descKey: 'sanding:robot:irb-4600:desc',
    payload: '20-60 kg',
    reach: '2.05-2.55 m',
    appKeys: ['sanding:robot:irb-4600:app1', 'sanding:robot:irb-4600:app2', 'sanding:robot:irb-4600:app3', 'sanding:robot:irb-4600:app4'],
    specs: {
      'Payload': '20 / 40 / 45 / 60 kg',
      'Reach': '2050 / 2050 / 2550 / 2050 mm',
      'Controllers': 'OmniCore C30, C90XT, V250XT',
      'Applications': 'Polishing, Deburring, Material handling',
      'Versatility': 'Medium to large parts',
    },
  },
];

export default function SandingPolishingRobotCatalog() {
  const { t } = useLocale();
  return (
    <section className="robot-catalog-section" id="sanding-polishing-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-sanding:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-sanding:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {sandingPolishingRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t(robot.typeKey)}</span>
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
