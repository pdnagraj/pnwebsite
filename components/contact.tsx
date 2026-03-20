"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <section ref={ref} id="contact" className='justify-center mb-20 sm:mb-28 w-[min(100%,38rem)]'>
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 dark:text-gray-200 flex items-center justify-center'>
        Please contact me directly at&nbsp;
        <a className='underline dark:text-gray-100' href='mailto:parth.d.nagraj@gmail.com'>parth.d.nagraj@gmail.com</a>
      </p>
      <div className='flex items-center justify-center gap-3 mt-4'>
        <a className='bg-white px-5 py-2 flex items-center gap-2 rounded-full text-gray-700 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white dark:border-white/10' href='https://www.linkedin.com/in/parthnagraj/' target='_blank'>
          <BsLinkedin /> LinkedIn
        </a>
        <a className='bg-white px-5 py-2 flex items-center gap-2 rounded-full text-gray-700 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-white dark:border-white/10' href='https://github.com/pdnagraj' target='_blank'>
          <FaGithubSquare /> GitHub
        </a>
      </div>
    </section>
  )
}
