import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LeftInfoPanel } from "@/components/LeftInfoPanel";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Lightbox } from "@/components/Lightbox";
import { galleryImages } from "@/data/galleryImages";
import { useIsMobile } from "@/hooks/use-mobile";
type GalleryMode = "2x" | "4x" | "full";
const navigation = [{
  name: "Work",
  href: "/"
}, {
  name: "About",
  href: "/about"
}];
export default function Portfolio() {
  const [galleryMode] = useState<GalleryMode>("2x");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = galleryImages;
  const isMobile = useIsMobile();
  const location = useLocation();

  // Mobile layout (stacked)
  if (isMobile) {
    return <div className="min-h-screen flex flex-col bg-white">
        <header className="flex justify-between items-center h-[55px] px-5 py-4 bg-white">
          <h1 className="text-base font-bold tracking-[0] leading-[25px]">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
              Marcus Chen
            </Link>
          </h1>
          <nav className="flex items-center gap-4">
            {navigation.map(item => {
            const isActive = location.pathname === item.href;
            return <Link key={item.name} to={item.href} className={`text-base font-bold tracking-[0] leading-[25px] transition-opacity duration-300 ${isActive ? "text-black" : "text-gray-400 hover:text-black"}`}>
                  {item.name}
                </Link>;
          })}
          </nav>
        </header>

        <main>
          <LeftInfoPanel className="pb-[20px]" />
          <GalleryGrid mode="2x" onImageClick={index => setLightboxIndex(index)} />
        </main>

        <Lightbox images={images} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      </div>;
  }

  // Desktop split-screen layout
  return <div className="h-screen flex flex-col overflow-hidden bg-white">
      {/* Simplified Header */}
      <header className="flex justify-between items-center h-[55px] px-10 py-4 absolute top-0 left-0 right-0 z-[1080] bg-white">
        <h1 className="text-lg font-bold tracking-[0] leading-[25px]">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-300">Sam Puri</Link>
        </h1>
        <nav className="flex items-center gap-6">
          {navigation.map(item => {
          const isActive = location.pathname === item.href;
          return <Link key={item.name} to={item.href} className={`text-lg font-bold tracking-[0] leading-[25px] transition-opacity duration-300 ${isActive ? "text-black" : "text-gray-400 hover:text-black"}`}>
                {item.name}
              </Link>;
        })}
        </nav>
      </header>

      {/* Split Screen Layout */}
      <div className="pt-[55px] h-[calc(100vh-55px)] overflow-hidden flex">
        {/* Left Panel */}
        <div className="w-1/2 h-full">
          <LeftInfoPanel />
        </div>

        {/* Divider */}
        <div className="w-0.5 bg-[#efebe7] relative">
          <div className="absolute top-1/2 left-0 w-0.5 h-[200px] bg-black transform -translate-y-1/2 translate-y-[25px]" />
        </div>

        {/* Right Panel */}
        <div className="w-1/2 h-full overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
          <GalleryGrid mode={galleryMode} onImageClick={index => setLightboxIndex(index)} />
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox images={images} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>;
}