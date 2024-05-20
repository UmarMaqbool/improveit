import React from 'react';
import HeroSection from '../ReusableComponents/HeroSection/HeroSection';
import ContentContainer from '../ReusableComponents/ContentContainer/ContentContainer';
import styles from './HomeContent.module.css';
import personsImage from './persons.png';
import chatDesktopImage from './chatDesktop.png';
import chatMobileImage from './chatMobile.png';
import chatDesktopImage2 from './chat2.png';
import chatMobileImage2 from './chat2Mobile.png';
import techImage from './tech.png';

const HomeContent = () => {
  return (
    <ContentContainer width={80} className={styles.ContentPage}>
      <HeroSection
        className={styles.HeroSection}
        contentWidthPercent={46}
        contentSection={
          <div className={styles.InfoContainer}>
            <div className={styles.Header}>
              <h2>
                <small>01. </small> How it works - Users
              </h2>
              <h3>Post your requests on company pages</h3>
            </div>
            <p>
              Highest voted requests will show up on top so you can actually get
              heard.
            </p>
            <div className={styles.imageContainer}>
              <img src={personsImage} alt="persons" />
            </div>
          </div>
        }
        imageSection={
          <>
            <img
              className={styles.desktopImage}
              src={chatDesktopImage}
              alt="Chat"
            />
            <img
              className={styles.mobileImage}
              src={chatMobileImage}
              alt="Chat"
            />
          </>
        }
      />
      <HeroSection
        className={styles.HeroSection}
        inverseLayout
        contentWidthPercent={46}
        contentSection={
          <>
            <div className={[styles.InfoContainer, styles.hero2].join(' ')}>
              <div className={styles.Header}>
                <h2>
                  <small>02. </small> How it works - Companies
                </h2>
                <h3>Learn in real-time what your users truly want!</h3>
                <p>
                Create a verified profile and engage with your users effortlessly. Accessible, effective, and free market research at your fingertips!
                </p>
                <div className={styles.imageContainer}>
                  <img src={techImage} alt="tech" />
                </div>
              </div>
            </div>
          </>
        }
        imageSection={
          <>
            <img
              className={styles.desktopImage}
              src={chatDesktopImage2}
              alt="Chat"
            />
            <img
              className={styles.mobileImage}
              src={chatMobileImage2}
              alt="Chat"
            />
          </>
        }
      />
    </ContentContainer>
  );
};

export default HomeContent;
