import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { galleryImages } from "@/data/galleryImages";
import { usePassword } from "@/contexts/PasswordContext";
import { PasswordGate } from "@/components/PasswordGate";

const navigation = [
  { name: "Work", href: "/" },
  { name: "About", href: "/about" }
];

const ImageDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { isUnlocked } = usePassword();
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

  // Show password gate if project is protected and not unlocked
  if (image.passwordProtected && !isUnlocked) {
    return <PasswordGate><></></PasswordGate>;
  }

  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center h-[55px] px-10 py-4 absolute top-0 left-0 right-0 z-[1090] bg-white">
        <h1 className="text-lg font-bold tracking-[0] leading-[25px]">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-300">Sam Puri</Link>
        </h1>
        <nav className="flex items-center gap-6">
          {navigation.map(item => {
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`text-sm font-medium tracking-[0] leading-[25px] transition-opacity duration-300 ${isActive ? "text-black" : "text-gray-400 hover:text-black"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Content Area */}
      <div className="absolute top-[55px] bottom-[75px] left-0 right-0">
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
