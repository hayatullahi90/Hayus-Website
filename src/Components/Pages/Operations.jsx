import React from 'react';
import ProjectCard from './ProjectCard';
import Subnav from '../Subnav';


const rawImages = ["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    ];  

const Operations = () => {
  return (
    <div>
      <Subnav />
      <div>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-10 lg:mx-28 md:mx-18 sm:mx-6 lg:mt-20 md:mt-16 sm:mt-8 lg:mb-20 md:mb-10 sm:mb-5'>
        <h1 className='col-span-6 text-black/90 font-bold text-5xl'>Operations & Maintenance Excellence</h1>
        <div className='col-span-6 flex flex-col gap-5'>
          <p className='leading-7' style={{fontSize: '17px'}}>At Ariosh, we are dedicated to forging partnerships 
            with our clients to ensure the safe and efficient operation of their assets. 
            Our commitment to excellence extends beyond project completion, encompassing ongoing operations and maintenance 
            services that maximize the lifespan and performance of your critical assets.</p>
          <p className='leading-7' style={{fontSize: '17px'}}>Proactive maintenance practices reduce the overall cost of ownership by
             preventing unplanned downtime and extending asset longevity.</p>
        </div>
        
      </div>
      
        <div className='mb-10 lg:mx-28 md:mx-18 sm:mx-6 lg:mt-20 md:mt-16 sm:mt-8 lg:mb-14 md:mb-10 sm:mb-5'>
            <h1 className='text-2xl font-bold mb-5 text-black/90'>Comprehensive Operations and Maintenance Services</h1>
            <p className='leading-6 mb-5' style={{fontSize: '17px'}}>Our operations and maintenance offerings include:</p>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-x-24 gap-y-6 mb-10'>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='font-bold' style={{fontSize:"19px"}}>Efficient Operation</h1>
                <p className='leading-6' style={{fontSize: '18px'}}>We specialize in ensuring the seamless and 
                  efficient operation of assets, employing strategies that optimize 
                  performance while adhering to safety and regulatory standards.</p>
            </div>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='font-bold' style={{fontSize:"19px"}}>Client-Centric Approach</h1>
                <p className='leading-6' style={{fontSize: '18px'}}>We understand the unique needs of our 
                  clients and tailor our operations and maintenance services to address 
                  their specific requirements and industry challenges.</p>
            </div>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='font-bold' style={{fontSize:"19px"}}>Operational Efficiency</h1>
                <p className='leading-6' style={{fontSize: '18px'}}>Our strategies and methodologies are geared 
                  toward enhancing operational efficiency, 
                  ensuring that assets perform optimally throughout their lifecycle.</p>
            </div>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='font-bold' style={{fontSize:"19px"}}>Continuous Improvement</h1>
                <p className='leading-6' style={{fontSize: '18px'}}>Embracing a culture of continuous improvement, 
                  we stay abreast of industry advancements to deliver cutting-edge 
                  solutions that elevate operational effectiveness.</p>
            </div>
        </div>
        </div>
        <div>
          <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Recent Projects</h1>
          <ProjectCard rawImages={rawImages} groupSize={3} />
        </div>
      </div>
    </div>
  )
}

export default Operations
