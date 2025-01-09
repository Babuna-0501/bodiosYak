import * as React from "react";
import { CallToAction } from "./CallToAction";

export function ArtisanContent() {
  return (
    <div className="flex relative flex-col mb-0 max-w-full w-full px-5 md:px-10 lg:px-20 py-4">
      {/* Title */}
      <div className="self-start ml-0 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold">
        FROM A KNIT COMMUNITY OF MONGOLIAN <br />
        ARTISANS TO YOU
      </div>

      {/* Content Text */}
      <div className="mt-8 md:mt-10 leading-7 text-justify font-libreFranklin text-[12px] sm:text-[12px] md:text-xl lg:text-2xl">
        BODIOS, a distinguished family-owned Mongolian brand with 30 years
        of heritage, is now proudly led by its second generation. With
        privileged access to 60% of Mongolia's yak down, we meticulously
        oversee each step of the process to create an extraordinary
        softness—an embodiment of luxury at its finest. Seamlessly merging
        traditional craftsmanship with contemporary design, BODIOS offers
        timeless pieces that resonate with refined taste and uncompromising
        quality...
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
