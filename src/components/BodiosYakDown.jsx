import React, { useEffect, useRef, useState } from "react";
import "./float.css";

function BodiosYakDown() {
  const parallaxRef = useRef(null); // Ref for this component
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect(); // Get position relative to viewport
        const speedFactor = 0.5; // Adjust speed
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // If the component is visible in the viewport
          const offset = (window.innerHeight - rect.top) * speedFactor;
          setParallaxOffset(offset);
        }
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // Clean up listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      ref={parallaxRef}
      className="mt-2 w-full text-center uppercase text-[330px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl"
    >
      <section className="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aceb5f505bc58f99903cd9f2f2de15c6205dbf3c049d3d595f1abeca0e952b7?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Descriptive"
          className="object-contain w-full aspect-[1.78]"
          loading="lazy"
        />
      </section>
      <div className="relative mt-[90px]">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[330px] text-[#4A391F]">
          bodios
          <br />
          yak down
        </h1>
        <div
          className="parallax-container lg:block hidden"
          style={{
            transform: `translate(-50%, calc(-33% + ${parallaxOffset}px))`,
            transition: "transform 0.2s ease-out", // Smooth transition
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70cf1b479d9f4079bbe408daa92d272b75f0b3c725771b1b2ff78c9487870434?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
            alt="Decorative"
            loading="lazy"
            className="parallax-image"
          />
        </div>
      </div>
      {/* <YakTextWrapper /> */}
    </main>
  );
}

export default BodiosYakDown;
