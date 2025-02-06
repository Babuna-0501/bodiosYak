import React from "react";
import { useParams } from "react-router-dom"; 
import { ProductsSection } from "./ProductsSection";

const categoryDescriptions = {
  Men: "Explore our latest collection for men, featuring timeless styles and premium quality.",
  Women: "BODIOS, a distinguished family-owned Mongolian brand...",
  Home: "Luxury home essentials made from the finest materials.",
  Accessories: "Enhance your style with our handcrafted accessories."
};

export function CollectionPage() {
  const { category } = useParams(); 

  return (
    <div className="flex flex-col items-center text-black pt-[145px] mb-[100px]">
      {/* Heading */}
      <h1 className="text-8xl text-center uppercase max-md:text-4xl">{category}</h1>

      {/* Description */}
      <p className="text-center max-w-[800px] mt-5">{categoryDescriptions[category] || "Discover our collection."}</p>

      {/* Product Section */}
      <ProductsSection category={category} />
    </div>
  );
}
