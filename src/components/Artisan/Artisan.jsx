import * as React from "react";
import { ArtisanContent } from "./ArtisanContent";
import ArtisanV from "../../assets/artisan.mp4";

export function Artisan() {
  return (
    <div className="flex flex-col text-xl font-light text-white">
      <div className="relative w-full h-[1080px] max-md:h-[700px]">
        {/* Video Section */}
        <video
          src={ArtisanV}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        {/* Content Overlay - Title + Description on Desktop */}
        <div className="relative z-10 flex justify-center items-center w-full h-full px-20 max-md:px-5">
          <ArtisanContent />
        </div>

        {/* Background Overlay for Visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Description Below Video on Mobile Only */}
      <div className="md:hidden px-5 mt-5">
        <ArtisanContent mobileOnly />
      </div>
    </div>
  );
}
