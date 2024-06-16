import React from 'react'
import Accordian from '../components/Accordian'


const AccordianSection = () => {
  
    const data=[
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
        {
            title:"How much does it cost to set up a store?",
            desc:"No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!"
        },
    ]
  
  
  
    return (
        <>
        
    <div className='flex flex-col justify-center items-center mt-16 gap-[32px] ml-[16px] sm:w-[730px] sm:h-[890px] sm:items-center sm:mx-auto'>
        <div className='w-[327px] h-[69px] md:w-[619px] md:h-[92px] flex flex-col sm:items-center gap-[16px] ml-[1px] sm:mx-auto'>
<div className='w-[258px] h-[19px] text-[16px] sm:w-[435px] md:w-[435px] md:h-[32px] font-bold sm:text-[27px] md:text-center text-[#11151D]'>FREQUENTLY ASKED QUESTION</div>
<div className='w-[261px] h-[34px] sm:w-[619px] sm:h-[44px] font-medium text-[14px] sm:text-[18px] sm:text-center'>
Quick answers to questions you may have. Can’t find what you're looking for ?  
<span className='text-[#4A508E] hidden sm:block'>
Check out our full documentation
</span>
</div>
        </div>
    <Accordian sections={data}/>

    </div>

        </>
  )
}

export default AccordianSection
