import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 
    justify-center mx-auto items-center'>
        <h3 className='headingTitle'>
            About
        </h3>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        className="mb-2 xl:mb-20 flex-shrink-0 w-40 h-40 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-80 xl:w-[500px] xl:h-[50vh]"
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="secondary lukesolbtc img"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>Here is a <span className='underline decoration-[#2BAAE2]/50'>little</span>  background</h4>
            <p className='text-sm'>{pageInfo?.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}

export default About