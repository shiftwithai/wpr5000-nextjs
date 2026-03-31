'use client';

import { useState } from 'react';

const smallRobotsData = [
  {
    id: 'irb-1010',
    name: 'IRB 1010',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201010-1:16x9-L',
    description: 'A small robot with a big performance designed to meet the trend towards the manufacture of miniaturized electronics and wearable devices.',
    payload: '1.5 kg',
    reach: '0.37 m',
  },
  {
    id: 'irb-1090',
    name: 'IRB 1090',
    image: 'https://proax.ca/strapiv4/uploads/IRB_1090_1_1x1_L_8cec97c4c5.webp',
    description: 'Elevate your teaching, inspire your students. 80% of education professionals have said robots and automation will shape their future of employment over the next ten years.',
    payload: '3.5 kg',
    reach: '0.58 m',
  },
  {
    id: 'irb-1100',
    name: 'IRB 1100',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201100-2:16x9-L',
    description: 'Aimed at increasing manufacturing productivity, IRB 1100 provides up to 35% faster cycle times and best-in-class repeatability for high quality manufacturing.',
    payload: '4 kg',
    reach: '0.475 - 0.58 m',
  },
  {
    id: 'irb-1200-next-gen',
    name: 'IRB 1200 Next Generation',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201200%20next%20gen%20(1):16x9-L',
    description: 'With a leaner design, the new IRB 1200 next generation enables more compact and efficient cells, opening opportunities for increased throughput and efficiency without increasing production footprint.',
    payload: '5 - 7 kg',
    reach: '0.7 - 0.9 m',
  },
  {
    id: 'irb-1200-hygienic',
    name: 'IRB 1200 Hygienic',
    image: 'https://proax.ca/strapiv4/uploads/IRB_1200_Hygienic_3_1x1_L_ba6ab4dc3b.webp',
    description: 'The IRB 1200 Hygienic robot supports both wipe-down cleaning for low-care food packaging and wash-down cleaning with a protective cover for high-care food processing.',
    payload: '5 - 7 kg',
    reach: '0.7 - 0.9 m',
  },
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
    description: 'The IRB 1300 combines class-leading lifting power, reach, and precision in a faster, more compact design, and comes pre-installed with Wizard Easy Programming for simple setup and operation.',
    payload: '7 - 12 kg',
    reach: '0.9 - 1.4 m',
  },
];

const mediumRobotsData = [
  {
    id: 'irb-1520id',
    name: 'IRB 1520ID',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201520ID-2:16x9-L',
    description: 'High precision robotic arc welder with integrated process dressing for welding applications.',
    payload: '4 kg',
    reach: '1.50 m',
  },
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L',
    description: 'The highest-performance robot in its class with cycle times up to 50% shorter than other robots.',
    payload: '6 - 10 kg',
    reach: '1.2 - 1.45 m',
  },
  {
    id: 'irb-1660id',
    name: 'IRB 1660ID',
    image: 'https://proax.ca/strapiv4/uploads/IRB_1660_ID_a3b8379895.webp',
    description: 'Integrated dressing robot for arc welding with internal cable routing.',
    payload: '6 kg',
    reach: '1.55 m',
  },
  {
    id: 'irb-2600',
    name: 'IRB 2600',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600-1:16x9-L',
    description: 'Compact robot with high payload capacity from the sharp generation range.',
    payload: '12 - 20 kg',
    reach: '1.65 - 1.85 m',
  },
  {
    id: 'irb-2600id',
    name: 'IRB 2600ID',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600ID-1:16x9-L',
    description: 'Features integrated dressing with all cables and hoses routed inside the robot\'s upper arm and wrist.',
    payload: '8 - 15 kg',
    reach: '1.85 - 2.0 m',
  },
  {
    id: 'irb-460',
    name: 'IRB 460',
    image: 'https://proax.ca/strapiv4/uploads/IRB_460_1_1x1_L_64daed3161.webp',
    description: 'The fastest palletizing robot in the world. 4-axis design with compact footprint.',
    payload: '110 kg',
    reach: '2.4 m',
    axes: '4-axis',
  },
  {
    id: 'irb-4400',
    name: 'IRB 4400',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L',
    description: 'Extremely fast, compact robot for medium to heavy handling with exceptional all-round capabilities.',
    payload: '60 kg',
    reach: '1.95 m',
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204600-1:16x9-L',
    description: 'Highly productive general purpose robot optimized for short cycle times and high density cells.',
    payload: '20 - 60 kg',
    reach: '2.05 - 2.55 m',
  },
];

const largeRobotsData = [
  {
    id: 'irb-5710',
    name: 'IRB 5710',
    image: 'https://proax.ca/strapiv4/uploads/IRB_5710_4163d6aa87.jpeg',
    description: 'Large robot for heavy payload applications with extended reach.',
    payload: '70 - 110 kg',
    reach: '2.3 - 2.7 m',
  },
  {
    id: 'irb-5720',
    name: 'IRB 5720',
    image: 'https://proax.ca/strapiv4/uploads/IRB_5720_00bcf039d3.jpeg',
    description: 'High payload robot for demanding industrial applications.',
    payload: '90 - 180 kg',
    reach: '2.6 - 3.0 m',
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp',
    description: 'State-of-the-art 4-axis design for palletizing bags, boxes, crates, and bottles.',
    payload: '220 kg',
    reach: '3.15 m',
    axes: '4-axis',
  },
  {
    id: 'irb-6710',
    name: 'IRB 6710',
    image: 'https://proax.ca/strapiv4/uploads/IRB_6710_9be1a3a38f.jpeg',
    description: 'Heavy-duty robot for demanding manufacturing applications.',
    payload: '175 - 210 kg',
    reach: '2.65 - 2.95 m',
  },
  {
    id: 'irb-6720',
    name: 'IRB 6720',
    image: 'https://proax.ca/strapiv4/uploads/IRB_6720_162228470a.jpeg',
    description: 'Versatile large robot for various heavy payload applications.',
    payload: '150 - 240 kg',
    reach: '2.50 - 3.10 m',
  },
  {
    id: 'irb-6730',
    name: 'IRB 6730',
    image: 'https://proax.ca/strapiv4/uploads/IRB_6730_ceabfaf23f.jpeg',
    description: 'High-performance large robot for heavy manufacturing.',
    payload: '190 - 270 kg',
    reach: '2.70 - 3.10 m',
  },
  {
    id: 'irb-6730s',
    name: 'IRB 6730S',
    image: 'https://proax.ca/strapiv4/uploads/IRB_6730_S_60af79f14c.jpeg',
    description: 'Extended reach variant for applications requiring maximum working range.',
    payload: '130 - 270 kg',
    reach: '3.1 - 4.0 m',
  },
  {
    id: 'irb-6740',
    name: 'IRB 6740',
    image: 'https://proax.ca/strapiv4/uploads/IRB_6740_0600740d03.jpeg',
    description: 'Heavy payload robot for demanding industrial applications.',
    payload: '220 - 310 kg',
    reach: '2.80 - 3.20 m',
  },
  {
    id: 'irb-6760',
    name: 'IRB 6760',
    image: 'https://proax.ca/strapiv4/uploads/IRB_6760_88830cb8a2.jpeg',
    description: 'Large robot with extended reach for heavy manufacturing.',
    payload: '150 - 200 kg',
    reach: '3.2 - 3.5 m',
  },
  {
    id: 'irb-6790',
    name: 'IRB 6790',
    image: 'https://proax.ca/strapiv4/uploads/IRB_6790_2ca8b036ff.jpeg',
    description: 'High-performance large robot for heavy payload applications.',
    payload: '205 - 235 kg',
    reach: '2.65 - 2.80 m',
  },
  {
    id: 'irb-760',
    name: 'IRB 760',
    image: 'https://proax.ca/strapiv4/uploads/IRB_760_1_1x1_L_643e1229b4.webp',
    description: 'The 4-axis robot can move and rotate large and heavy products at high speeds with utmost care.',
    payload: '450 kg',
    reach: '3.18 m',
    axes: '4-axis',
  },
  {
    id: 'irb-7710',
    name: 'IRB 7710',
    image: 'https://proax.ca/strapiv4/uploads/IRB_7710_21f8e50d89.jpeg',
    description: 'Extra-large robot for the heaviest payload applications.',
    payload: '280 - 500 kg',
    reach: '2.85 - 3.5 m',
  },
  {
    id: 'irb-7720',
    name: 'IRB 7720',
    image: 'https://proax.ca/strapiv4/uploads/IRB_7720_1_1x1_L_23da15dde6.avif',
    description: 'Maximum payload robot for the most demanding applications.',
    payload: '400 - 620 kg',
    reach: '2.9 - 3.5 m',
  },
  {
    id: 'irb-8700',
    name: 'IRB 8700',
    image: 'https://proax.ca/strapiv4/uploads/IRB_8700_1_1x1_L_1051862e45.avif',
    description: 'The largest ABB robot for extreme payload applications.',
    payload: '550 - 800 kg',
    reach: '3.5 - 4.2 m',
  },
];

const tabs = [
  { id: 'small', label: 'Small Robots', data: smallRobotsData },
  { id: 'medium', label: 'Medium Robots', data: mediumRobotsData },
  { id: 'large', label: 'Large Robots', data: largeRobotsData },
];

export default function ArticulatedRobotCatalog() {
  const [activeTab, setActiveTab] = useState('small');

  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <section className="robot-catalog-section" id="articulated-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Articulated Robots</h2>
        <p className="robot-catalog-subheading">
          6-axis industrial robots available in small, medium, and large sizes
        </p>

        <div className="articulated-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`articulated-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="robot-cards-grid">
          {activeData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                {robot.axes && <span className="iso-badge">{robot.axes}</span>}
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{robot.description}</p>
                
                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">Payload:</span>
                    <span className="grid-spec-value">{robot.payload}</span>
                  </div>
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">Reach:</span>
                    <span className="grid-spec-value">{robot.reach}</span>
                  </div>
                </div>

                <a href="#request-quote" className="robot-grid-cta">
                  Request a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
