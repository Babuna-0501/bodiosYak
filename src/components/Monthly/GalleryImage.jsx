import React from 'react';

function GalleryImage({ src, alt }) {
  return (
    <img 
      loading="lazy" 
      src={src} 
      alt={alt}
      className="object-contain self-stretch my-auto aspect-[0.79] min-w-[240px] w-[351px]"
    />
  );
}

export default GalleryImage;