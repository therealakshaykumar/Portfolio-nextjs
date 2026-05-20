"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { ActiveSectionStore } from '@/store/active-section-store'
import { useLenis } from 'lenis/react'

const Header = () => {
  const {activeSection,setActiveSection,setTimeOfLastClick} = ActiveSectionStore()
  const lenis = useLenis();

  return (
    <header className='!z-[999] relative'>
        <motion.div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/20 bg-gradient-to-b from-white/20 to-white/10 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gradient-to-b dark:from-gray-900/20 dark:to-gray-950/15 dark:border-white/5 dark:shadow-black/20'
        initial={{x: "-50%" , y: -100, opacity:0}}
        animate={{x: "-50%", y:0 , opacity:1}}
        >
        </motion.div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-gray-300">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                onClick={(e)=> {
                  e.preventDefault();
                  lenis?.scrollTo(link.hash);
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                  className=
                  {clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-900 transition-all dark:text-gray-300 dark:hover:text-gray-100 relative hover:brightness-110",
                    {
                      "text-gray-900 dark:text-white font-semibold":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.div>
              {
                link.name === activeSection && (
                <motion.span
                layoutId={activeSection}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 400,
                }}
                 className='absolute inset-0 bg-gradient-to-br from-white/70 to-white/50 rounded-full -z-10 dark:from-gray-600/70 dark:to-gray-700/60 backdrop-blur-md shadow-lg shadow-gray-900/20 dark:shadow-black/50'></motion.span>)
              }
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header