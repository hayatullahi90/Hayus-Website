import React from 'react';
import { Link } from 'react-router-dom';

const MediaCard = ({image, section}) => {
  return (
    <div>
      <div className='bg-white p-0 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <img className='h-fit transition-transform duration-500 hover:scale-110 pb-10 object-center object-cover p-0 mb-4'  src={image} />
        <div className='flex flex-col gap-4 items-center pb-6'>
            <h1 className='font-bold text-2xl'>{section}</h1>
            <Link to='/'  className='py-2 px-6 rounded-4xl font-bold border'>View</Link>
        </div>
      </div>
    </div>
  )
}

export default MediaCard
