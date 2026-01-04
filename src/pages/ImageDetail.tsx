import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { galleryImages } from "@/data/galleryImages";

const ImageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageIndex = parseInt(id || "0", 10);
  const image = galleryImages[imageIndex];

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!image) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Image not found</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      {/* Navigation Links */}
      <nav className="absolute top-6 left-10 z-[1090] flex gap-6">
        <Link 
          to="/" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Work
        </Link>
        <Link 
          to="/about" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
      </nav>

      {/* Content Area */}
      <div className="absolute top-0 bottom-[75px] left-0 right-0">
        <div className="absolute w-full inset-0 whitespace-nowrap">
          <div className="inline-block absolute w-full h-full p-10 text-center">
            <div className="absolute inset-0 whitespace-nowrap text-[0] inline-block w-full h-full p-10 before:content-[''] before:inline-block before:h-full before:w-0 before:align-middle">
              <img 
                src={image.src.original} 
                alt={image.title || `Image ${imageIndex + 1}`}
                className="inline-block align-middle max-w-full max-h-full w-auto h-auto relative"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="absolute bottom-0 left-0 right-0 z-[1080]">
        <div className="absolute bottom-[17px] left-0 text-left px-10 py-[10px] text-black text-[13px] leading-[1.4em]">
          {image.photographer}
          <br />
          From Pexels
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
