import React from 'react';
import vector from './assets/Vector.svg';

const Header = () => {
  return (
    <div className='flex md:ml-[50px] ml-[20px] md:mr-[50px] mr-[20px]'>
        <div className='flex gap-[1rem] md:text-[24px] text-[16px]'>
            <img src={vector} alt='vector' className='md:w-[50px] w-[30px]'/>
            <p className=' font-squarePeg text-[30px]'>Oyindamola Adegoke</p>
        </div>
    </div>
  )
}

export default Header