import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router';
import ProjectCard from './ProjectCard';

const rawImages = ["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg",];

const Projects = () => {
  return (
    <div>
      <img src='/banner2.jpeg' className="relative w-full lg:h-[90vh] md:h-[70vh] mb-20">
      </img>
        <div className='absolute bottom-70 sm:pl-10 md:left-20 lg:left-24'>
          <h1 className='text-5xl font-bold mb-2 text-black/90'>Heavy Lift</h1>
          <h2 className='text-4xl text-black/90 font-bold mb-2'>Chevron Okan PRP Installations</h2>
          <Link to='/' className='text-2xl text-blue-700 flex items-center' href='#'>Read more <span><MdKeyboardArrowRight size={24} /></span></Link>
        </div>
        <div>
          <div className='mb-20'>
            <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Engineering</h1>
            <ProjectCard rawImages={rawImages} groupSize={5} />         
          </div>
          <div className='mb-20'>
            <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Construction</h1>
            <ProjectCard rawImages={rawImages} groupSize={5} />
          </div>
          <div className='mb-10'>
            <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Installation</h1>
            <ProjectCard rawImages={rawImages} groupSize={3}/>
          </div>
        </div>
    </div>
  )
}

export default Projects
