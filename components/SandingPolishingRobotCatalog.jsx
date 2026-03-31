'use client';

const sandingPolishingRobotsData = [
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
    description: 'The IRB 1300 is a versatile robot ideal for polishing applications. With payloads from 7-12 kg and reach up to 1.4m, it delivers precise motion control for consistent surface finishing.',
    payload: '7-12 kg',
    reach: '0.9-1.4 m',
    applications: ['Polishing', 'Sanding', 'Deburring', 'Surface Finishing'],
    specs: {
      'Payload': '7 / 10 / 11 / 12 kg',
      'Reach': '900 / 1150 / 1400 mm',
      'Controllers': 'OmniCore E10, C30, C90XT, V250XT, V400XT',
      'Applications': 'Polishing, Assembly, Material handling',
      'Precision': 'High accuracy motion control',
    },
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204600-2:16x9-L',
    description: 'The IRB 4600 is a medium-payload robot perfect for polishing and deburring applications. With payloads up to 60 kg and reach up to 2.55m, it handles larger parts with precision.',
    payload: '20-60 kg',
    reach: '2.05-2.55 m',
    applications: ['Polishing', 'Deburring', 'Sanding', 'Grinding'],
    specs: {
      'Payload': '20 / 40 / 45 / 60 kg',
      'Reach': '2050 / 2050 / 2550 / 2050 mm',
      'Controllers': 'OmniCore C30, C90XT, V250XT',
      'Applications': 'Polishing, Deburring, Material handling',
      'Versatility': 'Medium to large parts',
    },
  },
];

export default function SandingPolishingRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="sanding-polishing-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Robots for Sanding & Polishing</h2>
        <p className="robot-catalog-subheading">
          Precision robots for consistent surface finishing and quality control
        </p>

        <div className="robot-cards-grid">
          {sandingPolishingRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">{robot.type}</span>
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
