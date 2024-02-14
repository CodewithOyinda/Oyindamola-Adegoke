import React from 'react'
import wave from './assets/hand-wave.svg';
import oyinda from './assets/oyinda.png';
const About = () => {
  return (
    <>
    <div className='flex ml-[100px] mr-[100px] justify-between'>
        <div className='h-[428px] w-[428px]'>
        <div className='flex'>
            <p>Hello</p>
            <img src={wave} alt='wave'/>
        </div>
        <div>
            <p>I am <span>Adegoke Deborah Oyindamola,</span> and my name carries significant meanings. <span>"Adegoke"</span> symbolizes <span>"The crown has been exalted"</span>, and <span>"Oyindamola"</span> represents <span>"Honey mixed with wealth".</span> While I am commonly known as <span>"Oyindamola",</span> I use <span>"Deborah"</span> professionally as it is my first name.</p>
        </div>
        </div>
        <div>
            <img src={oyinda} alt='oyinda' className='w-[428px] h-[428px]'/>
        </div>
    </div>
    <div className='ml-[100px] mr-[100px]'>
        <p>Past</p>
        <p>I was born and brought up in Niger state, Nigeria. My childhood was filled with joyful moments of play, quality time with my family, and the regularity of school and church. The fond memories of those times are precious to me.
As I grew up, I developed a strong interest in cooking, which eventually led me to pursue a degree in food science and technology.
It was during my time at university that I also discovered my talent for makeup artistry, and I realized my deep passion for enhancing the beauty of things.</p>
    </div>
    <div className='ml-[100px] mr-[100px]'>
        <p>Present</p>
        <p>As you know, my passion for beautifying things has been a driving force in my life. While I thoroughly enjoyed my time as a makeup artist, I made the decision to explore another realm where I can channel my passion and creativity. I transitioned into the field of frontend development, and it has been an incredible experience so far.</p>
        <p>It allows me to utilize my eye for aesthetics, attention to detail, and understanding of color harmony in a digital context. Just as a makeup artist enhances natural beauty, I now have the ability to transform digital landscapes and create visually stunning user experiences.</p>
    </div>
    </>
  )
}

export default About