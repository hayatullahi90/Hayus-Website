import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

function Nav() {
    const[nav, setNav] = useState(false);
    const[about, setAbout] = useState(false);


    const handleNav =()=>{
        setNav(!nav)
    };

  return (
    <div className='flex flex-row justify-between items-center sticky top-0 bg-white py-1 lg:px-30 md:px-20 sm:x-10 z-50'>
    <Link className='font-bold' style={{fontSize:24}} to='/'><em className='text-blue-800/80 text-3xl font-bold'>h</em>ayus</Link>
    <ul className='hidden md:flex flex-row gap-8 text-bold'>
        <li onMouseLeave={() => setAbout(false)} onMouseEnter={() => setAbout(true)}>
            <Link className="hover:text-blue-800 font-bold" to='/about'>About</Link>   
        </li>
        <li>
            <Link className='hover:text-blue-800 font-bold' to='/services'>Services</Link>
        </li>
        <li>
            <Link className='hover:text-blue-800 font-bold' to='/fleet'>Fleet</Link>
        </li>
        <li>
            <Link className='hover:text-blue-800 font-bold' to='/projects'>Projects</Link>
        </li>
        <li>
            <Link className='hover:text-blue-800 font-bold' to='/careers'>Careers</Link>
        </li>
        <li>
            <Link className='hover:text-blue-800 font-bold' to='/media'>Media</Link>
        </li>
        <li>
            <Link className='hover:text-blue-800 font-bold' to='/contact'>Contact Us</Link>
        </li>
    </ul>
    <IoSearchOutline className='hover:text-blue-800 font-bold' size={16} />

    <div className='md:hidden' onClick={handleNav}>
        {Nav? <LuMenu size={24} />: <FaTimes size={24}/>}
    </div>
      <ul className={`${nav? 'text-white opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-y-full'}
      transform-transition absolute top-0 left-0 flex flex-col bg-gray-500 h-screen w-60 justify-center gap-2 text-2xl font-bold items-center`} onClick={()=> setNav(false)} >
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/services'>Services</Link>
        </li>
        <li>
            <Link to='/fleet'>Fleet</Link>
        </li>
        <li>
            <Link to='/projects'>Projects</Link>
        </li>
        <li>
            <Link to='/careers'>Careers</Link>
        </li>
        <li>
            <Link to='/media'>Media</Link>
        </li>
        <li>
            <Link to='/contact'>Contact Us</Link>
        </li>
    </ul>
    </div>
  )
}

export default Nav;