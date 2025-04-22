import React from 'react'
import Container from '../Components/Container'
import WatchImg from '../assets/Image (5).png'
import Btn from '../Components/Btn'
import Flex from '../Components/Flex'
import tmi from '../assets/sell.png'


const WatchPart = () => {
  return (
    <>
    <Container>
        <div className="">
            <img src={WatchImg} alt="" className="relative w-[100%]"/>
            <div className="mt-[-210px] pl-[525px] pb-[30px]">
                <h1 className="absolute  font-bold text-[35px] ">Phone of the year</h1>
                <p className="absolute mt-[70px] mr-[30px] text-[16px] text-black2 font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                <h3 className="absolute text-[16px] mt-[100px] text-black2 font-normal">industry orem Ipsum..</h3>
                <Btn btnText={"Shop Now"} className="absolute  mt-[151px] py-[12px] px-[40px] bg-black text-white"/>
            </div>
        </div>
        <div className="">
                    <h1 className="mt-[300px] text-[30px] font-bold mb-[50px] ">Special Offers</h1>
                </div>
                <Flex className="justify-between pb-[120px]">
                    <div className="w-[22%] group">
                        <img src={tmi} alt="" className="relative z-0" />
                        <div className="py-[5px] px-[25px] bg-black w-[80px] absolute text-white mt-[-240px] ml-[15px] z-10">10%</div>
                        <div className="py-[15px] pr-[20px] absolute w-[100%] bg-white mt-[-126px] invisible translate-y-4 opacity-0 group-hover:visible group-hover:translate-y-0 ease-in-out duration-300 group-hover:opacity-100 ">
                            <Flex>
                                <div className="ml-[85px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Wish List</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                    <path d="M12.3822 0.844538C10.9176 -0.403569 8.73939 -0.17907 7.39507 1.20801L6.86857 1.75055L6.34206 1.20801C5.00041 -0.17907 2.81957 -0.403569 1.35498 0.844538C-0.323416 2.27705 -0.411612 4.8481 1.09039 6.40089L6.26188 11.7408C6.59596 12.0855 7.1385 12.0855 7.47257 11.7408L12.6441 6.40089C14.1487 4.8481 14.0605 2.27705 12.3822 0.844538Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[135px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Compare</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99632 1.93548C7.03761 1.93456 8.01915 2.32277 8.77548 3.03097L7.7654 4.04102C7.39962 4.40683 7.65869 5.03226 8.17599 5.03226H11.4194C11.74 5.03226 12 4.7723 12 4.45161V1.20825C12 0.690944 11.3746 0.431879 11.0088 0.797661L10.1447 1.66173C9.06752 0.632323 7.60761 0 6 0C3.06806 0 0.627411 2.103 0.103935 4.88284C0.070379 5.06112 0.208185 5.22581 0.389589 5.22581H1.77595C1.90972 5.22581 2.02531 5.13419 2.05783 5.00444C2.50452 3.22205 4.12234 1.93713 5.99632 1.93548ZM3.82401 6.96774H0.580645C0.25996 6.96774 0 7.2277 0 7.54839V10.7917C0 11.3091 0.625427 11.5681 0.99121 11.2023L1.85528 10.3383C2.93248 11.3677 4.39239 12 6 12C8.93194 12 11.3726 9.897 11.8961 7.11721C11.9296 6.93893 11.7918 6.77424 11.6104 6.77424H10.224C10.0903 6.77424 9.97469 6.86586 9.94217 6.99561C9.49527 8.7788 7.87679 10.0628 6.00377 10.0645C4.96246 10.0655 3.98085 9.67727 3.22452 8.96906L4.2346 7.95898C4.60038 7.59317 4.34131 6.96774 3.82401 6.96774Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[118px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Cart</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M11.9224 6.80235L12.9896 2.1067C13.0667 1.76766 12.809 1.44482 12.4613 1.44482H3.59416L3.38724 0.433219C3.33567 0.181076 3.1138 0 2.85642 0H0.541806C0.242571 0 0 0.242571 0 0.541806V0.90301C0 1.20224 0.242571 1.44482 0.541806 1.44482H2.11943L3.7053 9.19795C3.3259 9.41614 3.07023 9.82525 3.07023 10.2943C3.07023 10.9925 3.63624 11.5585 4.33445 11.5585C5.03266 11.5585 5.59866 10.9925 5.59866 10.2943C5.59866 9.94047 5.45312 9.62078 5.21886 9.3913H9.95169C9.71745 9.62078 9.57191 9.94047 9.57191 10.2943C9.57191 10.9925 10.1379 11.5585 10.8361 11.5585C11.5343 11.5585 12.1003 10.9925 12.1003 10.2943C12.1003 9.79378 11.8094 9.36123 11.3874 9.15641L11.512 8.60837C11.589 8.26934 11.3313 7.94649 10.9836 7.94649H4.92405L4.77629 7.22408H11.3941C11.6471 7.22408 11.8664 7.04903 11.9224 6.80235Z" fill="#262626" />
                                </svg>
                            </Flex>
                        </div>
                        <Flex className="mt-[15px]">
                            <div className=" text-[15px] font-bold text-black2">Basic Crew Neck Tee</div>
                            <div className="ml-[65px] text-[16px] font-medium text-shadowcolor">$44.00</div>
                        </Flex>
                        <div className="">
                            <h1 className='mt-[10px] text-[16px] font-medium text-shadowcolor'>Black</h1>
                        </div>
                    </div>
                    <div className="w-[22%] group">
                        <img src={tmi} alt="" className="relative z-0" />
                        <div className="py-[5px] px-[25px] bg-black w-[80px] absolute text-white mt-[-240px] ml-[15px] z-10">10%</div>
                        <div className="py-[15px] pr-[20px] absolute w-[100%] bg-white mt-[-126px] invisible translate-y-4 opacity-0 group-hover:visible group-hover:translate-y-0 ease-in-out duration-300 group-hover:opacity-100 ">
                            <Flex>
                                <div className="ml-[85px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Wish List</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                    <path d="M12.3822 0.844538C10.9176 -0.403569 8.73939 -0.17907 7.39507 1.20801L6.86857 1.75055L6.34206 1.20801C5.00041 -0.17907 2.81957 -0.403569 1.35498 0.844538C-0.323416 2.27705 -0.411612 4.8481 1.09039 6.40089L6.26188 11.7408C6.59596 12.0855 7.1385 12.0855 7.47257 11.7408L12.6441 6.40089C14.1487 4.8481 14.0605 2.27705 12.3822 0.844538Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[135px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Compare</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99632 1.93548C7.03761 1.93456 8.01915 2.32277 8.77548 3.03097L7.7654 4.04102C7.39962 4.40683 7.65869 5.03226 8.17599 5.03226H11.4194C11.74 5.03226 12 4.7723 12 4.45161V1.20825C12 0.690944 11.3746 0.431879 11.0088 0.797661L10.1447 1.66173C9.06752 0.632323 7.60761 0 6 0C3.06806 0 0.627411 2.103 0.103935 4.88284C0.070379 5.06112 0.208185 5.22581 0.389589 5.22581H1.77595C1.90972 5.22581 2.02531 5.13419 2.05783 5.00444C2.50452 3.22205 4.12234 1.93713 5.99632 1.93548ZM3.82401 6.96774H0.580645C0.25996 6.96774 0 7.2277 0 7.54839V10.7917C0 11.3091 0.625427 11.5681 0.99121 11.2023L1.85528 10.3383C2.93248 11.3677 4.39239 12 6 12C8.93194 12 11.3726 9.897 11.8961 7.11721C11.9296 6.93893 11.7918 6.77424 11.6104 6.77424H10.224C10.0903 6.77424 9.97469 6.86586 9.94217 6.99561C9.49527 8.7788 7.87679 10.0628 6.00377 10.0645C4.96246 10.0655 3.98085 9.67727 3.22452 8.96906L4.2346 7.95898C4.60038 7.59317 4.34131 6.96774 3.82401 6.96774Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[118px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Cart</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M11.9224 6.80235L12.9896 2.1067C13.0667 1.76766 12.809 1.44482 12.4613 1.44482H3.59416L3.38724 0.433219C3.33567 0.181076 3.1138 0 2.85642 0H0.541806C0.242571 0 0 0.242571 0 0.541806V0.90301C0 1.20224 0.242571 1.44482 0.541806 1.44482H2.11943L3.7053 9.19795C3.3259 9.41614 3.07023 9.82525 3.07023 10.2943C3.07023 10.9925 3.63624 11.5585 4.33445 11.5585C5.03266 11.5585 5.59866 10.9925 5.59866 10.2943C5.59866 9.94047 5.45312 9.62078 5.21886 9.3913H9.95169C9.71745 9.62078 9.57191 9.94047 9.57191 10.2943C9.57191 10.9925 10.1379 11.5585 10.8361 11.5585C11.5343 11.5585 12.1003 10.9925 12.1003 10.2943C12.1003 9.79378 11.8094 9.36123 11.3874 9.15641L11.512 8.60837C11.589 8.26934 11.3313 7.94649 10.9836 7.94649H4.92405L4.77629 7.22408H11.3941C11.6471 7.22408 11.8664 7.04903 11.9224 6.80235Z" fill="#262626" />
                                </svg>
                            </Flex>
                        </div>
                        <Flex className="mt-[15px]">
                            <div className=" text-[15px] font-bold text-black2">Basic Crew Neck Tee</div>
                            <div className="ml-[65px] text-[16px] font-medium text-shadowcolor">$44.00</div>
                        </Flex>
                        <div className="">
                            <h1 className='mt-[10px] text-[16px] font-medium text-shadowcolor'>Black</h1>
                        </div>
                    </div>
                    <div className="w-[22%] group">
                        <img src={tmi} alt="" className="relative z-0" />
                        <div className="py-[5px] px-[25px] bg-black w-[80px] absolute text-white mt-[-240px] ml-[15px] z-10">10%</div>
                        <div className="py-[15px] pr-[20px] absolute w-[100%] bg-white mt-[-126px] invisible translate-y-4 opacity-0 group-hover:visible group-hover:translate-y-0 ease-in-out duration-300 group-hover:opacity-100 ">
                            <Flex>
                                <div className="ml-[85px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Wish List</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                    <path d="M12.3822 0.844538C10.9176 -0.403569 8.73939 -0.17907 7.39507 1.20801L6.86857 1.75055L6.34206 1.20801C5.00041 -0.17907 2.81957 -0.403569 1.35498 0.844538C-0.323416 2.27705 -0.411612 4.8481 1.09039 6.40089L6.26188 11.7408C6.59596 12.0855 7.1385 12.0855 7.47257 11.7408L12.6441 6.40089C14.1487 4.8481 14.0605 2.27705 12.3822 0.844538Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[135px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Compare</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99632 1.93548C7.03761 1.93456 8.01915 2.32277 8.77548 3.03097L7.7654 4.04102C7.39962 4.40683 7.65869 5.03226 8.17599 5.03226H11.4194C11.74 5.03226 12 4.7723 12 4.45161V1.20825C12 0.690944 11.3746 0.431879 11.0088 0.797661L10.1447 1.66173C9.06752 0.632323 7.60761 0 6 0C3.06806 0 0.627411 2.103 0.103935 4.88284C0.070379 5.06112 0.208185 5.22581 0.389589 5.22581H1.77595C1.90972 5.22581 2.02531 5.13419 2.05783 5.00444C2.50452 3.22205 4.12234 1.93713 5.99632 1.93548ZM3.82401 6.96774H0.580645C0.25996 6.96774 0 7.2277 0 7.54839V10.7917C0 11.3091 0.625427 11.5681 0.99121 11.2023L1.85528 10.3383C2.93248 11.3677 4.39239 12 6 12C8.93194 12 11.3726 9.897 11.8961 7.11721C11.9296 6.93893 11.7918 6.77424 11.6104 6.77424H10.224C10.0903 6.77424 9.97469 6.86586 9.94217 6.99561C9.49527 8.7788 7.87679 10.0628 6.00377 10.0645C4.96246 10.0655 3.98085 9.67727 3.22452 8.96906L4.2346 7.95898C4.60038 7.59317 4.34131 6.96774 3.82401 6.96774Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[118px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Cart</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M11.9224 6.80235L12.9896 2.1067C13.0667 1.76766 12.809 1.44482 12.4613 1.44482H3.59416L3.38724 0.433219C3.33567 0.181076 3.1138 0 2.85642 0H0.541806C0.242571 0 0 0.242571 0 0.541806V0.90301C0 1.20224 0.242571 1.44482 0.541806 1.44482H2.11943L3.7053 9.19795C3.3259 9.41614 3.07023 9.82525 3.07023 10.2943C3.07023 10.9925 3.63624 11.5585 4.33445 11.5585C5.03266 11.5585 5.59866 10.9925 5.59866 10.2943C5.59866 9.94047 5.45312 9.62078 5.21886 9.3913H9.95169C9.71745 9.62078 9.57191 9.94047 9.57191 10.2943C9.57191 10.9925 10.1379 11.5585 10.8361 11.5585C11.5343 11.5585 12.1003 10.9925 12.1003 10.2943C12.1003 9.79378 11.8094 9.36123 11.3874 9.15641L11.512 8.60837C11.589 8.26934 11.3313 7.94649 10.9836 7.94649H4.92405L4.77629 7.22408H11.3941C11.6471 7.22408 11.8664 7.04903 11.9224 6.80235Z" fill="#262626" />
                                </svg>
                            </Flex>
                        </div>
                        <Flex className="mt-[15px]">
                            <div className=" text-[15px] font-bold text-black2">Basic Crew Neck Tee</div>
                            <div className="ml-[65px] text-[16px] font-medium text-shadowcolor">$44.00</div>
                        </Flex>
                        <div className="">
                            <h1 className='mt-[10px] text-[16px] font-medium text-shadowcolor'>Black</h1>
                        </div>
                    </div>
                    <div className="w-[22%] group">
                        <img src={tmi} alt="" className="relative z-0" />
                        <div className="py-[5px] px-[25px] bg-black w-[80px] absolute text-white mt-[-240px] ml-[15px] z-10">10%</div>
                        <div className="py-[15px] pr-[20px] absolute w-[100%] bg-white mt-[-126px] invisible translate-y-4 opacity-0 group-hover:visible group-hover:translate-y-0 ease-in-out duration-300 group-hover:opacity-100 ">
                            <Flex>
                                <div className="ml-[85px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Wish List</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                    <path d="M12.3822 0.844538C10.9176 -0.403569 8.73939 -0.17907 7.39507 1.20801L6.86857 1.75055L6.34206 1.20801C5.00041 -0.17907 2.81957 -0.403569 1.35498 0.844538C-0.323416 2.27705 -0.411612 4.8481 1.09039 6.40089L6.26188 11.7408C6.59596 12.0855 7.1385 12.0855 7.47257 11.7408L12.6441 6.40089C14.1487 4.8481 14.0605 2.27705 12.3822 0.844538Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[135px] mb-[12px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Compare</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99632 1.93548C7.03761 1.93456 8.01915 2.32277 8.77548 3.03097L7.7654 4.04102C7.39962 4.40683 7.65869 5.03226 8.17599 5.03226H11.4194C11.74 5.03226 12 4.7723 12 4.45161V1.20825C12 0.690944 11.3746 0.431879 11.0088 0.797661L10.1447 1.66173C9.06752 0.632323 7.60761 0 6 0C3.06806 0 0.627411 2.103 0.103935 4.88284C0.070379 5.06112 0.208185 5.22581 0.389589 5.22581H1.77595C1.90972 5.22581 2.02531 5.13419 2.05783 5.00444C2.50452 3.22205 4.12234 1.93713 5.99632 1.93548ZM3.82401 6.96774H0.580645C0.25996 6.96774 0 7.2277 0 7.54839V10.7917C0 11.3091 0.625427 11.5681 0.99121 11.2023L1.85528 10.3383C2.93248 11.3677 4.39239 12 6 12C8.93194 12 11.3726 9.897 11.8961 7.11721C11.9296 6.93893 11.7918 6.77424 11.6104 6.77424H10.224C10.0903 6.77424 9.97469 6.86586 9.94217 6.99561C9.49527 8.7788 7.87679 10.0628 6.00377 10.0645C4.96246 10.0655 3.98085 9.67727 3.22452 8.96906L4.2346 7.95898C4.60038 7.59317 4.34131 6.96774 3.82401 6.96774Z" fill="#262626" />
                                </svg>
                            </Flex>
                            <Flex>
                                <div className="ml-[118px]">
                                    <h1 className="hover:text-hoverColor duration-150 transition-all text-[16px] font-normal">Add to Cart</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[7px] ml-[8px]" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M11.9224 6.80235L12.9896 2.1067C13.0667 1.76766 12.809 1.44482 12.4613 1.44482H3.59416L3.38724 0.433219C3.33567 0.181076 3.1138 0 2.85642 0H0.541806C0.242571 0 0 0.242571 0 0.541806V0.90301C0 1.20224 0.242571 1.44482 0.541806 1.44482H2.11943L3.7053 9.19795C3.3259 9.41614 3.07023 9.82525 3.07023 10.2943C3.07023 10.9925 3.63624 11.5585 4.33445 11.5585C5.03266 11.5585 5.59866 10.9925 5.59866 10.2943C5.59866 9.94047 5.45312 9.62078 5.21886 9.3913H9.95169C9.71745 9.62078 9.57191 9.94047 9.57191 10.2943C9.57191 10.9925 10.1379 11.5585 10.8361 11.5585C11.5343 11.5585 12.1003 10.9925 12.1003 10.2943C12.1003 9.79378 11.8094 9.36123 11.3874 9.15641L11.512 8.60837C11.589 8.26934 11.3313 7.94649 10.9836 7.94649H4.92405L4.77629 7.22408H11.3941C11.6471 7.22408 11.8664 7.04903 11.9224 6.80235Z" fill="#262626" />
                                </svg>
                            </Flex>
                        </div>
                        <Flex className="mt-[15px]">
                            <div className=" text-[15px] font-bold text-black2">Basic Crew Neck Tee</div>
                            <div className="ml-[65px] text-[16px] font-medium text-shadowcolor">$44.00</div>
                        </Flex>
                        <div className="">
                            <h1 className='mt-[10px] text-[16px] font-medium text-shadowcolor'>Black</h1>
                        </div>
                    </div>
                    
                    



                </Flex>
    </Container>
    </>
  )
}

export default WatchPart
