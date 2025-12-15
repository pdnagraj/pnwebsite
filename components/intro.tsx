"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { getAssetPath } from '@/lib/utils';

// add it so there is typing for the hi I am a software developer
// Change text to "I am the founder of yungsten tech and a software developer with 5 years of experience"
// automatically change year to current years of expereince without having me touch it
export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
    
  return (
   <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity:1, scale: 1}}
                    transition={{type: "tween", duration: 0.2}}
                >
                    <Image
                        src={getAssetPath("/parthI.jpeg")}
                        alt="Parth Portrait"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-800"
                    />
                </motion.div>
                <motion.span 
                    className="absolute bottom-0 right-0 text-4xl"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity:1, scale: 1}}
                    transition={{type: "spring", stiffness: 125, delay: 0.1, duration: 0.7}}
                >👋</motion.span>
            </div>
        </div>

        <motion.h1
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y: 0}}
        >
            <span className='font-bold'>Hi, I'm Parth Nagraj.</span> I turn complex problems into scalable solutions through technology and strategy.
        </motion.h1>

        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{delay:0.1}}
        >
            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white dark:text-gray-900'>Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:border-white/10' href={getAssetPath('/Parth_Nagraj_Resume.pdf')} download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/> </a>
            <a className='bg-white px-4 text-gray-700 py-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white dark:border-white/10' href='https://www.linkedin.com/in/parthnagraj/' target='_blank'> <BsLinkedin /> </a>
            <a className='bg-white px-4 text-gray-700 py-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white dark:border-white/10' href='https://github.com/pdnagraj' target='_blank'> <FaGithubSquare /> </a>
        </motion.div>
   </section>
  );
}
