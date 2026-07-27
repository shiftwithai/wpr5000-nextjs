'use client';

import { useLocale } from './LocaleContext';

// The nine ABB application pages. Titles and descriptions reuse the Solutions
// Explorer keys so the wording stays in step with the hub page in both locales.
const APPLICATIONS = [
  {
    link: '/abb-robotics-welding-robots',
    titleKey: 'solutions-explorer:app-welding:title',
    descKey: 'solutions-explorer:app-welding:desc',
    image: 'https://proax.ca/strapiv4/uploads/welding_2cb503997a.png',
  },
  {
    link: '/abb-robotics-paint-automation',
    titleKey: 'solutions-explorer:app-paint:title',
    descKey: 'solutions-explorer:app-paint:desc',
    image: 'https://proax.ca/strapiv4/uploads/paint_6e13a8ccb9.png',
  },
  {
    link: '/abb-robotics-material-handling',
    titleKey: 'solutions-explorer:app-material-handling:title',
    descKey: 'solutions-explorer:app-material-handling:desc',
    image: 'https://proax.ca/strapiv4/uploads/Material_Handling_a1a81f10c5.png',
  },
  {
    link: '/abb-robotics-packaging',
    titleKey: 'solutions-explorer:app-packaging:title',
    descKey: 'solutions-explorer:app-packaging:desc',
    image: 'https://proax.ca/strapiv4/uploads/Packaging_023d75eb6e.png',
  },
  {
    link: '/abb-robotics-palletizing-robots',
    titleKey: 'solutions-explorer:app-palletizing:title',
    descKey: 'solutions-explorer:app-palletizing:desc',
    image: 'https://proax.ca/strapiv4/uploads/IRB_460_123a6dc579.avif',
  },
  {
    link: '/abb-robotics-sanding-polishing',
    titleKey: 'solutions-explorer:app-sanding:title',
    descKey: 'solutions-explorer:app-sanding:desc',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
  },
  {
    link: '/abb-robotics-cleanroom-robots',
    titleKey: 'solutions-explorer:app-cleanroom:title',
    descKey: 'solutions-explorer:app-cleanroom:desc',
    image: 'https://proax.ca/strapiv4/uploads/Cleanroom_cc5704fa5f.png',
  },
  {
    link: '/abb-robotics-lab-automation',
    titleKey: 'solutions-explorer:app-lab:title',
    descKey: 'solutions-explorer:app-lab:desc',
    image: 'https://proax.ca/strapiv4/uploads/Lab_Automation_c28ff07576.png',
  },
  {
    link: '/abb-robotics-food-beverage',
    titleKey: 'solutions-explorer:app-food-beverage:title',
    descKey: 'solutions-explorer:app-food-beverage:desc',
    image: 'https://proax.ca/strapiv4/uploads/food_and_bev_032e9192ff.png',
  },
];

export default function OtherApplications({ current }) {
  const { t } = useLocale();
  const others = APPLICATIONS.filter((app) => app.link !== current);

  return (
    <section className="cleanroom-industries-section">
      <div className="container">
        <h2 className="section-heading-center">{t('other-applications:heading')}</h2>
        <div className="section-subheading-center">{t('other-applications:subheading')}</div>

        <div className="industries-grid">
          {others.map((app) => (
            <a key={app.link} href={app.link} className="industry-card industry-card-clickable">
              <div className="industry-image">
                <img src={app.image} alt={t(app.titleKey)} loading="lazy" />
              </div>
              <div className="industry-content">
                <h3 className="industry-title">{t(app.titleKey)}</h3>
                <p className="industry-description">{t(app.descKey)}</p>
                <span className="solution-card-link">{t('solutions-explorer:learn-more')}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
