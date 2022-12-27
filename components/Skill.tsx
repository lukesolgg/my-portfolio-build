import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

function Skill({ skill, directionLeft }: Props) {
    return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -50 : 50,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()} alt=""
        className='rounded-full border border-gray-500 object-cover w-12 h-12 md:w-24 md:h-24 filter 
        group-hover:grayscale transition duration-300 ease-in-out' />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
        group-hover:bg-[#2BAAE2] h-12 w-12 md:w-24 md:h-24 rounded-full z-0'>

            <div className='flex items-center justify-center h-full'>

                <p className='text-sm md:text-base font-bold text-black opacity-100'>{skill.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill