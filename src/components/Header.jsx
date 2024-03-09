import React, {useState, useEffect } from 'react';
import vector from './assets/Vector.svg';

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const options = [
    {
      icon: "sunny" ,
      text: "light"
    },
    {
      icon: "moon" ,
      text: "dark" 
    },
    {
      icon: "desktop-outline" ,
      text: "system" 
    }
  ];
  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)
     ){
     element.classList.add("dark")

    }else{
    element.classList.remove("dark")
    }
  }
  onWindowMatch();

  useEffect (() => {
     switch (theme){
     case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark')
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light')
        break;
     default:
      localStorage.removeItem('theme')
      onWindowMatch()
     break;
     }
  },[theme]);

darkQuery.addEventListener('change', (e) =>{
  if(!("theme" in localStorage)){
   if(e.matches){
    element.classList.add("dark");
   }else{
    element.classList.remove("dark");
   }
  }
})

  return (
    <div className='flex justify-between md:ml-[50px] ml-[20px] md:mr-[50px] mr-[20px]'>
        <div className='flex gap-[1rem] md:text-[24px] text-[16px]'>
            <img src={vector} alt='vector' className='md:w-[50px] w-[30px]'/>
            <p className=' font-squarePeg md:text-[30px] text-[22px]'>Oyindamola Adegoke</p>
        </div>
        <div className='top-1 right-10 duration-100 dark:bg-slate-800 border border-[#e6e6e6] md:border-visible border-hidden rounded flex items-center'>
          {
            options?.map(opt=>(
              <button 
              key={opt.text} 
              onClick={()=> setTheme(opt.text)}
              className={`md:w-8 md:h-8 w-5 h-5 md:leading-9 leading-6 md:text-xl text-[16px] rounded-full m-1 ${
                theme === opt.text && 'text-[#fa2b66] bg-[#fee6ed] rounded-[0.2rem]'
              } ${theme === 'light' && opt.text === 'light' && 'text-[#fa2b66] bg-[#fee6ed] rounded-[0.2rem]'}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))
          }
          
        </div>
    </div>
  )
}

export default Header