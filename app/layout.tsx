import './globals.css'
import React from 'react';
import Head from 'next/head'
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import ParticlesBackground from '@/components/particles-background';
import ThemeToggle from '@/components/theme-toggle';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


// Change circle colors
export const metadata = {
  title: 'Parth | Personal Portfolio',
  description: 'Software Developer',
  openGraph: {
    title: 'Parth Nagraj | Personal Portfolio',
    description: 'Software Developer',
    images: ['/parthI.jpeg'],
    url: 'https://pdnagraj.github.io/pnwebsite/',
  },
  twitter: {
    card: 'summary',
    title: 'Parth Nagraj | Personal Portfolio',
    description: 'Software Developer',
    images: ['/parthI.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth overflow-x-hidden'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden w-full`}>

      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <ParticlesBackground />
          <Header/>
          <div className="relative z-10">{children}</div>
          <Footer />
          <ThemeToggle />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  )
}
