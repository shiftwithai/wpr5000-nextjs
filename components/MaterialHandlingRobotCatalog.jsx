'use client';

const materialHandlingRobotsData = [
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L',
    description: 'The IRB 1600 is the highest-performance 10 kg robot. With cycle times up to 50% shorter than other robots, it delivers both high-speed throughput and exceptional workpiece quality for material handling tasks.',
    maxPayload: 10,
    maxReach: 1.45,
    applications: ['Machine Tending', 'Material Handling', 'Pick & Place', 'Assembly'],
    specs: {
      'Payload': '6 / 10 kg',
      'Reach': '1200 / 1450 mm',
      'Cycle Time': '50% shorter',
      'Performance': 'Highest in class',
      'Axes': '6',
    },
  },
  {
    id: 'irb-4400',
    name: 'IRB 4400',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L',
    description: 'IRB 4400 is an extremely fast, compact robot for medium to heavy handling. It has exceptional all-round capabilities which makes it suitable for a variety of material handling applications.',
    maxPayload: 60,
    maxReach: 1.96,
    applications: ['Medium Handling', 'Heavy Handling', 'Machine Tending', 'General Manufacturing'],
    specs: {
      'Payload': '45 / 60 kg',
      'Reach': '1960 mm',
      'Speed': 'Extremely fast',
      'Design': 'Compact',
      'Versatility': 'All-round capabilities',
    },
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    type: 'Articulated',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp',
    description: 'Thanks to its state-of-the-art 4-axes design, the IRB 660 combines a 3.15 meter reach with a 250 kg payload, making it ideal for heavy material handling, palletizing, and large part transfer.',
    maxPayload: 250,
    maxReach: 3.15,
    applications: ['Heavy Material Handling', 'Palletizing', 'Large Part Transfer', 'Kitting'],
    specs: {
      'Payload': '250 kg',
      'Reach': '3150 mm',
      'Axes': '4',
      'Design': 'State-of-the-art',
      'Versatility': 'Multi-product handling',
    },
  },
  {
    id: 'irb-6650s',
    name: 'IRB 6650S',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%206650S-1:16x9-L',
    description: 'The IRB 6650S is a shelf-mounted robot designed for press tending and heavy material handling. Its unique mounting configuration maximizes floor space and provides optimal reach for large workpieces.',
    maxPayload: 200,
    maxReach: 3.0,
    applications: ['Press Tending', 'Heavy Material Handling', 'Large Part Transfer', 'Die Casting'],
    specs: {
      'Payload': '125 / 175 / 200 kg',
      'Reach': '3000 mm',
      'Mounting': 'Shelf-mounted',
      'Design': 'Space-optimized',
      'Application': 'Press tending specialist',
    },
  },
];

export default function MaterialHandlingRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="material-handling-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Material Handling Robots</h2>
        <p className="robot-catalog-subheading">
          6-axis articulated robots for versatile material handling tasks
        </p>

        <div className="robot-cards-grid">
          {materialHandlingRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
              </div>
              <div className="robot-grid-content">
                <span className="robot-type-badge">{robot.type}</span>
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{robot.description}</p>
                
                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">Payload:</span>
                    <span className="grid-spec-value">{robot.maxPayload} kg</span>
                  </div>
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">Reach:</span>
                    <span className="grid-spec-value">{robot.maxReach} m</span>
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
