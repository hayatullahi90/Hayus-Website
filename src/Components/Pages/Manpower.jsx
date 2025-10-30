import React from 'react';
import ProjectCard from './ProjectCard';
import Subnav from '../Subnav';


const rawImages = ["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
    ];

const Manpower = () => {
  return (
    <div>
      <Subnav />
      <div>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-10 lg:mx-28 md:mx-18 sm:mx-6 lg:mt-20 md:mt-16 sm:mt-8 lg:mb-32 md:mb-18 sm:mb-10'>
        <h1 className='col-span-6 text-black/90 font-bold text-5xl'>Ariosh is a leader in the supply of manpower to the oil and gas industry in Nigeria</h1>
          <p className='leading-7 col-span-6' style={{fontSize: '17px'}}>We have access to a vast pool of qualified personnel 
            through our network of reputable, local and international agencies. We bring technical 
            expertise and a consultative approach to human resources procurement that results in complete 
            manpower solutions. Our proven track record of successful highly specialized personnel 
            placement spans across multiple disciplines.</p>
      </div>

      <div className='grid lg:grid-cols-12 md:grid-cols-6 justify-items-center place-items-center gap-14 lg:mx-28 md:mx-18 sm:mx-6 lg:mt-20 md:mt-16 sm:mt-8 lg:mb-20 md:mb-10 sm:mb-5'>
        <img className='col-span-6 w-full h-[70vh] object-cover rounded-xl' src='/banner1.jpeg'/>
        <div className='col-span-6 flex flex-col gap-5'>
         <div>
           <h1 className='text-2xl font-bold mb-2'>Network of Global Recruitment Agencies</h1>
           <p className='leading-7' style={{fontSize: '17px'}}>Our long-established network affiliations with 
            reputable recruitment agencies across the globe affords us the breadth and flexibility 
            of human resources procurement, both locally and internationally. 
            Ariosh’s responsive staffing team is poised to respond to clients’ manpower needs immediately.</p>
         </div>
          <div>
            <h1 className='text-2xl font-bold mb-2'>Data Bank of Qualified Resumes</h1>
           <p className='leading-7' style={{fontSize: '17px'}}>We maintain a robust and comprehensive personnel data bank, 
            covering virtually every field, trade and profession in the oil and gas industry. 
            Ariosh staffing teams can deploy urgently needed manpower to a worksite rapidly. 
            Our data bank is an invaluable repository of human resource information–the result of many years 
            of detailed and exhaustive evaluation of candidates. Our painstaking human resource placement solutions 
            saves our clients valuable time and energy when sourcing industry professionals. Our data bank is continuously 
            updated, refreshed, and expanded as we identify suitable personnel for our clients.</p>
          </div>
        </div>
      </div>
      <div  className='lg:mx-28 md:mx-18 sm:mx-6 lg:mt-14 md:mt-12 sm:mt-8 lg:mb-20 md:mb-10 sm:mb-5'>
        <h1 className='text-2xl font-bold mb-2'>Value-Improving Services</h1>
           <p className='leading-7' style={{fontSize: '17px'}}>Our commitment to meet Clients’ requirements, 
            and to match them with individual jobseekers’ career aspirations, has enabled us to 
            develop a proprietary recruitment methodology that has consistently exceeded expectations. 
            We bring industry professionals and growing companies together to create long-term, win-win relationships.</p>
      </div>
      <div>
        <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Recent Projects</h1>
        <ProjectCard rawImages={rawImages} groupSize={3} />
      </div>
      </div>
    </div>
  )
}

export default Manpower
