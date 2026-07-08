'use client';

import { useLocale } from './LocaleContext';

const packagingRobotsData = [
  {
    id: 'irb-460',
    name: 'IRB 460',
    typeKey: 'packaging:robot:irb-460:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_460_1_1x1_L_64daed3161.webp',
    descKey: 'packaging:robot:irb-460:desc',
    maxPayload: 110,
    maxReach: 2.4,
    appKeys: ['packaging:robot:irb-460:app1', 'packaging:robot:irb-460:app2', 'packaging:robot:irb-460:app3', 'packaging:robot:irb-460:app4'],
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    typeKey: 'packaging:robot:irb-660:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp',
    descKey: 'packaging:robot:irb-660:desc',
    maxPayload: 250,
    maxReach: 3.15,
    appKeys: ['packaging:robot:irb-660:app1', 'packaging:robot:irb-660:app2', 'packaging:robot:irb-660:app3', 'packaging:robot:irb-660:app4'],
  },
  {
    id: 'irb-760',
    name: 'IRB 760',
    typeKey: 'packaging:robot:irb-760:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_760_1_1x1_L_643e1229b4.webp',
    descKey: 'packaging:robot:irb-760:desc',
    maxPayload: 450,
    maxReach: 3.2,
    appKeys: ['packaging:robot:irb-760:app1', 'packaging:robot:irb-760:app2', 'packaging:robot:irb-760:app3', 'packaging:robot:irb-760:app4'],
  },
  {
    id: 'irb-360',
    name: 'IRB 360 FlexPicker',
    typeKey: 'packaging:robot:irb-360:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20360-2:16x9-L',
    descKey: 'packaging:robot:irb-360:desc',
    maxPayload: 8,
    maxReach: 1.6,
    appKeys: ['packaging:robot:irb-360:app1', 'packaging:robot:irb-360:app2', 'packaging:robot:irb-360:app3', 'packaging:robot:irb-360:app4'],
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    typeKey: 'packaging:robot:irb-365:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    descKey: 'packaging:robot:irb-365:desc',
    maxPayload: 1.5,
    maxReach: 1.3,
    appKeys: ['packaging:robot:irb-365:app1', 'packaging:robot:irb-365:app2', 'packaging:robot:irb-365:app3', 'packaging:robot:irb-365:app4'],
  },
];

export default function PackagingRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="packaging-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-packaging:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-packaging:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {packagingRobotsData.map((robot) => (
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
