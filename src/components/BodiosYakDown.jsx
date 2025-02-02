import React from 'react';
import YakTextWrapper from './YakText/YakTextWrapper';
import './float.css'

function BodiosYakDown() {
  return (
    <main className="w-full text-center uppercase text-[330px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl ">
      <section className="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e35e722e45763f755039711ffc5e069c4303f77b1ab52ec9e4dd057ea493906?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Descriptive"
          className="object-contain w-full"
          loading="lazy"
        />
      </section>
      {/* <div className="relative my-20">
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-[330px] text-[#4A391F]">
          bodios
          <br />
          yak down
        </h1>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 lg:block hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70cf1b479d9f4079bbe408daa92d272b75f0b3c725771b1b2ff78c9487870434?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
            alt="Decorative"
            loading="lazy"
            class="object-contain w-3/4 sm:w-full sm:max-w-[364px] aspect-square max-w-full animation-float"
          />
        </div>
      </div> */}
      {/* <YakTextWrapper /> */}
    </main>
  );
}

export default BodiosYakDown;