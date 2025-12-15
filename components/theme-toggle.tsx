"use client";

import { useTheme } from '@/context/theme-context';
import { BsSun, BsMoon } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Theme toggle clicked! Current theme:', theme);
    toggleTheme();
  };

  return (
    <motion.button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[9999] cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        <BsSun className="text-gray-800 dark:text-gray-200" />
      ) : (
        <BsMoon className="text-gray-800 dark:text-gray-200" />
      )}
    </motion.button>
  );
}
