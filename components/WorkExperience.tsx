import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
import BackgroundSplit from './BackgroundSplit'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

type Props = {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center snap-x snap-mandatory overflow-scroll z-0
    overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2BAAE2]/80"
    >
      <h3 className="headingTitle">Experience</h3>

      <h3 className="subHeadingTitle">Swipe Right For More</h3>
    <div className='relative flex items-center'>
      
      <div
        id="slider"
        className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2BAAE2]/80"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
      
    </div>
    
    </motion.div>
  );
}

export default WorkExperience