import * as React from "react";

function ImageWithAlt({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

export default ImageWithAlt;