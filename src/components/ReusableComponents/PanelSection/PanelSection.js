import React from 'react';
import PropTypes from 'prop-types';

const PanelSection = (props) => {
  const { shadow, shadowColor, backgroundColor, className } = props;

  const style = {
    boxShadow: shadow ? `0.1em 0.3em 1em ${shadowColor}` : 'none',
    backgroundColor: backgroundColor,
    borderRadius: '1em',
  };

  return (
    <div className={className} style={style} data-testid="PanelSection">
      {props.children}
    </div>
  );
};

PanelSection.propTypes = {
  shadow: PropTypes.bool,
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

PanelSection.defaultProps = {
  shadow: true,
  shadowColor: '#e3e3e3',
  backgroundColor: 'white',
  className: '',
};

export default PanelSection;
