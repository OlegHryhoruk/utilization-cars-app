import React from 'react';
import PropTypes from 'prop-types';

import './TabSelector.css';

function TabSelector({options, onSelect, activeValue}) {
  return (
      <div className='tab-selector'>
          {
              options.map(({label, value}) => (
                  <div
                    key={value}
                    className={`tab-selector-item ${value === activeValue && 'active'}`}
                    onClick={() => onSelect(value)}>
                    {label}
                  </div>
              ))
          }
      </div>
  )
}

TabSelector.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    }))
};

export default TabSelector;
