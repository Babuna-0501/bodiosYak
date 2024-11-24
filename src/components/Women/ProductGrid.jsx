import * as React from "react";
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
    <section className="w-full max-w-[1670px] mx-auto flex flex-wrap gap-6 items-center mt-7 whitespace-nowrap">
    <nav className="flex flex-wrap gap-5 justify-between w-full tracking-normal leading-none text-center text-black mt-44 max-md:mt-10 max-md:flex-col max-md:gap-4 max-md:text-left">
    <div className="flex gap-10 items-center max-md:flex-col max-md:gap-2 max-md:w-full">
        <button tabIndex="0" className="self-stretch my-auto">filter:</button>
        <button tabIndex="0" className="self-stretch my-auto">product type</button>
        <button tabIndex="0" className="self-stretch my-auto">Size</button>
        <button tabIndex="0" className="self-stretch my-auto">Colour</button>
    </div>
    <p className="max-md:text-left max-md:w-full">12 products</p>
    </nav>
      <div className="flex flex-wrap gap-6 justify-center w-full">
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
