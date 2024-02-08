import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { PiUsersThreeLight } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import Post from './Post'
import './sidebar.css';

function SideBar() {
  const location = useLocation(); // Obtenez l'URL actuelle

  // Fonction pour vérifier si l'URL correspond à la page active
  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="sidebar bg-black-100 text-white h-screen w-full flex-col font-bold pl-5 p-3 border-r-ultra-thin left">
      <ul className="flex-1 overflow-y-auto text-2xl mt-20">
        <li className={`p-5 hover:bg-zinc-700 ${isActive('/mainpage') ? 'text-indigo-500' : ''}`}>
          <a href='/mainpage' className='flex items-center gap-5'>
            <h1 className='text-4xl'><IoHomeOutline /></h1>
            <span>Accueil</span>
          </a>
        </li>
        <li className={`p-5 hover:bg-zinc-700 ${isActive('/recherche') ? 'text-indigo-700' : ''}`}>
          <a href='/recherche' className='flex items-center gap-5'>
            <h1 className='text-4xl'><IoSearchOutline /></h1>
            <span>Explore</span>
          </a>
        </li>
        <li className={`p-5 hover:bg-zinc-700 ${isActive('/notification') ? 'text-indigo-700' : ''}`}>
          <a href='/notification' className='flex items-center gap-5'>
            <h1 className='text-4xl'><FaRegBell /></h1>
            <span>Notifications</span>
          </a>
        </li>
        <li className={`p-5 hover:bg-zinc-700 ${isActive('/communaute') ? 'text-indigo-700' : ''}`}>
          <a href='/communaute' className='flex items-center gap-5'>
            <h1 className='text-4xl'><PiUsersThreeLight /></h1>
            <span>Communautés</span>
          </a>
        </li>
        <li className={`p-5 hover:bg-zinc-700 ${isActive('/setting') ? 'text-indigo-700' : ''}`}>
          <a href='/setting' className='flex items-center gap-5'>
            <h1 className='text-4xl'><IoSettingsOutline /></h1>
            <span>Paramètres</span>
          </a>
        </li>
        <div className='flex items-center p-4'>
            <button className="w-full outline-none cursor-pointer border-none p-3 rounded-full font-bold text-white bg-indigo-700 hover:bg-indigo-800" onClick={handleOpenPopup}>
                <span>post</span>
                <div className='plus'><AiOutlinePlus /></div>
            </button>
            {isPopupOpen && <Post onClose={handleClosePopup} />}
        </div>
      </ul>
      <div className="p-5 hover:bg-zinc-700">
        <a href="/profil" className="flex items-center gap-5 font-light">
          <h1 className={`text-4xl ${isActive('/profil') ? 'text-indigo-700' : ''}`}>
            <FaRegUser />
          </h1>
          <span>@JohnDoe</span>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
