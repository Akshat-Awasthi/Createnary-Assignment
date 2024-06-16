import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import img from "../../public/assets/Link.jpg"

const Link = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full max-w-[1440px] mx-auto items-center h-auto max-h-[724px] mt-[-250px] p-10 md:p-[40px] bg-[#4A508E]">
        <div className="flex flex-col justify-center items-center w-full max-w-[1264px] h-full max-h-[644px] gap-[50px]">
          <div className="w-full max-w-[1264px] h-full flex flex-col justify-center items-center gap-[50px]">
            <div className="w-full max-w-[518px] flex flex-col gap-[15px] text-center md:text-left">
              <div className="text-[#F8F9FB] font-bold text-[30px] md:text-[40px] leading-[36px] md:leading-[48px]">
                Your audience wants links
              </div>
              <div className="font-[500] text-[#F8F9FB] text-[16px] md:text-[18px] leading-[19.2px] md:leading-[21.6px]">
                Make it easy for them by linking products to every post and video
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 md:gap-56">
              <div className="hidden md:flex justify-center md:justify-start">
                <MdOutlineArrowBackIos size={35} style={{ color: "white" }} />
              </div>
              <img
                src={img}
                className="w-full max-w-[720px] h-auto bg-transparent rounded-[35px] drop-shadow-lg"
                alt=""
              />
              <div className="hidden md:flex justify-center md:justify-end">
                <MdOutlineArrowForwardIos size={35} style={{ color: "white" }} />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-6">
            <div className="w-[139px] h-[54px] rounded-[18px] py-[16px] px-[24px] bg-[#F8F9FB]">
              <span className="text-[#11151D] text-[18px] font-medium">Try for Free</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Link;
