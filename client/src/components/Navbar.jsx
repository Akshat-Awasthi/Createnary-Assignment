import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiHeadsetBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const OpenMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='flex bg-white justify-center m-0'>
            <div className='flex flex-col  md:flex-row md:h-16  bg-[#D6D6D6] p-4  mt-2 mb-2 rounded-[25px] w-4/6 justify-between '>
                <div className='flex flex-row'>
                    <div className='mt-1 ml-3 flex-1'><h2 className='font-bold'>Createnary</h2></div>
                    <div className='mt-1 mr-3 ml-4 display-div hide-div ' onClick={OpenMenu}><IoMdMenu size={25} /></div>
                </div>
                
                <div className='pb-5 mt-5 md:mt-0'>
                    <input
                        type="text"
                        placeholder="Search Creators"
                        className="w-full md:w-52 text-sm text-black pl-8 px-4 py-2 border border-white rounded-full placeholder-black placeholder:text-sm placeholder:font-light focus:outline-none focus:border-black focus:shadow-outline transition duration-300"
                    />
                    <IoSearch className="absolute top-[84px] md:top-9 ml-3"/>
                </div>
                <div className='hidden-div'>
                    <div className={` md:flex md:flex-row md:space-x-7 md:mt-2 md:text-sm md:font-light ${menuOpen ? '' : 'hidden'}`}>
                        <div className='flex flex-row space-x-2'><CiShoppingCart size={17} style={{ fontWeight:'10px' }}/><h3>Cart</h3></div>
                        <div className='flex flex-row space-x-2'><IoInformationCircleOutline size={17} style={{ marginTop: '2px' }}/><h3>About</h3></div>
                        <div className='flex flex-row space-x-2'><PiHeadsetBold style={{ marginTop: '2px' }}/><h3>Contact</h3></div>
                    </div>
                </div>
                
                <div className={`hidden-div md:mb-1 md:mr-12`}>
                    <select
                        name="Select"
                        id="auth"
                        className="
                            w-24 h-8 mt-1 mb-1 pl-3 border border-black rounded-lg text-black text-sm
                            appearance-none bg-right bg-no-repeat pr-8 bg-[#D6D6D6] font-light
                            focus:outline-none">
                        <option value="login">Login</option>
                        <option value="signin">SignIn</option>
                    </select>
                    <MdKeyboardArrowDown
                        className="absolute top-9 ml-16 text-black"
                        size={17}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;