import React from 'react'

const Btn = ({className,btnText}) => {
  return (
    <button className={`${className}`}>{btnText}</button>
  )
}

export default Btn
