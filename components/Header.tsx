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
        <motion.div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950/75 dark:border-black/40'
        initial={{x: "-50%" , y: -100, opacity:0}}
        animate={{x: "-50%", y:0 , opacity:1}}
        >
        </motion.div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
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
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
              >
                {link.name}


              </Link>
              {
                link.name === activeSection && (
                <motion.span
                layoutId={activeSection}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 380,
                }}
                 className='absolute inset-0 bg-gray-200 rounded-full -z-10 dark:bg-gray-800'></motion.span>)
              }
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header