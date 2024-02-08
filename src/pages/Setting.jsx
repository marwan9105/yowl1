import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import HeaderMobil from './HeaderMobil';
import SidebarRight from './SidebarRight';
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { RiLockLine } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { FaRegEyeSlash } from "react-icons/fa6";
import { TbShieldLock } from "react-icons/tb";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { BsQuestionSquare } from "react-icons/bs";
import Footer from './Footer';

function Setting() {
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
                    <h2 className='p-7'>Réglages</h2>
                    <h2 className='pl-4 text-2xl font-regular'>Compte</h2>
                    <a href='/votre-compte' className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                        <div className='flex'>
                            <h2 className='pt-5'><FaRegUser /></h2>
                            <div className="pl-5">
                                <h2 className='font-light text-3xl'>Votre Compte</h2>
                                <h1 className='pr-5 pt-2 text-sm font-thin w-3/4'>Affichez les informations de votre compte et désactivez ou supprimez votre compte.</h1>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div>  
                <div className='text-3xl text-white font-bold pl-10 '>
                    <a href='/confidentialite' className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                        <div className='flex'>
                            <h2 className='pt-5'><RiLockLine /></h2>
                            <div className="pl-5">
                                <h2 className='font-light text-3xl'>Confidentialité</h2>
                                <h1 className='pr-5 pt-2 text-sm font-thin w-3/4'>Gérez les information que vous partagez et que vous voyez.</h1>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div>
                <div className='text-3xl text-white font-bold pl-10 '>
                    <a href='/securite'  className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                        <div className='flex'>
                            <h2 className='pt-5'><TbShieldLock /></h2>
                            <div className="pl-5">
                                <h2 className='font-light text-3xl'>Sécurité</h2>
                                <h1 className='pr-5 pt-2 text-sm font-thin w-3/4'>Gérez la sécurité de votre compte et des applications qui y sont connectées.</h1>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div>
                <div className='text-3xl text-white font-bold pl-10 pt-5'>
                    <h2 className='p-3 text-2xl font-regular'>Assistance et informations</h2>
                    <a href='/condition-politique' className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                        <div className='flex'>
                            <h2 className=''><HiOutlineInformationCircle /></h2>
                            <div className="pl-5">
                                <h2 className='font-light text-3xl'>Conditions et Politiques</h2>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div>  
                <div className='text-3xl text-white font-bold pl-10 '>
                    <div className='pt-5 pb-5 text-5xl flex justify-between items-center hover:bg-gray-900'>
                        <div className='flex '>
                            <h2 className=''><BsQuestionSquare /></h2>
                            <div className="pl-5">
                                <h2 className='font-light text-3xl'>Assistance</h2>
                            </div> 
                        </div>
                        <div className='pt-5'>
                            <IoIosArrowForward />
                        </div>                       
                    </div>
                </div>
                <div className="p-10 flex justify-center">
                    <button className="w-1/3 outline-none cursor-pointer border-none p-3 rounded-full font-bold text-white bg-indigo-700 hover:bg-indigo-800">
                        <h2>Se déconnecter</h2>
                    </button>
                </div>
            </div>
            <div className="right"><SidebarRight /></div>      
        </div>
        {isMobile && <Footer />}
      </div>
    );
  }
  
  export default Setting;  