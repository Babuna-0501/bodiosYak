/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";

export function ProductCard({ imageUrl, title, price }) {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[540px]">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`${title} product image`}
        className="object-contain max-w-full aspect-[0.67] w-full"
      />
      <h3 className="mt-4 text-center text-lg font-semibold">
        {title}
        <br />
        <span className="text-gray-500">${price}</span>
      </h3>
    </div>
  );
}
