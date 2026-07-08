'use client';

import { useLocale } from './LocaleContext';

export default function MobileRobotCatalog() {
  const { t } = useLocale();

  const mobileRobotsData = [
    {
      id: 'flexley-tug',
      name: 'Flexley Tug',
      models: 'AMR T701 / T702 / T901',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/AMR-T701_front:4x3-L?wid=600',
      description: t('abb-amr:tug:desc'),
      type: t('abb-amr:type-tug'),
      payload: 'up to 10,000 kg',
      applications: [t('abb-amr:app:towing'), t('abb-amr:app:transport'), t('abb-amr:app:lineside')],
    },
    {
      id: 'flexley-mover',
      name: 'Flexley Mover',
      models: 'AMR P603 / P604',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/AMR%20P603_front:4x3-L?wid=600',
      description: t('abb-amr:mover:desc'),
      type: t('abb-amr:type-mover'),
      payload: 'up to 1,500 kg',
      applications: [t('abb-amr:app:transport'), t('abb-amr:app:racking'), t('abb-amr:app:logistics')],
    },
    {
      id: 'flexley-stack',
      name: 'Flexley Stack',
      models: 'AMR F712 autonomous forklift',
      isNew: true,
      image: 'https://media-d.global.abb/is/image/abbc/AMR%20F712_side:4x3-L?wid=600',
      description: t('abb-amr:stack:desc'),
      type: t('abb-amr:type-forklift'),
      payload: 'up to 2,000 kg',
      applications: [t('abb-amr:app:palletizing'), t('abb-amr:app:racking'), t('abb-amr:app:logistics')],
    },
  ];

  return (
    <section className="robot-catalog-section" id="mobile-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">{t('abb-amr:intro:heading')}</h2>
        <p className="robot-catalog-subheading">
          {t('abb-amr:intro:subheading')}
        </p>

        <div className="robot-cards-grid">
          {mobileRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                {robot.isNew && <span className="new-badge-corner">{t('abb:new-badge')}</span>}
                <img
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{robot.type}</span>
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-models">{robot.models}</p>
                <p className="robot-grid-description">{robot.description}</p>

                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t('abb-amr:spec-payload')}</span>
                    <span className="grid-spec-value">{robot.payload}</span>
                  </div>
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">{t('abb-amr:spec-nav')}</span>
                    <span className="grid-spec-value">{t('abb-amr:nav-vslam')}</span>
                  </div>
                </div>

                <div className="robot-grid-applications">
                  {robot.applications.map((app, index) => (
                    <span key={index} className="application-tag">{app}</span>
                  ))}
                </div>

                <a href="#request-quote" className="robot-grid-cta">
                  {t('abb-amr:catalog:cta')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
