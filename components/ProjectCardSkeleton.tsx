"use client";

export default function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-100 dark:bg-white/10 border border-black/5 rounded-lg overflow-hidden h-full flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-48 bg-gray-200 dark:bg-white/5" />

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col flex-grow gap-4">
        {/* Title Skeleton */}
        <div className="flex items-start justify-between gap-2">
          <div className="h-6 bg-gray-300 dark:bg-white/10 rounded w-3/4" />
          <div className="h-8 w-8 bg-gray-300 dark:bg-white/10 rounded-full flex-shrink-0" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 flex-grow">
          <div className="h-4 bg-gray-300 dark:bg-white/10 rounded w-full" />
          <div className="h-4 bg-gray-300 dark:bg-white/10 rounded w-5/6" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2">
          <div className="h-6 bg-gray-300 dark:bg-white/10 rounded-full w-16" />
          <div className="h-6 bg-gray-300 dark:bg-white/10 rounded-full w-20" />
          <div className="h-6 bg-gray-300 dark:bg-white/10 rounded-full w-24" />
        </div>
      </div>
    </div>
  );
}
