'use client';

import { useState } from 'react';
import { useLocale } from './LocaleContext';

export default function ProductTableFilter({ products }) {
  const { locale, t } = useLocale();
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedSide, setSelectedSide] = useState('all');

  // Side type values stay as EN keys for filter logic; display is translated
  const sides = ['all', 'Fixed Side (F)', 'Tool Side (L)'];

  const sideLabel = (side) => {
    if (side === 'all') return t('wpr5000:table:filter:all-types');
    if (side === 'Fixed Side (F)') return t('wpr5000:table:side:fixed');
    if (side === 'Tool Side (L)') return t('wpr5000:table:side:tool');
    return side;
  };

  const sideDataLabel = (sideType) => {
    if (sideType === 'Fixed Side (F)') return t('wpr5000:table:side:fixed');
    if (sideType === 'Tool Side (L)') return t('wpr5000:table:side:tool');
    return sideType;
  };

  // Extract unique sizes
  const sizes = ['all', ...new Set(products.map(p => p.installationSize))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const sizeMatch = selectedSize === 'all' || product.installationSize === selectedSize;
    const sideMatch = selectedSide === 'all' || product.sideType === selectedSide;
    return sizeMatch && sideMatch;
  });

  return (
    <div className="product-table-container">
      <div className="mobile-filters">
        <div className="filter-group">
          <label htmlFor="size-filter" className="filter-label">
            {t('wpr5000:table:filter:size-label')}
          </label>
          <select
            id="size-filter"
            className="filter-select"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {sizes.map(size => (
              <option key={size} value={size}>
                {size === 'all' ? t('wpr5000:table:filter:all-sizes') : size}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="side-filter" className="filter-label">
            {t('wpr5000:table:filter:side-label')}
          </label>
          <select
            id="side-filter"
            className="filter-select"
            value={selectedSide}
            onChange={(e) => setSelectedSide(e.target.value)}
          >
            {sides.map(side => (
              <option key={side} value={side}>
                {sideLabel(side)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-results">
          {t('wpr5000:table:filter:showing')
            .replace('{count}', filteredProducts.length)
            .replace('{total}', products.length)}
        </div>
      </div>

      <div className="table-wrapper">
        <table className="specifications-table">
          <thead>
            <tr>
              <th>{t('wpr5000:table:col:product')}</th>
              <th>{t('wpr5000:table:col:installation-size')}</th>
              <th>{t('wpr5000:table:col:flange-size')}</th>
              <th>{t('wpr5000:table:col:pneumatic-ports')}</th>
              <th>{t('wpr5000:table:col:side-type')}</th>
              <th>{t('wpr5000:table:col:payload')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td data-label={t('wpr5000:table:col:product')}><strong>{product.name}</strong></td>
                <td data-label={t('wpr5000:table:col:installation-size')}>{product.installationSize}</td>
                <td data-label={t('wpr5000:table:col:flange-size')}>{product.flangeSize}</td>
                <td data-label={t('wpr5000:table:col:pneumatic-ports')}>{product.pneumaticPorts}</td>
                <td data-label={t('wpr5000:table:col:side-type')}>{sideDataLabel(product.sideType)}</td>
                <td data-label={t('wpr5000:table:col:payload')}>{product.payload}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
