// Card.js
import React from 'react';

const Card = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className='m-10 text-center p-10 shadow-lg flex flex-col  w-screen lg:w-auto rounded-xl'>
          <img src={item.image} style={{ width: 100, height: 100, margin: 'auto' }} alt={item.title}></img>
          <h3>{item.title}</h3>
          <p className='py-2'>{item.description}</p>
          <h4 className='py-4 text-teal-600'> {item.subTitle}</h4>
          {item.tools.map((tool, idx) => (
            <p key={idx} className='text-gray-800 py-1'>{tool}</p>
          ))}
        </div>
      ))}
    </>
  );
};

export default Card;
