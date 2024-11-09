import React from 'react';
import GalleryImage from './GalleryImage';

const imageData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea7932af7a038711d266014fd23ff7a04197c92a79710c303e535412acbb40cc?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1", alt: "Gallery image 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea7932af7a038711d266014fd23ff7a04197c92a79710c303e535412acbb40cc?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1", alt: "Gallery image 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea7932af7a038711d266014fd23ff7a04197c92a79710c303e535412acbb40cc?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1", alt: "Gallery image 3" }
];

function ImageGallery() {
  return (
    <section className="flex flex-wrap gap-10 items-center mt-[121px] justify-center">
      {imageData.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </section>
  );
}

export default ImageGallery;