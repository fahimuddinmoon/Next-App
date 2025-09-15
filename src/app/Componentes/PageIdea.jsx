"use client";
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
export default function PageIdea() {
    const [randomX, setRandomX] = useState(0);
    const [randomY, setRandomY] = useState(0);

    useEffect(() => {
        setRandomX(Math.random() * 200 - 100);
        setRandomY(Math.random() * 200 - 100);
    }, []);
    return (
        <div className='relative pt-12  bg-[#0e140e] text-center text-white'>
            <div className='mx-5 md:w-7/12 lg:w-8/12 sm:mx-auto pb-8'>
                <div className=' absolute inset-y-0 -top-28 left-0 w-1/2 bg-[radial-gradient(circle_at_30%_center,_#0a261e,_transparent_50%)]'>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className='text-4xl font-semibold mt-12'>From Idea to Live Landing Page in <span className='text-[#1FFFA5]'> Just 5 Days</span></h3>
                    <p className='text-xs  text-gray-500 mt-5'>Our streamlined process ensures fast delivery without compromising quality.</p>
                </motion.div>
                <div className='lg:grid lg:grid-cols-3 gap-4 mt-10'>
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
                        className='bg-[#192420] relative mb-3 my-5 lg:my-0 sm:mb-0 rounded-lg px-12 py-14'>
                        <p className='border-2 border-[#1FFFA5] text-[#1FFFA5] rounded-full px-3 -top-[10px] right-40 md:right-48 lg:right-32 z-10 bg-[#151E1B] absolute text-xs'>Day 1</p>
                        <img className='p-3 rounded-full bg-[#003D25] w-20 mb-7 mx-auto' src="Image/User.png" alt="" />
                        <h4 className='text-lg mt-8'>Book Your Project</h4>
                        <p className='text-xs text-gray-500 mt-2'>Fill out a short form and we'll get <br /> started immediately.</p>
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
                        className='bg-[#192420] relative mb-3 my-5 lg:my-0 sm:mb-0 rounded-lg px-12 py-14'>
                        <p className='border-2 border-[#1FFFA5] text-[#1FFFA5] rounded-full px-3 -top-[10px] right-40 md:right-48 lg:right-32 z-10 bg-[#151E1B] absolute text-xs'>Day 2 - 4</p>
                        <img className='p-3 rounded-full bg-[#003D25] w-20 mb-7 mx-auto' src="Image/Palette.png" alt="" />
                        <h4 className='text-lg mt-8'>Design & Development</h4>
                        <p className='text-xs text-gray-500 mt-2'>Unlimited revisions until perfect. <br /> You're involved every step.</p>
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
                        className='bg-[#192420] relative mb-3 my-5 lg:my-0 sm:mb-0 rounded-lg px-12 py-14'>
                        <p className='border-2 border-[#1FFFA5] text-[#1FFFA5] rounded-full px-3 -top-[10px] right-40 md:right-48 lg:right-32 z-10 bg-[#151E1B] absolute text-xs'>Day 5</p>
                        <img className='p-3 rounded-full bg-[#003D25] w-20 mb-7 mx-auto' src="Image/RocketLaunch.png" alt="" />
                        <h4 className='text-lg mt-8'>Launch</h4>
                        <p className='text-xs text-gray-500 mt-2'>Fully deployed on your hosting and <br /> ready to convert visitors.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
