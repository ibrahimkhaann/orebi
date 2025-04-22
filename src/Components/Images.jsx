import React from 'react'

const Images = ({className,imgsrc,imgalt,}) => {
  return (
    <img  className={`${className}`} src={imgsrc} alt={imgalt} />
  )
}

export default Images
