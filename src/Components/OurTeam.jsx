import React from 'react'

const OurTeam = ({image, name, title}) => {
     
  return (
    <div>
      <div className='relative'>
        <img className='w-60 gap-5 index-0 h-[40vh] object-cover p-0 rounded-lg shadow-md hover:shadow-lg filter grayscale transition-shadow duration-300' src={image}/>
        <div className='absolute bg-gray-500 index-20'></div>
        <div className='absolute bottom-2 text-center p-5 text-white'>
            <h1 className='text-4xl font-bold'>{name}</h1>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default OurTeam;
