import React from 'react'
import twitter from './assets/Twitter.svg';
import linkedin from './assets/Linkedin.svg';
import instagram from './assets/Instagram.svg';
import mail from './assets/Mail.svg';
import arrow from './assets/Arrow.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Modal({ visible, onClose }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    const emailText = document.getElementById('email').innerText;
    navigator.clipboard.writeText(emailText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); 
      })
      .catch((error) => {
        console.error('Failed to copy email to clipboard:', error);
      });
  };

  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  if (!visible) return null;

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-2 text-black rounded md:w-[456px] w-[250px] md:h-[208px] md:pl-[30px] md:pr-[30px] pl-[10px] pr-[10px] md:text-[24px] text-[12px] font-[400]'>
        <div className='flex justify-between pb-[15px]'>
          <div className='flex gap-[0.5rem]'><img src={twitter} alt='twitter'/><p>Twitter</p></div>
          <Link to='https://twitter.com/AdegokeOyindam9'><div><img src={arrow} alt='arrow'/></div></Link>
        </div>
        <div className='flex justify-between pb-[15px]'>
          <div className='flex gap-[0.5rem]'><img src={linkedin} alt='linkedin'/><p>LinkedIn</p></div>
          <Link to='http://linkedin.com/in/oyindamola-adegoke'><div><img src={arrow} alt='arrow'/></div></Link>
        </div>
        <div className='flex justify-between pb-[15px]'>
          <div className='flex gap-[0.5rem]'><img src={instagram} alt='instagram'/><p>Instagram</p></div>
          <Link to='https://instagram.com/o.y.i.n.d.a_?igshid=YmMyMTA2M2Y='><div><img src={arrow} alt='arrow'/></div></Link>
        </div>
        <div className='flex justify-between pb-[15px]'>
          <div className='flex gap-[0.5rem]'><img src={mail} alt='mail'/><p id='email'>adegokeoyinda.86@gmail.com</p></div>
          <div className='text-[#FA2B66]' onClick={handleCopyEmail}><ion-icon name="copy"></ion-icon></div>
        </div>
        {isCopied && (
          <div className='bg-white p-2 text-black rounded md:text-[20px] text-[12px] '>
            Copied to clipboard
          </div>
        )}
      </div>
    </div>
  );
}
