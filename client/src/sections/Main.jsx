import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "./Background.jpg"; // Import your background image

const Main = () => {
  return (
    <div
      className="sm:h-[1024px] h-[800px] md:w-[1440px] mt-32 md:mt-0 flex flex-col md:flex-row justify-center items-center">
      <div className="w-[474px] h-[360px] flex flex-col mt-10 gap-[50px] mb-0 ml-20">
        <div className="w-full h-[256px] flex flex-col gap-[28px]">
          <div className="w-full h-[162px] flex flex-col justify-center gap-[40px]">
            <div className="font-bold text-[30px] ml-9 sm:ml-0 md:text-[40px] leading-[48px] text-black">
              Welcome To India’s First{" "}
              <span className="text-[#674A8E]">Creator’s Marketplace</span>
            </div>
            <div className="font-bold ml-10 sm:ml-0 text-[18px] md:text-[22px] leading-[26.4px] text-black">
              Create your first E-Store @ Zero Cost
            </div>
          </div>
          <div className="hidden md:h-[66px] font-[500px] leading-[21.6px] text-black md:text-[18px]">
            Empower your creativity with Createnary. Showcase, sell, and connect with a global audience effortlessly, turn your products into profits.
          </div>
        </div>
        <div className="flex justify-center items-center ml-28 sm:ml-0 w-[144px] h-[54px] rounded-[18px] py-[16px] px-[24px] text-white bg-[#4A508E] font-[600] text-[18px] leading-[21.6px] mt-0">
          <Link to='/secondPage'>Get Started</Link>
        </div>
      </div>

      <div className="w-full md:w-[630px] h-[630px] ml-[20px] md:ml-[200px] mt-10 md:mt-0 z-0">
        <img
          src="/src/public/assets/Mobile.jpg"
          alt="Mobile"
          className="w-[420px] h-[630px] drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Main;
