import React from 'react';
import ProjectCard from './ProjectCard';
import Subnav from '../Subnav';


const rawImages = ["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
     "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
     "/banner1.jpeg",];



const Procurement = () => {
  return (
    <div>
      <Subnav />
      <div className='lg:my-20 md:my-8 sm:my-2 lg:mx-28 md:10 mx-5'>
        <div className='grid lg:grid-cols-12 md:w-fulloverflow-hidden mb-30 gap-6 place-content-center'>
            <h1 className="
  col-span-7 text-black/90 mt-16 font-semibold text-xl leading-6 sm:text-4xl sm:font-bold sm:leading-7 md:text-5xl 
  md:font-bold md:leading-9 lg:text-5xl lg:leading-[3rem]
"> Our procurement strategies are meticulously crafted to optimize costs without compromising on quality.</h1>
            <img className='col-span-5 h-[50vh] w-full rounded-xl' src='/banner1.jpeg'/>
        </div>
        <div className='lg:mb-8 mb-4'>
            <h1 className='font-bold text-2xl mb-4'>Global Strategic Sourcing</h1>
            <p style={{fontSize: '17px'}}>Ariosh delivers a robust Global Strategic Sourcing solution, 
                leveraging extensive networks and global partnerships. 
                Our adept teams specialize in efficiently sourcing materials 
                from reputable global suppliers. Committed to excellence,
                we meticulously curate vendors aligning with our values, ensuring superior quality, 
                optimal timelines, and competitive pricing for our projects.</p>
        </div>
        <div className='lg:mb-8 mb-4'>
            <h1 className='font-bold text-2xl mb-4'>Global Inspection and Expediting Services</h1>
            <p style={{fontSize: '17px'}}>Ariosh’s procurement services encompass Inspection and Expediting. 
                Our inspectors ensure materials meet specifications, 
                excelling in strategic planning, rigorous testing, and 
                meticulous reporting for top-notch quality. In compliance with clients’ 
                requirements and Ariosh’s Quality Management System (QMS), we proactively prevent nonconformity, 
                ensuring procurement excellence.</p>
        </div>
        <div className='lg:mb-8 mb-4'>
            <h1 className='font-bold text-2xl mb-4'>Efficient Materials Management</h1>
            <p style={{fontSize: '17px'}}>At Ariosh, we prioritize efficient materials management as a cornerstone of successful    
             project execution. Our comprehensive approach integrates strategic planning, 
             meticulous inventory control, and streamlined logistics to ensure optimal 
             utilization of resources.

            With a keen focus on minimizing waste and maximizing productivity, 
            our materials management strategies are tailored to enhance project efficiency, 
            reduce costs, and contribute to overall project success.</p>
        </div>
        <div className='lg:mb-8 mb-4'>
            <h1 className='font-bold text-2xl mb-4'>Innovative Supply Chain Management</h1>
            <p style={{fontSize: '17px'}}>Our approach integrates cutting-edge technologies, 
                data-driven insights, and industry best practices to create a dynamic 
                and responsive supply chain. Leveraging state-of-the-art solutions, 
                we enhance visibility, minimize risks, and optimize efficiency throughout 
                the supply chain lifecycle. By embracing innovation, we empower our clients
                with a resilient and adaptive supply chain that 
                not only meets current demands but also anticipates future challenges.</p>
        </div>
        <div className='lg:mb-8 mb-4'>
            <h1 className='font-bold text-2xl mb-4'>Warehousing and Logistics Optimization</h1>
            <p style={{fontSize: '17px'}}>With world-class facilities in Lagos and Portharcourt, 
                we store a full range of products efficiently. Our transportation 
                services are reliable and timely, even for challenging project locations. 
                Using innovative resources and technology, we provide proactive solutions, 
                ensuring client satisfaction with no delays. 
                Trust Ariosh for seamless warehousing and logistics solutions.</p>
        </div>
      </div>
      <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Recent Projects</h1>
      <ProjectCard rawImages={rawImages} groupSize={5} />
    </div>
  )
}

export default Procurement;
