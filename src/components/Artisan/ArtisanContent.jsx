import * as React from "react";
import { CallToAction } from "./CallToAction";

export function ArtisanContent({ mobileOnly = false }) {
  return (
    <div
      className={`flex relative flex-col ${
        mobileOnly ? "items-center px-5" : "max-w-full w-[1121px]"
      } mb-0 max-md:mb-2.5 py-6`}
    >
      {/* Title (Always Inside Video) */}
      {!mobileOnly && (
        <div className="self-start ml-5 text-5xl text-center max-md:max-w-full max-md:text-4xl">
          FROM A KNIT COMMUNITY OF MONGOLIAN <br />
          ARTISANS TO YOU
        </div>
      )}

      {/* Description (Inside Video on Desktop, Moves Below on Mobile) */}
      <div
        className={`mt-8 md:mt-10 leading-7 text-justify font-libreFranklin text-[12px] sm:text-[12px] md:text-xl lg:text-2xl ${
          mobileOnly ? "text-black" : "text-white max-md:hidden"
        }`}
      >

        BODIOS, a distinguished family-owned Mongolian brand with 30 years
        of heritage, is now proudly led by its second generation. With
        privileged access to 60% of Mongolia's yak down, we meticulously
        oversee each step of the process to create an extraordinary
        softness—an embodiment of luxury at its finest. Seamlessly merging
        traditional craftsmanship with contemporary design, BODIOS offers
        timeless pieces that resonate with refined taste and uncompromising
        quality...
        <div className="self-stretch text-center my-auto">About us </div>
      </div>

      {!mobileOnly && <CallToAction />}
    </div>
  );
}
