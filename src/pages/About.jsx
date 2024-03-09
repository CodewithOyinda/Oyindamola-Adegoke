import React from 'react'
import wave from './assets/hand-wave.svg';
import oyinda from './assets/oyinda.png';
import present from './assets/About.svg';
const About = () => {
  return (
    <>
    <div className='md:flex md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px] justify-between md:mt-[50px] mt-[20px]'>
        <div className='md:h-[428px] md:w-[428px] w-[full] h-[full]'>
        <div className='flex gap-[1rem] items-center align-middle'>
            <p className='md:text-[30px] text-[18px] font-[600] md:pb-[30px] pb-[10px]'>Hello</p>
            <img src={wave} alt='wave' className='md:w-[40px] w-[20px] md:mt-[-15px] mt-[-10px]'/>
        </div>
        <div className='md:text-[22px] text-[16px]'>
            <p>I am <span className='font-[600]'>Adegoke Deborah Oyindamola,</span> and my name carries significant meanings. <span className='font-[600]'>"Adegoke"</span> symbolizes <span className='font-[600]'>"The crown has been exalted"</span>, and <span className='font-[600]'>"Oyindamola"</span> represents <span className='font-[600]'>"Honey mixed with wealth".</span> While I am commonly known as <span className='font-[600]'>"Oyindamola",</span> I use <span className='font-[600]'>"Deborah"</span> professionally as it is my first name.</p>
        </div>
        </div>
        <div>
            <img src={oyinda} alt='oyinda' className='md:w-[428px] md:h-[428px] w-full rounded-[1rem]'/>
        </div>
        </div>
    <div className='md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px] pt-[50px]'>
        <p className='md:text-[25px] md:pb-[30px] pb-[10px] text-[18px]'>Past</p>
        <p className='md:text-[20px] text-[16px]'>I was born and brought up in Niger state, Nigeria. My childhood was filled with joyful moments of play, quality time with my family, and the regularity of school and church. The fond memories of those times are precious to me.
As I grew up, I developed a strong interest in cooking, which eventually led me to pursue a degree in Food Science and Technology.
It was during my time at university that I also discovered my talent for makeup artistry, and I realized my deep passion for enhancing the beauty of things.</p>
    </div>
    <div className='md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px] pt-[30px]'>
        <p className='md:text-[25px] md:pb-[30px] pb-[10px] text-[18px]'>Present</p>
        <p className='md:text-[20px] text-[16px]'>As you know, my passion for beautifying things has been a driving force in my life. While I thoroughly enjoyed my time as a makeup artist, I made the decision to explore another realm where I can channel my passion and creativity. I transitioned into the field of frontend development, and it has been an incredible experience so far.</p>
        <p className='md:text-[20px] text-[16px]'>It allows me to utilize my eye for aesthetics, attention to detail, and understanding of color harmony in a digital context. Just as a makeup artist enhances natural beauty, I now have the ability to transform digital landscapes and create visually stunning user experiences.</p>
    </div>
    <div className='flex justify-center items-center pt-[30px]'>
    <img src={present} alt='present' className=' md:w-[900px] md:h-[900px] w-[300px] h-[300px] md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px]'/>
    </div>
    <div className='md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px] pt-[30px]'>
        <p className='md:text-[25px] md:pb-[30px] pb-[10px] text-[18px]'>Future</p>
        <p className='md:text-[20px] text-[16px]'>The world of frontend development offers endless opportunities for creative expression and innovation. It allows me to combine my love for aesthetics with technical skills to craft engaging and delightful experiences for users.
It's a dynamic field that constantly challenges me to learn and grow, and I couldn't be more excited about the possibilities it presents.</p>
    </div>
    <div className='md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px] pt-[50px]'>
        <p className='md:text-[20px] font-[600] text-[16px]'>Stay awesome!</p>
        <p className='md:text-[20px] font-squarePeg text-[16px]'>Oyindamola Adegoke</p>
    </div>
    </>
  )
}

export default About