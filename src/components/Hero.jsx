/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const ImageComponent = () => {
  return (
    <section className="image-container">
      {/* Top image (visible on desktops) */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb96222f3b415bb5388b8bace1a8ea0bf3851f0b87ab07f9a856379a0c6d2aff?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
        alt="Descriptive image content"
        className="object-contain w-full aspect-[1.78] hidden sm:block"
        loading="lazy"
      />
      
      {/* Bottom image (visible on smartphones) */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/1808e4a078fd165b7c82df72fbb8d8cc372c76a9610dab91a57735e5f6097c67?apiKey=9804d3a088fa478e8672485264720a14&"
        alt="Hero section decorative image"
        className="object-contain mx-auto w-full aspect-[0.46] sm:hidden"
      />
    </section>
  );
};

export default ImageComponent;
