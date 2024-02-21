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
        {menuTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={tab.fn}
                  className={`${
                    activeTab == tab.name && "w-full bg-[#FAFAFA] text-[#1E1E1E]"
                  } p-[12px] flex items-center justify-center rounded-[8px]`}
                >
                  {tab.name}
                </button>
              ))}
            <div className="w-full bg-[#FAFAFA] min-h-[calc(100vh-176px)]">
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