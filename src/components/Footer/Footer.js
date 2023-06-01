import React from 'react';
import styles from './Footer.module.css';
import BusinessLogo from '../ReusableComponents/BusinessLogo/BusinessLogo';
import ContentContainer from '../ReusableComponents/ContentContainer/ContentContainer';
import PanelSection from '../ReusableComponents/PanelSection/PanelSection';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { PopupButton } from '@typeform/embed-react';

const TemplateFooter = ({reference}) => {
  const panelProps = {
    className: styles.FooterPanel,
    shadow: false,
  };
  return (
    <div ref={reference} className={styles.TemplateFooter} data-testid="TemplateFooter">
      <PanelSection {...panelProps}>
        <ContentContainer width={100}>
          <div className={styles.FooterContent}>
            <center>
              <p className={styles.FooterSubtitle}>Join the waitlist</p>
              <h2 className={styles.FooterTitle}>We are launching soon!</h2>
              <div className={styles.BtnContainer}>
                <PopupButton id="N4dayhmC">
                  Notify me via email
                </PopupButton>
              </div>
            </center>
          </div>
          <div className={[styles.FooterBranding, styles.lineBottom].join(' ')}>
            <div>
              <span>Contact us:</span> contact@improveit.com
            </div>
            <div className={styles.FooterLogoContainer}>
              <Link className={styles.FooterLogo} to={''}>
                <BusinessLogo img={logo} size={125} />
              </Link>
            </div>
            <div>
              <span>Follow us:</span>
              <Link to=""> Instagram</Link> <Link to="">Twitter</Link>
            </div>
          </div>
          <div className={styles.FooterBranding}>
            <div>All rights reserved. © 2023 Improveit</div>

            <div>
              <Link to={''}>Privacy Policy</Link> |{' '}
              <Link to={''}>Terms & Conditions</Link>
            </div>
          </div>
        </ContentContainer>
      </PanelSection>
    </div>
  );
};

export default TemplateFooter;
