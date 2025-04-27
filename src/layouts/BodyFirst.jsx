import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Lekhabor from '../Components/Lekhabor'
import Btn from '../Components/Btn'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PreveArrows from '../Components/PreveArrows'
import NextArrows from '../Components/NextArrows'

const BodyFirst = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreveArrows/>,
        nextArrow: <NextArrows/>,
    };


    return (
        <>
            <Slider {...settings}>
                <div>
                    <div className="bg-[url(/sliderImg.png)] py-[200px] w-[100%] bg-cover bg-no-repeat bg-center ">
                        <div className="">
                            <Container>
                                <Flex>
                                    <div className=" ml-[90px] pb-[150px] ">
                                        <h1 className="font-bold text-[49px] text-shadow-lg/30 pb-[30px] ">Final Offer</h1>
                                        <Lekhabor className="text-shadow-lg/30 text-shadowcolor  font-normal text-[16px]" writepart={"sale for all furniture items!"} />
                                        <Btn className="bg-black  py-[15px] px-[54px] mt-[50px] text-white text-shadow-lg/25" btnText={"shop Now"} />
                                    </div>
                                </Flex>
                            </Container>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url(/sliderImg.png)] py-[200px] w-[100%] bg-cover bg-no-repeat bg-center ">
                        <div className="">
                            <Container>
                                <Flex>
                                    <div className=" ml-[90px] pb-[150px] ">
                                        <h1 className="font-bold text-[49px] text-shadow-lg/30 pb-[30px] ">Final Offer</h1>
                                        <Lekhabor className="text-shadow-lg/30 text-shadowcolor  font-normal text-[16px]" writepart={"sale for all furniture items!"} />
                                        <Btn className="bg-black  py-[15px] px-[54px] mt-[50px] text-white text-shadow-lg/25" btnText={"shop Now"} />
                                    </div>
                                </Flex>
                            </Container>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url(/sliderImg.png)] py-[200px] w-[100%] bg-cover bg-no-repeat bg-center ">
                        <div className="">
                            <Container>
                                <Flex>
                                    <div className=" ml-[90px] pb-[150px] ">
                                        <h1 className="font-bold text-[49px] text-shadow-lg/30 pb-[30px] ">Final Offer</h1>
                                        <Lekhabor className="text-shadow-lg/30 text-shadowcolor  font-normal text-[16px]" writepart={"sale for all furniture items!"} />
                                        <Btn className="bg-black  py-[15px] px-[54px] mt-[50px] text-white text-shadow-lg/25" btnText={"shop Now"} />
                                    </div>
                                </Flex>
                            </Container>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[url(/sliderImg.png)] py-[200px] w-[100%] bg-cover bg-no-repeat bg-center ">
                        <div className="">
                            <Container>
                                <Flex>
                                    <div className=" ml-[90px] pb-[150px] ">
                                        <h1 className="font-bold text-[49px] text-shadow-lg/30 pb-[30px] ">Final Offer</h1>
                                        <Lekhabor className="text-shadow-lg/30 text-shadowcolor  font-normal text-[16px]" writepart={"sale for all furniture items!"} />
                                        <Btn className="bg-black  py-[15px] px-[54px] mt-[50px] text-white text-shadow-lg/25" btnText={"shop Now"} />
                                    </div>
                                </Flex>
                            </Container>
                        </div>
                    </div>
                </div>
            </Slider>


        </>
    )
}

export default BodyFirst
