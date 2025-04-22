import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import OREBi from '../assets/OREBI©.png'


const Footer = () => {
    return (
        <>
            <div className="py-[50px] w-[100%] bg-footercolor">
                <Container>
                    <Flex className="">
                        <div className="w-[20%]">
                            <h1 className='font-bold text-[16px] text-black2 opacity-100 uppercase'>Menu</h1>
                            <ul className="mt-[15px]">
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Home</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Shop</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">About</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Contact</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Jurnal</li>

                            </ul>
                        </div>
                        <div className="w-[20%]">
                            <h1 className='font-bold text-[16px] text-black2 opacity-100 uppercase'>Menu</h1>
                            <ul className="mt-[15px]">
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Home</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Shop</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">About</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Contact</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Jurnal</li>

                            </ul>
                        </div>
                        <div className="w-[20%]">
                            <h1 className='font-bold text-[16px] text-black2 opacity-100 uppercase'>Menu</h1>
                            <ul className="mt-[15px]">
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Home</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Shop</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">About</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Contact</li>
                                <li className="font-normal text-[14px] mb-[5px] text-black2">Jurnal</li>

                            </ul>
                        </div>
                        <div className="w-30%">
                            <h1 className='font-bold text-[16px] text-black2 opacity-100'>(052) 611-5711</h1>
                            <p className='font-bold text-[16px] text-black2 opacity-100'>company@domain.com</p>
                            <h5 className='font-bold text-[14px] text-shadowcolor mt-[10px] opacity-100'>575 Crescent Ave. Quakertown, PA 18951</h5>
                        </div>
                        <div className="w-[10%]">
                            <img src={OREBi} alt="" className="ml-[80px]" />
                        </div>
                    </Flex>
                    <Flex className="justify-between">
                        <Flex className="mt-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-[15px]' width="9" height="16" viewBox="0 0 9 16" fill="none">
                                <path d="M2.39687 16V8.84375H0V6H2.39687V3.75938C2.39687 1.325 3.88438 0 6.05625 0C7.09688 0 7.99062 0.078125 8.25 0.1125V2.65625H6.74375C5.5625 2.65625 5.33437 3.21875 5.33437 4.04063V6H8L7.63438 8.84375H5.33437V16" fill="#262626" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='mr-[15px]' width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92143 3.86071C0.860714 3.86071 0 2.98214 0 1.92143C0 0.860714 0.860714 0 1.92143 0C2.98214 0 3.84286 0.860714 3.84286 1.92143C3.84286 2.98214 2.98214 3.86071 1.92143 3.86071ZM3.58214 16H0.264286V5.31786H3.58214V16ZM12.6893 16H16H16.0036V10.1321C16.0036 7.26071 15.3857 5.05 12.0286 5.05C10.4143 5.05 9.33214 5.93571 8.88929 6.775H8.84286V5.31786H5.66071V16H8.975V10.7107C8.975 9.31786 9.23929 7.97143 10.9643 7.97143C12.6643 7.97143 12.6893 9.56071 12.6893 10.8V16Z" fill="#262626" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9171 4.6922C15.8566 3.41292 15.5644 2.27973 14.6272 1.3461C13.6935 0.412472 12.5604 0.120267 11.2811 0.0561247C9.96258 -0.0187082 6.01069 -0.0187082 4.6922 0.0561247C3.41648 0.116704 2.2833 0.408909 1.3461 1.34254C0.408909 2.27617 0.120267 3.40935 0.0561247 4.68864C-0.0187082 6.00713 -0.0187082 9.95902 0.0561247 11.2775C0.116704 12.5568 0.408909 13.69 1.3461 14.6236C2.2833 15.5572 3.41292 15.8494 4.6922 15.9136C6.01069 15.9884 9.96258 15.9884 11.2811 15.9136C12.5604 15.853 13.6935 15.5608 14.6272 14.6236C15.5608 13.69 15.853 12.5568 15.9171 11.2775C15.992 9.95902 15.992 6.01069 15.9171 4.6922ZM12.2503 4.67795C12.7777 4.67795 13.2053 4.2539 13.2053 3.72294C13.2053 3.19555 12.7777 2.76793 12.2503 2.76793C11.7229 2.76793 11.2953 3.19555 11.2953 3.72294C11.2953 4.25033 11.7194 4.67795 12.2503 4.67795ZM7.98842 3.89042C5.72205 3.89042 3.89399 5.71848 3.89399 7.98485C3.89399 10.2512 5.72205 12.0793 7.98842 12.0793C10.2548 12.0793 12.0829 10.2512 12.0829 7.98485C12.0829 5.71848 10.2548 3.89042 7.98842 3.89042ZM7.98842 10.6468C6.52383 10.6468 5.3265 9.45301 5.3265 7.98486C5.3265 6.5167 6.52027 5.32294 7.98842 5.32294C9.45657 5.32294 10.6503 6.5167 10.6503 7.98486C10.6503 9.45301 9.45301 10.6468 7.98842 10.6468ZM12.6958 14.2102C13.3978 13.9287 13.9359 13.3906 14.2138 12.6922C14.5714 11.7936 14.5515 9.828 14.5386 8.55383C14.5365 8.34247 14.5345 8.15014 14.5345 7.98486C14.5345 7.81954 14.5365 7.62724 14.5386 7.41595C14.5515 6.14245 14.5714 4.17914 14.2138 3.27751C13.9323 2.5755 13.3942 2.03742 12.6958 1.75947C11.7943 1.4038 9.81921 1.42275 8.54541 1.43497C8.33876 1.43695 8.15057 1.43875 7.98842 1.43875C7.82311 1.43875 7.63081 1.4368 7.41952 1.43466C6.14602 1.42176 4.1827 1.40187 3.28107 1.75947C2.57906 2.04098 2.04098 2.57906 1.76303 3.27751C1.40736 4.17893 1.42631 6.15406 1.43853 7.42787C1.44051 7.63451 1.44232 7.8227 1.44232 7.98486C1.44232 8.15017 1.44037 8.34247 1.43823 8.55376C1.42532 9.82725 1.40543 11.7906 1.76303 12.6922C2.04454 13.3942 2.58263 13.9323 3.28107 14.2102C4.1825 14.5659 6.15763 14.547 7.43144 14.5347C7.63808 14.5328 7.82627 14.531 7.98842 14.531C8.15373 14.531 8.34603 14.5329 8.55732 14.535C9.83082 14.548 11.7941 14.5678 12.6958 14.2102Z" fill="#262626" />
                            </svg>
                        </Flex>
                        <h1 className='font-medium text-[16px] text-shadowcolor mt-[50px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h1>

                    </Flex>


                </Container>
            </div>
        </>
    )
}

export default Footer
