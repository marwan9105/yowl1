import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import HeaderMobil from './HeaderMobil';
import SidebarRight from './SidebarRight';
import Footer from './Footer';
import { IoIosArrowForward } from "react-icons/io";

function CondEtPol() {
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
            <div>
                <div className='text-3xl text-white font-bold pl-10'>
                    <h2 className='p-7'>Conditions et Politiques</h2>
                    <a href='/cdu' className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                        <div className='flex'>
                            <div className="pl-5">
                                <h2 className='font-light text-3xl'>Conditions Générales d'Utilisation de Melo</h2>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div> 
                
                <div>
                    <div className='text-3xl text-white font-bold pl-10'>
                        <a href='/cgu' className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                            <div className='flex'>
                                <div className="pl-5">
                                    <h2 className='font-light text-3xl'>Politique de Confidentialité de Melo</h2>
                                </div>
                            </div>
                            <div className='pt-2'>
                                <IoIosArrowForward />
                            </div>
                        </a>
                    </div> 
                </div>
                <div>
                    <div className='text-3xl text-white font-bold pl-10'>
                        <a href='/cgv' className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                            <div className='flex'>
                                <div className="pl-5">
                                    <h2 className='font-light text-3xl'>Conditions Générales de Vente de Melo</h2>
                                </div>
                            </div>
                            <div className='pt-2'>
                                <IoIosArrowForward />
                            </div>
                        </a>
                    </div> 
                </div>
            </div>
            <div className="right"><SidebarRight /></div>        
        </div>
        {isMobile && <Footer />}
      </div>
    );
  }

export default CondEtPol;