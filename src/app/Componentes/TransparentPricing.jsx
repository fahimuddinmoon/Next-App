"use client";
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';
export default function TransparentPricing() {
    return (
        <div className='bg-[#0A0F0D]'>
            <div
                className='py-12 mx-5 md:w-10/12 lg:w-9/12 sm:mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className='text-3xl font-semibold text-white'>Simple, Transparent Pricing — <span className='text-[#1FFFA5]'>Choose Your Plan</span></h3>
                    <p className='text-xs  text-gray-500 mt-5'>No hidden fees, no surprises. Just premium landing pages at unbeatable prices.</p>
                </motion.div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-3 h-full text-white mt-10'>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className='mb-4 lg:my-0 rounded-lg w-full h-full p-6 bg-[#192420] flex flex-col justify-between'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <p className='text-lg font-semibold pb-1'>Basic</p>
                                <p className='text-sm text-gray-300'>Perfect for solopreneurs</p>
                            </div>
                            <p className='text-lg font-semibold text-[#1FFFA5] pb-1'>$200</p>
                        </div>
                        <hr className='border border-[#2A3C36] my-8' />
                        <ul className='list-disc list-inside marker:text-[#1FFFA5] text-gray-400 text-xs font-semibold leading-6'>
                            <li>1 Landing Page (Design + Development)</li>
                            <li>Hosting Deployment</li>
                            <li>5-Day Delivery</li>
                            <li>Basic Support</li>
                        </ul>
                        <button className='flex justify-center text-sm items-center gap-2 w-full bg-[#003D25] text-[#00E58A] mt-8 py-2 rounded-lg'>Start my project <FaArrowRightLong /></button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className='mb-4 lg:my-0 rounded-lg w-full   p-6 bg-[#192420] border-2 border-[#1FFFA5] relative flex flex-col justify-between'>
                        <p className='border-2 border-[#1FFFA5] text-[#1FFFA5] rounded-full px-3 py-1 -top-[19px] z-10 bg-[#151E1B] absolute'>Most popular</p>
                        <div className='flex justify-between items-start'>
                            <div>
                                <p className='text-lg font-semibold pb-1'>Standard</p>
                                <p className='text-sm text-gray-300'>Best balance of value & features</p>
                            </div>
                            <p className='text-lg font-semibold text-[#1FFFA5] pb-1'>$300</p>
                        </div>
                        <hr className='border border-[#2A3C36] my-8' />
                        <ul className='list-disc list-inside marker:text-[#1FFFA5] text-gray-400 text-xs font-semibold leading-6'>
                            <li>Everything in Basic</li>
                            <li>Extra Custom Section</li>
                            <li>Free Hosting Setup</li>
                            <li>Free Consultation Call</li>
                            <li>Priority Support</li>
                        </ul>
                        <button className='flex justify-center text-sm items-center gap-2 w-full bg-[#1FFFA5] text-black mt-8 py-2 rounded-lg'>Start my project <FaArrowRightLong /></button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className='mb-4 lg:my-0 rounded-lg w-full   p-6 bg-[#192420] flex flex-col justify-between'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <p className='text-lg font-semibold pb-1'>Premium</p>
                                <p className='text-sm text-gray-300'>For brands & agencies</p>
                            </div>
                            <p className='text-lg font-semibold text-[#1FFFA5] pb-1'>$500</p>
                        </div>
                        <hr className='border border-[#2A3C36] my-8' />
                        <ul className='list-disc list-inside marker:text-[#1FFFA5] text-gray-400 text-xs font-semibold leading-6'>
                            <li>Everything in Standard</li>
                            <li>Advanced Animations</li>
                            <li>Priority Delivery (3 Days)</li>
                            <li>6 Months Free Support</li>
                            <li>Performance Optimization</li>
                        </ul>
                        <button className='flex justify-center text-sm items-center gap-2 w-full bg-[#003D25] text-[#00E58A] mt-8 py-2 rounded-lg'>Start my project <FaArrowRightLong /></button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='flex items-center mt-7 gap-7' >
                    <img src="Image/Lightning (1).png" alt="" />
                    <div>
                        <p className='text-lg font-semibold text-white mb-1'>Limited Availability</p>
                        <p className='text-xs  text-gray-400'>We only onboard 5 new clients per month. 2 spots left for this month — secure yours today.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='text-center p-5 rounded-lg bg-[#192420] mt-9 text-white'>
                    <h3 className='text-4xl font-semibold my-5 pt-4'>Special Offer For Early Clients</h3>
                    <p className='text-sm mb-5 text-gray-400'>Get 10% OFF + Free Hosting Setup when you book this week.</p>
                    <button className='flex justify-center text-sm items-center gap-2 mx-auto bg-[#1FFFA5] text-black mt-10 mb-5 px-7 py-3 rounded-lg'>Claim my 10% discount <FaArrowRightLong /></button>
                </motion.div>
            </div>
        </div>
    )
}
