import React from 'react';

export const ResumeSkeleton: React.FC = () => {
  return (
    <div className="w-full h-full bg-white p-12 flex flex-col gap-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="border-b border-slate-100 pb-8 space-y-4">
        <div className="h-10 bg-slate-200 rounded w-1/2"></div>
        <div className="h-6 bg-slate-200 rounded w-1/4"></div>
        <div className="flex gap-4 pt-2">
          <div className="h-3 bg-slate-200 rounded w-24"></div>
          <div className="h-3 bg-slate-200 rounded w-24"></div>
          <div className="h-3 bg-slate-200 rounded w-24"></div>
        </div>
      </div>

      {/* Summary Skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-slate-200 rounded w-32 mb-2"></div>
        <div className="h-2.5 bg-slate-100 rounded w-full"></div>
        <div className="h-2.5 bg-slate-100 rounded w-full"></div>
        <div className="h-2.5 bg-slate-100 rounded w-3/4"></div>
      </div>

      {/* Experience Skeleton */}
      <div className="space-y-6">
        <div className="h-4 bg-slate-200 rounded w-40 mb-2"></div>
        
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
             <div className="flex justify-between">
                <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                <div className="h-3 bg-slate-100 rounded w-20"></div>
             </div>
             <div className="h-3 bg-slate-100 rounded w-1/4 mb-1"></div>
             <div className="h-2 bg-slate-100 rounded w-full"></div>
             <div className="h-2 bg-slate-100 rounded w-5/6"></div>
          </div>
        ))}
      </div>

      {/* Skills Grid Skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-slate-200 rounded w-24 mb-2"></div>
        <div className="flex flex-wrap gap-2">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="h-6 bg-slate-100 rounded w-20"></div>
           ))}
        </div>
      </div>
    </div>
  );
};