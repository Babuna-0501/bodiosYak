import React from 'react';

function ImageSection() {
  return (
    <section className="mt-14 max-md:mt-10">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbef4220b692c0fd3ffd010c778c0efa11f3947e4e20596fea4b2d091e61de56?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1" 
        alt="Yak down product illustration" 
        className="object-contain max-w-full rounded-3xl aspect-[166.67] w-[362px]" 
      />
    </section>
  );
}

export default ImageSection;