import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-[100px]'>
      <div className='flex justify-center items-center gap-[2rem] mt-[60px] mb-[20px]'>
        <span title="Connect with me on LinkedIn">
          <Link to='http://linkedin.com/in/oyindamola-adegoke' className='hover:bg-[#e9e9e9] rounded-sm w-[25px] h-[25px] flex justify-center items-center'>
            <IoLogoLinkedin />
          </Link>
        </span>
        <span title="Follow me on Twitter">
          <Link to='https://twitter.com/AdegokeOyindam9' className='hover:bg-[#e9e9e9] rounded-sm w-[25px] h-[25px] flex justify-center items-center'>
            <RiTwitterXFill />
          </Link>
        </span>
        <span title="My GitHub">
          <Link to='https://github.com/CodewithOyinda' className='hover:bg-[#e9e9e9] rounded-sm w-[25px] h-[25px] flex justify-center items-center'>
            <IoLogoGithub />
          </Link>
        </span>
        <span title="Follow me on Instagram">
          <Link to='https://instagram.com/o.y.i.n.d.a_?igshid=YmMyMTA2M2Y=' className='hover:bg-[#e9e9e9] rounded-sm w-[25px] h-[25px] flex justify-center items-center'>
            <AiFillInstagram />
          </Link>
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <p>Oyindamola © 2023</p>
      </div>
    </div>
  )
}

export default Footer;

