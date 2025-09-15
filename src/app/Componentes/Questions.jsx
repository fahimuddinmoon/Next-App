"use client";
import React from 'react'
import { motion } from 'framer-motion';
export default function Questions() {
    return (
        <div className='py-4  bg-[#0e140e]  text-white'>
            <div className='mx-5 md:w-9/12 lg:w-8/12 sm:mx-auto pb-16 '>
                <motion.h3
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='text-4xl font-semibold my-12  text-center'>Got Questions  <span className='text-[#1FFFA5]'> ? </span>  We’ve Got The Answers</motion.h3>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='p-6 leading-6 bg-[#192420] rounded-lg mb-5'>
                    <ul className='list-disc list-inside marker:text-[#1FFFA5] custom-marker'>
                        <li></li>
                    </ul>
                    <p className='text-lg font-semibold mb-3'>How long does it take?</p>
                    <p className='text-sm'>5 days from start to finish - design, development, and deployment included.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='p-6 leading-6 bg-[#192420] rounded-lg mb-5'>
                    <ul className='list-disc list-inside marker:text-[#1FFFA5] custom-marker'>
                        <li></li>
                    </ul>
                    <p className='text-lg font-semibold mb-3'>Do you provide revisions?</p>
                    <p className='text-sm'>Yes, unlimited revisions until you're 100% satisfied with the final result.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='p-6 leading-6 bg-[#192420] rounded-lg mb-5'>
                    <ul className='list-disc list-inside marker:text-[#1FFFA5] custom-marker'>
                        <li></li>
                    </ul>
                    <p className='text-lg font-semibold mb-3'>What's the payment process?</p>
                    <p className='text-sm'>50% upfront to get started, 50% after final delivery and your approval.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='p-6 leading-6 bg-[#192420] rounded-lg mb-5'>
                    <ul className='list-disc list-inside marker:text-[#1FFFA5] custom-marker'>
                        <li></li>
                    </ul>
                    <p className='text-lg font-semibold mb-3'>Can you deploy on my hosting?</p>
                    <p className='text-sm'>Absolutely! Deployment is included in every package, on your hosting or ours.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='p-6 leading-6 bg-[#192420] rounded-lg mb-5'>
                    <ul className='list-disc list-inside marker:text-[#1FFFA5] custom-marker'>
                        <li></li>
                    </ul>
                    <p className='text-lg font-semibold mb-3'>Why are your prices so affordable compared to agencies?</p>
                    <p className='text-sm'>We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.</p>
                </motion.div>
            </div>
        </div>
    )
}
