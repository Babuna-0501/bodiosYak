import * as React from "react";
import { ProductsSection } from "./ProductsSection";

export function MenCollection() {
  return (
    <div className="flex flex-col items-center text-black pt-[145px]">
      <h1 className="text-8xl text-center uppercase max-md:text-4xl">men</h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/ba28c7495244ca6640e1f9179eedc34e794daea7d554c61eef0bf49f7044a876?apiKey=9804d3a088fa478e8672485264720a14&"
        alt="Men's collection banner"
        className="object-contain self-stretch mt-11 w-full aspect-[1.78] max-md:mt-10 max-md:max-w-full"
      />
    <section className="self-center leading-[24px] mt-11 text-center max-md:mt-10 w-[1027px] max-md:max-w-[1027px]">
        <p>
          BODIOS, a distinguished family-owned Mongolian brand with a heritage
          spanning 30 years, is now proudly led by its second generation. With
          privileged access to 60% of Mongolia's yak down, we meticulously
          oversee each step of production to achieve extraordinary softness—a
          true embodiment of luxury. By blending traditional craftsmanship with
          contemporary design, BODIOS creates timeless pieces that resonate with
          refined taste and uncompromising quality.
        </p>
      </section>
      <ProductsSection />
    </div>
  );
}