"use client";
import React from 'react'
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner() {
    return (
        <div className='bg-[#121a14] text-black pt-3 pb-8 relative'>
            {/* Overlay left side */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 md:w-60 lg:w-96 bg-gradient-to-r from-[#121a14] via-transparent to-transparent z-10"></div>

            {/* Overlay right side */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 md:w-60 lg:w-96 bg-gradient-to-l from-[#121a14] via-transparent to-transparent z-10"></div>

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
                        slidesPerView: 1.5,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 1.5,
                        centeredSlides: true
                    },
                    1024: {
                        slidesPerView: 2,
                         centeredSlides: false
                    },
                    1280: {
                        slidesPerView: 2,
                         centeredSlides: false
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
                    <img className='h-[280px] md:h-[315px] lg:h-[460px] object-cover w-full' src="Image/Size=Default (1).png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[280px] md:h-[315px] lg:h-[460px] object-cover w-full' src="Image/Size=Default (2).png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[280px] md:h-[315px] lg:h-[460px] object-cover w-full' src="Image/Size=Default (3).png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[280px] md:h-[315px] lg:h-[460px] object-cover w-full' src="Image/Size=Default.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[280px] md:h-[315px] lg:h-[460px] object-cover w-full' src="Image/Size=image 1.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
