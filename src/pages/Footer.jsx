// MobileFooter.js
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUsersThreeLight } from "react-icons/pi";
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); 

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <footer className="mobile-footer fixed bottom-0 left-0 w-full bg-black-100 text-white">
      <div className="container mx-auto">
        <ul className="flex justify-between text-3xl px-7">
          <li className={`p-7 ${isActive('/mainpage') ? 'text-indigo-500 text-5xl' : ''} flex items-center gap-5`}>
            <a href='/mainpage'>
              <IoHomeOutline />
            </a>
          </li>
          <li className={`p-7 ${isActive('/recherche') ? 'text-indigo-500 text-5xl' : ''} flex items-center gap-5`}>
            <a href='/recherche'>
              <IoSearchOutline />
            </a>
          </li>
          <li className={`p-7 ${isActive('/communaute') ? 'text-indigo-500 text-5xl' : ''} flex items-center gap-5`}>
            <a href='/communaute'>
              <PiUsersThreeLight />
            </a>
          </li>
          <li className={`p-7 ${isActive('/setting') ? 'text-indigo-500 text-5xl' : ''} flex items-center gap-5`}>
            <a href='/setting'>
              <IoSettingsOutline />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
