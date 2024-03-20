import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='md:mt-[50px] mt-[20px] md:ml-[100px] md:mr-[100px] ml-[20px] mr-[20px]'>
      <p className='md:text-[20px] text-[16px]'>Passionate Web Developer Volunteer & Assistant Team Lead at RenderFx, a pioneering fintech startup specializing in currency exchange solutions.</p>
      <p className='md:text-[20px] text-[16px]'>Led a dedicated team of volunteers to successfully develop and launch a website landing page, gaining invaluable startup experience while refining problem-solving and collaborative skills.</p>
      <p className='md:text-[20px] text-[16px]'> Actively engaged in live projects to enhance frontend development expertise. Pursuing entry-level opportunities within medium to large-sized companies, seeking environments that foster personal growth and offer clear career paths.</p>
      <p className='md:text-[25px] md:pb-[30px] pb-[10px] text-[18px] font-[600] mt-[20px]'>Skills</p>
      <div className='flex gap-[4rem]'>
      <ul className='md:text-[20px] text-[16px] list-disc'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Netlify</li>
        <li>Vercel</li>
      </ul>
      <ul className='md:text-[20px] text-[16px] list-disc'>
      <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Material UI</li>
        <li>Formik</li>
        <li>Problem Solving</li>
        <li>Team Collaboration</li>
        <li>Effective Communication</li>
      </ul>
      </div>
      <p className='md:text-[25px] md:pb-[30px] pb-[10px] text-[18px] font-[600] mt-[20px]'>Work Experience</p>
      <div className='flex justify-between md:text-[20px] text-[16px] font-[600]'>
        <p>RenderFx Ltd.</p>
        <p>November 2023 - Present</p>
      </div>
      <div className='flex justify-between md:text-[20px] text-[16px] font-[600] pb-[15px]'>
       <p>Web Developer (Volunteer)</p>
       <p>London, United Kingdom (Remote)</p>
      </div>
      <ul className='list-disc'>
      <li className='md:text-[20px] text-[16px]'>Write clean, efficient and well-documented code using programming languages such as HTML, CSS, JavaScript and frameworks like React.</li>
      <li className='md:text-[20px] text-[16px]'>Collaborate with designers to translate visual designs into working web pages or applications while ensuring responsiveness and cross-browser compatibility.</li>
      <li className='md:text-[20px] text-[16px]'>Conduct thorough testing of websites and applications to identify and fix bugs, performance issues, or compatibility problems.</li>
      <li className='md:text-[20px] text-[16px]'>Work closely with cross functional teams including designers, UX/UI specialists, and project managers to meet project requirements and deadlines.</li>
      <li className='md:text-[20px] text-[16px]'>Integrate content management sysyems (CMS) and develop custom  plugins or modules as needed.</li>
      <li className='md:text-[20px] text-[16px]'>Implement SEO best practices and optimize websites for maximum speed and scalability.</li>
      <li className='md:text-[20px] text-[16px]'>Ensure websites are secure by implementing best security practises and staying updated on potential vulnerabilities.</li>
      </ul>
      <div className='flex justify-between md:text-[20px] text-[16px] font-[600] mt-[20px]'>
        <p>Techies Collab and Upskill</p>
        <p>November 2023 - Present</p>
      </div>
      <div className='flex justify-between md:text-[20px] text-[16px] font-[600] pb-[15px]'>
       <p>Frontend Developer</p>
       <p>Nigeria (Remote)</p>
      </div>
      <div className='md:text-[20px] text-[16px]'>
      <ul className='list-disc'>
      <li>Collaborate with cross-functional teams to design, develop, and maintain engaging front-end applications.</li>
      <li>Utilize React, Zustand, React-Query, and Axios to create seamless user interfaces.</li>
      <li>Write clean and efficient code, demonstrating proficiency in Git</li>
      <li>Work closely with cross functional teams including designers, UX/UI specialists, and project managers to meet project requirements and deadlines.</li>
      <li>Actively participate in feature ideation, design and implementation.</li>
      <li>Troubleshoot and resolve front-end performance isssues.</li>
      <li>Ensure websites are secure by implementing best security practises and staying updated on potential vulnerabilities.</li>
      </ul>
      </div>
      <div className='flex justify-between md:text-[20px] text-[16px] font-[600] mt-[20px]'>
        <p>National Park Service</p>
        <p>July 2022 - November 2023</p>
      </div>
      <div className='flex justify-between md:text-[20px] text-[16px] font-[600] pb-[15px]'>
       <p>ICT Officer</p>
       <p>Abuja, Nigeria</p>
      </div>
      <div className='md:text-[20px] text-[16px]'>
      <ul className='list-disc'>
      <li>Communicate, resolve and initiate the resolution of problems and concerns for the Department.</li>
      <li>Liase with the team, to document software requirements and functionalities.</li>
      <li>Maintain existing sofware functionalities and products.</li>
      <li>Provide advanced technical support to staff.</li>
      </ul>
      </div>
      <div className='flex justify-center items-center mt-[20px]'>
        <Link to='https://drive.google.com/file/d/1nvSwLWBIXmAVSdg3fjUmV4D9luovJTaP/view?usp=sharing'><button className='border-2 border-[#fa2b66] hover:bg-[#fa2b66] hover:text-[#fafafa] md:w-[246px] md:h-[48px] w-[150px] h-[40px] md:text-[20px] text-[16px] text-[#fa2b66] rounded-[8px] '>Download Resume</button></Link>
      </div>
    </div>
  )
}

export default Resume