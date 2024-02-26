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



const Projects = () => {
  return (
    <div className='mt-[50px] ml-[100px] mr-[100px]'>
        <div className='flex gap-[2rem]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 10 February 2024</p>
                <p className='text-[30px] font-[600] pb-[30px]'>TimeSync</p>
                <p className='text-[20px]'>TimeSync is a web app that offers seemless experience in time tracking, ensuring precision and efficiency. Beyond that, TimeSync is your partner in effective project management, providing tools and features to enhance collaboration and productivity. </p>
                <p className='pb-[30px] pt-[30px]'>Visit the site by clicking <Link to='https://time-sync-tau.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div>
                    <img src={timesync} alt='timesync' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 10 July 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>Loanify</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px]'>Visit the site by clicking <Link to='https://project-loanify-app.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div>
                    <img src={loanify} alt='loanify' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 10 March 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>Todo App</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px]'>Visit the site by clicking <Link to='https://codewithoyinda.github.io/Simple-Todo-App/' className='text-[#df5f83]'>here</Link></p>
                <div>
                    <img src={todo} alt='todo' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 15 April 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>Search Profile</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px]'>Visit the site by clicking <Link to='https://company-profile-roan.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div>
                    <img src={profile} alt='profile' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 10 Oct 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>Xoxo</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px]'>Visit the site by clicking <Link to='https://clothing-brand-wine.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div>
                    <img src={xoxo} alt='xoxo' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 10 May 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>Starwars Clone</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px]'>Visit the site by clicking <Link to='https://star-wars-movie.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div>
                    <img src={starwars} alt='starwars' className='rounded-[1rem]'/>
                </div>
            </div>
        </div> <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 10 July 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>2023 Portfolio</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <p className='pb-[30px] pt-[30px]'>Visit the site by clicking <Link to='https://oyindamola-a.vercel.app/' className='text-[#df5f83]'>here</Link></p>
                <div>
                    <img src={portfolio} alt='portfolio' className='rounded-[1rem]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects