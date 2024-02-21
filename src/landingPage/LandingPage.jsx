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
    <div>
        <Header />
        <div>
            <img src={background} alt='background' className='h-[416px] w-full'/>
        </div>
        <div className='flex justify-between ml-[100px] mr-[100px]'>
            <img src={oyinda} alt='oyinda' className='w-[202px] h-[202px] border-[4px] border-[#fafafa] rounded-[50%] mt-[-101px]'/>
            <div>
                <button className='bg-[#FA2B66] text-[#fafafa] w-[204px] h-[48px] text-[24px] rounded-[8px] flex justify-center items-center align-middle gap-[1rem] mt-[30px]'>Contact Me <MdPermContactCalendar className='w-[30px] h-[30px]' /> </button>
            </div>
        </div>
        <div className='ml-[100px]'>
            <div className='flex gap-[1rem] text-[56px] font-[700]'><p>Oyindamola Adegoke</p><img src={vector} alt='vector' className='w-[50px]'/></div>
            <p className='text-[24px] font-[400] pt-[20px]'>I build visually stunning and interactive websites, and I love what I do.</p>
            <div className='flex gap-[4rem] pt-[20px]'>
                <p className='text-[24px] font-[400] text-[#7E7E7E] flex justify-center items-center gap-[1rem]'><MdShoppingBag /> Frontend Developer</p>
                <p className='text-[24px] font-[400] text-[#7E7E7E] flex justify-center items-center gap-[1rem]'><FaLocationDot /> Abuja, Nigeria</p>
            </div>
        </div>
        <Nav/>
        <Footer/>
    </div>
  )
}

export default LandingPage