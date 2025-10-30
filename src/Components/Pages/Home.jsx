import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router';
import ImageSlider from '../ImageSlider';
import ImageSlide from '../ImageSlide';

const Home = () => {
  return (
    <div>
      <div className='h-[100vh] relative'>
        <div className='absolute inset-0 -z-10 grid'>
             <ImageSlide />
        </div>
        <div className='bg-gray-600/60 absolute inset-0 z-20'>
         <h1 className='text-4xl text-white font-bold absolute bottom-0 sm:pl-32 md:pl-52 pb-22'>We deliver Engineering & Construction services</h1>
        </div>
      </div>
      <div className='container mx-auto mt-20 text-center'>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 items-center justify-center lg:mx-16 md:mx-8 mb-20 md:gap-10'>
            <div className='col-span-6'>
            <h1 className='text-black text-6xl font-bold mb-3'>Engineering</h1>
            <h4 className='text-xl text-black/80 font-bold mb-4'>Multi-discipline engineering solutions.</h4>
            <div className='flex justify-center gap-10'>
                <Link to='/engineering' className='text-2xl text-blue-800 flex items-center' href='#'>Read more <span><MdKeyboardArrowRight size={24} /></span></Link>
                <Link to='/projects' className='text-2xl text-blue-800 flex items-center' href='#'>Projects <span><MdKeyboardArrowRight size={24} /></span></Link>
            </div>
        </div>
        <div className='col-span-6'>
            <h1 className='text-black text-6xl font-bold mb-3'>Construction</h1>
            <h4 className='text-xl text-black/80 font-bold mb-4'>Comprehensive solutions for construction and installation.</h4>
            <div className='flex justify-center gap-10'>
                <Link to='/construction' className='text-2xl text-blue-800 flex items-center' href='#'>Read more <span><MdKeyboardArrowRight size={24} /></span></Link>
                <Link to='/projects' className='text-2xl text-blue-800 flex items-center' href='#'>Projects <span><MdKeyboardArrowRight size={24} /></span></Link>
            </div>
        </div>
        </div>
        <div className='grid lg:grid-cols-12 md:grid-cols-6 gap-10 text-center lg:mx-16 md:mx-8 mb-20'>
            <div className='col-span-6 border-0 transform transition-transform duration-300 hover:-translate-y-2'><img className='rounded-xl w-full' src="/banner1.jpeg"/></div>
            <div className='col-span-6 border-0 transform transition-transform duration-300 hover:-translate-y-2'><img className='rounded-xl w-full' src="/banner1.jpeg"/></div>
        </div>
      </div>

      <div className='grid lg:grid-cols-12 md:grid-cols-6 mx-4 gap-4'>
        <div className='col-span-6 border-0'>
            <div className='relative z-10'> <img className='h-[100vh] object-cover' src="/banner1.jpeg"/>
      
            <div className='absolute z-20 flex flex-col items-center inset-0 top-12'>
                <h1 className='text-black font-bold text-5xl mb-5'>Marine</h1>
                <h3 className='text-2xl mb-3 text-gray-900'>Our state of art fleet.</h3>
                <Link className='text-2xl text-blue-500 flex items-center font-bold cursor-pointer' to='/fleet'>Explore more <span><MdKeyboardArrowRight size={24} /></span></Link>
            </div>
            </div>
        </div>
        <div className='col-span-6 border-0'>
            <ImageSlider />
      </div>
      </div>
    </div>
  )
}

export default Home;
