"use client";

import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading'
import { motion } from "framer-motion";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section ref={ref} id='about' className='mb-28 sm:mb-40 scroll-mt-28'>
        <SectionHeading>About Me</SectionHeading>
        <div className='max-w-6xl mx-auto px-4'>
          <motion.div
            className='bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700'
            initial={{opacity: 0, y: 100}}
            animate={{opacity:1, y: 0}}
            transition={{delay:0.175}}
          >
            <p className='mb-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
              I am a <span className='font-bold text-gray-900 dark:text-white'>University of Massachusetts Amherst</span> graduate with a Bachelor's degree in <span className='font-bold text-gray-900 dark:text-white'>Computer Science</span> and an <span className='font-bold text-gray-900 dark:text-white'>MBA</span> candidate at <span className='font-bold text-gray-900 dark:text-white'>Carnegie Mellon University's Tepper School of Business</span>. My experience spans <span className='font-bold text-gray-900 dark:text-white'>software engineering</span>, <span className='font-bold text-gray-900 dark:text-white'>consulting</span>, and <span className='font-bold text-gray-900 dark:text-white'>building and operating growing businesses</span>, where I have worked at the intersection of technology, strategy, and execution.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
              I am motivated by solving <span className='font-bold text-gray-900 dark:text-white'>ambiguous problems</span> and turning them into <span className='font-bold text-gray-900 dark:text-white'>structured, actionable plans</span>. My work focuses on aligning stakeholders, improving operational processes, and delivering outcomes that are <span className='font-bold text-gray-900 dark:text-white'>scalable and measurable</span>.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
              I value <span className='font-bold text-gray-900 dark:text-white'>clarity</span>, <span className='font-bold text-gray-900 dark:text-white'>organization</span>, and <span className='font-bold text-gray-900 dark:text-white'>disciplined execution</span>. By designing <span className='font-bold text-gray-900 dark:text-white'>strong workflows and operating systems</span>, I help teams move faster, make better decisions, and maintain accountability.
            </p>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              In my next role, I am excited to take on <span className='font-bold text-gray-900 dark:text-white'>more complex and challenging problems</span> in environments that push me to <span className='font-bold text-gray-900 dark:text-white'>learn continuously</span>, <span className='font-bold text-gray-900 dark:text-white'>think strategically</span>, and drive meaningful impact through collaboration and execution.
            </p>
          </motion.div>
        </div>
    </section>
  )
}
