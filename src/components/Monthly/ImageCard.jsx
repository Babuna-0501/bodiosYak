import * as React from "react";

function ImageCard({ imageSrc, title }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full cursor">
      <div className="flex relative flex-col grow pb-20 text-8xl text-white uppercase whitespace-nowrap min-h-[1224px] pt-[1039px] max-md:px-5 max-md:pt-24 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-cover absolute inset-0 size-full"
        />
        <p className="text-white z-[1] ml-[90px]">{title}</p>
      </div>
    </div>
  );
}

export default ImageCard;