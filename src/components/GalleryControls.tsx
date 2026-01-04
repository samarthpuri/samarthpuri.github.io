type GalleryMode = "2x" | "4x" | "full";

interface GalleryControlsProps {
  mode: GalleryMode;
  onModeChange: (mode: GalleryMode) => void;
}

export const GalleryControls = ({
  mode,
  onModeChange,
}: GalleryControlsProps) => {
  return (
    <div className="flex items-center gap-1.5">
      {/* Full View Button */}
      <button
        onClick={() => onModeChange("full")}
        className="w-[25px] h-[25px] rounded-full border-2 border-black bg-transparent hover:scale-110 transition-transform duration-300"
        aria-label="Full view mode"
        title="Full view"
      />

      {/* 2x Grid Button */}
      <button
        onClick={() => onModeChange("2x")}
        className={`w-[25px] h-[25px] rounded-full border border-black bg-white hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden ${
          mode === "2x" ? "ring-2 ring-black" : ""
        }`}
        aria-label="2x grid mode"
        title="2x grid"
      >
        <img src="/static/2xgrid.svg" alt="" className="w-4 h-4" />
      </button>

      {/* 4x Grid Button */}
      <button
        onClick={() => onModeChange("4x")}
        className={`w-[25px] h-[25px] rounded-full border border-black bg-white hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden ${
          mode === "4x" ? "ring-2 ring-black" : ""
        }`}
        aria-label="4x grid mode"
        title="4x grid"
      >
        <img src="/static/4xgrid.svg" alt="" className="w-4 h-4" />
      </button>
    </div>
  );
};
