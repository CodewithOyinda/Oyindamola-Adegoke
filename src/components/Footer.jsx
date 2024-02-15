import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='h-[100px]'>
       <div className='flex justify-center items-center gap-[2rem] mt-[60px] mb-[20px]'>
       <IoLogoLinkedin />
       <RiTwitterXFill />
       <IoLogoGithub />
       <AiFillInstagram />
       </div>
       <div className='flex justify-center items-center'>
        <p>Oyindamola © 2023</p>
       </div>
    </div>
  )
}

export default Footer