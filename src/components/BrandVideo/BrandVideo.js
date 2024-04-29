import React from 'react';
import ContentContainer from '../ReusableComponents/ContentContainer/ContentContainer';
import styles from './BrandVideo.module.css';
import 'video-react/dist/video-react.css';

const BrandVideo = () => {
  return (
    <ContentContainer width={80} className={styles.ContentPage}>
      <div className={styles.VideoTitle}>What is improveit?</div>

      {/* ////////////////// JumpShare Motion //////////////////// */}

      {/* <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          marginBottom: '1em',
        }}
      >
        <iframe
          title="JumpShare Motion"
          src="https://jumpshare.com/embed/MoYtE2D9aBiDQN0Qdpyg"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '1px solid #E5E4E2',
            borderRadius: '1.7em',
          }}
        ></iframe>
      </div> */}

      {/* ////////////////// Streamable Motion //////////////////// */}

      {/* <div
        style={{
          position: 'relative',
          width: '100%',
          height: '0px',
          paddingBottom: '56.250%',
          marginBottom: '1em',
        }}
      >
        <iframe
          title="Streamable Motion"
          allow="fullscreen"
          allowFullScreen
          height="100%"
          src="https://streamable.com/e/z4od9j?nocontrols=1"
          width="100%"
          style={{
            border: '1px solid #E5E4E2',
            borderRadius: '1.7em',
            width: '100%',
            cursor: 'pointer',
            height: '100%',
            position: 'absolute',
            left: '0px',
            top: '0px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.01)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        ></iframe>
      </div> */}

      {/* ////////////////// wave.video Motion //////////////////// */}

      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <div
          style={{
            height: '100%',
            left: '0',
            position: 'absolute',
            top: '0',
            width: '100%',
          }}
        >
          <iframe
            title="wave.video Motion"
            height="100%"
            width="100%"
            style={{
              border: '1px solid #E5E4E2',
              borderRadius: '1.7em',
              width: '100%',
              cursor: 'pointer',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: '0px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            src="https://embed.wave.video/oDu9zPwEaTn0Voh7"
            frameborder="0"
            allow="loop"
          ></iframe>
        </div>
      </div>
    </ContentContainer>
  );
};

export default BrandVideo;
