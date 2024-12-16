import * as React from "react";
import { SeeMoreButton } from "./SeeMoreButton";

export function BrandDescription() {
  return (
    <>
      <div className="z-10 self-center -mt-2 text-xl max-md:text-sm font-light leading-8 max-md:leading-6 text-center text-black w-[802px] max-md:max-w-full max-md:px-[25px]">
        BODIOS, a distinguished family-owned Mongolian brand with 30 years of
        heritage, is now proudly led by its second generation. With privileged
        access to 60% of Mongolia's yak down, we meticulously oversee each step
        of the process to create an extraordinary softness—an embodiment of
        luxury at its finest. Seamlessly merging traditional craftsmanship with
        contemporary design, BODIOS offers timeless pieces that resonate with
        refined taste and uncompromising quality...
      </div>
      <SeeMoreButton />
    </>
  );
}
