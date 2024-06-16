import React from 'react'
import logo from '../../public/assets/Createnary.svg'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
    let Navigation =[
        {name : 'About Createnary' ,link :'/'},
        {name : 'Contact Us' ,link :'/'},
        {name : 'Refund' ,link :'/'},
        {name : 'Newsletter' ,link :'/'},
        {name : 'Terms & Conditions' ,link :'/'},
        {name : 'Privacy & Policy' ,link :'/'},
    ]
    let Contacts =[
        {name : 'Delhi, India' ,link :'/'},
        {name : '+91 98765 43210' ,link :'/'},
        {name : '+91 99999 99999' ,link :'/'},
    ]
  return (
    <div className=' flex flex-col w-full bg-[#4A508E] mt-14'>
        <div className='flex flex-col md:flex-row'>
            <div className='ml-4 mb-3 md:w-2/5 md:flex md:align-center md:justify-center'><div className='mt-10 md:mt-32'><img src={logo} alt="logo" /></div></div>
            <div className='m-5 md:m-8 text-white text-sm'>
                <h3 className='font-semibold mb-3'>Navigation</h3>
                <ul>
                    {
                        Navigation.map(links => 
                            <li className='mb-3' key={links.name}><a href="/">{links.name}</a></li>
                            )
                    }
                </ul>
            </div>
            <div className='m-5 md:m-8 md:ml-32 text-white text-sm'>
                <h3 className='font-semibold mb-3'>Contacts</h3>
                <div className='flex flex-row'>
                    <div className='mt-[1px] mr-3 space-y-12'>
                    <CiLocationOn size={17} />
                    <FiPhone />
                    </div>

                <ul>
                    {
                        Contacts.map(link => <li className='mb-3' key={link.name}><a href="/">{link.name}</a></li>)
                    }
                </ul>
                </div>
                
            </div>
        </div>
        <div className='h-12 flex justify-center border-t border-gray-400'>
            <p className='text-white text-sm mt-3'>© Createnary 2024</p>
        </div>
    </div>
  )
}

export default Footer