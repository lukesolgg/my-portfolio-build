import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';
import BackgroundSplit from './BackgroundSplit';

type Props = {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0"
    >
      <h3 className="absolute top-32 md:top-20  uppercase tracking-[1rem] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2BAAE2]/80">
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="/"
              className='max-w-[20vh] max-h-[20vh] md:max-w-[50vh] md:max-h-[30vh]'
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#2BAAE2]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
              {project?.technologies.map((technology) => (
                <img 
                className="h-10 w-10"
                key={technology._id} 
                src={urlFor(technology.image).url()}
                alt="/"
                />
              ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <BackgroundSplit />
    </motion.div>
  );
}

export default Projects