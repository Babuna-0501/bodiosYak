import * as React from "react";
import ProductGrid from "./ProductGrid";

export default function ProductsPage() {
  return (
    <div className="flex flex-col text-lg leading-6 text-black pt-[145px]">
      <div className="self-center text-8xl text-center uppercase max-md:text-4xl">
        Women
      </div>
      
      <section className="self-center leading-[24px] mt-11 text-center max-md:mt-10 w-[1027px] max-md:max-w-[1027px]">
        BODIOS, a distinguished family-owned Mongolian brand with a heritage
        spanning 30 years, is now proudly led by its second generation. With
        privileged access to 60% of Mongolia's yak down, we meticulously oversee
        each step of production to achieve extraordinary softness—a true
        embodiment of luxury. By blending traditional craftsmanship with
        contemporary design, BODIOS creates timeless pieces that resonate with
        refined taste and uncompromising quality.
      </section>
      <ProductGrid />
    </div>
  );
}