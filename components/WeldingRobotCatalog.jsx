'use client';

const weldingRobotsData = [
  {
    id: 'irb-1520id',
    name: 'IRB 1520ID',
    type: 'Arc Welding',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201520ID-2:16x9-L',
    description: 'This high precision robotic arc welder, with integrated process dressing, combines 24/7 production output with 50% lower cost of maintenance to deliver the lowest cost per weld in its class.',
    maxPayload: 4,
    maxReach: 1.5,
    applications: ['Arc Welding', 'MIG Welding', 'TIG Welding', 'Continuous Production'],
    specs: {
      'Payload': '4 kg',
      'Reach': '1500 mm',
      'Feature': 'Integrated Process Dressing',
      'Maintenance': '50% lower cost',
      'Output': '24/7 production capable',
    },
  },
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    type: 'Arc Welding',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201600-2:16x9-L',
    description: 'The IRB 1600 is the highest-performance 10 kg robot. With cycle times up to 50% shorter than other robots, it delivers both high-speed throughput and exceptional workpiece quality.',
    maxPayload: 10,
    maxReach: 1.45,
    applications: ['Arc Welding', 'High-Speed Welding', 'Material Handling', 'Machine Tending'],
    specs: {
      'Payload': '6 / 10 kg',
      'Reach': '1200 / 1450 mm',
      'Cycle Time': '50% shorter',
      'Performance': 'Highest in class',
      'Quality': 'Exceptional workpiece quality',
    },
  },
  {
    id: 'irb-2600',
    name: 'IRB 2600',
    type: 'Arc Welding',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600-1:16x9-L',
    description: 'The IRB 2600 is the second model in the sharp generation range with enhanced and new capabilities. It is a compact robot with a high payload capacity.',
    maxPayload: 20,
    maxReach: 1.85,
    applications: ['Arc Welding', 'Material Handling', 'Machine Tending', 'Assembly'],
    specs: {
      'Payload': '12 / 20 kg',
      'Reach': '1650 / 1850 mm',
      'Design': 'Compact',
      'Generation': 'Sharp generation',
      'Capabilities': 'Enhanced features',
    },
  },
  {
    id: 'irb-2600id',
    name: 'IRB 2600ID',
    type: 'Arc Welding',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%202600ID-1:16x9-L',
    description: 'Featuring a unique combination of high payload capacity, large working range, and Integrated Dressing (ID), which routes all cables and hoses inside the robot\'s upper arm and wrist.',
    maxPayload: 15,
    maxReach: 1.85,
    applications: ['Arc Welding', 'Integrated Dressing', 'Complex Welding Paths', 'Confined Spaces'],
    specs: {
      'Payload': '8 / 15 kg',
      'Reach': '1850 mm',
      'Feature': 'Integrated Dressing (ID)',
      'Cable Routing': 'Internal upper arm & wrist',
      'Working Range': 'Large',
    },
  },
  {
    id: 'irb-4400',
    name: 'IRB 4400',
    type: 'Arc Welding',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204400-1:16x9-L',
    description: 'IRB 4400 is an extremely fast, compact robot for medium to heavy handling. It has exceptional all-round capabilities which makes it suitable for a variety of manufacturing applications.',
    maxPayload: 60,
    maxReach: 1.96,
    applications: ['Arc Welding', 'Medium Handling', 'Heavy Handling', 'General Manufacturing'],
    specs: {
      'Payload': '45 / 60 kg',
      'Reach': '1960 mm',
      'Speed': 'Extremely fast',
      'Design': 'Compact',
      'Versatility': 'All-round capabilities',
    },
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    type: 'Arc Welding',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%204600-1:16x9-L',
    description: 'IRB 4600 is a highly productive general purpose robot optimized for short cycle times where compact robots can help create high density cells.',
    maxPayload: 60,
    maxReach: 2.05,
    applications: ['Arc Welding', 'High Density Cells', 'Short Cycle Times', 'General Purpose'],
    specs: {
      'Payload': '20 / 40 / 45 / 60 kg',
      'Reach': '2050 / 2550 mm',
      'Optimization': 'Short cycle times',
      'Cell Design': 'High density capable',
      'Purpose': 'General purpose',
    },
  },
];

export default function WeldingRobotCatalog() {
  return (
    <section className="robot-catalog-section" id="welding-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Welding Robots</h2>
        <p className="robot-catalog-subheading">
          High-precision robotic welders for arc welding applications
        </p>

        <div className="robot-cards-grid">
          {weldingRobotsData.map((robot) => (
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
