import * as React from "react";
import { VideoSection } from "./VideoSection";
import { BrandDescription } from "./BrandDescription";
import { ImageGallery } from "./ImageGallery";

export function BrandStory() {
  return (
    <div className="flex flex-col bg-customBg py-[109px]">
      {/* <BrandDescription />
      <VideoSection /> */}
      <ImageGallery />
    </div>
  );
}