// components/Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`  text-gray-700 w-48 p-4 ${isOpen ? 'block animate-slideInRight' : ' hidden'}`} style={{ lineHeight: '4' }}>
    <ul>
      <li><a className=' text-blue-600 hover:text-white text-2xl' href="#" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.5)'   }}>Home</a></li>
      <li><a className=' text-blue-600  hover:text-white' href="#" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.5)'  }}>Tentang</a></li>
      <li><a className=' text-blue-600 hover:text-white' href="#" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.5)'  }}>Pelayanan</a></li>
      <li><a className=' text-blue-600 hover:text-white' href="#" style={{ letterSpacing: '0.2em',textShadow: '2px 2px 4px rgba(0,0,0,0.5)'  }}>Sejarah</a></li>
    </ul>
  </div>
  

  );
};

export default Sidebar;
