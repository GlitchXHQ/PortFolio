import React from 'react'
import NavBar from './component/header/NavBar'
import Header from './component/header/Header'
import Computer from './component/Section1/Computer'
import Robot from './component/Section1/Robot'
import About from './component/Section1/About'
import { IoIosArrowDown } from "react-icons/io";
import Links from './component/header/Links'
const App = () => {
  return (
    <div className=' overflow-x-hidden h-screen bg-cover bg-no-repeat bg-black pt-10'>
      <NavBar/>
      <div className='bg-cover bg-no-repeat flex flex-col bg-black items-center justify-center'>
        <Header/>
        <Links/>
      </div>
      <div className='bg-white sm:justify-center sm:items-center hidden lg:flex h-screen'>
        <Robot/>
        <About/>
      </div>
    </div>
  )
}

export default App