import React from 'react'
import wave from './assets/hand-wave.svg';
import oyinda from './assets/oyinda.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import present from './assets/About.svg';
const About = () => {
  return (
    <>
    <Header/>
    <div className='flex ml-[100px] mr-[100px] justify-between'>
        <div className='h-[428px] w-[428px]'>
        <div className='flex'>
            <p className='text-[30px] font-[600] pb-[30px]'>Hello</p>
            <img src={wave} alt='wave'/>
        </div>
        <div className='text-[22px]'>
            <p>I am <span className='font-[600]'>Adegoke Deborah Oyindamola,</span> and my name carries significant meanings. <span className='font-[600]'>"Adegoke"</span> symbolizes <span className='font-[600]'>"The crown has been exalted"</span>, and <span className='font-[600]'>"Oyindamola"</span> represents <span className='font-[600]'>"Honey mixed with wealth".</span> While I am commonly known as <span className='font-[600]'>"Oyindamola",</span> I use <span className='font-[600]'>"Deborah"</span> professionally as it is my first name.</p>
        </div>
        </div>
        <div>
            <img src={oyinda} alt='oyinda' className='w-[428px] h-[428px] rounded-[1rem]'/>
        </div>
    </div>
    <div className='ml-[100px] mr-[100px] pt-[50px]'>
        <p className='text-[25px] pb-[30px]'>Past</p>
        <p className='text-[20px]'>I was born and brought up in Niger state, Nigeria. My childhood was filled with joyful moments of play, quality time with my family, and the regularity of school and church. The fond memories of those times are precious to me.
As I grew up, I developed a strong interest in cooking, which eventually led me to pursue a degree in food science and technology.
It was during my time at university that I also discovered my talent for makeup artistry, and I realized my deep passion for enhancing the beauty of things.</p>
    </div>
    <div className='ml-[100px] mr-[100px] pt-[50px]'>
        <p className='text-[25px] pb-[30px]'>Present</p>
        <p className='text-[20px]'>As you know, my passion for beautifying things has been a driving force in my life. While I thoroughly enjoyed my time as a makeup artist, I made the decision to explore another realm where I can channel my passion and creativity. I transitioned into the field of frontend development, and it has been an incredible experience so far.</p>
        <p className='text-[20px]'>It allows me to utilize my eye for aesthetics, attention to detail, and understanding of color harmony in a digital context. Just as a makeup artist enhances natural beauty, I now have the ability to transform digital landscapes and create visually stunning user experiences.</p>
    </div>
    <div className='flex justify-center items-center pt-[50px]'>
    <img src={present} alt='present' className='ml-[100px] mr-[100px]'/>
    </div>
    <div className='ml-[100px] mr-[100px] pt-[50px]'>
        <p className='text-[25px] pb-[30px]'>Future</p>
        <p className='text-[20px]'>The world of frontend development offers endless opportunities for creative expression and innovation. It allows me to combine my love for aesthetics with technical skills to craft engaging and delightful experiences for users.
It's a dynamic field that constantly challenges me to learn and grow, and I couldn't be more excited about the possibilities it presents.</p>
    </div>
    <div className='ml-[100px] mr-[100px] pt-[50px]'>
        <p className='text-[20px] font-[600]'>Stay awesome!</p>
        <p className='text-[20px]'>Oyindamola Adegoke</p>
    </div>
    <Footer/>
    </>
  )
}

export default About