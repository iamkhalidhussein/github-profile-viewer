import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const UserLeftSectionSkeleton = () => {
    return (
         <div className="bg-white md:w-2/5 h-1/2 dark:bg-black rounded-md mt-10 pb-4 md:px-5 px-4 pt-4">

      <div className="flex gap-4">
        <Skeleton className="w-14 h-14 rounded-full" />
        <div className="w-full">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      <hr className="mt-5" />
      <Skeleton className="h-4 w-3/4 mt-3" />
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <div className="flex gap-10">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <hr className="my-3" />
      
      <Skeleton className="h-4 w-3/4" />
    </div>
    );
};

export default UserLeftSectionSkeleton;