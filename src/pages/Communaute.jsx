import React, { useState, useEffect } from 'react';
import SideBar from './Sidebar';
import HeaderMobil from './HeaderMobil';
import SidebarRight from './SidebarRight';
import Footer from './Footer';

function Communaute() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);

    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth <= 670);
    };
  
    useEffect(() => {
      
      window.addEventListener('resize', handleWindowSizeChange);
  
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);
  
    return (
      <div>  
        <HeaderMobil />   
        <div className="content">
          <div className='side'><SideBar /></div>
          <div className="right"><SidebarRight /></div>        
        </div>
        {isMobile && <Footer />}
      </div>
    );
}

export default Communaute;