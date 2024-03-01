import React from 'react';
import avatar from './assets/Avatar.png';
import { Link } from 'react-router-dom';
import loanify from './assets/Loanify.png';
import timesync from './assets/Timesync.png';
import todo from './assets/Todo.png';
import profile from './assets/Profile.png';
import starwars from './assets/Starwars.png';
import xoxo from './assets/Xoxo.png';
import portfolio from './assets/Portfolio.png';
import netflix from './assets/Netflix.png';



const Projects = () => {
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
    <div className='mt-[50px] md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px]'>
        <div className='flex gap-[1.5rem]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 10 February 2024</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>TimeSync</p>
                <p className='md:text-[20px] text-[16px]'>TimeSync is a web app that offers seemless experience in time tracking, ensuring precision and efficiency. Beyond that, TimeSync is your partner in effective project management, providing tools and features to enhance collaboration and productivity. </p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://time-sync-tau.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('timesync-container')} id='timesync-container'>
                    <img src={timesync} alt='timesync' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 10 July 2023</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>Loanify</p>
                <p className='md:text-[20px] text-[16px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://project-loanify-app.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('loanify-container')} id='loanify-container'>
                    <img src={loanify} alt='loanify' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 10 March 2023</p>
                <p className='md:text-[30px] text-[16px] font-[600] pb-[20px]'>Todo App</p>
                <p className='md:-[20px] text-[16px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://codewithoyinda.github.io/Simple-Todo-App/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('todo-container')} id='todo-container'>
                    <img src={todo} alt='todo' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 15 April 2023</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>Search Profile</p>
                <p className='md:text-[20px] text-[16px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://company-profile-roan.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('profile-container')} id='profile-container'>
                    <img src={profile} alt='profile' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 10 Oct 2023</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>Xoxo</p>
                <p className='md:text-[20px] text-[16px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://clothing-brand-wine.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('xoxo-container')} id='xoxo-container'>
                    <img src={xoxo} alt='xoxo' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 10 May 2023</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>Starwars Clone</p>
                <p className='md:text-[20px] text-[16px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://star-wars-movie.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('starwars-container')} id='starwars-container'>
                    <img src={starwars} alt='starwars' className='rounded-[1rem]'/>
                </div>
            </div>
        </div> 
        <div className='flex gap-[1.5rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 10 July 2023</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>2023 Portfolio</p>
                <p className='md:text-[20px] text-[16px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://oyindamola-a.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('portfolio-container')} id='portfolio-container'>
                    <img src={portfolio} alt='portfolio' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[1.5rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='md:w-[350px] md:h-[150px] w-[350px] h-[50px] rounded-[50%]'/>
            </div>
            <div>
                <p className='md:text-[22px] text-[16px]'><span className='font-[600]'>Oyindamola .</span> 10 July 2022</p>
                <p className='md:text-[30px] text-[18px] font-[600] pb-[20px]'>Netflix clone</p>
                <p className='md:text-[20px] text-[16px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px] md:text-[16px] text-[12px]'>Visit the site by clicking <Link to='https://stellular-tartufo-4a3b7b.netlify.app/' className='text-[#df5f83]'>here</Link></p>
                <div onClick={() => toggleFullScreen('netflix-container')} id='netflix-container'>
                    <img src={netflix} alt='netflix' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects