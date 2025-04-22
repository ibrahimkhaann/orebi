import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Lekhabor from '../Components/Lekhabor'
import Btn from '../Components/Btn'
import IMgbaba from '../assets/slider-1 1.png'
import { Link } from 'react-router-dom'

const BodyFirst = () => {
    return (
        <>
            <div className="mb-[30px]">
                <img src={IMgbaba} alt="" className='absolute' />
                <div className="bg-bodyColor pt-[20px] pb-[20px] w-[100%]">
                    <Container>
                        <Flex>
                            <div className=" ml-[90px] pt-[215px] pb-[150px] absolute">
                                <h1 className="font-bold text-[49px] text-shadow-lg/30 pb-[30px] ">Final Offer</h1>
                                <Lekhabor className="text-shadow-lg/30 text-shadowcolor  font-normal text-[16px]" writepart={"sale for all furniture items!"} />
                                <Btn className="bg-black  py-[15px] px-[54px] mt-[50px] text-white text-shadow-lg/25" btnText={"shop Now"} />



                            </div>
                        </Flex>
                    </Container>
                </div>
            </div>









        </>
    )
}

export default BodyFirst
