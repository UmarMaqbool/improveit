import React from 'react';
import styles from './BannerImage.module.css';
import { PopupButton } from '@typeform/embed-react';
const BannerImage = ({ imageUrl, altText, onClick, isWebImage }) => {
  const containerStyle = {
    marginTop: isWebImage ? '2em' : 0,
  };

  const buttonTop = isWebImage ? '70%' : '85%';

  return (
    <div className={styles.bannerImageContainer} style={containerStyle}>
      <img className={styles.image} src={imageUrl} alt={altText} />
      <PopupButton
        className={styles.button}
        style={{ top: buttonTop }}
        id="N4dayhmC"
      >
        Join the waitlist!
      </PopupButton>
    </div>
  );
};

export default BannerImage;
