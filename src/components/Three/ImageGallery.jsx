import * as React from "react";
import { GalleryImage } from "./GalleryImage";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/22480d6dffee37b953eb8dea3f978ad222a2342df52e2820a7941fb78190ae58?apiKey=9804d3a088fa478e8672485264720a14&",
    hoverSrc: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/5b24c8d34f73e064053996abe0822e72e9f54db412af98c1053a96259031e21a?apiKey=9804d3a088fa478e8672485264720a14&"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/d7e07fae9ee164806f28e63adeca0cb78745d94a37e026d300f70635db2a07f4?apiKey=9804d3a088fa478e8672485264720a14&",
    hoverSrc: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/2a0ee10e29a4eddb8a7a255144e486d4023c98c23b7d7c17ab829694c58955ee?apiKey=9804d3a088fa478e8672485264720a14&"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/19b8c76a3d3af5fcce9df47df4a8fba360541a6c6fd78582fbf45df08982c424?apiKey=9804d3a088fa478e8672485264720a14&",
    hoverSrc: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/4010c5cf1e1ffaf3c220ff80e187a194a20e3dfc24bf294b3d3ff30d2635d0eb?apiKey=9804d3a088fa478e8672485264720a14&"
  }
];

export function ImageGallery() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-md:grid-cols-2 max-sm:grid-cols-1 mb-[100px]">
      {galleryImages.map((image, index) => (
        <div key={index} className="relative w-full aspect-[4/5] group">
          {/* Original Image */}
          <GalleryImage
            src={image.src}
            className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0"
            alt={`Gallery image ${index + 1}`}
          />
          {/* Hover Image */}
          <GalleryImage
            src={image.hoverSrc}
            className="object-cover w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
            alt={`Gallery hover image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
