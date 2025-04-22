import React from 'react'
import { Link, Links } from 'react-router-dom'

const Menubtn = ({className}) => {
  return (
    <>
    <div className="">
      <ul className={`${className}`}>
      <Link to={'/'}>
       <li className={`${className} inline-block mx-[15px]  font-dm font-normal text-[14px] hover:text-black text-hoverColor duration-150 transition `}>home</li>

      </Link>
       <Link to={'shop'}>
       <li className={`${className} inline-block mx-[15px] font-dm font-normal text-[14px] hover:text-black text-hoverColor duration-150 transition `}>Shop</li>
       </Link>
       <Link to={'about'}>

       <li className={`${className} inline-block mx-[15px] font-dm font-normal text-[14px] hover:text-black text-hoverColor duration-150 transition `}>About</li>
       </Link>
       <li className={`${className} inline-block mx-[15px] font-dm font-normal text-[14px] hover:text-black text-hoverColor duration-150 transition `}>Contact</li>
       <li className={`${className} inline-block  mx-[15px] font-dm font-normal text-[14px] hover:text-black text-hoverColor duration-150 transition`}>Jurnal</li>
      </ul>
    </div>
    </>
  )
} 

export default Menubtn
