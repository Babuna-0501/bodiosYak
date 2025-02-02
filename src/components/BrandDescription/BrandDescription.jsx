import * as React from "react";
import { SeeMoreButton } from "./SeeMoreButton";

export function BrandDescription() {
    return (
      <main className="flex w-full bg-customBg flex-col items-center justify-center py-20 px-4 max-md:py-12">
        <section
          className="w-full max-w-[758px] text-sm font-libreFranklin tracking-normal leading-5 text-center font-light text-black max-md:text-xs max-md:leading-4"
          aria-label="Brand Story"
        >
          <p>
            BODIOS, a distinguished family-owned Mongolian brand with 30 years of
            heritage, is now proudly led by its second generation. With privileged
            access to 60% of Mongolia's yak down, we meticulously oversee each step
            of the process to create an extraordinary softness—an embodiment of
            luxury at its finest. Seamlessly merging traditional craftsmanship with
            contemporary design, BODIOS offers timeless pieces that resonate with
            refined taste and uncompromising quality....
          </p>
        </section>
        {/* <SeeMoreButton className="mt-6 max-md:mt-4" /> */}
      </main>
    );
}
  
  
  