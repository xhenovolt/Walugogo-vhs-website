import React from "react";
import { ImageOff } from "lucide-react";

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export default function ImagePlaceholder({
  width = 400,
  height = 300,
  className = "",
  alt = "Image placeholder",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 flex items-center justify-center rounded-lg overflow-hidden border-2 border-dashed border-blue-300 dark:border-blue-700 ${className}`}
      style={{ width: width, height: height }}
    >
      <div className="text-center">
        <ImageOff className="w-12 h-12 text-blue-400 dark:text-blue-600 mx-auto mb-3" />
        <p className="text-blue-600 dark:text-blue-300 font-semibold text-sm">
          Images Coming Soon
        </p>
        <p className="text-blue-500 dark:text-blue-400 text-xs mt-1">
          Professional photography will be available shortly
        </p>
      </div>
    </div>
  );
}
