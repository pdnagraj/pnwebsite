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
              I am a <span className='font-bold text-gray-900 dark:text-white'>University of Massachusetts Amherst</span> graduate with a <span className='font-bold text-gray-900 dark:text-white'>Bachelor's degree in Computer Science</span> and an <span className='font-bold text-gray-900 dark:text-white'>MBA candidate</span> at <span className='font-bold text-gray-900 dark:text-white'>Carnegie Mellon University's Tepper School of Business</span>. My background spans <span className='font-bold text-gray-900 dark:text-white'>software engineering, consulting, and building and scaling early-stage businesses</span>, with experience operating at the <span className='font-bold text-gray-900 dark:text-white'>intersection of technology, strategy, and execution</span>.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
              I specialize in <span className='font-bold text-gray-900 dark:text-white'>breaking down ambiguous, complex problems into structured, actionable plans</span>. My work focuses on <span className='font-bold text-gray-900 dark:text-white'>aligning stakeholders, improving operational and go-to-market processes</span>, and delivering outcomes that are <span className='font-bold text-gray-900 dark:text-white'>measurable, repeatable, and scalable</span>.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
              I value <span className='font-bold text-gray-900 dark:text-white'>clarity, disciplined execution, and strong operating systems</span>. By designing <span className='font-bold text-gray-900 dark:text-white'>effective workflows, data-driven processes, and accountability mechanisms</span>, I help teams <span className='font-bold text-gray-900 dark:text-white'>move faster, make better decisions, and execute with confidence</span>.
            </p>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              I am seeking roles where I can take on <span className='font-bold text-gray-900 dark:text-white'>complex challenges, learn at a high pace</span>, and drive <span className='font-bold text-gray-900 dark:text-white'>meaningful impact through structured thinking, collaboration, and execution</span>.
            </p>
          </motion.div>
        </div>
    </section>
  )
}
