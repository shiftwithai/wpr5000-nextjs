'use client';

const foodBeverageRobotsData = [
  {
    id: 'irb-1200-hygienic',
    name: 'IRB 1200 Hygienic',
    type: 'Hygienic',
    image: 'https://proax.ca/strapiv4/uploads/IRB_1200_Hygienic_3_1x1_L_ba6ab4dc3b.webp',
    description: 'The IRB 1200 Hygienic is specifically designed for food and beverage applications. With food-grade materials and smooth surfaces, it is ideal for picking, packing, and handling in washdown environments.',
    maxPayload: 7,
    maxReach: 0.9,
    applications: ['Food & Beverage', 'Packing', 'Picking', 'Washdown Environments'],
    specs: {
      'Payload': '5 / 7 kg',
      'Reach': '700 / 900 mm',
      'Design': 'Hygienic',
      'Environment': 'Washdown capable',
      'Application': 'Food-grade handling',
    },
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    description: 'The IRB 365 FlexPicker® Delta robot offers a 1.5 kg payload and class-leading speed for reorienting lightweight packaged goods such as cookies, chocolates, candies, small bottles, and food products.',
    maxPayload: 1.5,
    maxReach: 1.1,
    applications: ['Food & Beverage', 'Packing', 'High-Speed Picking', 'Reorientation'],
    specs: {
      'Payload': '1.5 kg',
      'Reach': 'Ø1100 mm',
      'Variants': '800 / 1100 / 1300 mm',
      'Speed': 'Class-leading',
      'Specialty': 'Lightweight food handling',
    },
  },
];

export default function FoodBeverageRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="food-beverage-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Food & Beverage Robots</h2>
        <p className="robot-catalog-subheading">
          Hygienic robots designed for food-safe environments
        </p>

        <div className="robot-cards-grid lab-robots-grid">
          {foodBeverageRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">Food-Safe</span>
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
