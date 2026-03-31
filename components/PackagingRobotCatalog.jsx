'use client';

const packagingRobotsData = [
  {
    id: 'irb-460',
    name: 'IRB 460',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_460_1_1x1_L_64daed3161.webp',
    description: 'Leading ABB\'s palletizing offering is the compact IRB 460 - the fastest palletizing robot in the world. Perfect for end-of-line palletizing and bag palletizing applications. The 4-axis robot is the fastest of its kind and its small footprint makes it ideal for fitting into existing packing lines.',
    maxPayload: 110,
    maxReach: 2.4,
    applications: ['End-of-Line Palletizing', 'Bag Palletizing', 'Case Palletizing', 'High-Speed Stacking'],
    specs: {
      'Payload': '110 kg',
      'Reach': '2400 mm',
      'Axes': '4',
      'Speed': 'Fastest palletizing robot',
      'Footprint': 'Compact',
    },
  },
  {
    id: 'irb-660',
    name: 'IRB 660',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_660_1_1x1_L_ee6abbfe76.webp',
    description: 'Thanks to its state-of-the-art 4-axes design, customers can look forward to a speedy machine that combines a 3.15 meter reach with a 250 kg payload, making it ideal for palletizing bags, boxes, crates, bottles and more.',
    maxPayload: 250,
    maxReach: 3.15,
    applications: ['Bag Palletizing', 'Box Palletizing', 'Crate Handling', 'Bottle Palletizing'],
    specs: {
      'Payload': '250 kg',
      'Reach': '3150 mm',
      'Axes': '4',
      'Design': 'State-of-the-art',
      'Versatility': 'Multi-product handling',
    },
  },
  {
    id: 'irb-760',
    name: 'IRB 760',
    type: 'Palletizing',
    image: 'https://proax.ca/strapiv4/uploads/IRB_760_1_1x1_L_643e1229b4.webp',
    description: 'The 4-axis robot can move and rotate large and heavy products at high speeds, and with the utmost care. Its compact design makes it ideal for fitting into existing lines.',
    maxPayload: 450,
    maxReach: 3.2,
    applications: ['Heavy Payload Palletizing', 'Large Product Handling', 'High-Speed Operations', 'Existing Line Integration'],
    specs: {
      'Payload': '450 kg',
      'Reach': '3200 mm',
      'Axes': '4',
      'Design': 'Compact',
      'Handling': 'Large & heavy products',
    },
  },
  {
    id: 'irb-360',
    name: 'IRB 360 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20360-2:16x9-L',
    description: 'For more than 20 years, ABB\'s FlexPicker has been the leader in state-of-the-art high-speed robotic picking and packing technology. IRB 360 is the fastest industrial delta robot in the world while offering high reliability and accuracy.',
    maxPayload: 8,
    maxReach: 1.6,
    applications: ['High-Speed Picking', 'Packing', 'Sorting', 'Assembly'],
    specs: {
      'Payload': '1 / 3 / 6 / 8 kg',
      'Reach': '800 / 1130 / 1600 mm',
      'Type': 'Delta Robot',
      'Speed': 'Fastest industrial delta',
      'Legacy': '20+ years market leader',
    },
  },
  {
    id: 'irb-365',
    name: 'IRB 365 FlexPicker',
    type: 'Delta',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L',
    description: 'The IRB 365 FlexPicker® Delta robot, available in three variants (800, 1100, and 1300 mm), offers a 1.5 kg payload and class-leading speed for reorienting lightweight packaged goods such as cookies, chocolates, candies, small bottles, peppers, and parcels.',
    maxPayload: 1.5,
    maxReach: 1.3,
    applications: ['Lightweight Picking', 'Reorientation', 'Food Handling', 'Parcel Sorting'],
    specs: {
      'Payload': '1.5 kg',
      'Reach': '800 / 1100 / 1300 mm',
      'Variants': '3 sizes available',
      'Speed': 'Class-leading',
      'Specialty': 'Lightweight goods reorientation',
    },
  },
];

export default function PackagingRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="packaging-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Robots for Packaging</h2>
        <p className="robot-catalog-subheading">
          High-speed picking, packing, and case handling solutions
        </p>

        <div className="robot-cards-grid">
          {packagingRobotsData.map((robot) => (
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
