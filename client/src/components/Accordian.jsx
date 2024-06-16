import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const Accordian = ({ sections }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    console.log('button clicked')
    setOpenIndex(openIndex === index ? null : index);
  };

  return sections.map((item, index) => (
    <div key={index} className={`w-[328px] ${
        openIndex === index
      ? "h-[184px]" :"h-[62px]"}  md:w-[730px] p-[16px] md:px-[20px] md:py-[14px] md:h-[115px]  bg-[#D6D6D6] flex flex-col gap-[16px] md:gap-[14px] justify-center rounded-[16px]`}>
      <div
        className={`w-[730px] flex gap-[20px] items-center `}
      >
        <div className="w-[248px] h-[34px]  md:w-[650px] md:h-[20px] font-semibold text-[16px] ">
      {item.title}
        </div>
        <div
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => toggleSection(index)}
        >
          {
            openIndex === index ?
            <FaMinus/>
           
            :<FaPlus/>
            }
        </div>
      </div>
 
   {  
   openIndex ===index && 
   <>
   <hr className="mx-auto w-[690px] h-[1px] opacity-[8%] border-[#11151D]"/>

      <div className="mx-auto w-[295px] md:w-[690px] h-[85px] md:h-[38px] font-medium text-[16px] leading-[19.2px]">
{item.desc}
      </div>
   </>
       }
    </div>
  ));
};

export default Accordian;
