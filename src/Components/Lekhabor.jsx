import React from 'react'

const Lekhabor = ({className,writepart}) => {
  return (
    <div className={`${className}`}>Up to <span className="text-[40px] mt-[20px]  text-black font-bold">50%</span>{writepart}</div>
  )
}

export default Lekhabor
