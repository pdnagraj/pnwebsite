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
              I am a <span className='font-bold text-gray-900 dark:text-white'>Computer Science graduate from the University of Massachusetts Amherst</span> and an <span className='font-bold text-gray-900 dark:text-white'>MBA candidate at Carnegie Mellon's Tepper School of Business</span>, with experience across <span className='font-bold text-gray-900 dark:text-white'>software engineering, consulting, and building early-stage businesses</span>.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
              I focus on turning ambiguous problems into <span className='font-bold text-gray-900 dark:text-white'>structured, actionable systems</span>. This includes improving operations, designing <span className='font-bold text-gray-900 dark:text-white'>go-to-market processes</span>, and building products from the ground up.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
              Currently, I am building <span className='font-bold text-gray-900 dark:text-white'>TradeCanny</span>, an <span className='font-bold text-gray-900 dark:text-white'>AI-powered behavioral intelligence platform</span> that helps traders improve discipline and decision-making through data-driven insights and coaching.
            </p>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              I value <span className='font-bold text-gray-900 dark:text-white'>clarity, disciplined execution, and measurable outcomes</span>. I enjoy working on complex problems, moving quickly, and building systems that scale.
            </p>
          </motion.div>
        </div>
    </section>
  )
}
