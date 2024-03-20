import React from 'react'
import devfest from './assets/Devfest23.png';
import xplore from './assets/Xplore.png';
import wtm from './assets/wtmakers.png';
import fest from './assets/Devfest22.png';
import avatar from './assets/Avatar.png';

const Feeds = () => {

  const toggleFullScreen = (id) => {
      
    const element = document.getElementById(id)
    
    const isFullScreen = document.fullscreenElement
    console.log(isFullScreen);
   if (isFullScreen) {
     document.exitFullscreen()
   }else {
    element.requestFullscreen();
   }

   };

  return (
    <div className='md:mt-[50px] mt-[20px] md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px]'>
       <div className='flex gap-[1.5rem] md:mt-[60px] mt-[20px] '>
           <div>
           <img
           src={avatar}
           alt='avatar'
           className='md:max-w-[350px] md:max-h-[150px] max-w-[350px] max-h-[50px] rounded-[50%] object-cover'/>

            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 30 November 2023</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>XPLORE 2023</p>
                <p className='md:text-[20px] text-[16px]'>I had the privilege to attend a significant Tech Festival hosted by Lognetics Ltd at the NAF Conference Centre in Abuja. The event boasted an impressive lineup of speakers and diverse panel sessions covering topics such as Blockchain/Web3, Software Development, Start-ups, UI/UX, and various other fields in the tech industry. </p>
                <p className='md:text-[20px] text-[16px]'>The sessions were incredibly engaging and provided valuable insights, particularly regarding Blockchain/Web3 technology. Panelists emphasized the wide-ranging applications of blockchain beyond cryptocurrency, highlighting its potential for solving diverse problems.</p>
                <p className='md:text-[20px] text-[16px]'>Additionally, discussions underscored the importance of understanding consumer mindset for successful blockchain adoption, shifting focus from solely manufacturer-centric perspectives. </p>
                <p className='md:text-[20px] text-[16px]'>I also had the opportunity to gain knowledge from industry experts like Sam Harvard, who shared inspiring insights on innovation and its relevance in the tech sector. Overall, the event was enlightening, providing ample opportunities for networking, learning, and personal growth.</p>
                <div onClick={() => toggleFullScreen('xplore')} id='xplore'>
                    <img src={xplore} alt='xplore' className='rounded-[1rem] w-[649px] h-[400px] mt-[30px] object-cover'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] md:mt-[60px] mt-[20px]'>
           <div>
           <img
           src={avatar}
           alt='avatar'
           className='md:max-w-[350px] md:max-h-[150px] max-w-[350px] max-h-[50px] rounded-[50%] object-cover'/>

            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 25 November 2023</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>DevFest 2023</p>
                <p className='md:text-[20px] text-[16px]'>We had a fantastic experience at the Devfest Abuja 2023, immersed in an empowering and lively community atmosphere. The event featured several speakers who delivered enlightening speeches. Here's a summary of key takeaways from the event:</p>
                <p className='md:text-[20px] text-[16px]'>The journey is a marathon and not a sprint, just remain patient and focused.</p>
                <p className='md:text-[20px] text-[16px]'>Done is better than perfect.</p>
                <p className='md:text-[20px] text-[16px]'>The only thing worse than a bad decision is no decision.</p>
                <p className='md:text-[20px] text-[16px]'>The best way to learn is teach.</p>
                <p className='md:text-[20px] text-[16px]'>There's more than one path</p>
                <p className='md:text-[20px] text-[16px]'>One day or Day one, you decide!</p>
                <div  onClick={() => toggleFullScreen('devfestone')} id='devfestone'>
                    <img src={devfest} alt='devfest' className='rounded-[1rem] w-[649px] h-[400px] mt-[30px]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] md:mt-[60px] mt-[20px]'>
           <div>
           <img
           src={avatar}
           alt='avatar'
           className='md:max-w-[350px] md:max-h-[150px] max-w-[350px] max-h-[50px] rounded-[50%] object-cover'/>

            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 29 April 2023 </p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>Women Techmakers</p>
                <p className='md:text-[20px] text-[16px]'>The International Women's Day event was hosted in Abuja by Women Techmakers. The speakers were exceptional, and here are some of the key tips I gleaned from the program:</p>
                <p className='md:text-[20px] text-[16px]'>The Power of Intentionality.</p>
                <p className='md:text-[20px] text-[16px]'>Your design super powers are the qualities that makes you stand out as a designer "Your unique selling point".</p>
                <p className='md:text-[20px] text-[16px]'>Education is a powerful tool that enables women access numerous opportunities. </p>
                <div  onClick={() => toggleFullScreen('wtm')} id='wtm'>
                    <img src={wtm} alt='wtm' className='rounded-[1rem] w-[649px] h-[400px] mt-[30px] object-cover'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] md:mt-[60px] mt-[20px]'>
           <div>
           <img
           src={avatar}
           alt='avatar'
           className='md:max-w-[350px] md:max-h-[150px] max-w-[350px] max-h-[50px] rounded-[50%] object-cover'/>

            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span>22 October 2022</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>DevFest2022</p>
                <p className='md:text-[20px] text-[16px]'> Participating in Devfest 2022 marked my introduction to the tech event scene. It provided an excellent platform for connecting with fellow developers. Among the many speakers, Ada Nduka Oyom, the founder of She Code Africa, shared a profound lesson that resonated with me: the significance of communities as drivers of growth in the tech field. </p>
                <p className='md:text-[20px] text-[16px]'>She highlighted that communities consist of individuals with similar aspirations working towards common goals. This insight has profoundly influenced my career trajectory, serving as a driving force in my professional development.</p>
                <div  onClick={() => toggleFullScreen('devfesttwo')} id='devfesttwo'>
                    <img src={fest} alt='devfest' className='rounded-[1rem] w-[649px] h-[400px] mt-[30px] object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feeds