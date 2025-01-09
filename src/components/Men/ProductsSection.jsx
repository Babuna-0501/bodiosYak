import React from "react";
import { ProductCard } from "./ProductCardMen";

const products = [
  { id: 1, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/927f645d4a067b7ddfbde81d6c357a95231c85849568c104bafa84cdd175bda3?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 2, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/da5823ec57a034acab86bbc30f3e39bc2177fd01cf58eedb4245939daa29eb9d?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 3, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/927f645d4a067b7ddfbde81d6c357a95231c85849568c104bafa84cdd175bda3?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 4, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/927f645d4a067b7ddfbde81d6c357a95231c85849568c104bafa84cdd175bda3?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 5, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/da5823ec57a034acab86bbc30f3e39bc2177fd01cf58eedb4245939daa29eb9d?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 },
  { id: 6, imageUrl: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/927f645d4a067b7ddfbde81d6c357a95231c85849568c104bafa84cdd175bda3?apiKey=9804d3a088fa478e8672485264720a14&", title: "Cardigan", price: 850 }
];

export function ProductsSection() {
  return (
    <section className="w-full max-w-[1670px] mx-auto flex flex-col gap-12 items-center mt-7 font-libreFranklin font-light">
      {/* Filter Navigation */}
      <nav className="flex flex-wrap gap-10 items-center justify-center tracking-normal leading-none text-center max-md:mt-10">
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Filter:</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Product Type</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Size</button>
        <button className="capitalize px-4 py-2 border rounded-md hover:bg-gray-200" tabIndex="0">Colour</button>
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
