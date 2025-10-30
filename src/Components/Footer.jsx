import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex lg:flex-row justify-between sm:mx-5 md:mx-20 lg:mx-40 flex-col md:gap-2 p-4'>
      <div>
        Copyrights © 2025 Ariosh Ltd. All Rights Reserved
      </div>
      <div className='flex gap-5'>
        <a href='#'><FaFacebook size={20}/></a>
        <a href='#'><FaXTwitter size={20}/></a>
        <a href='#'><FaInstagram size={20}/></a>
        <a href='#'><FaLinkedin size={20} /></a>
        <a href='#'><IoLogoYoutube size={20} /></a>
      </div>
      <div className='flex gap-1'>
        <a href='#'><MdEmail size={24} /></a>
        <a href='#'><p>yusufolasile5@gmail.com</p></a>
      </div>
      <div className='flex gap-1'>
        <a href='#'><FaPhoneSquare size={24} /></a>
        <a href='#'><p>+234.813.977.7046</p></a>
      </div>
    </div>
  )
}

export default Footer
