'use client';

import { useLocale } from '../../components/LocaleContext';

export default function CollaborativeRobotCatalog() {
  const { t } = useLocale();

  const collaborativeRobotsData = [
    {
      id: 'powa',
      name: 'PoWa™',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/PoWa?wid=600',
      description: t('abb-cobot:catalog:powa:description'),
      spec1: { label: 'abb-cobot:catalog:spec-payload', value: '7 - 30 kg' },
      spec2: { label: 'abb-cobot:catalog:spec-speed', value: 'up to 5.8 m/s' },
      applications: [
        t('abb-cobot:catalog:powa:app1'),
        t('abb-cobot:catalog:powa:app2'),
        t('abb-cobot:catalog:powa:app3'),
        t('abb-cobot:catalog:powa:app4'),
      ],
    },
    {
      id: 'gofa',
      name: 'GoFa™',
      image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
      description: t('abb-cobot:catalog:gofa:description'),
      spec1: { label: 'abb-cobot:catalog:spec-payload', value: '5 - 12 kg' },
      spec2: { label: 'abb-cobot:catalog:spec-reach', value: '0.95 m' },
      applications: [
        t('abb-cobot:catalog:gofa:app1'),
        t('abb-cobot:catalog:gofa:app2'),
        t('abb-cobot:catalog:gofa:app3'),
        t('abb-cobot:catalog:gofa:app4'),
      ],
    },
  ];

  return (
    <section className="robot-catalog-section" id="collaborative-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-cobot:catalog:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-cobot:catalog:subheading')}
        </p>

        <div className="robot-cards-grid">
          {collaborativeRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                {robot.isNew && <span className="new-badge-corner">{t('abb:new-badge')}</span>}
                <img
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{t('abb-cobot:catalog:badge')}</span>
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{robot.description}</p>

                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t(robot.spec1.label)}</span>
                    <span className="grid-spec-value">{robot.spec1.value}</span>
                  </div>
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t(robot.spec2.label)}</span>
                    <span className="grid-spec-value">{robot.spec2.value}</span>
                  </div>
                </div>

                <div className="robot-grid-applications">
                  {robot.applications.slice(0, 3).map((app, index) => (
                    <span key={index} className="application-tag">{app}</span>
                  ))}
                  {robot.applications.length > 3 && (
                    <span className="application-tag more">+{robot.applications.length - 3}</span>
                  )}
                </div>

                <a href="#request-quote" className="robot-grid-cta">
                  {t('abb-cobot:catalog:cta')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
