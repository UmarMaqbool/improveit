import React from 'react';
import PropTypes from 'prop-types';

const ContentContainer = (props) => {
  const componentStyle = {
    maxWidth: props.width + 'em',
    margin: '0 auto',
  };
  return <div id={props.id} className={props.className} data-testid="ContentContainer" style={componentStyle}>{props.children}</div>;
};

ContentContainer.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string
};

ContentContainer.defaultProps = {
  width: 75,
  className: '',
  id:''
};

export default ContentContainer;
