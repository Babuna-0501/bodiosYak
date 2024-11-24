import * as React from "react";
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
    <section className="w-full max-w-[1670px] mx-auto flex flex-wrap gap-6 items-center mt-7 whitespace-nowrap">
      <nav className="flex gap-10 items-center self-start mt-48 tracking-normal leading-none text-center text-black max-md:mt-10">
        <button className="self-stretch my-auto" tabIndex="0">filter:</button>
        <button className="self-stretch my-auto" tabIndex="0">prodict type</button>
        <button className="self-stretch my-auto" tabIndex="0">Size</button>
        <button className="self-stretch my-auto" tabIndex="0">Colour</button>
      </nav>
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {products.slice(3, 6).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}