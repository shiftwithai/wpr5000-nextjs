'use client';

import { useState, useMemo } from 'react';

const cleanroomRobotsData = [
  {
    id: 'gofa-crb-15000',
    name: 'GoFa CRB 15000',
    type: 'Collaborative',
    image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L',
    description: 'Collaborative robot with cleanroom capability, available in 5kg, 10kg, and 12kg payload variants. Ideal for sensitive assembly and handling in controlled environments.',
    variants: ['GoFa CRB 15000-5', 'GoFa CRB 15000-10', 'GoFa CRB 15000-12'],
    maxPayload: 12,
    payloadRange: '6-15',
    maxReach: 1.52,
    reachRange: '1.5-2.0',
    isoClass: 'ISO 5',
    applications: ['Assembly', 'Material Handling', 'Lab Automation', 'Packaging'],
    specs: {
      'Payload Options': '5 / 10 / 12 kg',
      'Reach': '950 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP54',
      'Repeatability': '±0.05 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1010',
    name: 'IRB 1010',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201010-1:16x9-L',
    description: 'ABB\'s smallest 6-axis robot, designed for electronics and small parts assembly in cleanroom environments. Compact footprint with exceptional precision.',
    variants: ['IRB 1010-1.5/0.37'],
    maxPayload: 1.5,
    payloadRange: '0-5',
    maxReach: 0.37,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    applications: ['Electronics Assembly', 'Small Parts Handling', 'Lab Automation', 'Semiconductor'],
    specs: {
      'Payload': '1.5 kg',
      'Reach': '370 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1100',
    name: 'IRB 1100',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201100-2:16x9-L',
    description: 'Compact and lightweight 6-axis robot with cleanroom certification. Fast performance in a small footprint for healthcare, pharmaceuticals, and electronics.',
    variants: ['IRB 1100-4/0.475', 'IRB 1100-4/0.58'],
    maxPayload: 4,
    payloadRange: '0-5',
    maxReach: 0.58,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    applications: ['Pharmaceuticals', 'Medical Devices', 'Electronics', 'Lab Automation'],
    specs: {
      'Payload': '4 kg',
      'Reach': '475 / 580 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1200-gen2',
    name: 'IRB 1200 (Gen 2)',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201200%20next%20gen%20(1):16x9-L',
    description: 'Versatile 6-axis robot with cleanroom option. Second generation with improved performance for flexible manufacturing in controlled environments.',
    variants: ['IRB 1200-5/0.9', 'IRB 1200-7/0.7'],
    maxPayload: 7,
    payloadRange: '6-15',
    maxReach: 0.9,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    applications: ['Assembly', 'Material Handling', 'Machine Tending', 'Packaging'],
    specs: {
      'Payload': '5 / 7 kg',
      'Reach': '700 / 900 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.025 mm',
      'Controller': 'IRC5',
    },
  },
  {
    id: 'irb-1200-omnicore',
    name: 'IRB 1200 OmniCore',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201200%20next%20gen%20(1):16x9-L',
    description: 'Latest generation IRB 1200 with OmniCore controller. Enhanced connectivity and performance for modern cleanroom manufacturing.',
    variants: ['IRB 1200-5/0.9 OmniCore', 'IRB 1200-7/0.7 OmniCore'],
    maxPayload: 7,
    payloadRange: '6-15',
    maxReach: 0.9,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    applications: ['Assembly', 'Material Handling', 'Machine Tending', 'Electronics'],
    specs: {
      'Payload': '5 / 7 kg',
      'Reach': '700 / 900 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.02 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    type: 'Articulated',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%201300-2:16x9-L',
    description: 'High-performance compact robot with cleanroom capability. Excellent for fast pick-and-place and machine tending in controlled environments.',
    variants: ['IRB 1300-11/0.9', 'IRB 1300-10/1.15', 'IRB 1300-7/1.4'],
    maxPayload: 11,
    payloadRange: '6-15',
    maxReach: 1.4,
    reachRange: '1.0-1.5',
    isoClass: 'ISO 5',
    applications: ['Machine Tending', 'Material Handling', 'Assembly', 'Packaging'],
    specs: {
      'Payload': '7 / 10 / 11 kg',
      'Reach': '900 / 1150 / 1400 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.02 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-910inv',
    name: 'IRB 910INV',
    type: 'SCARA',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20910INV-2:16x9-L',
    description: 'Inverted SCARA robot designed for ceiling-mount cleanroom applications. Ideal for semiconductor and electronics manufacturing with minimal particle emission.',
    variants: ['IRB 910INV-3/0.35', 'IRB 910INV-3/0.55'],
    maxPayload: 3,
    payloadRange: '0-5',
    maxReach: 0.55,
    reachRange: '0-1.0',
    isoClass: 'ISO 4',
    applications: ['Semiconductor', 'Electronics', 'Display Manufacturing', 'Small Parts Assembly'],
    specs: {
      'Payload': '3 kg',
      'Reach': '350 / 550 mm',
      'ISO Class': 'ISO 4 (Class 10)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-920',
    name: 'IRB 920',
    type: 'SCARA',
    image: 'https://media-d.global.abb/is/image/abbc/IRB%20920-2:16x9-L',
    description: 'High-speed SCARA robot with ISO 5 cleanroom option. Compact design for semiconductor, display, and electronics manufacturing.',
    variants: ['IRB 920-6/0.45', 'IRB 920-6/0.55', 'IRB 920-12/0.5'],
    maxPayload: 12,
    payloadRange: '6-15',
    maxReach: 0.55,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    applications: ['Semiconductor', 'Display Manufacturing', 'Electronics', 'Assembly'],
    specs: {
      'Payload': '6 / 12 kg',
      'Reach': '450 / 500 / 550 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
  {
    id: 'irb-930',
    name: 'IRB 930',
    type: 'SCARA',
    image: 'https://proax.ca/strapiv4/uploads/IRB_930_ed0218f9a2.webp',
    description: 'Extended reach SCARA robot with cleanroom capability. Higher payload capacity for larger electronics and assembly applications.',
    variants: ['IRB 930-6/0.65', 'IRB 930-12/0.65'],
    maxPayload: 12,
    payloadRange: '6-15',
    maxReach: 0.65,
    reachRange: '0-1.0',
    isoClass: 'ISO 5',
    applications: ['Electronics', 'Assembly', 'Material Handling', 'Packaging'],
    specs: {
      'Payload': '6 / 12 kg',
      'Reach': '650 mm',
      'ISO Class': 'ISO 5 (Class 100)',
      'Protection': 'IP40',
      'Repeatability': '±0.01 mm',
      'Controller': 'OmniCore',
    },
  },
];

const filterOptions = {
  type: ['All Types', 'Collaborative', 'Articulated', 'SCARA'],
  isoClass: ['All ISO Classes', 'ISO 4', 'ISO 5'],
  payload: ['All Payloads', '0-5 kg', '6-15 kg'],
};

export default function CleanroomRobotCatalog() {
  const [filters, setFilters] = useState({
    type: 'All Types',
    isoClass: 'All ISO Classes',
    payload: 'All Payloads',
  });

  const filteredRobots = useMemo(() => {
    return cleanroomRobotsData.filter((robot) => {
      if (filters.type !== 'All Types' && robot.type !== filters.type) return false;
      
      if (filters.isoClass !== 'All ISO Classes' && robot.isoClass !== filters.isoClass) return false;
      
      if (filters.payload !== 'All Payloads') {
        const payloadMap = {
          '0-5 kg': '0-5',
          '6-15 kg': '6-15',
        };
        if (robot.payloadRange !== payloadMap[filters.payload]) return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  };

  return (
    <section className="robot-catalog-section" id="cleanroom-catalog">
      <div className="container">
        <h2 className="robot-catalog-heading">Cleanroom-Capable ABB Robots</h2>
        <p className="robot-catalog-subheading">
          ISO 14644-1 certified robots available through Proax
        </p>

        <div className="catalog-filters">
          <div className="filter-group">
            <label className="filter-label">Robot Type</label>
            <select
              className="filter-select"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              {filterOptions.type.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">ISO Class</label>
            <select
              className="filter-select"
              value={filters.isoClass}
              onChange={(e) => handleFilterChange('isoClass', e.target.value)}
            >
              {filterOptions.isoClass.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Payload Range</label>
            <select
              className="filter-select"
              value={filters.payload}
              onChange={(e) => handleFilterChange('payload', e.target.value)}
            >
              {filterOptions.payload.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="catalog-results-count">
          Showing {filteredRobots.length} of {cleanroomRobotsData.length} cleanroom robots
        </div>

        <div className="robot-cards-grid">
          {filteredRobots.length === 0 ? (
            <div className="no-results">
              <p>No robots match your current filters. Try adjusting your selection.</p>
            </div>
          ) : (
            filteredRobots.map((robot) => (
              <div key={robot.id} className="robot-grid-card">
                <div className="robot-grid-image">
                  <img 
                    src={robot.image || `https://placehold.co/400x300/f5f5f5/666666?text=${encodeURIComponent(robot.name)}`}
                    alt={robot.name}
                    loading="lazy"
                  />
                  <span className="iso-badge">{robot.isoClass}</span>
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
