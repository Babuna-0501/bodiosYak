import React from "react";

export function ProductCard({id, imageUrl, title, price, altText }) {
  return (
    <div className="border p-4 rounded-md shadow-lg flex flex-col justify-between items-center mx-auto max-w-[540px] w-full mb-[26px]">
      <img src={imageUrl} alt={altText || title} className="w-full h-auto" />
      <h3 className="text-lg font-semibold text-center mt-4">{title}</h3>
      <p className="text-md font-light text-center mt-2">{price.toLocaleString()} USD</p>
    </div>
  );
}
