'use client';

import { useLocale } from '../../components/LocaleContext';

const palletizingRobotsData = [
  {
    id: 'irb-460',
    name: 'IRB 460',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_460_123a6dc579.avif',
    descKey: 'palletizing:robot:irb-460:desc',
    payload: '110 kg',
    reach: '2.4 m',
    appKeys: ['palletizing:robot:irb-460:app1', 'palletizing:robot:irb-460:app2', 'palletizing:robot:irb-460:app3', 'palletizing:robot:irb-460:app4'],
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_e89b5f7a5d.avif',
    descKey: 'palletizing:robot:irb-660:desc',
    payload: '250 kg',
    reach: '3.15 m',
    appKeys: ['palletizing:robot:irb-660:app1', 'palletizing:robot:irb-660:app2', 'palletizing:robot:irb-660:app3', 'palletizing:robot:irb-660:app4'],
  },
  {
    id: 'irb-760',
    name: 'IRB 760',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_760_1_1x1_L_684650b423.avif',
    descKey: 'palletizing:robot:irb-760:desc',
    payload: '450 kg',
    reach: '3.2 m',
    appKeys: ['palletizing:robot:irb-760:app1', 'palletizing:robot:irb-760:app2', 'palletizing:robot:irb-760:app3', 'palletizing:robot:irb-760:app4'],
  },
];

export default function PalletizingRobotsCatalog() {
  const { t } = useLocale();

  return (
    <section className="robot-catalog-section" id="palletizing-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-palletizing:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-palletizing:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {palletizingRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t('abb-palletizing:catalog:badge')}</span>
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
