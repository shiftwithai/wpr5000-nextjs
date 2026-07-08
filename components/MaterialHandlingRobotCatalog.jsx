'use client';

import { useLocale } from './LocaleContext';

const materialHandlingRobotsData = [
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    typeKey: 'material:robot:irb-1600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L',
    descKey: 'material:robot:irb-1600:desc',
    maxPayload: 10,
    maxReach: 1.45,
    appKeys: ['material:robot:irb-1600:app1', 'material:robot:irb-1600:app2', 'material:robot:irb-1600:app3', 'material:robot:irb-1600:app4'],
  },
  {
    id: 'irb-4400',
    name: 'IRB 4400',
    typeKey: 'material:robot:irb-4400:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L',
    descKey: 'material:robot:irb-4400:desc',
    maxPayload: 60,
    maxReach: 1.96,
    appKeys: ['material:robot:irb-4400:app1', 'material:robot:irb-4400:app2', 'material:robot:irb-4400:app3', 'material:robot:irb-4400:app4'],
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    typeKey: 'material:robot:irb-660:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp',
    descKey: 'material:robot:irb-660:desc',
    maxPayload: 250,
    maxReach: 3.15,
    appKeys: ['material:robot:irb-660:app1', 'material:robot:irb-660:app2', 'material:robot:irb-660:app3', 'material:robot:irb-660:app4'],
  },
  {
    id: 'irb-6650s',
    name: 'IRB 6650S',
    typeKey: 'material:robot:irb-6650s:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%206650S-1:16x9-L',
    descKey: 'material:robot:irb-6650s:desc',
    maxPayload: 200,
    maxReach: 3.0,
    appKeys: ['material:robot:irb-6650s:app1', 'material:robot:irb-6650s:app2', 'material:robot:irb-6650s:app3', 'material:robot:irb-6650s:app4'],
  },
];

export default function MaterialHandlingRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="material-handling-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-material:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-material:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {materialHandlingRobotsData.map((robot) => (
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
