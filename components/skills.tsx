"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";

const cardVariants = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
            duration: 0.5,
        }
    }),
}

export default function Skills() {

  const { ref } = useSectionInView('Skills');

  return (
    <section ref={ref} id='skills' className='mb-28 scroll-mt-28 sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow'
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                custom={index}
              >
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  {category.title}
                </h3>
                <ul className='space-y-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className='text-gray-700 dark:text-gray-300 text-sm flex items-start'
                    >
                      <span className='mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0'>•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  )
}
