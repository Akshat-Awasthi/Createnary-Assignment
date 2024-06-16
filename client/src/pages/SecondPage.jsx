import React from 'react';
import Share from '../../public/assets/Share.jpg';


const SecondPage = () => {
  return (
    <div>
        <div className='ml-[8px]  flex flex-col md:flex-row justify-between md:mt-36 md:px-[180px]'>

      <div className='md:w-[450px] md:h-[600px] flex flex-col gap-[10px] py-[180px]'>
       
       <div className='flex flex-col gap-[50px]'>
        <div className='flex flex-col gap-[28px]'>
        <h2 className='w-[343px] font-bold text-[20px] sm:text-[27px] font-sans'>GetSetYo handholds you at every step of the way</h2>
        <p className='w-[274px] font-medium text-[14px] sm:text-[18px]'>You focus on helping your friends and family, we take care of everything else.</p>
        </div>
        <button
          type='submit'
          className='text-md w-[126px] h-[43px] text-[16px] md:h-[54px] md:w-[144px] font-semibold text-white bg-[#4A508E] border border-transparent px-[20px] py-[12px] rounded-2xl hover:bg-white hover:text-[#4A508E] hover:border-[#4A508E] transition duration-300 ease-in-out'>
          Get Started 
        </button>
            </div>
      </div>
 
      <div className='flex gap-[50px] w-[630px] '>
      <div className='flex flex-col md:h-[1948px] '>

                <div className=''>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>1</h1></div>
                    <div className="h-[340px] md:h-[495px] border-r border-gray-300 mr-5"></div>
                </div>
                  <div className=''>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>2</h1></div>
                    <div className="h-[335px] md:h-[495px] border-r border-gray-300 mr-5"></div>
                </div>
                <div className=' '>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>3</h1></div>
                    <div className="h-[335px] md:h-[495px] border-r border-gray-300 mr-5"></div>
                </div>
                <div className=''>
                    <div className='w-10 h-10 bg-[#4A508E] rounded-md'><h1 className=' flex justify-center align-center pt-1 text-2xl text-white'>4</h1></div>
                    <div className="h-[250px] border-r border-gray-300 mr-5"></div>
                </div>
            
        </div>

      <div className=' md:h-[1975px] md:w-[520px] flex flex-col gap-[120px] '>

        <div className='w-[283px] h-[250.8px]  md:w-[520px] md:h-[403px] flex flex-col gap-[24px] '>
          <h2 className='font-bold text-[18px] sm:text-[22px] '>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 font-medium text-[14px] sm:text-[16px] '>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img className='w-[226.4px] h-[133.6px] md:w-[520px] md:h-[264px]' src={Share} alt='' />
        </div>

        <div className='w-[283px] h-[250.8px]  md:w-[520px] md:h-[403px] flex flex-col gap-[24px] '>
          <h2 className='font-bold text-[18px] sm:text-[22px] '>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 font-medium text-[14px] sm:text-[16px] '>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img className='w-[226.4px] h-[133.6px] md:w-[520px] md:h-[264px]' src={Share} alt='' />
        </div>

        
        <div className='w-[283px] h-[250.8px]  md:w-[520px] md:h-[403px] flex flex-col gap-[24px] '>
          <h2 className='font-bold text-[18px] sm:text-[22px] '>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 font-medium text-[14px] sm:text-[16px] '>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img className='w-[226.4px] h-[133.6px] md:w-[520px] md:h-[264px]' src={Share} alt='' />
        </div>

        
        <div className='w-[283px] h-[250.8px]  md:w-[520px] md:h-[403px] flex flex-col gap-[24px] '>
          <h2 className='font-bold text-[18px] sm:text-[22px] '>Share the holidays, stays and experiences with your friends and family</h2>
          <p className='mb-2 font-medium text-[14px] sm:text-[16px] '>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</p>
          <img className='w-[226.4px] h-[133.6px] md:w-[520px] md:h-[264px]' src={Share} alt='' />
        </div>

      </div>
      </div>
      
      
    </div>
   
    </div>
    
  );
};

export default SecondPage;