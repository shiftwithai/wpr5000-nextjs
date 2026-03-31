'use client';

const palletizingRobotsData = [
  {
    id: 'irb-460',
    name: 'IRB 460',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_460_123a6dc579.avif',
    description: 'Leading ABB\'s palletizing offering is the compact IRB 460 - the fastest palletizing robot in the world. The IRB 460 is perfect for end-of-line palletizing and bag palletizing applications. The 4-axis robot is the fastest of its kind and its small footprint makes it ideal for fitting into existing packing lines.',
    payload: '110 kg',
    reach: '2.4 m',
    applications: ['End-of-Line Palletizing', 'Bag Palletizing', 'High-Speed Palletizing', 'Compact Lines'],
    specs: {
      'Payload': '110 kg',
      'Reach': '2400 mm',
      'Axes': '4',
      'Speed': 'Fastest in the world',
      'Footprint': 'Compact',
    },
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_e89b5f7a5d.avif',
    description: 'Thanks to its state-of-the-art 4-axes design, customers can look forward to a speedy machine that combines a 3.15 meter reach with a 250 kg payload, making it ideal for palletizing bags, boxes, crates, bottles and more. ABB is the sole global supplier of complete robot based packaging line automation.',
    payload: '250 kg',
    reach: '3.15 m',
    applications: ['Bag Palletizing', 'Box Palletizing', 'Crate Handling', 'Bottle Palletizing'],
    specs: {
      'Payload': '250 kg',
      'Reach': '3150 mm',
      'Axes': '4',
      'Design': 'State-of-the-art',
      'Applications': 'Bags, boxes, crates, bottles',
    },
  },
  {
    id: 'irb-760',
    name: 'IRB 760',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_760_1_1x1_L_684650b423.avif',
    description: 'The 4-axis robot can move and rotate large and heavy products at high speeds, and with the utmost care. Its compact design makes it ideal for fitting into existing lines.',
    payload: '450 kg',
    reach: '3.2 m',
    applications: ['Heavy Payload', 'Large Products', 'High-Speed Handling', 'Existing Line Integration'],
    specs: {
      'Payload': '450 kg',
      'Reach': '3200 mm',
      'Axes': '4',
      'Handling': 'Large and heavy products',
      'Design': 'Compact',
    },
  },
];

export default function PalletizingRobotsCatalog() {
  return (
    <section className="robot-catalog-section" id="palletizing-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB 4-Axis Palletizing Robots</h2>
        <p className="robot-catalog-subheading">
          The fastest and most compact palletizing robots for end-of-line operations
        </p>

        <div className="robot-cards-grid">
          {palletizingRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">4-Axis</span>
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
