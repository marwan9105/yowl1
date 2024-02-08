import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import './headermobil.css'; 
import { useLocation } from 'react-router-dom';

function HeaderMobil() {
  const location = useLocation(); 

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header-mobile">
      <div className='icons-container'>
        <a href="/notification">
          <FaRegBell className={isActive('/notification') ? 'text-indigo-700' : ''} />
        </a>
        <a href="/profil">
          <FaRegUser className={isActive('/profil') ? 'text-indigo-700' : ''} />
        </a>
      </div>
    </header>
  );
}

export default HeaderMobil;
