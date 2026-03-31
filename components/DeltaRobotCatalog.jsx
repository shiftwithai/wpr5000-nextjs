'use client';

const deltaRobotsData = [
  {
    id: 'irb-360',
    name: 'IRB 360 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20360-2:16x9-L',
    description: 'ABB\'s IRB 360 FlexPicker is capable of the fastest picking applications and have been optimized for packing applications. The robot has outstanding motion performance with the shortest cycle times, precision accuracy for payloads from 1 to 8kg.',
    payload: '1 - 8 kg',
    reach: '0.8 - 1.6 m',
    applications: ['Picking', 'Packing', 'Packaging', 'High-Speed Handling'],
    specs: {
      'Payload': '1 / 3 / 6 / 8 kg',
      'Reach': '800 / 1130 / 1600 mm',
      'Performance': 'Fastest picking',
      'Cycle Time': 'Shortest in class',
      'Accuracy': 'Precision',
    },
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    description: 'With the same five axes and 1.5kg payload, the three variants (800mm, 1100mm, 1300mm) of IRB 365 FlexPicker® Delta robot are flexible and the fastest in their class for reorientating packaged lightweight products such as cookies, chocolates, peppers, candies, small bottles, and parcels.',
    payload: '1.5 kg',
    reach: '0.8 - 1.3 m',
    applications: ['Reorientation', 'Lightweight Products', 'Food Packaging', 'Confectionery'],
    specs: {
      'Payload': '1.5 kg',
      'Reach': '800 / 1100 / 1300 mm',
      'Axes': '5',
      'Speed': 'Fastest in class',
      'Products': 'Cookies, chocolates, candies, bottles',
    },
  },
  {
    id: 'irb-390',
    name: 'IRB 390 FlexPacker',
    type: 'Delta',
    image: 'https://proax.ca/strapiv4/uploads/IRB_390_2_1x1_L_0996fedc16.webp',
    description: 'The IRB 390 FlexPacker is a ground-breaking innovation in Delta Robot technology. IRB 390 FlexPacker delta robot is designed for rapid changeover times that accompany the growth of low volume, high mix production to respond to the revolution of new consumer demands.',
    payload: '10 - 15 kg',
    reach: '1.3 m',
    applications: ['High Mix Production', 'Rapid Changeover', 'Secondary Packaging', 'Case Packing'],
    specs: {
      'Payload': '10 / 15 kg',
      'Reach': '1300 mm',
      'Innovation': 'Ground-breaking',
      'Changeover': 'Rapid',
      'Production': 'Low volume, high mix',
    },
  },
];

export default function DeltaRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="delta-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Delta Robots</h2>
        <p className="robot-catalog-subheading">
          High-speed picking and packing technology for packaging applications
        </p>

        <div className="robot-cards-grid">
          {deltaRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">Delta</span>
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
