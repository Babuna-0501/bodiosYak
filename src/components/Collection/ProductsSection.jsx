import React from "react";
import { ProductCard } from "./ProductCard";

const allProducts = {
  Men: [
    { id: 1, imageUrl: "men1.jpg", title: "Men’s Cardigan", price: 850 },
    { id: 2, imageUrl: "men2.jpg", title: "Men’s Sweater", price: 750 }
  ],
  Women: [
    { id: 1, imageUrl: "women1.jpg", title: "Women’s Cardigan", price: 850 },
    { id: 2, imageUrl: "women2.jpg", title: "Women’s Sweater", price: 750 }
  ],
  Home: [
    { id: 1, imageUrl: "home1.jpg", title: "Luxury Blanket", price: 1200 }
  ],
  Accessories: [
    { id: 1, imageUrl: "accessory1.jpg", title: "Woolen Scarf", price: 300 }
  ]
};

export function ProductsSection({ category }) {
  const products = allProducts[category] || [];

  return (
    <section className="w-full max-w-[1670px] mx-auto flex flex-col gap-12 items-center mt-7 font-libreFranklin font-light">
      {/* Filter Navigation */}
      <nav className="flex flex-wrap gap-10 items-center justify-center tracking-normal leading-none text-center max-md:mt-10">
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200">Filter:</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200">Product Type</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200">Size</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200">Colour</button>
      </nav>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-md:px-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
