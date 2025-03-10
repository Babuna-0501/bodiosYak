import * as React from "react";
import Core1 from "../../assets/core1.png";
import Core2 from "../../assets/core2.png";
import Core3 from "../../assets/core3.png";
import Core4 from "../../assets/core4.png";
import Core5 from "../../assets/core5.png";
import Core6 from "../../assets/core6.png";
import Core7 from "../../assets/core7.png";

import Core1_sm from "../../assets/core1_sm.png";
import Core2_sm from "../../assets/core2_sm.png";
import Core3_sm from "../../assets/core3_sm.png";
import Core4_sm from "../../assets/core4_sm.png";
import Core5_sm from "../../assets/core5_sm.png";
import Core6_sm from "../../assets/core6_sm.png";
import Core7_sm from "../../assets/core7_sm.png";

export function ImageGallery() {
  // Define the images for desktop and mobile
  const desktopImages = [
    { src: Core2, styles: "w-[342px] h-[527px] left-0 top-[110px]" },
    { src: Core1, styles: "w-[577px] h-[392px] left-[136px] top-[452px]" },
    { src: Core3, styles: "w-[428px] h-[299px] left-[436px] top-[73px]" },
    { src: Core4, styles: "w-[436px] h-[602px] left-[1142px] top-0" },
    { src: Core6, styles: "w-[540px] h-[190px] left-[1474px] top-[210px] object-contain" },
    { src: Core5, styles: "w-[344px] h-[426px] left-[943px] top-[805px]" },
    { src: Core7, styles: "w-[330px] h-[322px] left-[1510px] top-[805px]" },
  ];

  const mobileImages = [
    { src: Core1_sm, styles: "w-[195px] object-cover h-[243px] left-0 top-[32px]" },
    { src: Core3_sm, styles: "w-[250px] object-cover h-[180px] left-[161px] top-[146px]" },
    { src: Core2_sm, styles: "w-[171px] object-cover h-[119px] left-[225px] top-0" },
    { src: Core4_sm, styles: "w-[230px] object-cover h-[318px] left-[98px] top-[353px]" },
    { src: Core5_sm, styles: "w-[160px] object-cover h-[100px] left-[253px] top-[407px]" },
    { src: Core6_sm, styles: "w-[171px] object-cover h-[225px] left-[29px] top-[523px]" },
    { src: Core7_sm, styles: "w-[150px] object-cover h-[170px] left-[262px] top-[618px]" },
  ];

  return (
    <div>
      {/* Desktop View */}
      <div
        className="relative hidden md:block mt-[50px] overflow-hidden"
        style={{ height: 1244 }}
      >
        {/* Title for Desktop */}
        <div className="absolute inset-0 z-10 flex leading-[90px] items-center justify-center text-center text-black text-[6vw] lg:text-[84px] sm:text-[50px] md:text-[65px]">
          GIFTED BY NATURE, <br /> CREATED BY BODIOS
        </div>

        {desktopImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className={`absolute ${image.styles} animate-slide`}
            style={{
              animationDelay: `-${index * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="relative block md:hidden w-[538px] h-[788px] overflow-hidden">
        {/* Title for Mobile */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-black text-[8vw] sm:text-[43px]">
          GIFTED BY NATURE, <br /> CREATED BY BODIOS
        </div>

        {mobileImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className={`absolute ${image.styles} animate-slide`}
            style={{
              animationDelay: `-${index * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
