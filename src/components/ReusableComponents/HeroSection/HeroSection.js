import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroSection.module.css';

const HeroSection = (props) => {
  const {
    className,
    contentSection,
    imageSection,
    contentWidthPercent,
    inverseLayout,
  } = props;

  const rightWidthPercent = 100 - contentWidthPercent;

  const HeroSectionClasses = `${styles.HeroSection} ${className} ${
    inverseLayout ? styles.inverse : ''
  }`;
  const contentStyles = {
    width: `${contentWidthPercent}%`,
  };

  const imageStyles = {
    justifyContent: inverseLayout ? 'flex-start' : 'flex-end',
    width: `${rightWidthPercent}%`,
  };

  return (
    <div className={HeroSectionClasses} data-testid="HeroSection">
      <div className={styles.contentSection} style={contentStyles}>
        {contentSection}
      </div>
      <div className={styles.imageSection} style={imageStyles}>
        {imageSection}
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  contentSection: PropTypes.node.isRequired,
  imageSection: PropTypes.node.isRequired,
  contentWidthPercent: PropTypes.number,
  inverseLayout: PropTypes.bool,
  className: PropTypes.string,
};

HeroSection.defaultProps = {
  contentWidthPercent: 50,
  inverseLayout: false,
  className: '',
};

export default HeroSection;
