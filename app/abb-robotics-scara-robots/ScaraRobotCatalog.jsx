'use client';

import { useLocale } from '../../components/LocaleContext';

const scaraRobotsData = [
  { id: 'irb-910inv', name: 'IRB 910INV', image: 'https://media-d.global.abb/is/image/abbc/IRB%20910INV-2:16x9-L', descKey: 'scara:robot:irb-910inv:desc', payload: '3 - 6 kg', reach: '0.35 - 0.55 m', appKeys: ['scara:robot:irb-910inv:app1', 'scara:robot:irb-910inv:app2', 'scara:robot:irb-910inv:app3', 'scara:robot:irb-910inv:app4'] },
  { id: 'irb-920', name: 'IRB 920T / IRB 920', image: 'https://media-d.global.abb/is/image/abbc/IRB%20920-2:16x9-L', descKey: 'scara:robot:irb-920:desc', payload: '3 - 6 kg', reach: '0.45 - 0.55 m', appKeys: ['scara:robot:irb-920:app1', 'scara:robot:irb-920:app2', 'scara:robot:irb-920:app3', 'scara:robot:irb-920:app4'] },
  { id: 'irb-930', name: 'IRB 930', descKey: 'scara:robot:irb-930:desc', payload: '12 - 22 kg', reach: '0.58 - 0.8 m', appKeys: ['scara:robot:irb-930:app1', 'scara:robot:irb-930:app2', 'scara:robot:irb-930:app3', 'scara:robot:irb-930:app4'] },
];

export default function ScaraRobotCatalog() {
  const { t } = useLocale();
  return (
    <section className="robot-catalog-section" id="scara-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-scara:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">{t('abb-scara:catalog:subheading')}</p>
        <div className="robot-cards-grid">
          {scaraRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`} alt={robot.name} loading="lazy" />
                <span className="iso-badge">{t('abb-scara:catalog:badge')}</span>
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{t(robot.descKey)}</p>
                <div className="robot-grid-specs">
                  <div className="grid-spec-item"><span className="grid-spec-label">{t('catalog:spec-payload')}</span><span className="grid-spec-value">{robot.payload}</span></div>
                  <div className="grid-spec-item"><span className="grid-spec-label">{t('catalog:spec-reach')}</span><span className="grid-spec-value">{robot.reach}</span></div>
                </div>
                <div className="robot-grid-applications">
                  {robot.appKeys.slice(0, 3).map((appKey, i) => <span key={i} className="application-tag">{t(appKey)}</span>)}
                  {robot.appKeys.length > 3 && <span className="application-tag more">+{robot.appKeys.length - 3}</span>}
                </div>
                <a href="#request-quote" className="robot-grid-cta">{t('catalog:cta')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
