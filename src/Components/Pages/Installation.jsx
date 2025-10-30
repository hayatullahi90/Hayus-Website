import React from 'react';
import ProjectCard from './ProjectCard';
import Subnav from '../Subnav';

const rawImages =["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg"]

const Installation = () => {
  return (
    <div>
      <Subnav />
     <div>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-10 lg:mx-28 md:mx-18 sm:mx-6 lg:mt-20 md:mt-16 sm:mt-8 lg:mb-20 md:mb-10 sm:mb-5'>
        <h1 className='col-span-6 text-black/90 font-bold text-5xl'>We deliver fully integrated solutions for the offshore installation of oil and gas production facilities</h1>
        <div className='col-span-6 flex flex-col gap-5'>
          <p className='leading-7' style={{fontSize: '17px'}}>We have extensive experience and expertise in hook-up and commissioning, 
          offshore transportation and installation (T&I) of jackets and topsides, seabed intervention, 
          subsea construction and subsea installation of umbilicals, risers and flowlines (SURF). 
          In addition, we offer services to floating structures such as floating production, 
          storage and offloading units (FPSOs) including mooring installation.</p>
          <p className='leading-7' style={{fontSize: '17px'}}>Our focus is on field development, brownfield revamp/modification of fixed platforms, 
            associated pipelines and deepwater floating systems. Our installation activities bring 
            together a range of fields of expertise including collaboration with partners who are global 
            leaders in offshore installation to create comprehensive, 
            cost-effective solutions that are specifically tailored to meet your needs.</p>
        </div>
      </div>
      <div className='mb-14'>
        <img className='w-full h-[80vh] object-cover mt-10' src='/banner1.jpeg'/>
      </div>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-10 md:mb-10 lg:mb-32 lg:mx-28 md:mx-18 sm:mx-6 gap-x-20 gap-y-14'>
        <div className='col-span-6'>
          <h1 className='font-bold text-2xl mb-5'>Hook-Up Services</h1>
          <p className='leading-6' style={{fontSize: '17px'}}>Our Hook-up services comprise the installation of modules on new platforms and the refurbishment 
            of topsides of existing fixed and floating production facilities.</p>
        </div>
        <div className='col-span-6'>
          <h1 className='font-bold text-2xl mb-5'>Offshore T&I</h1>
          <p className='leading-6' style={{fontSize: '17px'}}>In strategic alliance with foreign technical partners, 
            Ariosh provides fully integrated transport and installation (T&I) solutions
             for fixed offshore oil and gas production structures in shallow waters. 
             Our activities include seabed preparation, transport to the field including load-out 
             from construction sites, lifting and launching jackets, 
            installation of topsides and associated pipelines.</p>
        </div>
        <div className='col-span-6'>
          <h1 className='font-bold text-2xl mb-5'>Integrated Subsea Construction & Installation</h1>
          <p className='leading-6' style={{fontSize: '17px'}}>We offer integrated services for subsea infield installation of spools, 
            subsea structures, floating hoses, pipelines, power cables, and subsea infrastructure 
            pipeline end manifolds (PLEM). We also offer inspection, repair and maintenance, and light 
            construction work with divers and remotely operated vehicles (ROV’s). Further, we can provide FPSO, 
            mooring buoy and mooring system installation, platform and subsea structure decommissioning.</p>
        </div>
        <div className='col-span-6'>
          <h1 className='font-bold text-2xl mb-5'>SURF</h1>
          <p className='leading-6' style={{fontSize: '17px'}}>We provide full range subsea services and hold strong EPCI (Engineering, Procurement, 
            Construction, and Installation) expertise within the SURF (Subsea structures, Umbilicals, 
            Risers, Flowlines) segent. Leveraging partners’ high-end construction support vessels, 
            we safely execute projects, which connect seabed 
            wellhead infrastructures to surface facilities such as platforms and floating production systems.</p>
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

export default Installation
