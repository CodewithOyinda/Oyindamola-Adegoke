import React from 'react'
import background from './assets/bg-image.jpg';
import oyinda from './assets/oyinda.png';
import vector from './assets/Vector.svg'
import { MdPermContactCalendar, MdShoppingBag } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';


const LandingPage = () => {
  return (
    <div className='md:w-full dark:text-gray-100 dark:bg-slate-900 duration-100'>
        <Header />
        <div>
            <img src={background} alt='background' className='md:h-[416px] md:w-full  h-[200px]' style={{ objectFit: 'cover', width: '100%' }}/>
        </div>
        <div className='flex justify-between md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px]'>
            <img src={oyinda} alt='oyinda' className='md:w-[202px] md:h-[202px] w-[150px] h-[150px] border-[4px] border-[#fafafa] rounded-[50%] md:mt-[-101px] mt-[-80px]'/>
            <div>
                <button className='bg-[#FA2B66] text-[#fafafa] md:w-[204px] md:h-[48px] w-[150px] h-[40px] md:text-[24px] text-[16px] rounded-[8px] flex justify-center items-center align-middle gap-[1rem] md:mt-[30px] mt-[10px]'>Contact Me <MdPermContactCalendar className='w-[30px] h-[30px]' /> </button>
            </div>
        </div>
        <div className='md:ml-[100px] ml-[20px]'>
            <div className='flex gap-[1rem] md:text-[56px] text-[25px] font-[700]'><p>Oyindamola Adegoke</p><img src={vector} alt='vector' className='md:w-[50px] w-[30px]'/></div>
            <p className='md:text-[24px] text-[16px] font-[400] pt-[20px]'>I build visually stunning and interactive websites, and I love what I do.</p>
            <div className='flex gap-[4rem] pt-[20px]'>
                <p className='md:text-[24px] text-[12px] font-[400] text-[#7E7E7E] flex justify-center items-center gap-[1rem]'><MdShoppingBag /> Frontend Developer</p>
                <p className='md:text-[24px] text-[12px] font-[400] text-[#7E7E7E] flex justify-center items-center gap-[1rem]'><FaLocationDot /> Abuja, Nigeria</p>
            </div>
        </div>
        <Nav/>
        <Footer/>
    </div>
  )
}

export default LandingPage