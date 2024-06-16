import { useState } from "react";
import Rectangle from "../../public/assets/Rectangle.svg";

const Earning = () => {
  const [followers, setFollowers] = useState(1000);
  const [products, setProducts] = useState(1);
  const [monthly, setMonthly] = useState(0);

  const handleFollowerChange = (e) => {
    setFollowers(e.target.value);
  };
  const handleProductChange = (e) => {
    setProducts(e.target.value);
  };

  const handleCalculate = async () => {
    const response = await fetch("http://localhost:3000/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ followers, products }),
    });
    const res = await response.json();
    setMonthly(res.data);
    console.log(res.data);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ml-8 mt-[5rem] p-4 md:p-0">
        <div className="w-full max-w-[441px] h-[32px] text-center leading-[32.4px] text-[27px] font-bold">
          ESTIMATE EARNING POTENTIAL
        </div>
        <div className="w-full max-w-[866px] h-auto flex flex-col gap-[50px] mt-12">
          <div className="flex flex-col md:flex-row gap-[120px]">
            <div className="w-full max-w-[572px] h-auto">
              <div className="w-full max-w-[349.09px] h-[22px] font-medium text-[18px]">
                What kind of influencer are you?
              </div>
              <input
                type="text"
                placeholder="Select type"
                className="w-full h-[43px] pl-3 rounded-[8.87px] border-[1.11px] mt-3 border-[#DDDCE0]"
              />
              <div className="mt-4 font-medium text-[18px] w-full max-w-[370.1px] h-[22px]">
                How many followers do you have?
              </div>
              <input
                type="range"
                min={10}
                max={500}
                defaultValue={10}
                step={10}
                value={followers}
                className="mt-9 w-full h-[10px] bg-gray-300 rounded-full appearance-none"
                onChange={handleFollowerChange}
                style={{
                  backgroundImage: `linear-gradient(to right, #4A508E 0%, #4A508E ${
                    ((followers - 10) / (500 - 10)) * 100
                  }%, #CCCCCC ${((followers - 10) / (500 - 10)) * 100}%, #CCCCCC 100%)`,
                }}
              />
              <style jsx>
                {`
                  input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: url(${Rectangle});
                    background-size: cover;
                    cursor: pointer;
                  }
                `}
              </style>
              <div className="w-[72px] mx-auto mt-3 h-[41px] rounded-[15px] border-b-2 border-[#4A508E] text-center font-medium">
                {followers}K
              </div>
              <div className="mt-4 font-medium text-[18px] w-full max-w-[370.1px] h-[22px]">
                How many products do you sell per month?
              </div>
              <input
                type="range"
                min={1}
                max={100}
                defaultValue={1}
                value={products}
                className="mt-9 w-full h-[10px] bg-gray-300 rounded-full appearance-none"
                onChange={handleProductChange}
                style={{
                  backgroundImage: `linear-gradient(to right, #4A508E 0%, #4A508E ${products}%, #CCCCCC ${products}%, #CCCCCC 100%)`,
                }}
              />
              <style jsx>
                {`
                  input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: url(${Rectangle});
                    background-size: cover;
                    cursor: pointer;
                  }
                `}
              </style>
              <div className="w-[72px] mx-auto mt-3 h-[41px] rounded-[15px] border-b-2 border-[#4A508E] text-center font-medium">
                {products}
              </div>
            </div>
            <div className="w-full max-w-[174px] h-auto  flex flex-row justify-center items-center md:flex-col gap-[81px] mx-auto md:mx-0">
              <div className="w-full text-center font-bold text-[22px]">
                Monthly Earning
                <div className="font-bold text-[#4A508E] text-[40px]">
                  ₹{monthly.toLocaleString("en-IN")}
                </div>
              </div>
              <div className="w-full text-center font-bold text-[22px]">
                Yearly Earning
                <div className="font-bold text-[#4A508E] text-[40px]">
                  ₹{(monthly * 12).toLocaleString("en-IN")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="mt-6 w-[125px] h-[54px] rounded-[18px] text-white bg-[#4A508E] font-semibold text-[18px]"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
    </>
  );
};

export default Earning;
