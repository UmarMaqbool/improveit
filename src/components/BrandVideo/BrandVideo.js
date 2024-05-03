import React, { useEffect, useState } from 'react';
import styles from './BrandVideo.module.css';

const BrandVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
      const player = new window.Vimeo.Player(
        document.getElementById('vimeo-video')
      );

      const handleUnmuteClick = () => {
        player.setCurrentTime(0);
        player.setVolume(1);
        setIsMuted(false);
      };

      const handlePlayClick = () => {
        setIsPlaying(true);
        player.play();
      };

      const handlePauseClick = () => {
        setIsPlaying(false);
        player.pause();
      };

      const addEventListeners = () => {
        const unmuteButton = document.querySelector('[vimeo=unmute]');
        const playButton = document.querySelector('[vimeo=play]');
        const pauseButton = document.querySelector('[vimeo=pause]');

        if (unmuteButton) {
          unmuteButton.addEventListener('click', handleUnmuteClick);
        }

        if (playButton) {
          playButton.addEventListener('click', handlePlayClick);
        }

        if (pauseButton) {
          pauseButton.addEventListener('click', handlePauseClick);
        }
      };

      addEventListeners();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isMuted, isPlaying]);

  return (
    <div className={styles.section_video} style={{}}>
      <div className={`${styles.container_w1} ${styles.gutter_outside}`}>
        {scriptLoaded && (
          <div className={styles.VideoTitle}>What is improveit?</div>
        )}
        <div className={styles.custom_video_wrapper} style={{}}>
          <div className={styles.video_vimeo_wrapper} style={{}}>
            <div
              style={{
                transition: 'transform 0.2s ease-in-out',
                WebkitTransform: isPlaying
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0) '
                  : 'translate3d(0, 0, 0) scale3d(1.04, 1.04, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: isPlaying
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                  : 'translate3d(0, 0, 0) scale3d(1.04, 1.04, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: isPlaying
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                  : 'translate3d(0, 0, 0) scale3d(1.04, 1.04, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: isPlaying
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                  : 'translate3d(0, 0, 0) scale3d(1.04, 1.04, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className={`${styles.vimeo_embed} ${styles.w_embed} ${styles.w_iframe}`}
            >
              <iframe
                id="vimeo-video"
                className={styles.vimeo_video}
                src="https://player.vimeo.com/video/941098748?background=1"
                width="100%"
                height="100%"
                style={{
                  cursor: 'pointer',
                  filter: `${
                    isPlaying ? 'brightness(0.95)' : 'brightness(0.8)'
                  }`,
                }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="improveit_V1"
              ></iframe>
            </div>
          </div>
          {scriptLoaded && (
            <div
              vimeo="unmute"
              data-w-id="f876ecd2-bdb0-c37f-93ce-b2220dc37aed"
              style={{
                opacity: isMuted ? 1 : 0,
                WebkitTransform:
                  'translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform:
                  'translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform:
                  'translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform:
                  'translate3d(0, 0em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className={styles.video_unmute_button}
            >
              <div
                data-w-id="c08d9f2c-c968-20ec-17a1-fee3922f636c"
                className={styles.is_magnetic}
              >
                <div className={styles.video_unmute_wrapper}>
                  <div className={`${styles.unmute_icon} ${styles.w_embed}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${styles.feather} ${styles.feather_volume_2}`}
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!isMuted && (
            <div
              style={{
                WebkitTransform:
                  'translate3d(0, 1.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform:
                  'translate3d(0, 1.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform:
                  'translate3d(0, 1.5em, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform:
                  'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className={styles.video_play_pause_toggle}
            >
              <div className={styles.is_magnetic}>
                <div className={styles.video_play_pause_wrapper}>
                  {isPlaying && (
                    <div
                      vimeo="pause"
                      data-w-id="3e4ef15d-7ece-1c1a-c34b-8cf48ddd1ff7"
                      style={{
                        display: 'flex',
                        opacity: 1,
                        WebkitTransform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        MozTransform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        msTransform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        transform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      }}
                      className={styles.video_pause_wrapper}
                    >
                      <div
                        className={`${styles.play_pause_icon} ${styles.w_embed}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`${styles.feather} ${styles.feather_pause}`}
                        >
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                      </div>
                    </div>
                  )}
                  {!isPlaying && (
                    <div
                      vimeo="play"
                      data-w-id="ef2c48b1-37c9-37be-912e-a3e7b5e88068"
                      style={{
                        WebkitTransform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        MozTransform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        msTransform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        transform:
                          'translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      }}
                      className={styles.video_play_wrapper}
                    >
                      <div
                        className={`${styles.play_pause_icon} ${styles.w_embed}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`${styles.feather} ${styles.feather_play}`}
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandVideo;
