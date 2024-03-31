// components/Header.js
import React from 'react';
import pemda from '../../../../public/pemda.png';
const Header = ({ toggleSidebar }) => {
  return (
    <header className='  text-white p-4 flex justify-between items-center px-[15%]'>
      <div className=' flex items-center '>
        <img
          src={pemda}
          alt='Xion White Code Developers '
          className='full-image pr-2 '
          style={{ objectFit: 'cover', width: '10%', height: '100%' }}
        />
        <h1 className='text-lg font-bold'>Perikanan</h1>
      </div>
      <button onClick={toggleSidebar} className='text-xl bg-transparent focus:outline-none hover:border-white border-transparent'>
  &#9776;
</button>


    </header>
  );
};

export default Header;
