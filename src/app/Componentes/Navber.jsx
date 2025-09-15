"use client";
import React from 'react'
import { IoSparkles } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
export default function Navber() {
    return (
        <div className=" text-white text-center pt-6 pb-20 bg-[radial-gradient(ellipse_80%_80%_at_top,_#0f3d2e_0%,_#0a1a12_40%,_#121a14_100%)]">
            <img className='mx-auto' src="Image/white-Logos.png" alt="" />
            <p className='text-xs sm:text-sm flex justify-center items-center mt-16 border-t-2 border-[#1FFFA5] py-2 px-4 bg-black rounded-full mx-[50px] lg:mx-[540px] md:mx-[170px]'>
                <span className='text-[#1FFFA5]'>
                    <IoSparkles />
                </span>
                Trusted by 30+ startups & entrepreneurs worldwide
            </p>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold mt-10 mb-5'>Strategic Landing Pages That <br /> Convert From Just <span className='text-[#1FFFA5]'>$200</span></h2>
            <p className='text-sm  text-gray-300'>Stop wasting traffic on generic pages. We deliver premium, conversion <br className=' hidden md:inline lg:hidden' />-focused landing pages designed, developed, <br className=' hidden lg:inline' /> and launched in just 5 days.</p>
            <div className='border-[#2A3C36]  shadow-[0_0_50px_0_#182e1e]  rounded-lg p-6 border mx-[20px] md:mx-[120px] lg:mx-[470px] mt-10'>
                <div className='sm:flex justify-center gap-3'>
                    <p className= 'mb-3 w-full flex justify-center items-center gap-2 border-2 text-xs border-[#2A3C36] py-2 text-gray-500 font-semibold rounded-sm'><span className='text-[#1FFFA5]'><IoPerson /></span> Your name</p>
                    <p className= 'mb-3 w-full flex justify-center items-center gap-2 border-2 text-xs border-[#2A3C36] py-2 text-gray-500 font-semibold rounded-sm'><span className='text-[#1FFFA5]'><MdMailOutline /></span> Email Address</p>
                    <p className= 'mb-3 w-full flex justify-center items-center gap-2 border-2 text-xs border-[#2A3C36] py-2 text-gray-500 font-semibold rounded-sm'><span className='text-[#1FFFA5]'><FaPhoneAlt /></span> Phone Number</p>
                </div>
                <button className='bg-[#1FFFA5] w-full py-2 text-black rounded-sm font-semibold flex items-center gap-2 justify-center'>Get my high-converting landing page <FaArrowRightLong /></button>
            </div>
            <div className='flex justify-between mx-6 md:mx-40 lg:mx-[495px] flex-wrap gap-7 mt-2 text-xs'>
                <p className='text-gray-500 font-semibold flex justify-center items-center gap-1'><MdLockOutline /> SSL secure</p>
                <p className='text-gray-500 font-semibold flex justify-center items-center gap-1'><FaCheck /> Money-back guaranteed</p>
                <p className='text-gray-500 font-semibold flex justify-center items-center gap-1'><IoIosStar /> Satisfaction guaranteed</p>
            </div>
        </div>
    )
}
