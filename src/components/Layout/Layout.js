import React, {useRef} from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' }) 
  return (
    <>
      <Header scroll={executeScroll} />
      <div>
        <Outlet />
        <Footer reference={myRef}/>
      </div>
    </>
  );
};

export default Layout;
