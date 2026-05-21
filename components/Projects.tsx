"use client";
import React from 'react'
import { projectsData } from "@/lib/data";
import SectionHeading from './Heading';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';


const Projects = () => {
  const {ref} = useSectionInView('Projects',0.4)
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28 relative'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.slice(0, 3).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <Link 
          href="/projects" 
          className='px-8 py-3 bg-black text-white rounded-lg hover:bg-black/80 dark:bg-white/20 dark:hover:bg-white/30 transition-colors'
        >
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export default Projects