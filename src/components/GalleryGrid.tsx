import { galleryImages } from "@/data/galleryImages";

interface GalleryGridProps {
  mode: "2x" | "4x" | "full";
  onImageClick?: (index: number) => void;
}

export const GalleryGrid = ({ onImageClick }: GalleryGridProps) => {
  const images = galleryImages;

  const handleThumbnailClick = (index: number) => {
    onImageClick?.(index);
  };

  return (
    <div className="flex flex-col p-6 md:p-10 bg-white">
      {images.map((image, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div
            key={image.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16 items-center`}
          >
            {/* Image */}
            <div className={`${isEven ? 'md:order-1' : 'md:order-2'} order-1`}>
              <button
                onClick={() => handleThumbnailClick(index)}
                className="w-full cursor-pointer"
                aria-label={`View ${image.title}`}
              >
                <img
                  src={image.src.large}
                  alt={image.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </button>
            </div>
            
            {/* Text */}
            <div className={`${isEven ? 'md:order-2' : 'md:order-1'} order-2 flex flex-col justify-center`}>
              <h3 className="text-2xl md:text-3xl font-medium mb-3">{image.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{image.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};