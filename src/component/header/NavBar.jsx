import React, { useState } from 'react'
import logo from "../../assets/company/logo.png"
import { useNavigate } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const navigate = useNavigate()
    const [Open, setOpen] = useState(false) 

    const navLinks = [
        { link: "/", title: "Home" },
        { link: "/About", title: "About" },
        { link: "/Service", title: "Service" },
        { link: "/Resume", title: "Resume" },
        { link: "/Project", title: "Project" },
        { link: "/Contact", title: "Contact" }
    ];

    let arr1 = navLinks.slice(0, 3);
    let arr2 = navLinks.slice(3);
    const handleLinkClick = (link) => {
        navigate(link);
        setOpen(false); 
    };

    return (
        <div className='bg-[#190033] border rounded-xl max-w-7xl items-center justify-center mx-auto p-2 relative z-10'>
            <div className='flex flex-row justify-between text-gray-400 items-center'>
                {/* Desktop Left Links */}
                <div className='sm:flex sm:flex-row gap-10 hidden'>
                    {arr1.map((val, idx) => (
                        <div key={idx} className='hover:text-white cursor-pointer cur2 hover:scale-105'>
                            <h1 onClick={() => navigate(val.link)}>{val.title}</h1>
                        </div>
                    ))}
                </div>

                {/* Logo and Name */}
                <div className='flex flex-row items-center max-w-content hover:scale-105 cursor-pointer' onClick={() => navigate("/")}>
                    <img src={logo} alt="Company Logo" className='h-7 justify-center' />
                    <h1 className='cur2 hover:text-amber-50 font-bold'> | Vivek Chauhan</h1>
                </div>

                {/* Desktop Right Links */}
                <div className='sm:flex sm:flex-row gap-10 hidden'>
                    {arr2.map((val, idx) => (
                        <div key={idx} className='hover:text-white cursor-pointer cur2 hover:scale-105'>
                            <h1 onClick={() => navigate(val.link)}>{val.title}</h1>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className='sm:hidden text-2xl'>
                    <div 
                        className='text-white cursor-pointer' 
                        onClick={() => setOpen(!Open)}
                    >
                        {Open ? <IoMdClose /> : <CiMenuBurger />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Corrected) */}
            {Open && (
                <div className='sm:hidden flex flex-col absolute top-full right-0  bg-[#290A3D] border rounded-b-xl shadow-lg p-4 transition-all duration-300'>
                    {navLinks.map((val, idx) => (
                        <div key={idx} className='py-3 text-center text-gray-400 hover:text-white cursor-pointer border-b border-gray-700 last:border-b-0'>
                            <h1 onClick={() => handleLinkClick(val.link)} className='text-lg'>
                                {val.title}
                            </h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NavBar