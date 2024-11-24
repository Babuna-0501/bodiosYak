/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";

export function ProductCard({ imageUrl, title, price }) {
  return (
    <div className="flex flex-col justify-center self-stretch my-auto w-full max-w-[540px]">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`${title} product image`}
        className="object-contain max-w-full aspect-[0.67] w-[540px]"
      />
      <h3 className="mt-4">
        {title}
        <br />
        ${price}
      </h3>
    </div>
  );
}