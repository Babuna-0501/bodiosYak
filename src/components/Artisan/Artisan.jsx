import * as React from "react";
import { ArtisanContent } from "./ArtisanContent";

export function Artisan() {
  return (
    <div className="flex flex-col text-xl font-light text-white">
      <div className="flex relative flex-col justify-center items-center px-20 py-96 w-full min-h-[1080px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/50842e00574339f91e18fd4201a36c6b63d9ce590da103f38c5979a5a614197f?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Mongolian artisans crafting traditional textiles"
          className="object-cover absolute inset-0 size-full"
        />
        <ArtisanContent />
      </div>
    </div>
  );
}