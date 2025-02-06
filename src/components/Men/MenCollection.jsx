import * as React from "react";
import { ProductsSection } from "./ProductsSection";

export function MenCollection() {
  return (
    <div className="flex flex-col items-center text-black pt-[145px] mb-[100px]">
      {/* Heading */}
      <h1 className="text-8xl text-center uppercase max-md:text-4xl">Men</h1>
      {/* Product Section */}
      <ProductsSection />
    </div>
  );
}
