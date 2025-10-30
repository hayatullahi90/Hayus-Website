import React from 'react'
import ProjectCard from './ProjectCard'
import Subnav from '../Subnav'

const rawImages =["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg"]

const Construction = () => {
  return (
    <div>
        <Subnav />
      <div className='lg:mx-28 md:mx-18 sm:mx-6 gap-4'>
        <div className="lg:mt-20 md:mt-16 sm:mt-8 grid lg:grid-cols-12 md:grid-cols-6 lg:mb-20 md:mb-10 sm:mb-5">
            <h1 className='text-5xl text-black/90 font-bold col-span-6'>Elevate your projects with Ariosh, where construction excellence meets precision and innovation</h1>
            <div className='col-span-6 flex flex-col gap-5'>
                <p className='leading-7' style={{fontSize: '17px'}}>Ariosh excels in delivering comprehensive construction and installation 
                solutions across Onshore and Offshore projects, production units, 
                turn-key installations, and Subsea construction. Our unwavering commitment 
                to material excellence, safety, and process control ensures project success.</p>
                
                    <p className='leading-7' style={{fontSize: '17px'}}>Dedicated to elevating project outcomes, Ariosh’s construction services prioritize 
                precision and excellence. Our proficient construction management team focuses on 
                leading approaches in construction methods, QHSE practices, and efficient project management. 
                With meticulous oversight of subcontractors, we ensure the seamless execution of every construction 
                project, delivering outcomes that exceed expectations.
                </p>
            </div>
        
        </div>
        <div className='mb-10'>
            <h1 className='text-2xl font-bold mb-5'>Safety as Paramount</h1>
            <p className='leading-6' style={{fontSize: '17px'}}>Safety is not just a priority; it is an integral part of our company ethos. We adhere to the highest safety standards, implementing rigorous protocols to safeguard our workforce, partners, and the communities in which we operate. Our dedication to creating a secure working environment sets the foundation for the successful delivery of every project.</p>
        </div>
        <div className='mb-10'>
            <h1 className='text-2xl font-bold mb-5 text-black/90'>Why Choose Ariosh?</h1>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-x-24 gap-y-6 mb-10'>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='text-xl font-bold'>Safety-Centric Approach</h1>
                <p className='leading-6' style={{fontSize: '17px'}}>Our unwavering focus on safety minimizes risks and creates a 
                    secure working environment.</p>
            </div>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='text-xl font-bold'>Proven Track Record</h1>
                <p className='leading-6' style={{fontSize: '17px'}}>With a history of successful infrastructure projects, 
                    we bring a wealth of experience to every construction undertaking.</p>
            </div>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='text-xl font-bold'>Innovative Solutions</h1>
                <p className='leading-6' style={{fontSize: '17px'}}>Our commitment to innovation ensures that we stay at the 
                    forefront of construction methodologies, delivering projects that stand out in terms of efficiency and quality.</p>
            </div>
            <div className='col-span-6 border-l border-gray-400 pl-2'>
                <h1 className='text-xl font-bold'>Client-Centric Approach</h1>
                <p className='leading-6' style={{fontSize: '17px'}}>Your vision is our priority. We collaborate closely with clients, 
                    ensuring that their objectives are not only met but exceeded.</p>
            </div>
        </div>
        </div>
        <div>
            <h1 className='text-5xl font-bold text-black/90 mb-5 lg:mt-20 md:mt-14 sm:mt-8'>Fabrication and Marine Logistics Base</h1>
            <p className='leading-7 mb-5' style={{fontSize: '17px'}}>Ariosh Rumuolumeni Fabrication & Marine Logistics Base in Port Harcourt, Nigeria, 
                is a 100% Nigerian-owned facility spanning approximately 13 hectares. 
                Positioned strategically along the Bonny River, 
                it provides unparalleled access to major inter-coastal waterways.
            </p>
            <p className='leading-7 mb-5' style={{fontSize: '17px'}}>Our state-of-the-art fabrication facilities boast an annual capacity of 10,000 – 20,000 metric tons, 
                making us one of Nigeria’s most competitive. The facility includes a 250m quayside and three major workshops 
                covering 15,600 square meters. Two workshops accommodate 2 x 60 tons overhead cranes, 
                handling fully assembled structures up to 28 meters in width and 16 meters in height.
            </p>
            <p className='leading-7 mb-5' style={{fontSize: '17px'}}>With advanced production management systems, cutting-edge technology, 
                and construction equipment, Ariosh stands 
                out as the preferred construction service provider in the industry.
            </p>
            <p className='leading-7 mb-5' style={{fontSize: '17px'}}>Beyond fabrication, our facility offers comprehensive services, including shipping and logistics support, 
                shop drawings, and detailing.
            </p>
            <p className='leading-7 mb-5' style={{fontSize: '17px'}}>At Ariosh, our adept project management teams ensure on-time and within-budget project completion, 
                meticulously adhering to client requirements for maximum satisfaction.
            </p>
        </div>
        <div className='grid lg:grid-cols-12 md:grid-col-9'>
            <img className='h-[70vh] mb-28 w-full object-cover col-span-8' src='/banner1.jpeg'/>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Recent Projects</h1>
        <ProjectCard rawImages={rawImages} groupSize={5} />
      </div>
    </div>
  )
}

export default Construction
