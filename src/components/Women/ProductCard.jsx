/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";

export default function ProductCard({ imageUrl, title, price }) {
  return (
    <div className="flex flex-col justify-center self-stretch my-auto w-full max-w-[540px]">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`${title} product image`}
        className="object-contain max-w-full aspect-[0.67] w-full"
      />
      <div className="mt-4 text-center">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-lg text-gray-600">${price}</div>
      </div>
    </div>
  );
}
