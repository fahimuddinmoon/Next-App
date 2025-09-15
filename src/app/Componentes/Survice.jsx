"use client";
import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion';
export default function Survice() {
    const [randomX, setRandomX] = useState(0);
    const [randomY, setRandomY] = useState(0);

    useEffect(() => {
        setRandomX(Math.random() * 200 - 100);
        setRandomY(Math.random() * 200 - 100);
    }, []);

    return (
        <div className=' bg-[#121a14]'>
            <div className='mx-5 md:w-10/12 lg:w-9/12 sm:mx-auto pb-16'>
                <motion.h3
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl font-semibold text-center text-white pt-8'>Why Businesses <br className=' sm:hidden inline' /> <span className='text-[#1FFFA5]'>Trust Us</span> <br className=' hidden md:inline lg:hidden' /> With  Their Designs
                </ motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }} className='text-xs  text-center text-white mt-2 mb-12'>We combine proven conversion frameworks with <br className=' sm:hidden inline' /> agency-level design to <br className=' hidden sm:inline' />  deliver results that matter.</motion.p>
                <div className='mt-7 sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-7 text-white'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: randomX,
                            y: randomY,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                duration: 0.7,
                                ease: "easeOut",
                            },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='bg-[#192420] mb-3 sm:mb-0 rounded-lg p-6'>
                        <img className='mb-7' src="Image/RocketLaunch.png" alt="" />
                        <p>Proven Conversion Framework</p>
                        <p className='text-xs text-gray-500 mt-2'>Designs based on 100+ tested layouts that actually convert visitors into customers.</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: randomX,
                            y: randomY,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                duration: 0.7,
                                ease: "easeOut",
                            },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='bg-[#192420] mb-3 sm:mb-0 rounded-lg p-6'>
                        <img className='mb-7' src="Image/Palette.png" alt="" />
                        <p>Agency Level Design</p>
                        <p className='text-xs text-gray-500 mt-2'>Modern, premium, and tailored for your brand - without the agency price tag.</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: randomX,
                            y: randomY,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                duration: 0.7,
                                ease: "easeOut",
                            },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='bg-[#192420] mb-3 sm:mb-0 rounded-lg p-6'>
                        <img className='mb-7' src="Image/Lightning (1).png" alt="" />
                        <p>5-day Guaranteed Delivery</p>
                        <p className='text-xs text-gray-500 mt-2'>With a highly professional team, we deliver on time, everytime.</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: randomX,
                            y: randomY,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                duration: 0.7,
                                ease: "easeOut",
                            },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='bg-[#192420] mb-3 sm:mb-0 rounded-lg p-6'>
                        <img className='mb-7' src="Image/CurrencyDollar.png" alt="" />
                        <p>Transparent Pricing</p>
                        <p className='text-xs text-gray-500 mt-2'>No hidden fees, just clear value. What you see is what you pay.</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: randomX,
                            y: randomY,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                duration: 0.7,
                                ease: "easeOut",
                            },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='bg-[#192420] mb-3 sm:mb-0 rounded-lg p-6'>
                        <img className='mb-7' src="Image/ArrowsClockwise.png" alt="" />
                        <p>Revisions Until You're Happy</p>
                        <p className='text-xs text-gray-500 mt-2'>We keep working until it's right. Your satisfaction is guaranteed.</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: randomX,
                            y: randomY,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                duration: 0.7,
                                ease: "easeOut",
                            },
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='bg-[#192420] mb-3 sm:mb-0 rounded-lg p-6'>
                        <img className='mb-7' src="Image/Trophy.png" alt="" />
                        <p>Results That Speak</p>
                        <p className='text-xs text-gray-500 mt-2'>Our pages consistently outperform industry averages for conversions.</p>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}
