"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Custom scale for each logo
  const logoScale = [
    "scale-75", // UMass
    "scale-75",  // Tepper
  ];

  const handleCardClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="education" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>

      {/* Education cards */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedIndex === index
                  ? "border-blue-500 dark:border-blue-400 scale-[1.02]"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Logo and basic info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 dark:border-gray-600 flex-shrink-0 overflow-hidden shadow-md">
                  {education.logo && (
                    <div className="relative w-full h-full p-2.5">
                      <Image
                        src={education.logo}
                        alt={education.location}
                        fill
                        className={`object-contain ${logoScale[index]}`}
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
                    {education.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 font-semibold">
                    {education.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {education.date}
                  </p>
                </div>
              </div>

              {/* Expandable details */}
              {selectedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                    {education.description.split('\n').map((line, idx) => (
                      <p key={idx} className="flex items-start">
                        <span className="mr-2 flex-shrink-0">{line.startsWith('•') ? '•' : ''}</span>
                        <span className="flex-1">{line.startsWith('•') ? line.substring(2) : line}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
              )}

              {/* Click hint */}
              <div className={`mt-3 text-xs text-center transition-opacity duration-200 ${
                selectedIndex === index ? "opacity-0" : "opacity-50"
              }`}>
                <span className="text-gray-500 dark:text-gray-400">Click to expand</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
