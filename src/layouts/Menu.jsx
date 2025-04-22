import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import LogoImg from '../assets/Logo (15).png'
import Menubtn from '../Components/Menubtn'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <Container>
    <Flex className="my-[30px] items-center">
      <div className="">
        <Link to={'/'}>
      <img src={LogoImg} alt="" />
        </Link>
      </div>
        <div className="ml-[398px]">
          <Menubtn/>
        </div>
      
    </Flex>
        
    </Container>
    </>
  )
}

export default Menu
