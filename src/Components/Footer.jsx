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
        Copyrights © 2025 Hayus Ltd. All Rights Reserved
      </div>
      <div className='flex gap-5'>
        <a href='https://www.facebook.com/share/17XT65ddPF/?mibextid=wwXlfr'
        target="_blank" rel="noopener noreferrer"><FaFacebook size={20}/></a>
        <a href='https://x.com/yusufolasile1?s=21' 
        target="_blank" rel="noopener noreferrer"><FaXTwitter size={20}/></a>
        <a href='#' target="_blank" rel="noopener noreferrer"><FaInstagram size={20}/></a>
        <a href='https://www.linkedin.com/in/yusuf-olasile-446627247?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
        target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
        <a href='https://youtube.com/@yusufyahaya4295?si=-b-O_sOOPyPWQ2pK'
        target="_blank" rel="noopener noreferrer"><IoLogoYoutube size={20} /></a>
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
