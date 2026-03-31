'use client';

const paintRobotsData = [
  {
    id: 'irb-5350',
    name: 'IRB 5350',
    type: 'Paint',
    description: 'The IRB 5350 door opener robot is a compact and precise robot assistant for automotive interior painting, both for stop-and-go and moving-line solutions. A specially designed door opener tool with integrated sensors for search and force feedback makes this an efficient and important part of the interior paint zone.',
    payload: 'Door Opener',
    reach: 'Compact',
    applications: ['Interior Painting', 'Door Opening', 'Automotive', 'Moving-Line'],
    specs: {
      'Application': 'Door opener',
      'Design': 'Compact and precise',
      'Solutions': 'Stop-and-go, moving-line',
      'Sensors': 'Integrated search & force feedback',
      'Zone': 'Interior paint zone',
    },
  },
  {
    id: 'irb-5500-22',
    name: 'IRB 5500-22 FlexPainter',
    type: 'Paint',
    description: 'The IRB 5500 FlexPainter takes painting closer to perfection by integrating the paint application equipment. Combined with its large work area and high acceleration and painting speed, the result is the most efficient and flexible paint robot solution for basically any application.',
    payload: 'Integrated',
    reach: 'Large Work Area',
    applications: ['Automotive Painting', 'Industrial Painting', 'Exterior Painting', 'Interior Painting'],
    specs: {
      'Equipment': 'Integrated paint application',
      'Work Area': 'Large',
      'Speed': 'High acceleration',
      'Flexibility': 'Most flexible solution',
      'Applications': 'Any application',
    },
  },
  {
    id: 'irb-5500-25',
    name: 'IRB 5500-25 Elevated Rail',
    type: 'Paint',
    description: 'The Elevated Rail for the IRB 5500 system is one of the most advanced paint solutions available on the market. Ideally suited for both interior and exterior automotive painting as well as other paint applications.',
    payload: 'Elevated Rail',
    reach: 'Extended',
    applications: ['Interior Painting', 'Exterior Painting', 'Automotive', 'Advanced Solutions'],
    specs: {
      'System': 'Elevated Rail',
      'Technology': 'Most advanced',
      'Painting': 'Interior & exterior',
      'Industry': 'Automotive & general',
      'Market Position': 'Industry-leading',
    },
  },
  {
    id: 'irb-5500-27',
    name: 'IRB 5500-27',
    type: 'Paint',
    description: 'IRB 5500-27 is a new variant of the innovative IRB 5500 robot family. Featuring integrated 7-axes that enable a wider working range and flexible installation positioning, IRB 5500-27 is capable of supporting both interior and exterior automotive painting, as well as other paint applications.',
    payload: '7-Axis',
    reach: 'Wide Range',
    applications: ['Interior Painting', 'Exterior Painting', 'Flexible Positioning', 'Automotive'],
    specs: {
      'Axes': '7 (integrated)',
      'Working Range': 'Wider',
      'Installation': 'Flexible positioning',
      'Painting': 'Interior & exterior',
      'Family': 'IRB 5500 innovative',
    },
  },
  {
    id: 'irb-5510',
    name: 'IRB 5510 FlexPainter',
    type: 'Paint',
    description: 'IRB 5510 FlexPainter is a highly flexible and accurate medium-sized paint robot for automotive small parts and general industrial painting. This robot provides a shorter cycle time, process optimization, and digital platform to ensure premium paint quality and uptime.',
    payload: 'Medium',
    reach: 'Medium',
    applications: ['Small Parts', 'Industrial Painting', 'Automotive Parts', 'General Industry'],
    specs: {
      'Size': 'Medium',
      'Accuracy': 'Highly accurate',
      'Cycle Time': 'Shorter',
      'Platform': 'Digital',
      'Quality': 'Premium paint quality',
    },
  },
];

export default function PaintRobotsCatalog() {
  return (
    <section className="robot-catalog-section" id="paint-robots">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Paint Robots</h2>
        <p className="robot-catalog-subheading">
          Precision painting solutions for automotive and industrial applications
        </p>

        <div className="robot-cards-grid">
          {paintRobotsData.map((robot) => (
            <div key={robot.id} className="robot-grid-card">
              <div className="robot-grid-image">
                <img 
                  src={`https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                  alt={robot.name}
                  loading="lazy"
                />
                <span className="iso-badge">Paint</span>
              </div>
              <div className="robot-grid-content">
                <h3 className="robot-grid-name">{robot.name}</h3>
                <p className="robot-grid-description">{robot.description}</p>
                
                <div className="robot-grid-specs">
                  <div className="grid-spec-item">
                    <span className="grid-spec-label">Type:</span>
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
