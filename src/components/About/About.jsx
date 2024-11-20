import React from "react";
import Image52 from "../../assets/image_52.png";

function About() {
  return (
    <div className="w-[1920px] bg-customBg">
      {/* Title */}
      <div className="text-center text-black text-[100px] font-normal uppercase pt-[100px] pb-[30px]">
        about us
      </div>
      {/* Background Image */}
      <img
            className="w-full max-w-[1920px] h-auto"
            src={Image52}
            alt="About Background"
            />

      {/* Content Section */}
      <div className="flex items-center justify-center min-h-screen mt-[60px]">
        <div className="w-[1027px] h-[1034px] text-justify">
          {/* Community */}
          <h2 className="text-black text-5xl font-normal ">Community</h2>
          <p className="text-black text-lg font-normal leading-normal mt-4">
            {/* Add content here */}
          </p>

          {/* Founder */}
          <h2 className="text-black text-5xl font-normal mt-16">Our founder</h2>
          <p className="text-black text-lg font-normal leading-normal mt-4 font-cormorant font-light">
            Inspired by the extraordinary qualities of yak down—its inherent warmth, luxury, and softness—J. Ulziibodijav
            founded BODIOS to bring this unique material to life. With a passion for innovation, he devoted himself to
            refining yak down’s natural properties, crafting designs that honor both quality and nature’s elegance. By
            blending tradition with modern techniques, BODIOS has created a collection of yak down garments that are
            cherished both locally and internationally by those who appreciate unparalleled comfort, quality, and
            sustainability.
          </p>

          {/* Philosophy */}
          <h2 className="text-black text-5xl font-normal mt-16">Philosophy</h2>
          <p className="text-black text-lg font-normal leading-normal mt-4 font-cormorant font-light">
            BODIOS crafts products from yak down, offering exceptional warmth, comfort, and environmental sustainability.
            Committed to ethical business principles that support herders, we strive to bring people closer to nature.
          </p>

          {/* Values */}
          <h2 className="text-black text-5xl font-normal mt-16">Our values</h2>
          <h3 className="text-black text-2xl font-normal leading-[30px] tracking-tight mt-4">
            SUSTAINABILITY-FOCUSED
          </h3>
          <p className="text-black text-lg font-normal leading-normal mt-2 font-cormorant font-light">
            BODIOS is dedicated to being a positive and supportive force for all stakeholders and the environment.
          </p>

          <h3 className="text-black text-2xl font-normal leading-[30px] tracking-tight mt-8">Rare</h3>
          <p className="text-black text-lg font-normal leading-normal mt-2 font-cormorant font-light">
            Yak down is regarded as a rare raw material, not just in Mongolia, but across the globe.
          </p>

          <h3 className="text-black text-2xl font-normal leading-[30px] tracking-tight mt-8">
            Functional
          </h3>
          <p className="text-black text-lg font-normal leading-normal mt-2 font-cormorant font-light">
            BODIOS offers a warm, low-maintenance material characterized by its timeless design.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
