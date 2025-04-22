import React from 'react'
import IMG1 from '../assets/Image (2).png'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import WriteWithBtn from '../Components/WriteWithBtn'
import Btn from '../Components/Btn'
import ani from '../assets/Image (3).png'

const Body3rd = () => {
  return (
    <>
      <Container>
        <Flex>
          <div className="">
            <img src={IMG1} alt="" className="mt-[100px] absolute w-[30%] pb-[180px]" />
            <WriteWithBtn  writeDyn={"Phones Sale"} className="pt-[210px]  font-bold text-[30px]  text-black2 pb-[10px]"/>
            <Btn />
          </div>
          <div className="">
              <img src={ani} alt="" className="w-[30%] ml-[618px] h-[260px] absolute mt-[100px]" />
            <div className="ml-[590px] mt-[30px]">
              <WriteWithBtn  writeDyn={"Phones Sale"} className="pt-[50px]  font-bold text-[30px]  text-black2 pb-[10px]"/>
              <Btn />
            </div>
          </div>
          <div className="">
              <img src={ani} alt="" className="w-[30%] ml-[28px] h-[260px] absolute mt-[411px]" />
            <div className="ml-[0px] mt-[335px]">
              <WriteWithBtn  writeDyn={"Phones Sale"} className="pt-[50px]  font-bold text-[30px]  text-black2 pb-[10px]"/>
              <Btn />
            </div>
          </div>
        
        </Flex>
      </Container>
    </>
  )
}

export default Body3rd
