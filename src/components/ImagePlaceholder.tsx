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
  const aspectRatio = width && height ? (width / height) * 100 : 133.33;

  return (
    <div
      className={`bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 flex items-center justify-center rounded-lg overflow-hidden border-2 border-dashed border-blue-300 dark:border-blue-700 w-full ${className}`}
      style={{
        paddingBottom: `${aspectRatio}%`,
        position: "relative",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <ImageOff className="w-10 h-10 md:w-12 md:h-12 text-blue-400 dark:text-blue-600 mb-2 md:mb-3" />
        <p className="text-blue-600 dark:text-blue-300 font-semibold text-xs md:text-sm px-2 text-center">
          Images Coming Soon
        </p>
        <p className="text-blue-500 dark:text-blue-400 text-xs mt-1 px-2 text-center">
          Professional photography available shortly
        </p>
      </div>
    </div>
  );
}
