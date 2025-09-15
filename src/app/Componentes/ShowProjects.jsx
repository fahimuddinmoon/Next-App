"use client";
import React from 'react'
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
export default function ShowProjects() {
    return (
        <div className='bg-[#0A0F0D]'>
            <div className='py-16 relative'>
                <motion.h3
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl font-semibold text-center text-white'>Case Studies
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='text-xs  text-center text-white mt-2 mb-7'>See the designs that delivered results
                </motion.p>
                <div className='hidden sm:inline'>
                    {/* Swiper */}
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
                                slidesPerView: 1.4,
                                centeredSlides: true
                            },
                            768: {
                                slidesPerView: 1.4,
                                centeredSlides: true
                            },
                            1024: {
                                slidesPerView: 2.3,
                                centeredSlides: true
                            },
                            1280: {
                                slidesPerView: 2.3,
                                centeredSlides: true
                            },

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
                            <div className=' bg-[#151E1B] rounded-lg'>
                                <img className='h-96 px-5 mx-auto' src="Image/image 26.png" alt="" />
                                <div className='flex justify-between py-5 items-start md:px-7 lg:px-10 text-white'>
                                    <h4 className='text-xl font-semibold'>Flowpilot</h4>
                                    <div className='text-gray-400'>
                                        <p className='text-xs px-3 rounded-2xl flex justify-center items-center gap-2 bg-[#003D25] py-2'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            20% high conversion than average in first week
                                        </p>
                                        <p className='ml-6 flex justify-center items-center gap-2 text-xs px-3 rounded-2xl bg-[#003D25] py-2 mt-1 text-end'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            Clean and modern design with clear CTA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#151E1B] rounded-lg'>
                                <img className='h-96 px-5 mx-auto' src="Image/image 27.png" alt="" />
                                <div className='flex justify-between py-5 items-start md:px-7 lg:px-10 text-white'>
                                    <h4 className='text-xl font-semibold'>GrowthSummit</h4>
                                    <div className='text-gray-400'>
                                        <p className='text-xs px-3 rounded-2xl flex justify-center items-center gap-2 bg-[#003D25] py-2'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            20% high conversion than average in first week
                                        </p>
                                        <p className='ml-6 flex justify-center items-center gap-2 text-xs px-3 rounded-2xl bg-[#003D25] py-2 mt-1 text-end'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            Clean and modern design with clear CTA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#151E1B] rounded-lg'>
                                <img className='h-96 px-5 mx-auto' src="Image/image 28.png" alt="" />
                                <div className='flex justify-between py-5 items-start md:px-7 lg:px-10 text-white'>
                                    <h4 className='text-xl font-semibold'>Flowpilot</h4>
                                    <div className='text-gray-400'>
                                        <p className='text-xs px-3 rounded-2xl flex justify-center items-center gap-2 bg-[#003D25] py-2'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            20% high conversion than average in first week
                                        </p>
                                        <p className='ml-6 flex justify-center items-center gap-2 text-xs px-3 rounded-2xl bg-[#003D25] py-2 mt-1 text-end'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            Clean and modern design with clear CTA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#151E1B] rounded-lg'>
                                <img className='h-96 px-5 mx-auto' src="Image/image 26.png" alt="" />
                                <div className='flex justify-between py-5 items-start md:px-7 lg:px-10 text-white'>
                                    <h4 className='text-xl font-semibold'>GrowthSummit</h4>
                                    <div className='text-gray-400'>
                                        <p className='text-xs px-3 rounded-2xl flex justify-center items-center gap-2 bg-[#003D25] py-2'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            20% high conversion than average in first week
                                        </p>
                                        <p className='ml-6 flex justify-center items-center gap-2 text-xs px-3 rounded-2xl bg-[#003D25] py-2 mt-1 text-end'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            Clean and modern design with clear CTA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#151E1B] rounded-lg'>
                                <img className='h-96 px-5 mx-auto' src="Image/image 27.png" alt="" />
                                <div className='flex justify-between py-5 items-start md:px-7 lg:px-10 text-white'>
                                    <h4 className='text-xl font-semibold'>Flowpilot</h4>
                                    <div className='text-gray-400'>
                                        <p className='text-xs px-3 rounded-2xl flex justify-center items-center gap-2 bg-[#003D25] py-2'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            20% high conversion than average in first week
                                        </p>
                                        <p className='ml-6 flex justify-center items-center gap-2 text-xs px-3 rounded-2xl bg-[#003D25] py-2 mt-1 text-end'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            Clean and modern design with clear CTA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#151E1B] rounded-lg'>
                                <img className='h-96 px-5 mx-auto' src="Image/image 28.png" alt="" />
                                <div className='flex justify-between py-5 items-start md:px-7 lg:px-10 text-white'>
                                    <h4 className='text-xl font-semibold'>Flowpilot</h4>
                                    <div className='text-gray-400'>
                                        <p className='text-xs px-3 rounded-2xl flex justify-center items-center gap-2 bg-[#003D25] py-2'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            20% high conversion than average in first week
                                        </p>
                                        <p className='ml-6 flex justify-center items-center gap-2 text-xs px-3 rounded-2xl bg-[#003D25] py-2 mt-1 text-end'>
                                            <span className='text-[#1FFFA5]'>
                                                <FaCheck />
                                            </span>
                                            Clean and modern design with clear CTA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='sm:hidden inline py-8'>
                    <div className=' bg-[#151E1B] rounded-lg m-5 pb-4'>
                        <img className=' px-5 mx-auto' src="Image/image 26.png" alt="" />
                        <div className='px-6 '>
                            <h4 className='text-xl font-semibold text-white mt-4'>GrowthSummit</h4>
                            <div className='text-gray-400'>
                                <p className='text-xs px-3 mt-2 rounded-2xl flex mr-4 justify-start items-center  bg-[#003D25] py-2'>
                                    <span className='text-[#1FFFA5]'>
                                        <FaCheck />
                                    </span>
                                    20% high conversion than average in first week
                                </p>
                                <p className=' flex justify-start mt-2 items-center  text-xs px-3 rounded-2xl bg-[#003D25] py-2  mr-9 text-end'>
                                    <span className='text-[#1FFFA5]'>
                                        <FaCheck />
                                    </span>
                                    Clean and modern design with clear CTA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#151E1B] rounded-lg m-5 pb-4'>
                        <img className=' px-5 mx-auto' src="Image/image 27.png" alt="" />
                        <div className='px-6 '>
                            <h4 className='text-xl font-semibold text-white mt-4'>Flowpilot</h4>
                            <div className='text-gray-400'>
                                <p className='text-xs px-3 mt-2 rounded-2xl flex justify-start items-center  mr-4 bg-[#003D25] py-2'>
                                    <span className='text-[#1FFFA5]'>
                                        <FaCheck />
                                    </span>
                                    20% high conversion than average in first week
                                </p>
                                <p className=' flex justify-start mt-2 items-center  text-xs px-3 mr-9 rounded-2xl bg-[#003D25] py-2  text-end'>
                                    <span className='text-[#1FFFA5]'>
                                        <FaCheck />
                                    </span>
                                    Clean and modern design with clear CTA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#151E1B] rounded-lg m-5 pb-4'>
                        <img className=' px-5 mx-auto' src="Image/image 28.png" alt="" />
                        <div className='px-6 '>
                            <h4 className='text-xl font-semibold text-white mt-4'>Flowpilot</h4>
                            <div className='text-gray-400'>
                                <p className='text-xs px-3 mt-2 rounded-2xl flex justify-start items-center  mr-4 bg-[#003D25] py-2'>
                                    <span className='text-[#1FFFA5]'>
                                        <FaCheck />
                                    </span>
                                    20% high conversion than average in first week
                                </p>
                                <p className=' flex justify-start mt-2 items-center  text-xs px-3 mr-9 rounded-2xl bg-[#003D25] py-2  text-end'>
                                    <span className='text-[#1FFFA5]'>
                                        <FaCheck />
                                    </span>
                                    Clean and modern design with clear CTA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.button
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='mx-auto bg-[#1FFFA5] px-7 py-2 rounded-lg mt-9 text-sm flex justify-center items-center gap-2 shadow-[0_0_40px_0_#0e4932] font-semibold'>I want similar results <FaArrowRightLong /> </motion.button>

            </div>
        </div>
    )
}
