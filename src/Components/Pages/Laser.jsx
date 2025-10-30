import React from 'react';
import ProjectCard from './ProjectCard';
import Subnav from '../Subnav';

const rawImages = ["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    ];  

const Laser = () => {
  return (
    <div>
      <Subnav />
      <div>
          <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-8 lg:mx-28 md:mx-18 sm:mx-6 lg:mt-20 md:mt-16 sm:mt-8 lg:mb-20 md:mb-10 sm:mb-5'>
        <h1 className='col-span-6 text-black/90 font-bold text-5xl'>Ariosh is a leading provider of 3D Laser Scanning Services</h1>
        <div className='col-span-6 flex flex-col gap-5'>
          <p className='leading-7' style={{fontSize: '17px'}}>We deployed this innovative technology over a decade ago 
            to support brownfield developments and successfully set a new paradigm for reverse engineering, 
            seamless construction and first fit installation.</p>
          <p className='leading-7' style={{fontSize: '17px'}}>We utilize the latest high definition 3D scanning technology
             and our unique workflow to assist our clients in planning and executing projects more efficiently, 
             helping them to minimize operational shutdowns and mitigate project risks. With a large fleet of laser 
             scanners and highly trained team, our 3D laser scanning services have significantly 
            faster turnaround time compared to other services providers.</p>
        </div>
      </div>
      <div>

      </div>
      <div>
        <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Recent Projects</h1>
        <ProjectCard rawImages={rawImages} groupSize={5} />
      </div>
      </div>
    </div>
  )
}

export default Laser
