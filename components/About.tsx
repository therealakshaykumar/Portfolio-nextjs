"use client";
import React from 'react'
import SectionHeading from './Heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

const About = () => {
    const { ref } = useSectionInView('About');

    return (
        <motion.section className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about">
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                As a passionate Software Developer, I&apos;m always on the lookout for new adventures in the fast-paced world of web development. My journey in tech is fueled by a love for two key areas: crafting smooth, interactive user experiences on the frontend and building solid, secure systems on the backend. I like to think of myself as a digital craftsman, enjoying both the artistry of designing a building&apos;s exterior and the engineering of its strong foundation.
            </p>
            <p className='mb-3'>
                There&apos;s something incredibly rewarding about creating secure authentication systems, optimizing database queries, and finding elegant solutions to complex business challenges. When I face tough data processing demands, I&apos;m eager to dive into stored procedures and database optimization, believing that sometimes the best solutions are right next to the data.
            </p>
            <p className='mb-3'>
                My commitment to lifelong learning keeps me at the cutting edge of technology, while my practical experience helps me select the right tools for each unique challenge. Every project is a new opportunity to push boundaries, enhance performance, and create something that truly makes a difference in users' lives.
            </p>
        </motion.section>
    );
}

export default About;
