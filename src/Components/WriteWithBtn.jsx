import React from 'react'
import Lekhabor from './Lekhabor'
import Btn from './Btn'

const WriteWithBtn = ({className,writeDyn}) => {
    return (
        <>
            <div className={`${className} ml-[60px]  pb-[100px] absolute`}>
                <h1 className={`${className}`}>{writeDyn}</h1>
                <Lekhabor className="  font-normal text-[16px]" writepart={"sale for all phones!"}/>
                <Btn className="bg-black  py-[15px] text-[14px] px-[35px] mt-[40px] text-white " btnText={"shop Now"} />



            </div>
        </>
    )
}

export default WriteWithBtn
