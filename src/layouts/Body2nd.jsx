import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'

const Body2nd = () => {
  return (
    <>
    <Container>
        <Flex className="justify-between">
            <Flex>
                <h1 className=" text-black font-bold text-[25px]">2</h1>
                <h2 className=" ml-[10px] mt-[8px] text-shadowcolor">Two years warranty</h2>
            </Flex>

            <Flex>
                <h1 className=" text-black font-bold text-[25px]">2</h1>
                <h2 className=" ml-[10px] mt-[8px] text-shadowcolor">Two years warranty</h2>
            </Flex>
            <Flex>
                <h1 className=" text-black font-bold text-[25px]">2</h1>
                <h2 className=" ml-[10px] mt-[8px] pb-[30px] text-shadowcolor">Two years warranty</h2>
            </Flex>
        </Flex>
    </Container>
    <div className=" w-[100%] border-[1px] border-shadowcolor opacity-30 "></div>
    </>
  )
}

export default Body2nd
