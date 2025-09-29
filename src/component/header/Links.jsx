import React from 'react'
import { GoDownload } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";

const Links = () => {
  return (
    <div className='lg:mt-[-15%] sm:mt-[-1%] flex flex-col items-center'>
    <div className='text-white flex flex-row items-center gap-10'>
        <a href="" className='p-2 w-fit border rounded-lg bg-purple-500 cur2 hover:scale-105'>View Projects</a>
        <a href="" className='p-2 w-fit border rounded-lg bg-gradient-to-b from-[#291d3b] to-[#9900e0] cur2 hover:scale-105 flex flex-row items-center '>
            <span className='m-1 hover:animate-bounce'><GoDownload/></span> 
            <div>Download Resume</div>
            </a>
        <a href="" className='p-2 w-fit border rounded-lg bg-purple-500 cur2 hover:scale-105'>Contact Me</a>
    </div>

    <div className='text-white flex flex-row items-center gap-5 mt-15 opacity-75 text-3xl'>
        <a href="https://github.com/GlitchXHQ" className='hover:opacity-100 hover:text-blue-400 animate-bounce'><FaGithub/></a>
        <a href="http://linkedin.com/in/vivek004/" className='hover:opacity-100 hover:text-blue-400 animate-bounce'><CiLinkedin/></a>
        <a href="" className='hover:opacity-100 hover:text-blue-400 animate-bounce  '><CgMail/></a>
    </div>

    <MdKeyboardArrowDown className='animate-bounce text-white text-2xl mt-10'/>
    </div>
  )
}

export default Links