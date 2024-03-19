import React, { useState } from 'react';
import Feeds from '../pages/Feeds';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';


const Nav = () => {
  const [activeTab, setActiveTab] = useState("Feeds");

  const menuTabs = [
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
      <div className="w-full">
          <div className="flex justify-center items-center md:gap-[7rem] gap-[0.5rem] border-b-2 md:text-[22px] text-[10px] font-[600] md:ml-[100px] ml-[20px] md:mr-[100px] mr-[20px] mt-4 md:mt-10 md:overflow-auto">
              {menuTabs.map((tab, index) => (
                  <button
                      key={index}
                      onClick={tab.fn}
                      className={`py-2 px-4 md:py-3 md:px-6 text-[#1E1E1E] ${activeTab === tab.name ? "border-b-4 border-[#fa2b66] rounded-t-md" : "rounded-md"} dark:text-gray-100 dark:bg-slate-900 duration-100`}
                  >
                      {tab.name}
                  </button>
              ))}
          </div>
          <div>
              {activeTab === "Feeds" ? (
                  <Feeds />
              ) : activeTab === "About Me" ? (
                  <About />
              ) : activeTab === "My Projects" ? (
                  <Projects />
              ) : (
                  <Resume />
              )}
          </div>
      </div>
  );
}

export default Nav;
