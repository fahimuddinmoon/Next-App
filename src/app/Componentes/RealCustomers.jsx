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
import { motion } from 'framer-motion';
export default function RealCustomers() {
    return (
        <div className="relative py-12 bg-[#0b0e0b] text-center text-white">

            {/* Left glow */}
            <div className="absolute inset-y-0 left-0  md:w-1/3 lg:w-1/4  bg-[radial-gradient(circle_at_left,_#0a261e,_transparent_70%)]"></div>
            {/* Right glow */}
            <div className="absolute inset-y-0 right-0  md:w-1/3 lg:w-1/4   bg-[radial-gradient(circle_at_right,_#0a261e,_transparent_70%)]"></div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold mt-10 mb-5'>Ready to Turn Visitors Into  <br />  <span className='text-[#1FFFA5]'>Real Customers?</span>
                </h2>
                <p className='text-sm  text-gray-300'>Don't settle for an average page. Get a premium, conversion-focused <br className=' hidden sm:inline ' /> landing page that pays for itself.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='border-[#2A3C36]  bg-[#192420]  rounded-lg p-6 border mx-[20px] md:mx-[120px] lg:mx-[470px] mt-10'>
                <div className='sm:flex justify-center gap-3'>
                    <p className='mb-3 w-full flex justify-center items-center gap-2 border-2 text-xs border-[#2A3C36] py-2 text-gray-500 font-semibold rounded-sm'><span className='text-[#1FFFA5]'><IoPerson /></span> Your name</p>
                    <p className='mb-3 w-full flex justify-center items-center gap-2 border-2 text-xs border-[#2A3C36] py-2 text-gray-500 font-semibold rounded-sm'><span className='text-[#1FFFA5]'><MdMailOutline /></span> Email Address</p>
                    <p className='mb-3 w-full flex justify-center items-center gap-2 border-2 text-xs border-[#2A3C36] py-2 text-gray-500 font-semibold rounded-sm'><span className='text-[#1FFFA5]'><FaPhoneAlt /></span> Phone Number</p>
                </div>
                <button className='bg-[#1FFFA5] w-full py-2 text-black rounded-sm font-semibold flex items-center gap-2 justify-center'>Get my high-converting landing page <FaArrowRightLong /></button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='flex justify-between mx-6 md:mx-40 lg:mx-[495px] flex-wrap gap-7 mt-2 pb-12 text-xs'>
                <p className='text-gray-500 font-semibold flex justify-center items-center gap-1'><MdLockOutline /> SSL secure</p>
                <p className='text-gray-500 font-semibold flex justify-center items-center gap-1'><FaCheck /> Money-back guaranteed</p>
                <p className='text-gray-500 font-semibold flex justify-center items-center gap-1'><IoIosStar /> Satisfaction guaranteed</p>
            </motion.div>

        </div>
    )
}
