import React from 'react';
import vector from './assets/Vector.svg';

const Header = () => {
  return (
    <div className='flex'>
        <div className='flex gap-[1rem] text-[24px]'>
            <img src={vector} alt='vector' className='w-[50px]'/>
            <p>Oyindamola Adegoke</p>
        </div>
    </div>
  )
}

export default Header