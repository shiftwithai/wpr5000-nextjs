'use client';

import { useState, useMemo, useEffect, useRef } from 'react';

// Placeholder data - will be replaced with actual robot data
const robotsData = [
  {
    id: 'gofa-5',
    name: 'GoFa 5 (CRB 15000)',
    applications: ['Material handling', 'Machine tending', 'Assembly', 'Screwdriving', 'Collaboration', 'Small parts assembly', 'Picking', 'Packaging'],
    payload: '5 kg',
    reach: '0.95 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore C30'],
    productUrl: 'https://proax.ca/en/product/2742138/abbcrb1500050:95'
  },
  {
    id: 'gofa-10',
    name: 'GoFa 10 (CRB 15000)',
    applications: ['Material handling', 'Machine tending', 'Assembly', 'Screwdriving', 'Collaboration', 'Small parts assembly', 'Picking', 'Packaging'],
    payload: '10 kg',
    reach: '1.62 m',
    payloadCategory: 'B',
    reachCategory: 'A',
    controllers: ['OmniCore C30'],
    productUrl: 'https://proax.ca/en/product/2742136/abbcrb15000101:52'
  },
  {
    id: 'gofa-12',
    name: 'GoFa 12 (CRB 15000)',
    applications: ['Material handling', 'Machine tending', 'Assembly', 'Screwdriving', 'Collaboration', 'Small parts assembly', 'Picking', 'Packaging'],
    payload: '12 kg',
    reach: '1.40 m',
    payloadCategory: 'B',
    reachCategory: 'A',
    controllers: ['OmniCore C30'],
    productUrl: 'https://proax.ca/en/product/2742137/abbcrb15000121:27'
  },
  {
    id: 'irb-1010',
    name: 'IRB 1010',
    applications: ['Education', 'Electronics'],
    payload: '1.5 kg',
    reach: '0.37 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30']
  },
  {
    id: 'irb-1090',
    name: 'IRB 1090',
    applications: ['Education'],
    payload: '3.5 kg',
    reach: '0.58 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10']
  },
  {
    id: 'irb-1100',
    name: 'IRB 1100',
    applications: ['Assembly', 'Testing', 'Loading and unloading', 'Screwdriving', 'Rubber insertion'],
    payload: '4 kg',
    reach: '0.475-0.58 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  },
  {
    id: 'irb-1200',
    name: 'IRB 1200',
    applications: ['Assembly', 'Material handling', 'Machine tending'],
    payload: '5-7 kg',
    reach: '0.7-0.9 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT', 'IRC5']
  },
  {
    id: 'irb-1200-hygienic',
    name: 'IRB 1200 Hygienic',
    applications: ['Food & Beverage', 'Packaging', 'Picking'],
    payload: '5-7 kg',
    reach: '0.7-0.9 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT', 'IRC5']
  },
  {
    id: 'irb-1300',
    name: 'IRB 1300',
    applications: ['Assembly', 'Material handling', 'Machine tending', 'Polishing', 'Loading and unloading', 'Welding', 'Item picking'],
    payload: '7-12 kg',
    reach: '0.9-1.4 m',
    payloadCategory: 'A,B',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT', 'V250XT', 'V400XT']
  },
  {
    id: 'irb-14050-single-arm-yumi',
    name: 'IRB 14050 Single-arm YuMi',
    applications: ['Small parts assembly', 'Assembly', 'Collaboration'],
    payload: '0.5 kg',
    reach: '0.5 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore C30']
  },
  {
    id: 'irb-1600',
    name: 'IRB 1600',
    applications: ['Cleaning', 'Spraying', 'Arc welding', 'Assembly', 'Die casting', 'Injection moulding', 'Machine tending', 'Material handling', 'Packaging'],
    payload: '6-10 kg',
    reach: '1.2-1.45 m',
    payloadCategory: 'A,B',
    reachCategory: 'A',
    controllers: ['IRC5', 'OmniCore C30', 'C90', 'V250XT', 'V400XT']
  },
  {
    id: 'irb-2600',
    name: 'IRB 2600',
    applications: ['Machine tending', 'Material handling', 'Arc welding', 'Cutting', 'Dispensing', 'Assembly', 'Palletizing', 'Packaging', 'Measuring'],
    payload: '12-20 kg',
    reach: '1.65-1.85 m',
    payloadCategory: 'B,C',
    reachCategory: 'A,B',
    controllers: ['OmniCore V250XT', 'V400XT', 'IRC5']
  },
  {
    id: 'irb-360',
    name: 'IRB 360',
    applications: ['Assembly', 'Material handling', 'Packaging', 'Picking'],
    payload: '1-8 kg',
    reach: 'Ø1.13 m',
    payloadCategory: 'A,B',
    reachCategory: 'A',
    controllers: ['OmniCore C30', 'IRC5']
  },
  {
    id: 'irb-365',
    name: 'IRB 365',
    applications: ['Food & Beverage', 'Packaging', 'Picking', 'Consumer Packaged Goods', 'E-commerce', 'Pharmaceutical'],
    payload: '1.5 kg',
    reach: 'Ø1.10 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore C30']
  },
  {
    id: 'irb-390',
    name: 'IRB 390',
    applications: ['Assembly', 'Material handling', 'Packaging', 'Picking'],
    payload: '8-15 kg',
    reach: 'Ø1.30 m',
    payloadCategory: 'B',
    reachCategory: 'A',
    controllers: ['OmniCore V250XT', 'V400XT', 'IRC5']
  },
  {
    id: 'irb-4600',
    name: 'IRB 4600',
    applications: ['Machine tending', 'Material handling', 'Arc welding', 'Cutting', 'Dispensing', 'Assembly', 'Palletizing', 'Packaging', 'Measuring', 'Deburring', 'Polishing'],
    payload: '20-60 kg',
    reach: '2.05-2.55 m',
    payloadCategory: 'C',
    reachCategory: 'B',
    controllers: ['OmniCore V250XT', 'V400XT', 'IRC5']
  },
  {
    id: 'irb-910inv',
    name: 'IRB 910INV',
    applications: ['Small parts assembly', 'Material handling', 'Parts inspection'],
    payload: '3-6 kg',
    reach: '0.35-0.55 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  },
  {
    id: 'irb-920t',
    name: 'IRB 920T',
    applications: ['Small parts assembly', 'Material handling', 'Parts inspection'],
    payload: '6 kg',
    reach: '0.45-0.65 m',
    payloadCategory: 'A',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  },
  {
    id: 'irb-930',
    name: 'IRB 930',
    applications: ['Assembly', 'Picking', 'Placing', 'Material handling', 'Screwdriving', 'Packaging', 'Testing'],
    payload: '12, 22 kg',
    reach: '0.85, 1.05 m',
    payloadCategory: 'B,C',
    reachCategory: 'A',
    controllers: ['OmniCore E10', 'C30', 'C90XT']
  }
];

// Payload category mapping (internal codes to display labels)
const payloadOptions = [
  { label: '-All-', code: null },
  { label: 'up to 7 kg', code: 'A' },
  { label: '7 - 16 kg', code: 'B' },
  { label: '16 - 60 kg', code: 'C' },
  { label: '60 - 225 kg', code: 'D' },
  { label: 'over 225 kg', code: 'E' },
];

// Reach category mapping (internal codes to display labels)
const reachOptions = [
  { label: '-All-', code: null },
  { label: 'up to 1.8 m', code: 'A' },
  { label: '1.8 - 2.55 m', code: 'B' },
  { label: 'over 2.55 m', code: 'C' },
];

export default function RobotCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    application: '-All-',
    payload: '-All-',
    reach: '-All-',
    controller: '-All-',
  });
  const [showAll, setShowAll] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [appDropdownOpen, setAppDropdownOpen] = useState(false);
  const [appSearchQuery, setAppSearchQuery] = useState('');
  const [expandedApps, setExpandedApps] = useState({});
  const appDropdownRef = useRef(null);
  const INITIAL_DISPLAY_COUNT = 5;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (appDropdownRef.current && !appDropdownRef.current.contains(event.target)) {
        setAppDropdownOpen(false);
        setAppSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get unique applications from data
  const allApplications = useMemo(() => {
    const apps = new Set();
    robotsData.forEach(robot => {
      robot.applications.forEach(app => apps.add(app));
    });
    return ['-All-', ...Array.from(apps).sort()];
  }, []);

  // Get unique controllers from data
  const allControllers = useMemo(() => {
    const controllers = new Set();
    robotsData.forEach(robot => {
      robot.controllers.forEach(ctrl => controllers.add(ctrl));
    });
    return ['-All-', ...Array.from(controllers).sort()];
  }, []);

  // Filter robots based on search and filters
  const filteredRobots = useMemo(() => {
    return robotsData.filter((robot) => {
      // Search filter
      if (searchQuery && !robot.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Application filter
      if (filters.application !== '-All-' && !robot.applications.includes(filters.application)) {
        return false;
      }

      // Payload filter
      if (filters.payload !== '-All-') {
        const payloadCode = payloadOptions.find(p => p.label === filters.payload)?.code;
        if (payloadCode && !robot.payloadCategory.split(',').includes(payloadCode)) {
          return false;
        }
      }

      // Reach filter
      if (filters.reach !== '-All-') {
        const reachCode = reachOptions.find(r => r.label === filters.reach)?.code;
        if (reachCode && !robot.reachCategory.split(',').includes(reachCode)) {
          return false;
        }
      }

      // Controller filter
      if (filters.controller !== '-All-' && !robot.controllers.includes(filters.controller)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  // Sort robots
  const sortedRobots = useMemo(() => {
    if (!sortConfig.key) return filteredRobots;

    return [...filteredRobots].sort((a, b) => {
      let aVal, bVal;

      if (sortConfig.key === 'name') {
        aVal = a.name.toLowerCase();
        bVal = b.name.toLowerCase();
      } else if (sortConfig.key === 'payload') {
        aVal = parseFloat(a.payload) || 0;
        bVal = parseFloat(b.payload) || 0;
      } else if (sortConfig.key === 'reach') {
        aVal = parseFloat(a.reach) || 0;
        bVal = parseFloat(b.reach) || 0;
      } else {
        return 0;
      }

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredRobots, sortConfig]);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
    setShowAll(false); // Reset to 5 rows when filter changes
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setShowAll(false); // Reset to 5 rows when search changes
  };

  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      application: '-All-',
      payload: '-All-',
      reach: '-All-',
      controller: '-All-',
    });
    setShowAll(false);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const displayedRobots = showAll ? sortedRobots : sortedRobots.slice(0, INITIAL_DISPLAY_COUNT);
  const remainingCount = sortedRobots.length - INITIAL_DISPLAY_COUNT;

  // Filter applications based on search
  const filteredApplications = useMemo(() => {
    if (!appSearchQuery) return allApplications;
    return allApplications.filter(app =>
      app === '-All-' || app.toLowerCase().includes(appSearchQuery.toLowerCase())
    );
  }, [allApplications, appSearchQuery]);

  const toggleExpandedApps = (robotId) => {
    setExpandedApps(prev => ({
      ...prev,
      [robotId]: !prev[robotId]
    }));
  };

  return (
    <section className="robot-catalog-section" id="robot-catalog">
      <div className="container">
        <h2 className="robot-catalog-heading">ABB Robot Catalog</h2>
        <p className="robot-catalog-subheading">
          Find the perfect robot for your application
        </p>
        
        <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #0284c7', borderRadius: '4px' }}>
          <p style={{ margin: 0, color: '#0c4a6e', fontSize: '0.95rem' }}>
            <strong>Note:</strong> For applications requiring payloads over 100kg, please <a href="#request-quote" style={{ color: '#0284c7', textDecoration: 'underline' }}>contact us</a> for specialized robot recommendations tailored to your needs.
          </p>
        </div>

        {/* Search Input */}
        <div className="catalog-search">
          <svg className="catalog-search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="catalog-search-input"
            placeholder="Search Robot model"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        {/* Filters Row */}
        <div className="catalog-filters">
          <div className="filter-group">
            <label className="filter-label">Applications</label>
            <div className="filter-dropdown-wrapper" ref={appDropdownRef}>
              <button
                type="button"
                className="filter-select filter-dropdown-trigger"
                onClick={() => setAppDropdownOpen(!appDropdownOpen)}
              >
                {filters.application}
                <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {appDropdownOpen && (
                <div className="filter-dropdown-menu">
                  <div className="dropdown-search-wrapper">
                    <input
                      type="text"
                      className="dropdown-search-input"
                      placeholder="Search applications..."
                      value={appSearchQuery}
                      onChange={(e) => setAppSearchQuery(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div className="dropdown-options">
                    {filteredApplications.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`dropdown-option ${filters.application === option ? 'selected' : ''}`}
                        onClick={() => {
                          handleFilterChange('application', option);
                          setAppDropdownOpen(false);
                          setAppSearchQuery('');
                        }}
                      >
                        {option}
                      </button>
                    ))}
                    {filteredApplications.length === 0 && (
                      <div className="dropdown-no-results">No applications found</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Payload</label>
            <select
              className="filter-select"
              value={filters.payload}
              onChange={(e) => handleFilterChange('payload', e.target.value)}
            >
              {payloadOptions.map((option) => (
                <option key={option.label} value={option.label}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Reach</label>
            <select
              className="filter-select"
              value={filters.reach}
              onChange={(e) => handleFilterChange('reach', e.target.value)}
            >
              {reachOptions.map((option) => (
                <option key={option.label} value={option.label}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Controllers</label>
            <select
              className="filter-select"
              value={filters.controller}
              onChange={(e) => handleFilterChange('controller', e.target.value)}
            >
              {allControllers.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Filters Link */}
        <div className="catalog-reset-row">
          <button className="reset-filters-link" onClick={resetFilters}>
            Reset filters
          </button>
        </div>

        {/* Results Count */}
        <div className="catalog-results-count">
          Showing {displayedRobots.length} of {sortedRobots.length} robots
        </div>

        {/* Robot Cards Table */}
        <div className="robot-cards-table">
          {/* Table Header */}
          <div className="robot-table-header">
            <div className="header-cell sortable" onClick={() => handleSort('name')}>
              Robot Model {getSortIndicator('name')}
            </div>
            <div className="header-cell">Applications</div>
            <div className="header-cell sortable" onClick={() => handleSort('payload')}>
              Payload {getSortIndicator('payload')}
            </div>
            <div className="header-cell sortable" onClick={() => handleSort('reach')}>
              Reach {getSortIndicator('reach')}
            </div>
            <div className="header-cell">Controllers</div>
          </div>

          {/* Robot Card Rows */}
          <div className="robot-cards-list">
            {displayedRobots.length === 0 ? (
              <div className="no-results-card">
                No robots match your current filters. Try adjusting your selection.
              </div>
            ) : (
              displayedRobots.map((robot, index) => (
                <div
                  key={robot.id}
                  className="robot-card-row"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="card-cell card-cell-model">
                    <a
                      href={robot.productUrl || `#${robot.id}`}
                      className="robot-model-link"
                      target={robot.productUrl ? "_blank" : undefined}
                      rel={robot.productUrl ? "noopener noreferrer" : undefined}
                    >
                      {robot.name}
                    </a>
                  </div>
                  <div className="card-cell card-cell-applications">
                    <div className="application-pills">
                      {(expandedApps[robot.id] ? robot.applications : robot.applications.slice(0, 3)).map((app, idx) => (
                        <span key={idx} className="application-pill">{app}</span>
                      ))}
                      {robot.applications.length > 3 && (
                        <button
                          type="button"
                          className="application-pill application-pill-more"
                          onClick={() => toggleExpandedApps(robot.id)}
                        >
                          {expandedApps[robot.id] ? 'Show less' : `+${robot.applications.length - 3} more`}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="card-cell card-cell-payload">{robot.payload}</div>
                  <div className="card-cell card-cell-reach">{robot.reach}</div>
                  <div className="card-cell card-cell-controllers">{robot.controllers.join(', ')}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* View More / Show Less Button */}
        {sortedRobots.length > INITIAL_DISPLAY_COUNT && (
          <div className="view-more-wrapper">
            <button
              className="view-more-button"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `View More Robots (${remainingCount} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
