import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { LeftInfoPanel } from "@/components/LeftInfoPanel";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Lightbox } from "@/components/Lightbox";
import { galleryImages } from "@/data/galleryImages";
import { useIsMobile } from "@/hooks/use-mobile";

type GalleryMode = "2x" | "4x" | "full";

const navigation = [
  { name: "Work", href: "/" },
  { name: "About", href: "/about" },
];

export default function Portfolio() {
  const [galleryMode] = useState<GalleryMode>("2x");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = galleryImages;
  const isMobile = useIsMobile();
  const location = useLocation();

  // Mobile layout (stacked)
  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <header className="flex justify-between items-center h-[55px] px-5 py-4 bg-white">
          <h1 className="text-base font-bold tracking-[0] leading-[25px]">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
              Marcus Chen
            </Link>
          </h1>
          <nav className="flex items-center gap-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium tracking-[0] leading-[25px] transition-opacity duration-300 ${
                    isActive ? "text-black" : "text-gray-400 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </header>

        <main>
          <LeftInfoPanel />
          <GalleryGrid
            mode="2x"
            onImageClick={(index) => setLightboxIndex(index)}
          />
        </main>

        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      </div>
    );
  }

  // Desktop split-screen layout
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      {/* Simplified Header */}
      <header className="flex justify-between items-center h-[55px] px-10 py-4 absolute top-0 left-0 right-0 z-[1080] bg-white">
        <h1 className="text-lg font-bold tracking-[0] leading-[25px]">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
            Marcus Chen
          </Link>
        </h1>
        <nav className="flex items-center gap-6">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium tracking-[0] leading-[25px] transition-opacity duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Split Screen Layout */}
      <div className="pt-[55px] h-[calc(100vh-55px)] overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Left Panel */}
          <ResizablePanel defaultSize={50} minSize={33} maxSize={65}>
            <LeftInfoPanel />
          </ResizablePanel>

          {/* Draggable Divider */}
          <ResizableHandle className="w-0.5 bg-[#efebe7] hover:bg-gray-400 transition-colors duration-300 relative group cursor-col-resize">
            {/* Visual indicator line (200px black line in center) */}
            <div className="absolute top-1/2 left-0 w-0.5 h-[200px] bg-black transform -translate-y-1/2 translate-y-[25px]" />
            {/* Wider interactive area (15px) */}
            <span className="absolute top-0 bottom-0 w-[15px] bg-transparent transform -translate-x-1/2 cursor-col-resize" />
          </ResizableHandle>

          {/* Right Panel */}
          <ResizablePanel
            defaultSize={50}
            minSize={35}
            maxSize={67}
            style={{ overflowY: "auto", scrollBehavior: "smooth" }}
          >
            <GalleryGrid
              mode={galleryMode}
              onImageClick={(index) => setLightboxIndex(index)}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
