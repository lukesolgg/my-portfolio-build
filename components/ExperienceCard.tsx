import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='w-screen h-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }} 
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='w-24 h-24 sm:w-32 sm:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover 
        object-center'
        src={urlFor(experience?.companyImage).url()} alt="" />

        <div className='px-10 md:px-10'>
          <h4 className='ml-5 text-xl md:text-3xl font-light'>{experience?.jobTitle} at {experience?.company}</h4>
          <p className='ml-5 font-bold text-2xl md::text-4xl mt-1'>{experience?.company}</p>
          <div className='ml-5 flex space-x-2 my-2'>
            {experience.technologies.map((technology) => (
              <img 
              src={urlFor(technology.image).url()}
              key={technology._id}
              alt="/"
              className="h-10 w-10 rounded-full"
              />
            ))}  
          </div>
          <p className='ml-5 uppercase py-5 text-gray-300'>
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
            </p>

          <ul className='list-disc space-y-4 ml-5 text-xs md:text-lg max-h-96 overflow-y-scroll 
          pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#2BAAE2]/80'>
              {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
          </ul>

        </div>
    </article>
  )
}