"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePlanetClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  // Company colors for planets
  const planetColors = [
    "bg-gradient-to-br from-blue-400 to-blue-600", // UMass
    "bg-[#cb2028]", // Aras
    "bg-[#102a4c]", // Cloudwave
    "bg-white dark:bg-white", // Staples
    "bg-white dark:bg-white", // Yungsten
    "bg-white dark:bg-white", // Box Byte
    "bg-white dark:bg-white", // Gartner
    "bg-white dark:bg-white", // CMU Tepper
  ];

  // Custom padding for each logo to control size
  const logoPadding = [
    "p-2", // UMass
    "p-2", // Aras
    "p-1", // Cloudwave
    "p-1", // Staples
    "p-1", // Yungsten
    "p-2", // Box Byte
    "p-2", // Gartner
    "p-2", // CMU Tepper
  ];

  // Custom scale for each logo
  const logoScale = [
    "scale-75", // UMass
    "scale-75", // Aras
    "scale-125", // Cloudwave
    "scale-125", // Staples
    "scale-75", // Yungsten
    "scale-75", // Box Byte
    "scale-100", // Gartner
    "scale-75", // CMU Tepper
  ];

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      {/* Planets container */}
      <div className="relative py-4 mb-6 sm:mb-8 max-h-[400px] sm:max-h-none overflow-y-auto sm:overflow-y-hidden overflow-x-hidden sm:overflow-x-auto bg-white/50 dark:bg-gray-800/50 sm:bg-transparent dark:sm:bg-transparent rounded-2xl sm:rounded-none border-2 border-gray-200 dark:border-gray-700 sm:border-0 dark:sm:border-0 mx-4 sm:mx-0" style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Mobile view - reversed order */}
        <div className="flex flex-col sm:hidden justify-start items-center relative gap-3 min-w-max px-4">
          {/* Connecting line - positioned to go through planet centers */}
          <div className="absolute left-1/2 top-[40px] bottom-[40px] w-[2px] -translate-x-1/2 bg-gray-400 dark:bg-gray-500 -z-10" />

          {[...experiencesData].reverse().map((experience, index) => {
            // Get the original index for colors and other properties
            const originalIndex = experiencesData.length - 1 - index;
            return (
            <div key={index} className="flex flex-col items-center justify-center flex-shrink-0">
              {/* Mobile layout: Company name, Planet, Date in a row */}
              <div className="flex items-center justify-center w-full gap-0.5 px-2">
                {/* Company name - left side */}
                <div className="w-[95px] flex items-center justify-end pr-1">
                  <p className="text-xs text-gray-700 dark:text-gray-300 text-right font-bold leading-tight">
                    {experience.location}
                  </p>
                </div>

                {/* Planet - center */}
                <motion.button
                  onClick={() => handlePlanetClick(originalIndex)}
                  className={`w-16 h-16 rounded-full ${planetColors[originalIndex]} shadow-xl hover:shadow-2xl transition-all relative z-20 flex items-center justify-center text-white font-bold border-4 border-white dark:border-gray-800 hover:scale-110 active:scale-95 flex-shrink-0 overflow-hidden`}
                  animate={{
                    scale: selectedIndex === originalIndex ? 1.15 : 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {experience.logo ? (
                    <div className={`relative w-full h-full ${logoPadding[originalIndex]}`}>
                      <Image
                        src={experience.logo}
                        alt={experience.location}
                        fill
                        className={`object-contain ${logoScale[originalIndex]}`}
                      />
                    </div>
                  ) : (
                    <span className="text-2xl">{experience.icon}</span>
                  )}
                </motion.button>

                {/* Date - right side */}
                <div className="w-[95px] flex items-center justify-start pl-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-left leading-tight">
                    {experience.date.split(' - ').map((datePart, idx) => (
                      <React.Fragment key={idx}>
                        {datePart}
                        {idx === 0 && <><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<br /></>}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Desktop view - original order */}
        <div className="hidden sm:flex flex-row justify-center items-center relative gap-4 min-w-max px-4">
          {/* Connecting line - positioned to go through planet centers */}
          <div className="absolute left-[80px] top-1/2 right-[80px] h-[3px] -translate-y-1/2 bg-gray-400 dark:bg-gray-500 -z-10" />

          {experiencesData.map((experience, index) => (
            <div key={index} className="flex flex-col items-center justify-center flex-shrink-0">
              {/* Company name above planet - desktop only */}
              <div className="h-[52px] w-[120px] items-end justify-center mb-3 flex">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center font-bold">
                  {experience.location}
                </p>
              </div>

              {/* Desktop Planet */}
              <motion.button
                onClick={() => handlePlanetClick(index)}
                className={`w-20 h-20 rounded-full ${planetColors[index]} shadow-xl hover:shadow-2xl transition-all relative z-20 flex items-center justify-center text-white font-bold border-4 border-white dark:border-gray-800 hover:scale-110 active:scale-95 flex-shrink-0 overflow-hidden`}
                animate={{
                  scale: selectedIndex === index ? 1.15 : 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                {experience.logo ? (
                  <div className={`relative w-full h-full ${logoPadding[index]}`}>
                    <Image
                      src={experience.logo}
                      alt={experience.location}
                      fill
                      className={`object-contain ${logoScale[index]}`}
                    />
                  </div>
                ) : (
                  <span className="text-3xl">{experience.icon}</span>
                )}
              </motion.button>

              {/* Date label - desktop only */}
              <div className="h-[52px] w-[120px] items-start justify-center mt-3 flex">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {experience.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content box container - same pattern as skills */}
      <div className="px-4">
        <div className="max-w-[768px] mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
          {selectedIndex !== null ? (
            <div key={`content-${selectedIndex}`}>
              <h3 className="font-bold text-lg sm:text-2xl mb-2 sm:mb-2 text-gray-900 dark:text-white">
                {experiencesData[selectedIndex].title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 font-semibold">
                {experiencesData[selectedIndex].location}
              </p>
              <p className="text-sm sm:text-sm text-gray-500 dark:text-gray-500 mb-3 sm:mb-4">
                {experiencesData[selectedIndex].date}
              </p>
              <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 sm:space-y-2">
                {experiencesData[selectedIndex].description.split('\n').map((line, idx) => (
                  <p key={idx} className="flex items-start">
                    <span className="mr-2 sm:mr-2 flex-shrink-0">{line.startsWith('•') ? '•' : ''}</span>
                    <span className="flex-1">{line.startsWith('•') ? line.substring(2) : line}</span>
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[60px] sm:min-h-[80px] text-gray-400 dark:text-gray-600">
              <p className="text-sm sm:text-lg text-center px-2">Click on a planet to view experience details</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
