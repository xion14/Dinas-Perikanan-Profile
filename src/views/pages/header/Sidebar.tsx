// components/Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`  text-gray-700 w-48 p-4 ${isOpen ? 'block animate-slideInRight' : ' hidden'}`} style={{ lineHeight: '4' }}>
    <ul>
      <li><a className=' text-white hover:text-gray-600  focus:text-gray-600  hover:text-2xl focus:underline' href="#Home" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.8)'   }}>Home</a></li>
      <li><a className=' text-white  hover:text-gray-600   focus:text-gray-600 hover:text-2xl focus:underline' href="#Tentang" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.8)'  }}>Tentang</a></li>
      <li><a className=' text-white hover:text-gray-600   focus:text-gray-600 hover:text-2xl focus:underline' href="#Pelayanan" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.8)'  }}>Pelayanan</a></li>
      <li><a className=' text-white hover:text-gray-600  focus:text-gray-600 hover:text-2xl focus:underline focus:text-2xl' href="#Sejarah" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.8)'  }}>Sejarah</a></li>
    </ul>
  </div>
  

  );
};

export default Sidebar;
