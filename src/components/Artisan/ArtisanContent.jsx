import * as React from "react";
import { CallToAction } from "./CallToAction";

export function ArtisanContent() {
  return (
    <div className="flex relative flex-col mb-0 max-w-full w-[1121px] max-md:mb-2.5">
      <div className="self-start ml-5 text-5xl text-center max-md:max-w-full max-md:text-4xl">
        FROM A KNIT COMMUNITY OF MONGOLIAN <br />
        ARTISANS TO YOU
      </div>
      <div className="mt-14 leading-8 text-justify max-md:mt-10 max-md:max-w-full">
        BODIOS, a distinguished family-owned Mongolian brand with 30 years
        of heritage, is now proudly led by its second generation. With
        privileged access to 60% of Mongolia's yak down, we meticulously
        oversee each step of the process to create an extraordinary
        softness—an embodiment of luxury at its finest. Seamlessly merging
        traditional craftsmanship with contemporary design, BODIOS offers
        timeless pieces that resonate with refined taste and uncompromising
        quality...
      </div>
      <CallToAction />
    </div>
  );
}