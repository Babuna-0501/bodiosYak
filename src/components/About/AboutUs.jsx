import * as React from "react";
import ReusableTextBlock from "./ReusableTextBlock";
import ImageWithAlt from "./ImageWithAlt";
import ValuesList from "./ValuesList";
import Value from "../../assets/values.png";

function AboutUs() {
  return (
    <div className="flex flex-col items-center mt-[100px] pb-20 px-4 md:px-8 lg:px-16">
      {/* About Us Heading */}
      <div className="gap-2.5 self-stretch pt-16 pb-16 text-center text-black uppercase text-6xl md:text-7xl lg:text-8xl max-sm:text-4xl">
        about us
      </div>

      {/* Hero Image */}
      <ImageWithAlt
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/b5dcf6fe1b98f09c8c92efddefd21a3f4b63b89aaf6d85874096b9de34aa9917?apiKey=9804d3a088fa478e8672485264720a14&"
        alt=""
        className="object-contain w-full max-w-[1911px] aspect-[1.77]"
      />

      {/* Community Section */}
      <div className="max-w-[1273px] w-full mx-auto">
        <ReusableTextBlock
          heading="Community"
          text="Lorem ipsum dolor sit amet consectetur. Ut fermentum dolor nec risus ut ipsum magna..."
          headingClasses="text-3xl md:text-4xl lg:text-5xl font-LibreFranklin"
          textClasses="mt-10 md:mt-16 lg:mt-20 text-base md:text-lg font-light leading-7 text-justify"
        />
      </div>

      {/* Founder Section */}
      <div className="mt-20 md:mt-32 max-w-[1273px] w-full">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Founder Image */}
          <div className="w-full md:w-6/12">
            <ImageWithAlt
              src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/301853821410ddabf31b53aeda5d6dcec8e46ddd6993d29f97e535938f77c32a?apiKey=9804d3a088fa478e8672485264720a14&"
              alt=""
              className="object-contain w-full aspect-[0.86]"
            />
          </div>

          {/* Founder Text */}
          <div className="w-full md:w-6/12">
            <ReusableTextBlock
              heading="Our founder"
              text="Inspired by the extraordinary qualities of yak down—its inherent warmth, luxury, and softness..."
              headingClasses="mt-10 md:mt-20 lg:mt-40 text-3xl md:text-4xl lg:text-5xl"
              textClasses="text-base md:text-lg font-light leading-7 text-justify"
            />
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative w-full mt-16 md:mt-32">
        <ImageWithAlt
          src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/298048f44cb87f8a912c8acdf1919739c268f331054c18a3a9d5fa2ee36ac044?apiKey=9804d3a088fa478e8672485264720a14&"
          alt=""
          className="object-cover h-[365px] sm:h-auto w-full aspect-[2.62]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 py-10 md:p-16">
          <div className="max-w-[1273px] w-full text-center">
            <ReusableTextBlock
              heading="Philosophy"
              text="BODIOS crafts products from yak down, offering exceptional warmth, comfort, and environmental sustainability..."
              headingClasses="text-3xl md:text-4xl lg:text-5xl text-white"
              textClasses="text-sm md:text-base lg:text-lg font-light leading-7 text-white"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="flex flex-col mt-16 md:mt-32 max-w-[1203px] w-full text-black">
        <div className="text-3xl md:text-4xl lg:text-5xl text-left">Our values</div>
        <ImageWithAlt
          src={Value}
          alt=""
          className="object-cover mt-10 md:mt-16 w-full"
        />
        <ValuesList />
      </div>
    </div>
  );
}

export default AboutUs;