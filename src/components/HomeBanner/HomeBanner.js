import React, { useState, useEffect } from 'react';
import ContentContainer from '../ReusableComponents/ContentContainer/ContentContainer';
import BannerImage from '../ReusableComponents/BannerImage/BannerImage';
// import HeroSection from '../ReusableComponents/HeroSection/HeroSection';
import BusinessImageWeb from './header_web.svg';
import BusinessImageMbl from './header_mbl.svg';
// import BusinessImage from './business.png';
import styles from './HomeBanner.module.css';
// import downArrow from './downArrow.svg'
const HomeBanner = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imageUrl = windowSize.width < 600 ? BusinessImageMbl : BusinessImageWeb;

  return (
    <div className={styles.HomeBanner}>
      <div className={styles.background}>
        <ContentContainer width={100}>
        {/* <div className={styles.BannerWrapper}>
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
        </div> */}
        
        <BannerImage
            imageUrl={imageUrl}
            altText="Banner Image"
            onClick={() => alert('Button Clicked!')}
            isWebImage={windowSize.width >= 600}
          />
        </ContentContainer>
      </div>
    </div>
  );
};

export default HomeBanner;
