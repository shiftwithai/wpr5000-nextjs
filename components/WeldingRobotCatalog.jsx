'use client';

import { useLocale } from './LocaleContext';

const weldingRobotsData = [
  {
    id: 'irb-1520id',
    name: 'IRB 1520ID',
    typeKey: 'welding:robot:irb-1520id:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201520ID-2:16x9-L',
    descKey: 'welding:robot:irb-1520id:desc',
    maxPayload: 4,
    maxReach: 1.5,
    appKeys: ['welding:robot:irb-1520id:app1', 'welding:robot:irb-1520id:app2', 'welding:robot:irb-1520id:app3', 'welding:robot:irb-1520id:app4'],
  },
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    typeKey: 'welding:robot:irb-1600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L',
    descKey: 'welding:robot:irb-1600:desc',
    maxPayload: 10,
    maxReach: 1.45,
    appKeys: ['welding:robot:irb-1600:app1', 'welding:robot:irb-1600:app2', 'welding:robot:irb-1600:app3', 'welding:robot:irb-1600:app4'],
  },
  {
    id: 'irb-2600',
    name: 'IRB 2600',
    typeKey: 'welding:robot:irb-2600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600-1:16x9-L',
    descKey: 'welding:robot:irb-2600:desc',
    maxPayload: 20,
    maxReach: 1.85,
    appKeys: ['welding:robot:irb-2600:app1', 'welding:robot:irb-2600:app2', 'welding:robot:irb-2600:app3', 'welding:robot:irb-2600:app4'],
  },
  {
    id: 'irb-2600id',
    name: 'IRB 2600ID',
    typeKey: 'welding:robot:irb-2600id:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600ID-1:16x9-L',
    descKey: 'welding:robot:irb-2600id:desc',
    maxPayload: 15,
    maxReach: 1.85,
    appKeys: ['welding:robot:irb-2600id:app1', 'welding:robot:irb-2600id:app2', 'welding:robot:irb-2600id:app3', 'welding:robot:irb-2600id:app4'],
  },
  {
    id: 'irb-4400',
    name: 'IRB 4400',
    typeKey: 'welding:robot:irb-4400:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L',
    descKey: 'welding:robot:irb-4400:desc',
    maxPayload: 60,
    maxReach: 1.96,
    appKeys: ['welding:robot:irb-4400:app1', 'welding:robot:irb-4400:app2', 'welding:robot:irb-4400:app3', 'welding:robot:irb-4400:app4'],
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    typeKey: 'welding:robot:irb-4600:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204600-1:16x9-L',
    descKey: 'welding:robot:irb-4600:desc',
    maxPayload: 60,
    maxReach: 2.05,
    appKeys: ['welding:robot:irb-4600:app1', 'welding:robot:irb-4600:app2', 'welding:robot:irb-4600:app3', 'welding:robot:irb-4600:app4'],
  },
];

export default function WeldingRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="welding-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-welding:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-welding:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {weldingRobotsData.map((robot) => (
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
