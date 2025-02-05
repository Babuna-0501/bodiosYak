import * as React from "react";
import ReusableTextBlock from "./ReusableTextBlock";
import ImageWithAlt from "./ImageWithAlt";
import ValuesList from "./ValuesList";
import Value from "../../assets/values.png";

function AboutUs() {
  return (
    <div className="flex flex-col items-center mt-[100px] pb-20">
      {/* About Us Heading */}
      <div className="gap-2.5 self-stretch px-2.5 pt-16 pb-16 text-8xl text-center text-black uppercase max-lg:text-6xl max-md:text-4xl max-sm:text-3xl">
        about us
      </div>

      {/* Hero Image */}
      <ImageWithAlt
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/b5dcf6fe1b98f09c8c92efddefd21a3f4b63b89aaf6d85874096b9de34aa9917?apiKey=9804d3a088fa478e8672485264720a14&"
        alt=""
        className="object-contain w-full aspect-[1.77] max-w-[1911px] max-md:max-w-full"
      />

      {/* Community Section */}
      <div className="max-w-[1273px] w-full mx-auto px-4 font-LibreFranklin">
        <ReusableTextBlock
          heading="Community"
          text="Lorem ipsum dolor sit amet consectetur. Ut fermentum dolor nec risus ut ipsum magna..."
          headingClasses="text-5xl leading-[51px] font-LibreFranklin max-lg:text-4xl max-md:text-3xl"
          textClasses="mt-20 text-lg font-light leading-7 text-justify text-black max-lg:text-base max-md:mt-10 max-md:max-w-full"
        />
      </div>

      {/* Founder Section */}
      <div className="mt-44 max-w-full w-[1273px] max-md:mt-10 md:p-4">
        <div className="flex gap-5 max-md:flex-col">
          {/* Founder Image */}
          <div className="flex flex-col w-6/12 max-md:w-full">
            <ImageWithAlt
              src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/301853821410ddabf31b53aeda5d6dcec8e46ddd6993d29f97e535938f77c32a?apiKey=9804d3a088fa478e8672485264720a14&"
              alt=""
              className="object-contain w-full aspect-[0.86] max-md:mt-10 max-md:max-w-full"
            />
          </div>

          {/* Founder Text */}
          <div className="flex flex-col ml-5 w-6/12 max-md:w-full max-md:ml-0">
            <ReusableTextBlock
              heading="Our founder"
              text="Inspired by the extraordinary qualities of yak down—its inherent warmth, luxury, and softness..."
              headingClasses="mt-72 text-5xl text-black leading-[51px] max-lg:mt-40 max-md:mt-10 max-lg:text-4xl max-md:text-3xl"
              textClasses="text-lg font-light leading-7 text-justify text-black max-lg:text-base max-md:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Philosophy Section (Overlay on Image) */}
      <div className="relative w-full mt-20 max-md:mt-10 md:p-4">
        <ImageWithAlt
          src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/298048f44cb87f8a912c8acdf1919739c268f331054c18a3a9d5fa2ee36ac044?apiKey=9804d3a088fa478e8672485264720a14&"
          alt=""
          className="object-cover w-full aspect-[2.62] max-md:max-w-full"
        />

        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
          <div className="max-w-[1273px] w-full mt-[-7rem] max-lg:mt-[-5rem] max-md:mt-[-3rem]">
            <ReusableTextBlock
              heading="Philosophy"
              text="BODIOS crafts products from yak down, offering exceptional warmth, comfort, and environmental sustainability..."
              headingClasses="text-5xl text-white leading-[51px] max-lg:text-4xl max-md:text-3xl"
              textClasses="text-lg font-light leading-7 text-white max-lg:text-base max-md:text-sm max-md:mt-2 max-md:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="flex flex-col mt-32 max-w-full text-black w-[1203px] max-md:mt-10 md:p-4">
        <div className="self-start text-5xl text-justify max-lg:text-4xl max-md:text-3xl">
          Our values
        </div>

        {/* Values Image */}
        <ImageWithAlt
          src={Value}
          alt=""
          className="object-cover mt-20 w-full max-md:mt-10 max-md:max-w-full"
        />

        {/* Values List */}
        <ValuesList />
      </div>
    </div>
  );
}

export default AboutUs;
