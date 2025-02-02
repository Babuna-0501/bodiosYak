import * as React from "react";

export function GalleryImage({ src, className, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
    />
  );
}