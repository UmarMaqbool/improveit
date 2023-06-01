import React from 'react';
import PropTypes from 'prop-types';

const BusinessLogo = ({ img, size, className }) => {
  const style = {
    width: size,
    height: "auto"
  };

  return (
    <img
      data-testid="BusinessLogo"
      src={img}
      style={style}
      alt="Business Logo"
      className={className}
    />
  );
};

BusinessLogo.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

BusinessLogo.defaultProps = {
  size: 5,
  className: '',
  img: undefined,
};

export default BusinessLogo;
