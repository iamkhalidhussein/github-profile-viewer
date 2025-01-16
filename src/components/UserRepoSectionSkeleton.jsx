import React from 'react';
import { Card, CardContent, CardHeader, } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

const UserRepoSectionSkeleton = () => {
    return (
        <Card className="w-full mx-auto mb-3 max-w-3xl">
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          
          <div className="space-y-1">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
  
          <div className="flex items-center space-x-1">
            <Skeleton className="h-8 w-24" />
            <Separator orientation="vertical" className="h-[20px]" />
            <Skeleton className="h-8 w-8" />
          </div>
        </CardHeader>
  
        <CardContent>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            
            <div className="flex items-center">
              <Skeleton className="h-3 w-3 rounded-full bg-yellow-400" />
              <Skeleton className="h-4 w-16 ml-2" />
            </div>
  
            <div className="flex items-center">
              <Skeleton className="h-4 w-4 mr-1" />
              <Skeleton className="h-4 w-20" />
            </div>
  
            <div className="flex items-center">
              <Skeleton className="h-4 w-4 mr-1" />
              <Skeleton className="h-4 w-16" />
            </div>
  
            <div className="flex items-center">
              <Skeleton className="h-4 w-4 mr-1" />
              <Skeleton className="h-4 w-16" />
            </div>
  
            <div className="flex items-center">
              <Skeleton className="h-4 w-4 mr-1" />
              <Skeleton className="h-4 w-16" />
            </div>
  
            <div className="flex items-center">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
};

export default UserRepoSectionSkeleton;