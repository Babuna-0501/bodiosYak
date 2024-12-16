import * as React from "react";
import MainGuy from '../../assets/main_buddy.png';

export function VideoSection() {
  return (
    <div className="flex relative flex-col items-center px-16 pb-32 mt-14 w-full text-xl font-light text-white min-h-[1080px] pt-[912px] tracking-[6px] max-md:px-0 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      {/* Desktop-only image */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/5ddd0291c9f5f7dddf9919b04b33ad09b231fad81a855898b8a2fd2199768ef2?apiKey=9804d3a088fa478e8672485264720a14&"
        alt="Brand story video background"
        className="object-cover absolute inset-0 size-full hidden md:block"
      />

      {/* Smartphone-only image */}
      <img
        src={MainGuy}
        alt="mainGuy"
        className="block md:hidden w-full"
      />

    <div className="flex relative flex-wrap gap-5 justify-center items-center mb-0 max-w-full w-[559px] max-md:hidden">
      <div className="self-stretch my-auto">SEE FULL VIDEO</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/c4a57c97f5bea368e6573b0f171507438bf3ddd645b48e62b56357f0db1ed6df?apiKey=9804d3a088fa478e8672485264720a14&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[33px]"
      />
    </div>

    </div>
  );
}
