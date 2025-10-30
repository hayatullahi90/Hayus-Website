import React from 'react';
import { Link } from 'react-router-dom';
import Pic1 from '../../assets/stepping.svg';

const Fleet = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 bg-gray-500/10 h-full mb-3 lg:py-20 md:py-10 px-20 lg:gap-32 md:gap-30'>
        <div className='col-span-6'>
          <h1 className='text-7xl mb-6 font-bold'><b className='text-9xl'>o</b>she Honmi</h1>
          <h2 className='font-bold mb-4 text-2xl'>Main Installation Vessel (MIV)</h2>
          <p className='mb-4'>Oshe Honmi is our premier main installation vessel, a formidable powerhouse engineered to conquer the complexities of installing structures and equipment in challenging marine environments. Oshe Honmi joined our fleet in 2018.</p>
          <ul className='list-disc mb-4 pl-7 leading-5'>
            <li>300T SWL Pedestal Crane</li>
            <li>400 Pax Accommodation</li>
            <li>1500m2 Deck Area</li>
            <li>10 Point Mooring</li>
            <li>42m Telescopic Gangway (Uptime)</li>
            <li>Helideck - CAP 437 Compliant</li>
          </ul>
          <Link to='/' className="bg-blue-800 py-2 px-6 rounded-4xl text-white">Vessel Specification</Link>
        </div>
        <div className='col-span-6'>
          <img src='/banner2.jpeg'/>
        </div>
      </div>

      <div className='grid lg:grid-cols-12 md:grid-cols-6 h-auto gap-3'>
        <div className='col-span-6 bg-gray-500/10 py-24 px-20'>
          <h1 className='mb-20 font-bold text-7xl'>Oshe Rewo</h1>
          <div className='mb-20 text-center'><img src="/banner2.jpeg"/></div>
          <div>
            <h2 className='text-2xl font-bold mb-4'>Anchor Handling Supply Vessel (AHTS) - DP2</h2>
            <p className='mb-2'>With exceptional towing and anchor handling capabilities and extensive cargo capacity and supply support, Oshe Rewo delivers the reliability and efficiency you need for seamless operations in the most demanding marine environments.</p>
            <ul className='list-disc mb-4 pl-7 leading-5'>
              <li>Bollard Pull: 82T</li>
              <li>EFMS Installed</li>
              <li>Deck Area: 450m<sup>2</sup></li>
              <li>7Tm<sup>2</sup> Deck Strength</li>
            </ul>
             <Link to='/' className="bg-blue-800 py-2 px-6 rounded-4xl text-white">Vessel Specification</Link>
          </div>
        </div>

        <div className='col-span-6 bg-gray-500/10 py-24 px-20'>
          <h1 className='mb-20 font-bold text-7xl'>Oshe 3</h1>
          <div className='mb-20 text-center'><img src="/banner2.jpeg"/></div>
          <div>
            <h2 className='text-2xl font-bold mb-4'>Anchor Handling Tug Vessel (AHT)</h2>
            <p className='mb-2'>With the ability to support offshore drilling operations, perform deep-sea salvage, and execute intricate positioning manoeuvres, Oshe 3 is your trusted partner for a wide range of demanding marine operations.</p>
            <ul className='list-disc mb-4 pl-7 leading-5'>
              <li>Bullard Pull: 72.2T</li>
              <li>EFMS Installed</li>
              <li>Deck Area: 163m<sup>2</sup></li>
              <li>5Tm<sup>2</sup> Deck Strength</li>
            </ul>
             <Link to='/' className="bg-blue-800 py-2 px-6 rounded-4xl text-white">Vessel Specification</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fleet
