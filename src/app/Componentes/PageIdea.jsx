import React from 'react'

export default function PageIdea() {
    return (
        <div className='relative py-12  bg-[#0e140e] text-center text-white'>
            <div className='mx-5 md:w-9/12 lg:w-8/12 sm:mx-auto pb-16'>
                <div className=' absolute inset-y-0 -top-28 left-0 w-1/2 bg-[radial-gradient(circle_at_30%_center,_#0a261e,_transparent_50%)]'>
                </div>
                <h3 className='text-4xl font-semibold mt-12'>From Idea to Live Landing Page in <span className='text-[#1FFFA5]'> Just 5 Days</span></h3>
                <p className='text-xs font-semibold text-gray-500 mt-5'>Our streamlined process ensures fast delivery without compromising quality.</p>
                <div className='grid grid-cols-3 gap-4 mt-10'>
                    <div className='bg-[#192420] relative mb-3 sm:mb-0 rounded-lg px-12 py-14'>
                        <img className='p-3 rounded-full bg-[#003D25] w-20 mb-7 mx-auto' src="Image/User.png" alt="" />
                        <h4 className='text-lg mt-8'>Book Your Project</h4>
                        <p className='text-xs text-gray-500 mt-2'>Fill out a short form and we'll get <br /> started immediately.</p>
                    </div>
                    <div className='bg-[#192420] relative mb-3 sm:mb-0 rounded-lg px-12 py-14'>
                        <img className='p-3 rounded-full bg-[#003D25] w-20 mb-7 mx-auto' src="Image/Palette.png" alt="" />
                        <h4 className='text-lg mt-8'>Design & Development</h4>
                        <p className='text-xs text-gray-500 mt-2'>Unlimited revisions until perfect. <br /> You're involved every step.</p>
                    </div>
                    <div className='bg-[#192420] relative mb-3 sm:mb-0 rounded-lg px-12 py-14'>
                        <img className='p-3 rounded-full bg-[#003D25] w-20 mb-7 mx-auto' src="Image/RocketLaunch.png" alt="" />
                        <h4 className='text-lg mt-8'>Launch</h4>
                        <p className='text-xs text-gray-500 mt-2'>Fully deployed on your hosting and <br /> ready to convert visitors.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
