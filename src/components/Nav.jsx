import React, {useEffect, useState} from 'react';
import Feeds from '../pages/Feeds';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const Nav = () => {
    const [activeTab, setActiveTab] = useState("Feeds");
   
    let menuTabs = [
        {
          name: "Feeds",
          fn: () => setActiveTab("Feeds"),
        },
        {
          name: "About Me",
          fn: () => setActiveTab("About Me"),
        },
        {
          name: "My Projects",
          fn: () => setActiveTab("My Projects"),
        },
        {
            name: "My Resume",
            fn: () => setActiveTab("My Resume"),
          },
      ];

  return (
    <div>
        <div className='flex justify-center items-center gap-[6rem] border-solid border-b-2 border-custom-[#c2c2c2] text-[22px] font-[600] mt-[40px] ml-[100px] mr-[100px]'>
        {menuTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={tab.fn}
                  className={`${
                    activeTab == tab.name && "w-[220px] h-[64px] text-[#1E1E1E] border-solid border-b-4 border-custom-[#fa2b66]"
                  } p-[12px] flex rounded-[8px]`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="w-full min-h-[calc(100vh-176px)]">
            {activeTab == "Feeds" ? (
              <Feeds />
            ) : activeTab == "About Me" ? (
              <About />
              ) : activeTab == "My Projects" ? (
                <Projects />
            ) : (
              activeTab == "My Resume" && <Resume />
            )}
          </div>
    </div>
  )
}

export default Nav