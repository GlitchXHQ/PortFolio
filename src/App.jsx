import React from 'react'
import NavBar from './component/header/NavBar'
import Header from './component/header/Header'
import Computer from './component/header/Computer'

const App = () => {
  return (
    <div className='bg-black bg-cover h-screen overflow-x-hidden'>
      <div className='pt-5 bg-cover h-screen bg-no-repeat relative'>
        <NavBar/>
        <div className='sm:flex-row flex-col flex gap-8'>
          <Header/>
          <Computer/>
        </div>
      </div>
    </div>
  )
}

export default App