import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  caption: string;
  title: string;
  year: string;
}

interface FilmstripGalleryProps {
  images: GalleryImage[];
}

export const FilmstripGallery = ({ images }: FilmstripGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = imageRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: [0, 0.5, 1],
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [images]);

  const scrollToImage = (index: number) => {
    const targetRef = imageRefs.current[index];
    if (targetRef && scrollContainerRef.current) {
      targetRef.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    scrollToImage(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    scrollToImage(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="w-full">
      {/* Gallery Container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{
          height: "clamp(300px, 50vh, 600px)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="relative flex-shrink-0 h-full cursor-pointer snap-center"
              onClick={() => scrollToImage(index)}
              style={{ width: "auto" }}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="h-full w-auto object-cover"
                loading="lazy"
              />
              
              {/* Caption Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-medium ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-subhead text-white">
                  <strong>{image.caption}</strong>
                </p>
                <p className="text-footnote text-white/90 mt-1">
                  {image.title} · {image.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-x-4 mt-6">
        <button
          onClick={handlePrev}
          className="text-body font-normal cursor-pointer hover:opacity-70 transition-opacity duration-fast flex items-center gap-2"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
          Prev
        </button>
        <div className="w-px h-4 bg-gray-300" />
        <button
          onClick={handleNext}
          className="text-body font-normal cursor-pointer hover:opacity-70 transition-opacity duration-fast flex items-center gap-2"
          aria-label="Next image"
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
