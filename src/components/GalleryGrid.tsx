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
    const image = images[index];
    if (image.contactOnly) {
      return; // Don't navigate for contact-only projects
    }
    navigate(`/image/${index}`);
    onImageClick?.(index);
  };

  const getContactMailto = (contactOnly: { email: string; subject: string; body: string }) => {
    const subject = encodeURIComponent(contactOnly.subject);
    const body = encodeURIComponent(contactOnly.body);
    return `mailto:${contactOnly.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col p-6 md:p-10 bg-background">
      {images.map((image, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div
            key={image.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16 items-center`}
          >
            {/* Image */}
            <div className={`${isEven ? 'md:order-1' : 'md:order-2'} order-1`}>
              {image.contactOnly ? (
                <a
                  href={getContactMailto(image.contactOnly)}
                  className="w-full block"
                  aria-label={`Contact about ${image.title}`}
                >
                  <img
                    src={image.src.large}
                    alt={image.title}
                    className="w-full aspect-[1.4/1] object-cover"
                    loading="lazy"
                  />
                </a>
              ) : (
                <button
                  onClick={() => handleThumbnailClick(index)}
                  className="w-full cursor-pointer"
                  aria-label={`View ${image.title}`}
                >
                  <img
                    src={image.src.large}
                    alt={image.title}
                    className="w-full aspect-[1.4/1] object-cover"
                    loading="lazy"
                  />
                </button>
              )}
            </div>
            
            {/* Text */}
            <div className={`${isEven ? 'md:order-2' : 'md:order-1'} order-2 flex flex-col justify-center`}>
              <h3 className="text-subhead font-semibold mb-1 text-muted-foreground">{image.title}</h3>
              <p className="text-subhead text-muted-foreground/60 mb-2">{image.subtitle}</p>
              <p className="text-subhead text-muted-foreground leading-relaxed mb-3">{image.description}</p>
              {image.contactOnly ? (
                <a
                  href={getContactMailto(image.contactOnly)}
                  className="text-subhead text-muted-foreground hover:text-foreground transition-colors duration-300 w-fit"
                >
                  Contact for information →
                </a>
              ) : (
                <button
                  onClick={() => handleThumbnailClick(index)}
                  className="text-subhead text-muted-foreground hover:text-foreground transition-colors duration-300 w-fit"
                >
                  View details →
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};