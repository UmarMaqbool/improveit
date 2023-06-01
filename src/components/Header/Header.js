import React from 'react';
import styles from './Header.module.css';
import BusinessLogo from '../ReusableComponents/BusinessLogo/BusinessLogo';
import logo from './Logo.png';

const Header = ({scroll}) => {
  return (
    <div className={styles.header} id="Header">
      <BusinessLogo
        img={logo}
        size={120}
        alt="Improveit"
        className={styles.logoimage}
      />
      <div>
        <ul className={styles.navlist}>
          <span>How it works - Users</span>
          <li>How it works - Companies</li>
        </ul>
      </div>
      <button className={styles.button} onClick={()=>scroll()}>Join the waitlist!</button>
    </div>
  );
};

export default Header;
