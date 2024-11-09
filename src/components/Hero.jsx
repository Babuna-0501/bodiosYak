import React from 'react';

const ImageComponent = () => {
  return (
    <section className="image-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb96222f3b415bb5388b8bace1a8ea0bf3851f0b87ab07f9a856379a0c6d2aff?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
        alt="Descriptive image content"
        className="object-contain w-full aspect-[1.78]"
        loading="lazy"
      />
    </section>
  );
};

export default ImageComponent;