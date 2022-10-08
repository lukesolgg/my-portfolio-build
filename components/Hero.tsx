import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
          `I'm ${pageInfo?.name}`,
          `Full Stack Developer`, 
          `Coffee Addict`, 
          `Passionate Coder`,
          `Typescript`
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative rounded-full h-80 w-80 mx-auto object-cover"
        alt="lukesolbtc img"/>
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[1.2rem] md:tracking-[20px] md:text-xl'>
          {pageInfo?.role}
          </h2>
        <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
          <div className='inline-block mr-1'>
            <span className="text-[#2BAAE2]/60">{ '<'}</span>
            <span>{text}</span>
            <span className="text-[#2BAAE2]/60">{ '/>'}</span>
          </div>
        <Cursor cursorColor='#2BAAE2'/>
        </h1>

        <div className='flex pt-5 xl:space-x-4'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}