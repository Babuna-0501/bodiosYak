import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/dad397fab719d7a9d53aaaab13ec6418c3b0e916fb0edc09f184cdc8ec79c7f7?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 2, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/5722c04321dc156035bd8392a9d06be3d2d32d7b7d83cffa4e28f246f77c40d1?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 3, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/c5b9342df14c1ddcae1aabd1daca11bbaac657107b53c4917685886c8ce7db29?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 4, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/dad397fab719d7a9d53aaaab13ec6418c3b0e916fb0edc09f184cdc8ec79c7f7?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 5, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/5722c04321dc156035bd8392a9d06be3d2d32d7b7d83cffa4e28f246f77c40d1?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 6, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/c5b9342df14c1ddcae1aabd1daca11bbaac657107b53c4917685886c8ce7db29?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 }
];

export default function ProductGrid() {
  return (
    <section className="w-full max-w-[1670px] mx-auto flex flex-col gap-12 items-center mt-7 font-libreFranklin font-light">
      {/* Filter Navigation */}
      {/* Filter Navigation */}
      <nav className="flex flex-wrap gap-10 items-center justify-center tracking-normal leading-none text-center  max-md:mt-10">
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Filter:</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Product Type</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Size</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Colour</button>
      </nav>

      {/* Product Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full max-md:px-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
