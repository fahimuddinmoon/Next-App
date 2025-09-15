"use client";
import React from 'react'
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from 'react-icons/fa6';
import { CiLinkedin } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { PiInstagramLogoBold } from "react-icons/pi";
export default function Footer() {
  return (
    <div className='bg-[#1FFFA5] flex justify-between items-center md:px-5 lg:px-24 py-14 flex-wrap px-5 sm:px-0'>
        <img className='text-black' src="/Image/Logo.png" alt="" />
        <p className='text-xs'>© All rights reserved to <br className='inline sm:hidden' /> Ena Ema Technologies</p>
        <div className='flex justify-center items-center gap-4 ml-56 sm:ml-0 mt-5 sm:mt-0'>
            <p className='text-xl sm:text-3xl '><CiLinkedin /></p>
            <p className='text-xl sm:text-3xl '><LiaFacebookSquare /></p>
            <p className='text-xl sm:text-3xl '><PiInstagramLogoBold /></p>
            <p className='text-xl sm:text-3xl '><FaBehance /></p>
            <p className='text-xl sm:text-3xl '><FaDribbble /></p>
        </div>
    </div>
  )
}
