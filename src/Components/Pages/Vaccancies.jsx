import React from 'react';
import {Link} from 'react-router-dom';
import { SlCalender } from "react-icons/sl";

function Vaccancies(){
    return(
        <div>
            <div className='p-3 bg-gray-200 text-center top-0'>Ariosh is one of Nigeria’s most diversified oil servicing conglomerates. Check out our career opportunities.</div>
            <div className='grid grid-cols-12 gap-10 lg:mx-52 lg:my-20 md:mx-20 md:my-10 Pb-90'>
                <div className='col-span-6 bg-gray-100/80 p-8 shadow-lg transition-shadow duration-300 rounded-2xl'>
                <Link className='text-2xl hover:text-blue-400 font-bold' to='/'>SAFETY OFFICER</Link>
                <div className='flex gap-2 items-center mb-4 mt-2'><SlCalender size={14} /> <span> August 1, 2024</span></div>
                <p>Reporting to and working closely with the Barge Master. Specific responsibilities are, but not limited to, the following: Oversees PMS of all …</p>
            </div>
            <div className='col-span-6 p-8 bg-gray-100/80 shadow-lg transition-shadow duration-300 rounded-2xl'>
                <Link className='text-2xl hover:text-blue-400 font-bold' to='/'>CRANE OPERATOR</Link>
                <div className='flex gap-2 items-center mb-4 mt-2'><SlCalender size={14} /> <span> August 1, 2024</span></div>
                <p>RESPONSIBILITIES: Reporting to and working closely with the Chief Officer (Deck). Specific responsibilities are, but not limited to, the following: 1. Be …</p>
            </div>
            <div className='col-span-6 p-8 bg-gray-100/80 shadow-lg transition-shadow duration-300 rounded-2xl'>
                <Link className='text-2xl hover:text-blue-400 font-bold' to='/'>WINCH OPERATOR</Link>
                <div className='flex gap-2 items-center mb-4 mt-2'><SlCalender size={14} /> <span> August 1, 2024</span></div>
                <p>RESPONSIBILITIES: Reporting to and working closely with the Chief Engineer. Specific responsibilities are, but not limited to, the following: Make himself fully …</p>
            </div>
            <div className='col-span-6 p-8 bg-gray-100/80 shadow-lg transition-shadow duration-300 rounded-2xl'>
                <Link className='text-2xl hover:text-blue-400 font-bold' to='/'>CHIEF ENGINEER</Link>
                <div className='flex gap-2 items-center mb-4 mt-2'><SlCalender size={14} /> <span> August 1, 2024</span></div>
                <p>RESPONSIBILITIES: Reporting to and working closely with the Master & Technical Superintendent. Specific responsibilities are, but not limited to, the following: The …</p>
            </div>
            <div className='col-span-6 p-8 bg-gray-100/80 shadow-lg transition-shadow duration-300 rounded-2xl'>
                <Link className='text-2xl hover:text-blue-400 font-bold' to='/'>2ND ENGINEER</Link>
                <div className='flex gap-2 items-center mb-4 mt-2'><SlCalender size={14} /> <span> August 1, 2024</span></div>
                <p>RESPONSIBILITIES: Reporting to and working closely with the Chief Engineer. Specific responsibilities are, but not limited to, the following: Control of engineering …</p>
            </div>
            <div className='col-span-6 p-8 bg-gray-100/80 shadow-lg transition-shadow duration-300 rounded-2xl'>
                <Link className='text-2xl hover:text-blue-400 font-bold' to='/'>ETO</Link>
                <div className='flex items-center mt-2 mb-4 gap-2'><SlCalender size={14} /> <span> August 1, 2024</span></div>
                <p>RESPONSIBILITIES: Reporting to and working closely with the Chief Engineer. Specific responsibilities are, but not limited to, the following: Perform maintenance of …</p>
            </div>
            </div>

            <div className='bg-gray-100 py-16 px-90 mt-80'>
                    <h1 className='text-3xl font-bold text-black text-center mb-8'>Want to find out more?</h1>
                   <div className='flex justify-between items-center gap-40'>
                     <Link className='bg-blue-950 py-2 px-8 rounded-4xl text-white font-bold' to='/vaccancies'>Vacancies</Link>
                     <Link className='bg-blue-950 py-2 px-8 rounded-4xl text-white font-bold' to='/about'>About Us</Link>
                     <Link className='bg-blue-950 py-2 px-8 rounded-4xl text-white font-bold' to='/contact'>Contact Us</Link>
                   </div>
            </div>
        </div>
    )
}
export default Vaccancies;