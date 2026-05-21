"use client";

import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import SectionHeading from "@/components/Heading";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [loadedProjects, setLoadedProjects] = useState<(typeof projectsData)[number][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate dynamic loading with staggered effect
    const timer = setTimeout(() => {
      setLoadedProjects([...projectsData]);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const totalSkeletons = 6;
  return (
    <main className="flex flex-col items-center px-4 -mt-20 pb-12 min-h-screen">
      <div className="max-w-6xl w-full">
        {/* Header with back button */}
        <div className="mb-12 flex items-center justify-between">
          <SectionHeading>All Projects</SectionHeading>
          <Link
            href="/#projects"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors text-sm text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"
          >
            <IoArrowBack className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {isLoading ? (
            // Skeleton loaders
            Array.from({ length: totalSkeletons }).map((_, index) => (
              <ProjectCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // Loaded projects with staggered animation
            loadedProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`,
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))
          )}
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </main>
  );
}
