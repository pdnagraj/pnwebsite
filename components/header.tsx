"use client";

import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useState } from "react";
import { HiMenu, HiX, HiHome, HiUser, HiAcademicCap, HiBriefcase, HiLightningBolt, HiMail } from "react-icons/hi";

// Icons for mobile menu
const menuIcons: { [key: string]: React.ReactNode } = {
  Home: <HiHome className="w-5 h-5" />,
  About: <HiUser className="w-5 h-5" />,
  Education: <HiAcademicCap className="w-5 h-5" />,
  Experience: <HiBriefcase className="w-5 h-5" />,
  Skills: <HiLightningBolt className="w-5 h-5" />,
  Contact: <HiMail className="w-5 h-5" />,
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (name: string) => {
    setActiveSection(name as typeof activeSection);
    setTimeOfLastClick(Date.now());
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* Desktop header background - hidden on mobile */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 h-[3.25rem] w-[42rem] rounded-full border bg-white border-white border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Mobile hamburger button */}
      <motion.button
        className="fixed top-3 right-4 z-[1001] sm:hidden p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        )}
      </motion.button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-[1001] sm:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="pt-20 px-6">
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <motion.li
                    key={link.hash}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href={link.hash}
                      className={clsx(
                        "flex items-center gap-3 py-3 px-4 rounded-lg text-lg font-medium transition-colors",
                        activeSection === link.name
                          ? "bg-gray-200 dark:bg-gray-800 text-gray-950 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {menuIcons[link.name]}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop navigation */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2 h-[initial] py-0">
        <ul className="flex items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-100",
                  { "text-gray-950 dark:text-gray-100": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name as typeof activeSection);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
