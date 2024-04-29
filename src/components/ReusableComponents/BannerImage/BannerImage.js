import React from 'react';
import styles from './BannerImage.module.css';

const BannerImage = ({ imageUrl, altText, onClick, isWebImage }) => {
    const containerStyle = {
        marginTop: isWebImage ? '2em' : 0,
    };

    return (
        <div className={styles.bannerImageContainer} style={containerStyle}>
            <img className={styles.image} src={imageUrl} alt={altText} />
        </div>
    );
};

export default BannerImage;
