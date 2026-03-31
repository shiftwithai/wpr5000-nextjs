'use client';

const scaraRobotsData = [
  {
    id: 'irb-910inv',
    name: 'IRB 910INV',
    type: 'SCARA',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20910INV-2:16x9-L',
    description: 'Ceiling-mounted SCARA increases assembly flexibility. Fast, cost-effective and, because it\'s from ABB, accurate. The ceiling-mounted SCARA offers space savings and increased assembly flexibility.',
    payload: '3 - 6 kg',
    reach: '0.35 - 0.55 m',
    applications: ['Assembly', 'Pick & Place', 'Handling', 'Electronics'],
    specs: {
      'Payload': '3 / 6 kg',
      'Reach': '350 / 550 mm',
      'Mounting': 'Ceiling-mounted',
      'Design': 'Inverted SCARA',
      'Benefit': 'Space savings',
    },
  },
  {
    id: 'irb-920',
    name: 'IRB 920T / IRB 920',
    type: 'SCARA',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20920-2:16x9-L',
    description: 'Designed to meet the requirements of the electronics industry, the IRB 920T/IRB 920 provides the highest levels of speed, accuracy and repeatability for a range of assembly, picking and handling tasks.',
    payload: '3 - 6 kg',
    reach: '0.45 - 0.55 m',
    applications: ['Electronics Assembly', 'Picking', 'Handling', 'High-Speed Tasks'],
    specs: {
      'Payload': '3 / 6 kg',
      'Reach': '450 / 550 mm',
      'Industry': 'Electronics',
      'Speed': 'Highest levels',
      'Accuracy': 'Best-in-class repeatability',
    },
  },
  {
    id: 'irb-930',
    name: 'IRB 930',
    type: 'SCARA',
    description: 'The IRB 930 is a 12-kg or 22-kg high payload SCARA robot that boosts throughput by up to 10% with class-leading speed, accuracy, internal cabling, and extraordinary downward force.',
    payload: '12 - 22 kg',
    reach: '0.58 - 0.8 m',
    applications: ['High Payload Assembly', 'Material Handling', 'Pressing', 'Insertion'],
    specs: {
      'Payload': '12 / 22 kg',
      'Reach': '580 / 800 mm',
      'Throughput': 'Up to 10% boost',
      'Cabling': 'Internal',
      'Force': 'Extraordinary downward force',
    },
  },
];

export default function ScaraRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="scara-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB SCARA Robots</h2>
        <p className="robot-catalog-subheading">
          High-speed, precise robots for assembly and pick-and-place operations
        </p>

        <div className="robot-cards-grid">
          {scaraRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">SCARA</span>
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
