import React from 'react';
import YakTextWrapper from './YakText/YakTextWrapper';
import './float.css'

function BodiosYakDown() {
  return (
    <main className="mt-10 w-full text-center uppercase text-[330px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <div className="relative">
        <h1>
          bodios
          <br />
          yak down
        </h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70cf1b479d9f4079bbe408daa92d272b75f0b3c725771b1b2ff78c9487870434?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Decorative"
          loading="lazy"
          className="object-contain w-full aspect-square max-w-[364px] absolute top-1/3 left-[43%] -translate-x-1/2 animation-float"
        />



      </div>
      <section className="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aceb5f505bc58f99903cd9f2f2de15c6205dbf3c049d3d595f1abeca0e952b7?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Descriptive"
          className="object-contain w-full aspect-[1.78]"
          loading="lazy"
        />
      </section>
      <YakTextWrapper />
    </main>
  );
}

export default BodiosYakDown;
