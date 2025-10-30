import React from "react";
import TeamScroll from "../TeamScroll";

function About(){
    return(
        <div>
            <div className="bg-gray-200 lg:px-52 md:px-20 py-10">
               <div className="grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-3 md:gap-20 sm:gap-16 font-bold mb-20">
                 <div className="col-span-3">
                    <h1 className='text-8xl text-bold' to='/'><em className='text-amber-800 text-8xl font-bold'>h</em>ayus</h1>
                    <p className="text-red-400 text-bold text-xl pl-38">We deliver.</p>
                </div>
                <div className="col-span-9">
                    <p className="text-center text-4xl text-gray-500">Over 25 years of successful oil and gas<br/>
                    engineering and construction experience in Nigeria.</p>
                </div>
               </div>
                 <div className="grid lg:grid-cols-12 md:grid-cols-6 justify-items-center">
                    <div className="col-span-2 flex flex-col justify-center items-center">
                    <div className="h-24 w-24 rounded-2xl bg-black mb-4"></div>
                    <div className="flex flex-col justify-center items-center"><h1><span className="text-4xl font-bold">1997 <br/> </span> Established</h1></div>
                 </div>
                 <div className="col-span-2 flex flex-col justify-center items-center">
                    <div className="h-24 w-24 rounded-2xl bg-black mb-4"></div>
                    <div className="flex flex-col justify-center items-center"><h1><span className="text-4xl font-bold">400+ <br/> </span> Employees</h1></div>
                 </div>
                 <div className="col-span-2 flex flex-col justify-center items-center">
                    <div className="h-24 w-24 rounded-2xl bg-black mb-4"></div>
                    <div className="flex flex-col justify-center items-center"><h1><span className="text-4xl font-bold">100+ <br/> </span> Project Completed</h1></div>
                 </div>
                 <div className="col-span-2 flex flex-col justify-center items-center">
                    <div className="h-24 w-24 rounded-2xl bg-black mb-4"></div>
                    <div className="flex flex-col justify-center items-center"><p>Engineering & <br/> Construction</p></div>
                 </div>
                 <div className="col-span-2 flex flex-col justify-center items-center">
                    <div className="h-24 w-24 rounded-2xl bg-black mb-4"></div>
                    <div className="flex flex-col justify-center items-center"><p>Fabrication Yard <br/> Facility</p></div>
                 </div>
                 <div className="col-span-2 flex flex-col justify-center items-center">
                    <div className="h-24 w-24 rounded-2xl bg-black mb-4"></div>
                    <div className="flex flex-col justify-center items-center"><p>Marine<br/> Fleet</p></div>
                 </div>
                 </div>
               <div className="w-full font-bold"></div>

               <div className="grid lg:grid-cols-12 md:grid-cols-6 mt-10 mb-10 lg:gap-16 md:gap-8">
                  <div className='col-span-6'>
                     <h1 className="text-5xl text-blue-800 mb-10 font-bold text-center">Our Mission</h1>
                     <p className="text-xl text-gray-500 text-center">To deliver precision-engineered, sustainable solution for the global energy sector-ensuring operational safety, efficiency, and environmental stewardship accross upstream, and downstream projects.</p>
                  </div>
                  <div className='col-span-6'>
                     <h1 className="text-5xl text-blue-800 mb-10 font-bold text-center">Our Vision</h1>
                     <p className="text-xl text-gray-500 text-center">To redefine excellence in oil and gas infrastructure by pioneering technology-driven approaches that balance with planetary responsibility.</p>
                  </div>
               </div>
            </div>

            <div className='bg-white py-20'>
               <div className="text-5xl text-black lg:px-28 md:px-10 font-bold mt-20">our <span className="text-4xl text-gray-800"> Team</span></div>
                <TeamScroll />
               </div>
            <div className="bg-black lg:px-40 md:px-20 py-16">
               <h1 className="text-3xl text-white mb-10 font-bold">Core Values</h1>
               <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
                  <div className="px-4 py-14 bg-white shadow-sm rounded-2xl grid-cols-3">
                  <h1 className="text-3xl text-blue-800 mb-10 font-bold">Respect</h1> 
                  <p>We hold ourselves to the utmost standard of respect towards our clients, partners, and stakeholders in all our business dealings.</p>
               </div>
               <div className="px-4 py-14 bg-white shadow-sm rounded-2xl grid-cols-3">
                  <h1 className="text-3xl text-blue-800 mb-10 font-bold">Integrity</h1>
                  <p>Our values are founded on the highest standards of integrity, ethical behavior, and accountability, which serve as guiding principles for our actions</p>
               </div>
               <div className="px-4 py-14 bg-white shadow-sm rounded-2xl grid-cols-3">
                  <h1 className="text-3xl text-blue-800 mb-10 font-bold">Teamwork</h1>
                  <p>We foster a culture of innovative thinking and collaborative problem-solving that empowers us to achieve consistent project deliver</p>
               </div>
               <div className="px-4 py-14 bg-white shadow-sm rounded-2xl grid-cols-3">
                  <h1 className="text-3xl text-blue-800 mb-10 font-bold">Excellence​</h1>
                  <p>Our workforce is performance-driven, continuously striving for innovation and business excellence through proactive measures.</p>
               </div>
            </div>
           </div>

           <div className="bg-white py-10">
            <div className="text-5xl font-bold text-black lg:px-28 md:px-10">our <span className="text-4xl font-bold text-gray-800"> Clients</span></div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-8 mt-10 lg:px-32 md:px-10 sm:px-4">
               <img className="h-[12vh]" src='/total.png'/>
               <img className="h-[12vh]" src='/exxon.jpeg'/>
               <img className="h-[12vh]"  src='/chevron.png'/>
               <img className="h-[12vh]" src='/shell.png'/>
               <img className="h-[12vh] w-32" src='/first.png'/>
               <img className="h-[12vh]" src='/lng.png'/>
               <img className="h-[12vh]" src='/oando.png'/>
               <img className="h-[12vh]" src='/seplet.jpeg'/>
               <img className="h-[12vh]" src='/agip.jpeg'/>
               <img className="h-[12vh]" src='/logo.png'/>
            </div>
           </div>
        </div>
    )
}
export default About;