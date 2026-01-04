import { galleryImages } from "@/data/galleryImages";
import { useNavigate } from "react-router-dom";

interface GalleryGridProps {
  mode: "2x" | "4x" | "full";
  onImageClick?: (index: number) => void;
}

export const GalleryGrid = ({ onImageClick }: GalleryGridProps) => {
  const images = galleryImages;
  const navigate = useNavigate();

  const handleThumbnailClick = (index: number) => {
    navigate(`/image/${index}`);
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
              <h3 className="text-[11px] md:text-xs font-medium mb-0.5 text-muted-foreground">{image.title}</h3>
              <p className="text-[10px] md:text-[11px] text-muted-foreground/50 mb-1.5">{image.subtitle}</p>
              <p className="text-[10px] md:text-[11px] text-muted-foreground/70 leading-relaxed mb-2">{image.description}</p>
              <button
                onClick={() => handleThumbnailClick(index)}
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-2 w-fit"
              >
                View details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};