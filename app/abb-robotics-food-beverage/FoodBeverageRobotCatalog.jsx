'use client';

import { useLocale } from '../../components/LocaleContext';

const foodBeverageRobotsData = [
  {
    id: 'irb-1200-hygienic',
    name: 'IRB 1200 Hygienic',
    typeKey: 'food:robot:irb-1200-hygienic:type',
    image: 'https://proax.ca/strapiv4/uploads/IRB_1200_Hygienic_3_1x1_L_ba6ab4dc3b.webp',
    descKey: 'food:robot:irb-1200-hygienic:desc',
    maxPayload: 7,
    maxReach: 0.9,
    appKeys: ['food:robot:irb-1200-hygienic:app1', 'food:robot:irb-1200-hygienic:app2', 'food:robot:irb-1200-hygienic:app3', 'food:robot:irb-1200-hygienic:app4'],
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    typeKey: 'food:robot:irb-365:type',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    descKey: 'food:robot:irb-365:desc',
    maxPayload: 1.5,
    maxReach: 1.1,
    appKeys: ['food:robot:irb-365:app1', 'food:robot:irb-365:app2', 'food:robot:irb-365:app3', 'food:robot:irb-365:app4'],
  },
];

export default function FoodBeverageRobotCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="food-beverage-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-food:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-food:catalog:subheading')}
        </p>

        <div className="robot-cards-grid lab-robots-grid">
          {foodBeverageRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t('abb-food:catalog:badge')}</span>
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
