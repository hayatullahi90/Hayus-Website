import React from 'react';
import MediaCard from '../MediaCard';
import Pic1 from '../../assets/stepping.svg';
import { MdKeyboardArrowRight } from "react-icons/md";

const Media = () => {
  return (
    <div>
      <div className='lg:px-56 md:px-20 py-20 mb-10'>
        <h1 className='text-3xl font-bold mb-8'>Corporate Profile</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 z-10 lg:grid-cols-3 gap-5'>
          <MediaCard image={Pic1} section='Company Profile' />
          <MediaCard image={Pic1} section='Engineering Profile' />
          <MediaCard image={Pic1} section='Construction Profile' />
          <MediaCard image={Pic1} section='Procurement Profile' />
          <MediaCard image={Pic1} section='NOV Flexibles/Ariosh' />
          <MediaCard image={Pic1} section='ExxonMobil EAP IGE' />
        </div>
      </div>

      <div className='bg-gray-500/10 h-auto py-24 lg:px-44 md:px-16 mb-20'>
        <h1 className='text-4xl mb-6 font-bold'>Our Assets Videos</h1>
        <ul className='flex flex-col gap-2'>
          <li className='flex justify-between items-center text-2xl p-2 hover:bg-white hover:shadow-sm transition-shadow duration-300'>Oshe Honmi Vessel Video <a href='#' className='text-blue-400 flex items-center m-0'>Watch Video <span className='text-blue-500'><MdKeyboardArrowRight size={24} /></span></a></li>
          <li className='flex justify-between items-center text-2xl p-2 hover:bg-white hover:shadow-sm transition-shadow duration-300'>Oshe Rewo Vessel Video <a href='#' className='text-blue-400 flex items-center m-0'>Watch Video <span className='text-blue-500'><MdKeyboardArrowRight size={24} /></span></a></li>
          <li className='flex justify-between items-center text-2xl p-2 hover:bg-white hover:shadow-sm transition-shadow duration-300'>Oshe 3 Vessel Video <a href='#' className='text-blue-400 flex items-center m-0'>Watch Video <span className='text-blue-500'><MdKeyboardArrowRight size={24} /></span></a></li>
          <li className='flex justify-between items-center text-2xl p-2 hover:bg-white hover:shadow-sm transition-shadow duration-300'>Fabrication Yard Video <a href='#' className='text-blue-400 flex items-center m-0'>Watch Video <span className='text-blue-500'><MdKeyboardArrowRight size={24} /></span></a></li>
        </ul>
      </div>

      <div className='lg:px-56 md:px-20 py-20 mb-20'>
        <h1 className='mb-8 text-3xl font-bold'>Our Vessel's Brochures</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-10'>
          <MediaCard image={Pic1} section='Oshe Honmi - MIV' />
          <MediaCard image={Pic1} section='Oshe Rewo - AHTS DP2' />
          <MediaCard image={Pic1} section='Oshe 3 - AHT' />
        </div>
      </div>
    </div>
  )
}

export default Media
