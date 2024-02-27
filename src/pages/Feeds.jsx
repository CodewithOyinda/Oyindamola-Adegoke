import React from 'react'
import devfest from './assets/Devfest23.png';
import xplore from './assets/Xplore.png';
import wtm from './assets/WTM.png';
import fest from './assets/Devfest22.png';
import avatar from './assets/Avatar.png';

const Feeds = () => {
  return (
    <div className='mt-[50px] ml-[100px] mr-[100px]'>
       <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 25 November 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>DevFest 2023</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <div>
                    <img src={devfest} alt='devfest' className='rounded-[1rem] w-[649px] h-[400px]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 30 November 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>XPLORE 2023</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <div>
                    <img src={xplore} alt='xplore' className='rounded-[1rem] w-[649px] h-[400px]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 22 October 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>DevFest2022</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>

                <div>
                    <img src={fest} alt='devfest' className='rounded-[1rem] w-[649px] h-[400px]'/>
                </div>
            </div>
        </div>
        <div className='flex gap-[2rem] mt-[60px]'>
           <div>
            <img src={avatar} alt='avatar' className='w-[350px] h-[150px] rounded-[50%]'/>
            </div>
            <div>
                <p className='text-[22px]'><span className='font-[600]'>Oyindamola .</span> 29 April 2023</p>
                <p className='text-[30px] font-[600] pb-[30px]'>Women Techmakers</p>
                <p className='text-[20px]'>Loanify is a web app that simplifies the management, monitoring and risk management, monitoring and risk assessment of all types of loans. In order to reduce loss incurred, Loanify assists loan officers and their financial institutions in ancticipating the likelihood of loan default.</p>
                <div>
                    <img src={wtm} alt='wtm' className='rounded-[1rem] w-[649px] h-[400px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feeds