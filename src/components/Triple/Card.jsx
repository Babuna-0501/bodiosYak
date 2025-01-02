import * as React from "react";

function Card({ imageSrc, title, description, hasDescription }) {
  return (
    <div className="relative flex flex-col items-center justify-center text-white min-h-[813px] max-w-full">
      {/* Image with responsive sizing and fixed pixel sizes */}
      <img
        loading="lazy"
        src={imageSrc}
        alt={title.toLowerCase()}
        className="object-cover w-full h-full max-md:max-w-full aspect-[0.78] "
      />
      {/* Title: fixed pixel sizes for desktop and smaller adjustments for mobile */}
      <div 
        className={`absolute bottom-[53px] left-[60px] text-center text-white ${hasDescription ? 'text-4xl' : 'text-5xl'} w-[370px] max-md:text-3xl max-md:w-[80%]`}
      >
        {title}
      </div>
      {/* Description: display only when `hasDescription` is true, with fixed sizes */}
      {hasDescription && (
        <div className="absolute bottom-[66px] left-[60px] text-lg font-light leading-7 w-[329px] max-md:w-[80%] max-md:text-base">
          {description}
        </div>
      )}
    </div>
  );
}

export default Card;
