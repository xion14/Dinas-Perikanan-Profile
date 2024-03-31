// WebsiteCard.js
import React from 'react';

const WebsiteCard = ({ imageUrl, url }) => {
  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className='website-card bg-slate-400 flex h-auto w-auto flex-row relative cursor-pointer border-r-0 rounded-lg shadow-md hover:shadow-xl' onClick={handleCardClick}>
      <div className='text-blue-500 text-lg flex flow-col justify-center items-center'>
        <img
          src={imageUrl}
          alt='Website Thumbnail'
          className='website-thumbnail rounded-lg h-auto'
        />
      </div>
      <div className='website-url-overlay absolute bottom-0 h-full left-0 w-full bg-blue-600 bg-opacity-70 flex justify-center items-center opacity-0 transition duration-300 ease-in-out rounded-b-lg hover:opacity-100'>
        <p className='website-url text-black-500 text-lg'>{url}</p>
      </div>
    </div>
  );
};

export default WebsiteCard;
