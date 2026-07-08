'use client';

import { useLocale } from './LocaleContext';

const paintRobotsData = [
  {
    id: 'irb-5350',
    name: 'IRB 5350',
    type: 'Paint',
    descKey: 'paint-robots:irb-5350:desc',
    payload: 'Door Opener',
    reach: 'Compact',
    appKeys: ['paint-robots:irb-5350:app1', 'paint-robots:irb-5350:app2', 'paint-robots:irb-5350:app3', 'paint-robots:irb-5350:app4'],
    specs: {
      'Application': 'Door opener',
      'Design': 'Compact and precise',
      'Solutions': 'Stop-and-go, moving-line',
      'Sensors': 'Integrated search & force feedback',
      'Zone': 'Interior paint zone',
    },
  },
  {
    id: 'irb-5500-22',
    name: 'IRB 5500-22 FlexPainter',
    type: 'Paint',
    descKey: 'paint-robots:irb-5500-22:desc',
    payload: 'Integrated',
    reach: 'Large Work Area',
    appKeys: ['paint-robots:irb-5500-22:app1', 'paint-robots:irb-5500-22:app2', 'paint-robots:irb-5500-22:app3', 'paint-robots:irb-5500-22:app4'],
    specs: {
      'Equipment': 'Integrated paint application',
      'Work Area': 'Large',
      'Speed': 'High acceleration',
      'Flexibility': 'Most flexible solution',
      'Applications': 'Any application',
    },
  },
  {
    id: 'irb-5500-25',
    name: 'IRB 5500-25 Elevated Rail',
    type: 'Paint',
    descKey: 'paint-robots:irb-5500-25:desc',
    payload: 'Elevated Rail',
    reach: 'Extended',
    appKeys: ['paint-robots:irb-5500-25:app1', 'paint-robots:irb-5500-25:app2', 'paint-robots:irb-5500-25:app3', 'paint-robots:irb-5500-25:app4'],
    specs: {
      'System': 'Elevated Rail',
      'Technology': 'Most advanced',
      'Painting': 'Interior & exterior',
      'Industry': 'Automotive & general',
      'Market Position': 'Industry-leading',
    },
  },
  {
    id: 'irb-5500-27',
    name: 'IRB 5500-27',
    type: 'Paint',
    descKey: 'paint-robots:irb-5500-27:desc',
    payload: '7-Axis',
    reach: 'Wide Range',
    appKeys: ['paint-robots:irb-5500-27:app1', 'paint-robots:irb-5500-27:app2', 'paint-robots:irb-5500-27:app3', 'paint-robots:irb-5500-27:app4'],
    specs: {
      'Axes': '7 (integrated)',
      'Working Range': 'Wider',
      'Installation': 'Flexible positioning',
      'Painting': 'Interior & exterior',
      'Family': 'IRB 5500 innovative',
    },
  },
  {
    id: 'irb-5510',
    name: 'IRB 5510 FlexPainter',
    type: 'Paint',
    descKey: 'paint-robots:irb-5510:desc',
    payload: 'Medium',
    reach: 'Medium',
    appKeys: ['paint-robots:irb-5510:app1', 'paint-robots:irb-5510:app2', 'paint-robots:irb-5510:app3', 'paint-robots:irb-5510:app4'],
    specs: {
      'Size': 'Medium',
      'Accuracy': 'Highly accurate',
      'Cycle Time': 'Shorter',
      'Platform': 'Digital',
      'Quality': 'Premium paint quality',
    },
  },
];

export default function PaintRobotsCatalog() {
  const { t } = useLocale();
  return (
    <section className="robot-catalog-section" id="paint-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-paint:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-paint:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {paintRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={`https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t('abb-paint:catalog:badge')}</span>
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{t(robot.descKey)}</p>
                
                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t('catalog:spec-type')}</span>
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
