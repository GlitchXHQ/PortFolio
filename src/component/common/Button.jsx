import React from 'react'

const Button = ({text}) => {
  return (
    <div className='w-fit border items-center justify-center flex p-2 rounded-xl text-center
        bg-[#ffd194] ease-in-out duration-300 cursor-pointer hover:scale-105 cur2 text-white'>
        {text}
    </div>
  )
}

export default Button