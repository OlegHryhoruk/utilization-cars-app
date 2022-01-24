import React from 'react';
import PropTypes from 'prop-types';

function CarIcon({fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13">
        <path fill={fill} fillRule="evenodd" d="M13.538 8.615a1.231 1.231 0 1 1 .001-2.462 1.231 1.231 0 0 1 0 2.462zm-11.076 0a1.231 1.231 0 1 1 0-2.462 1.231 1.231 0 0 1 0 2.462zm1.6-7.384h7.876l1.293 3.077H2.769L4.062 1.23zM16 6.154a1.847 1.847 0 0 0-1.415-1.785L12.874.382A.615.615 0 0 0 12.308 0H3.692a.613.613 0 0 0-.541.345L1.415 4.357C.585 4.557 0 5.3 0 6.154v4.308h1.23v1.23a1.231 1.231 0 0 0 2.462 0v-1.23h8.616v1.23a1.231 1.231 0 0 0 2.461 0v-1.23H16V6.154z"/>
    </svg>
  )
}

CarIcon.propTypes = {
    fill: PropTypes.string
};

CarIcon.defaultProps = {
    fill: '#5EEBC8'
}

export default CarIcon;
