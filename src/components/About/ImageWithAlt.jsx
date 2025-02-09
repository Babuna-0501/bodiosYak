import * as React from "react";

function ImageWithAlt({ src, alt, className = "" }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`w-full h-auto max-w-full ${className}`}
    />
  );
}

export default ImageWithAlt;