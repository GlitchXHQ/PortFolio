import React from 'react'

const Button = ({text, color}) => {
  const bgColorClass = color.match(/^[0-9A-Fa-f]{6}$/)
    ? `bg-[#${color}]`
    : `bg-${color}`;

  return (
    <button className={`w-fit border items-center justify-center flex p-3 rounded-xl text-center
        ${bgColorClass} ease-in-out duration-300 cursor-pointer hover:scale-105 cur2 text-white m-2`}>
        {text}
    </button>
  )
}

export default Button