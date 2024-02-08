// SideBarRight.js
import React from 'react';
import './sidebarright.css';

function SideBarRight() {
  return (
    <div className="sidebar-right bg-black-100 h-screen text-white flex-col border-l-ultra-thin" style={{ maxWidth: '400px' }}>
      <div className="p-5 pt-10 flex items-center gap-5">
        <h2 className='text-3xl'>Populaire Cette Semaine</h2>
        <div>

        </div>
      </div>
    </div>
  );
}

export default SideBarRight;
