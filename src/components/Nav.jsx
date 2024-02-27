import React, { useEffect, useState } from 'react';
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
        <div className="w-full">
            <div className='flex justify-center md:justify-start items-center gap-[1rem] border-solid border-b-2 border-custom-[#c2c2c2] md:text-[22px] text-[10px] font-[600] mt-[40px] md:ml-[100px] ml-[20px] md:mr-[100px] mr-[20px]'>
                {menuTabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={tab.fn}
                        className={`${
                            activeTab === tab.name ? "md:w-[220px] md:h-[64px] w-[80px] text-[#1E1E1E] border-solid border-b-4 border-custom-[#fa2b66] md:p-[12px] p-[2px] flex rounded-[8px]" : "md:w-[160px] md:h-[48px] w-[70px] text-[#1E1E1E] md:p-[10px] p-[2px] flex rounded-[8px]"
                        }`}
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
                    activeTab === "My Resume" && <Resume />
                )}
            </div>
        </div>
    )
}

export default Nav
