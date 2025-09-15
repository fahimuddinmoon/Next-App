"use client";
import React from 'react'
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa6";
export default function Reviews() {
    return (
        <div className='bg-[#0e140e] pt-3 text-white '>
            <div className='mx-5 md:w-10/12 lg:w-9/12 sm:mx-auto pb-16'>
                <div className='hidden lg:inline'>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className='text-4xl font-semibold mt-12'>What Our Clients Are Saying <span className='text-[#1FFFA5]'>  About Us </span></h3>
                        <p className='text-xs  text-gray-500 mt-4 mb-5'>Real feedback from real businesses who've seen real results.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className='grid grid-cols-4 gap-4 mt-8'>
                        <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                            <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className='my-5'>"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"</p>
                            <div className='flex justify-start items-center gap-3 mt-9'>
                                <img src="Image/Ellipse 3.png" alt="" />
                                <div>
                                    <p className='text-lg'>Sarah Johnson</p>
                                    <p className='text-sm'>SaaS Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                            <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className='my-5'>"Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before."</p>
                            <div className='flex justify-start items-center gap-3 mt-9'>
                                <img src="Image/man-2.png" alt="" />
                                <div>
                                    <p className='text-lg'>Mike Chen</p>
                                    <p className='text-sm'>Fitness Coach</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                            <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className='my-5'>"Best investment for my business. The ROI was immediate and substantial. Will definitely order again."</p>
                            <div className='flex justify-start items-center gap-3 mt-9'>
                                <img src="Image//women-4.png" alt="" />
                                <div>
                                    <p className='text-lg'>Amanda Rodriguez</p>
                                    <p className='text-sm'>E-Commerce Owner</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                            <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className='my-5'>"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"</p>
                            <div className='flex justify-start items-center gap-3 mt-9'>
                                <img src="Image/man-3.png" alt="" />
                                <div>
                                    <p className='text-lg'>David Lee</p>
                                    <p className='text-sm'>SaaS Founder</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='inline lg:hidden'>
                <div className='mx-5 md:w-10/12 lg:w-9/12 sm:mx-auto pb-16 lg:hidden '>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className='text-4xl font-semibold mt-12'>What Our Clients Are Saying <span className='text-[#1FFFA5]'>  About Us </span></h3>
                        <p className='text-xs  text-gray-500 mt-4'>Real feedback from real businesses who've seen real results.</p>
                    </motion.div>
                    <Swiper
                        modules={[Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            480: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            }

                        }}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        speed={5000}
                        grabCursor={false}
                        allowTouchMove={false}
                        freeMode={true}
                    >

                        <SwiperSlide>
                            <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                                <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className='my-5'>"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"</p>
                                <div className='flex justify-start items-center gap-3 mt-9'>
                                    <img src="Image/Ellipse 3.png" alt="" />
                                    <div>
                                        <p className='text-lg'>Sarah Johnson</p>
                                        <p className='text-sm'>SaaS Founder</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                                <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className='my-5'>"Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before."</p>
                                <div className='flex justify-start items-center gap-3 mt-9'>
                                    <img src="Image/man-2.png" alt="" />
                                    <div>
                                        <p className='text-lg'>Mike Chen</p>
                                        <p className='text-sm'>Fitness Coach</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                                <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className='my-5'>"Best investment for my business. The ROI was immediate and substantial. Will definitely order again."</p>
                                <div className='flex justify-start items-center gap-3 mt-9'>
                                    <img src="Image//women-4.png" alt="" />
                                    <div>
                                        <p className='text-lg'>Amanda Rodriguez</p>
                                        <p className='text-sm'>E-Commerce Owner</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-[#192420] p-6 rounded-lg h-full flex flex-col justify-between'>
                                <p className='text-[#1FFFA5] flex justify-start items-center gap-3 pb-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className='my-5'>"They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!"</p>
                                <div className='flex justify-start items-center gap-3 mt-9'>
                                    <img src="Image/man-3.png" alt="" />
                                    <div>
                                        <p className='text-lg'>David Lee</p>
                                        <p className='text-sm'>SaaS Founder</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
