'use client';

const labRobotsData = [
  {
    id: 'gofa-crb-15000',
    name: 'GoFa CRB 15000',
    type: 'Collaborative',
    image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
    description: 'Ideal for lab automation, sample handling, instrument loading, and human-robot collaboration. Safe operation alongside lab technicians without safety fencing.',
    variants: ['GoFa CRB 15000-5', 'GoFa CRB 15000-10', 'GoFa CRB 15000-12'],
    maxPayload: 12,
    maxReach: 0.95,
    applications: ['Sample Handling', 'Instrument Loading', 'Lab Automation', 'Human-Robot Collaboration'],
    specs: {
      'Payload Options': '5 / 10 / 12 kg',
      'Reach': '950 mm',
      'Repeatability': '±0.05 mm',
      'Controller': 'OmniCore',
      'Safety': 'Collaborative - No fencing required',
      'IP Rating': 'IP54',
    },
  },
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
    description: 'Suitable for enclosed lab cells, diagnostics automation, and high-precision handling. Compact footprint ideal for space-constrained laboratory environments.',
    variants: ['IRB 1300-11/0.9', 'IRB 1300-10/1.15', 'IRB 1300-7/1.4'],
    maxPayload: 11,
    maxReach: 1.4,
    applications: ['Diagnostics Automation', 'High-Precision Handling', 'Enclosed Lab Cells', 'Testing Automation'],
    specs: {
      'Payload': '7 / 10 / 11 kg',
      'Reach': '900 / 1150 / 1400 mm',
      'Repeatability': '±0.02 mm',
      'Controller': 'OmniCore',
      'Cycle Time': 'Industry-leading speed',
      'IP Rating': 'IP40',
    },
  },
];

export default function LabAutomationRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="lab-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Robots for Laboratory Automation</h2>
        <p className="robot-catalog-subheading">
          Purpose-built robots for precision lab environments
        </p>

        <div className="robot-cards-grid lab-robots-grid">
          {labRobotsData.map((robot) => (
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
