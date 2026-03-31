'use client';

const collaborativeRobotsData = [
  {
    id: 'gofa',
    name: 'GoFa™',
    type: 'Collaborative',
    image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
    description: 'Go faster. Go further than ever. GoFa\'s class-leading speed, safety, and ease of use will take your business to the next level.',
    payload: '5 - 12 kg',
    reach: '0.95 m',
    applications: ['Assembly', 'Machine Tending', 'Material Handling', 'Quality Inspection'],
    specs: {
      'Payload': '5 / 10 / 12 kg',
      'Reach': '950 mm',
      'Speed': 'Class-leading',
      'Safety': 'Collaborative',
      'Ease of Use': 'Intuitive programming',
    },
  },
];

export default function CollaborativeRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="collaborative-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">Our Collaborative Robot Portfolio</h2>
        <p className="robot-catalog-subheading">
          Safe, flexible cobots designed for human-robot collaboration
        </p>

        <div className="robot-cards-grid">
          {collaborativeRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">Collaborative</span>
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
