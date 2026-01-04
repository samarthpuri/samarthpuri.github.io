import { Dialog } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface LightboxProps {
  images: Array<{
    src: { original: string; large: string };
    photographer: string;
    id: number;
  }>;
  initialIndex: number | null;
  onClose: () => void;
}

export const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);

  useEffect(() => {
    if (initialIndex !== null) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation disabled

  // Scroll lock when lightbox opens
  useEffect(() => {
    if (initialIndex !== null) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [initialIndex]);

  // Swipe gesture handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    onSwipedDown: (eventData) => {
      if (eventData.deltaY > 100) {
        onClose();
      }
    },
    trackMouse: false,
    preventScrollOnSwipe: true,
    delta: 10,
    swipeDuration: 500,
    touchEventOptions: { passive: false },
  });

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === images.length - 1;

  return (
    <Dialog
      open={initialIndex !== null}
      onOpenChange={(open) => !open && onClose()}
    >
      <DialogPrimitive.Portal>
        {/* Backdrop (white, z-1040) */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-[1040] bg-white opacity-100 transition-opacity duration-300" />

        {/* Outer Container (z-1050) - Apply swipe handlers here */}
        <DialogPrimitive.Content
          {...swipeHandlers}
          className="fixed inset-0 z-[1050] overflow-hidden text-left bg-transparent outline-none touch-action-pan-y"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {/* Content Area (reserves 75px at bottom) */}
          <div className="lg-content absolute top-0 bottom-[75px] left-0 right-0">
            {/* Inner (transition container) */}
            <div className="lg-inner absolute w-full inset-0 whitespace-nowrap">
              {/* Item Container (current image) */}
              <div className="lg-item inline-block absolute w-full h-full p-10 text-center z-[1060]">
                {/* Image Wrap (centering with ::before trick) */}
                <div className="lg-img-wrap absolute inset-0 whitespace-nowrap text-[0] inline-block w-full h-full p-10">
                  <img
                    src={currentImage?.src.original}
                    alt={`Image ${currentIndex + 1}`}
                    className="lg-object lg-image inline-block align-middle max-w-full max-h-full w-auto h-auto relative scale-[1.4] md:scale-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Prev/Next Buttons - Touch-optimized */}
          <button
            onClick={handlePrev}
            className={`lg-prev absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-[22px] text-black hover:opacity-50 transition-opacity z-[1084] border-none bg-transparent outline-none cursor-pointer p-3 md:p-0 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isAtStart ? "opacity-0 pointer-events-none" : ""
            }`}
            aria-label="Previous image"
            disabled={isAtStart}
          >
            ◄
          </button>

          <button
            onClick={handleNext}
            className={`lg-next absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-[22px] text-black hover:opacity-50 transition-opacity z-[1084] border-none bg-transparent outline-none cursor-pointer p-3 md:p-0 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isAtEnd ? "opacity-0 pointer-events-none" : ""
            }`}
            aria-label="Next image"
            disabled={isAtEnd}
          >
            ►
          </button>

          {/* Components (contains metadata) */}
          <div className="lg-components absolute bottom-0 left-0 right-0 z-[1080] will-change-transform transition-transform duration-[350ms] ease-out">
            <div
              id="lightbox-description"
              className="lg-sub-html absolute bottom-[17px] left-0 text-left px-10 py-[10px] text-black text-[13px] leading-[1.4em] opacity-100 transition-opacity duration-200 ease-out"
              role="status"
              aria-live="polite"
            >
              {currentImage?.photographer}
              <br />
              From Pexels
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
};
