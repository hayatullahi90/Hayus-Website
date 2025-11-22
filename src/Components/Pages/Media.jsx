import React from 'react';
import MediaCard from '../MediaCard';
import { FaArrowRight } from "react-icons/fa";


const Media = () => {
  return (
    <div>
      <div className='lg:px-34 md:px-20 py-20 mb-8'>
        <h1 className='text-4xl font-bold mb-10 text-black/80'>Corporate Profile</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 z-10 lg:grid-cols-3 gap-5'>
          <MediaCard image="/pic2.jpg" section='Company Profile' />
          <MediaCard image="/banner1.jpeg" section='Engineering Profile' />
          <MediaCard image="/pic3.jpg" section='Construction Profile' />
          <MediaCard image="/image1.jpg" section='Procurement Profile' />
          <MediaCard image="/pic2.jpg" section='NOV Flexibles/Ariosh' />
          <MediaCard image="/pic3.jpg" section='ExxonMobil EAP IGE' />
        </div>
      </div>

      <div className='bg-white h-auto py-24 lg:px-34 md:px-16 mb-8'>
        <h1 className='text-4xl mb-6 font-bold'>Our <span className='text-gray-400'>Assets Videos</span></h1>
        <ul className='flex flex-col gap-2'>
          <li className='flex justify-between items-center p-1 border-b-2 border-gray-400 hover:bg-white hover:shadow-sm transition-shadow duration-300' style={{fontSize:'24px'}}>Oshe Honmi Vessel Video <a href='#' className='text-blue-400 flex items-center justify-center gap-1 m-0' style={{fontSize:'18px'}}>Watch Video <span className='text-blue-500'><FaArrowRight size={16} /></span></a></li>
          <li className='flex justify-between items-center p-1 border-b-2 border-gray-400 hover:bg-white hover:shadow-sm transition-shadow duration-300' style={{fontSize:'24px'}}>Oshe Rewo Vessel Video <a href='#' className='text-blue-400 flex items-center m-0 justify-center gap-1' style={{fontSize:'18px'}}>Watch Video <span className='text-blue-500'><FaArrowRight size={16} /></span></a></li>
          <li className='flex justify-between items-center p-1 border-b-2 border-gray-400 hover:bg-white hover:shadow-sm transition-shadow duration-300' style={{fontSize:'24px'}}>Oshe 3 Vessel Video <a href='#' className='text-blue-400 flex items-center m-0 justify-center gap-1' style={{fontSize:'18px'}}>Watch Video <span className='text-blue-500'><FaArrowRight size={16} /></span></a></li>
          <li className='flex justify-between items-center p-1 hover:bg-white hover:shadow-sm transition-shadow duration-300' style={{fontSize:'24px'}}>Fabrication Yard Video <a href='#' className='text-blue-400 flex items-center m-0 justify-center gap-1' style={{fontSize:'18px'}}>Watch Video <span className='text-blue-500'><FaArrowRight size={16} /></span></a></li>
        </ul>
      </div>

      <div className='lg:px-34 md:px-20 py-20 mb-6'>
        <h1 className='mb-8 text-4xl font-bold text-black/80'>Our Vessel's Brochures</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 gap-5'>
          <MediaCard image="/pic2.jpg" section='Oshe Honmi - MIV' />
          <MediaCard image="/banner1.jpeg" section='Oshe Rewo - AHTS DP2' />
          <MediaCard image="/pic3.jpg" section='Oshe 3 - AHT' />
        </div>
      </div>
    </div>
  )
}

export default Media
