import { useState, Fragment, useEffect } from "react";
import { galleryImages } from "@/data/galleryImages";

interface GalleryGridProps {
  mode: "2x" | "4x" | "full";
  onImageClick?: (index: number) => void;
}

export const GalleryGrid = ({ mode, onImageClick }: GalleryGridProps) => {
  const [isFading, setIsFading] = useState(false);

  // Use static images instead of API
  const images = galleryImages;

  // Original uses percentage widths on flex items, not grid-cols
  const itemWidth = mode === "2x" ? "w-1/2" : "w-1/4";

  // Handle mode change with fadeOut transition (matches original)
  const [currentMode, setCurrentMode] = useState(mode);
  useEffect(() => {
    if (mode !== currentMode) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentMode(mode);
        setTimeout(() => {
          setIsFading(false);
        }, 100);
      }, 200);
    }
  }, [mode, currentMode]);

  const handleThumbnailClick = (index: number) => {
    // Direct lightbox on both mobile and desktop
    onImageClick?.(index);
  };

  return (
    <div
      className={`flex flex-wrap p-[30px_10px] pt-0 bg-white min-w-[300px] mx-auto transition-opacity duration-200 md:p-[30px_20px] ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      {images.map((image, index) => (
        <Fragment key={image.id}>
          <div
            className={`${itemWidth} border-white border-b-[6px] border-x-0 border-t-0 box-border flex flex-wrap justify-start items-start transition-opacity duration-300 md:border-[20px]`}
          >
            <div className="flex flex-wrap justify-start items-start relative w-full">
              <button
                onClick={() => handleThumbnailClick(index)}
                className="w-full inline px-[6px] py-px text-center cursor-pointer h-full"
                aria-label={`Image ${index + 1} by ${image.photographer}`}
              >
                <img
                  src={image.src.large}
                  alt={`Minimalist Nature ${index + 1}`}
                  className="max-w-full object-cover cursor-pointer"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
