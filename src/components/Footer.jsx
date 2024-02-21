import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-[100px]'>
       <div className='flex justify-center items-center gap-[2rem] mt-[60px] mb-[20px]'>
       <Link to='http://linkedin.com/in/oyindamola-adegoke'><IoLogoLinkedin /></Link>
       <Link to='https://twitter.com/AdegokeOyindam9'><RiTwitterXFill /></Link>
       <Link to='https://github.com/CodewithOyinda'><IoLogoGithub /></Link>
       <Link to='https://instagram.com/o.y.i.n.d.a_?igshid=YmMyMTA2M2Y='><AiFillInstagram /></Link>
       </div>
       <div className='flex justify-center items-center'>
        <p>Oyindamola © 2023</p>
       </div>
    </div>
  )
}

export default Footer