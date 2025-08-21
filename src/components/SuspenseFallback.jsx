import React from "react";

export default function SuspenseFallback({ 
  message = "Loading content...", 
  brand = "Md. Abdullah Junayed" 
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-6 relative">
      {/* Animated brand name */}
      <h1 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 animate-pulse">
        {brand}
      </h1>

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-slate-300 border-t-indigo-500 rounded-full animate-spin"></div>

      {/* Loading message */}
      <p className="text-slate-600 dark:text-slate-300 font-medium animate-pulse">
        {message}
      </p>
    </div>
  );
}