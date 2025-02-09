import * as React from "react";
import { useState } from "react";

function QuoteSection({ image, imageAlt, quote, author, imageLeft, hoverImage }) {
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseEnter = () => setCurrentImage(hoverImage);
  const handleMouseLeave = () => setCurrentImage(image);

  const QuoteContent = () => (
    <div className="self-stretch my-auto text-xl font-libreFranklin font-light leading-8 text-black max-md:mt-10 max-md:text-lg max-md:px-4">
      {quote}
      <br />
      <br />
      <span className="italic text-black">{author}</span>
    </div>
  );

  const ImageContent = () => (
    <img
      loading="lazy"
      src={currentImage}
      alt={imageAlt}
      className="object-contain grow w-full aspect-[0.74] transition-opacity duration-300 ease-in-out max-md:mt-10 max-md:w-full max-md:max-h-[200px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );

  return (
    <section className="mt-24 max-w-full w-full sm:w-[1138px] max-md:mt-10" aria-label={`Quote by ${author}`}>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          {imageLeft ? <ImageContent /> : <QuoteContent />}
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          {imageLeft ? <QuoteContent /> : <ImageContent />}
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
