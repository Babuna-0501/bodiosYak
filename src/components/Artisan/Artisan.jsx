import * as React from "react";
import { ArtisanContent } from "./ArtisanContent";
import ArtisanV from "../../assets/artisan.mp4";

export function Artisan() {
  return (
    <div className="flex flex-col text-xl font-light text-white">
      <div className="relative w-full h-[1080px] max-md:h-auto">
        {/* Video Section */}
        <video
          src={ArtisanV}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex justify-center items-center w-full h-full px-20 max-md:px-5">
          <ArtisanContent />
        </div>

        {/* Optional: Add a Background Overlay for Better Text Visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
    </div>
  );
}
