'use client';

import { useLocale } from '../../components/LocaleContext';

const deltaRobotsData = [
  {
    id: 'irb-360',
    name: 'IRB 360 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20360-2:16x9-L',
    descKey: 'delta:robot:irb-360:desc',
    payload: '1 - 8 kg',
    reach: '0.8 - 1.6 m',
    appKeys: ['delta:robot:irb-360:app1', 'delta:robot:irb-360:app2', 'delta:robot:irb-360:app3', 'delta:robot:irb-360:app4'],
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    descKey: 'delta:robot:irb-365:desc',
    payload: '1.5 kg',
    reach: '0.8 - 1.3 m',
    appKeys: ['delta:robot:irb-365:app1', 'delta:robot:irb-365:app2', 'delta:robot:irb-365:app3', 'delta:robot:irb-365:app4'],
  },
  {
    id: 'irb-390',
    name: 'IRB 390 FlexPacker',
    type: 'Delta',
    image: 'https://proax.ca/strapiv4/uploads/IRB_390_2_1x1_L_0996fedc16.webp',
    descKey: 'delta:robot:irb-390:desc',
    payload: '10 - 15 kg',
    reach: '1.3 m',
    appKeys: ['delta:robot:irb-390:app1', 'delta:robot:irb-390:app2', 'delta:robot:irb-390:app3', 'delta:robot:irb-390:app4'],
  },
];

export default function DeltaRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="delta-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-delta:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-delta:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {deltaRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t('abb-delta:catalog:badge')}</span>
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
