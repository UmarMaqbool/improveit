import React from 'react';
import ContentContainer from '../ReusableComponents/ContentContainer/ContentContainer';
import HeroSection from '../ReusableComponents/HeroSection/HeroSection';
import BusinessImage from './business.png';
import styles from './HomeBanner.module.css';
import downArrow from './downArrow.svg';

const HomeBanner = () => {
  return (
    <div className={styles.HomeBanner}>
      <div className={styles.background}></div>
      <ContentContainer width={85}>
        <div className={styles.BannerWrapper}>
          <HeroSection
            contentWidthPercent={50}
            contentSection={
              <>
                <div className={styles.InfoContainer}>
                  <h1>
                    Users <strong>speak</strong> Companies{' '}
                    <strong>listen</strong>
                  </h1>
                  <p>Tell companies how to improve the products you use.</p>
                  <span className={styles.learnMoreText}>
                    Learn More
                    <img className={styles.downArrow} src={downArrow} alt=">" />
                  </span>
                </div>
              </>
            }
            imageSection={
              <>
                <img src={BusinessImage} alt="business" />
              </>
            }
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default HomeBanner;
