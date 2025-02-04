import * as React from "react";
import ReusableTextBlock from "./ReusableTextBlock";
import ImageWithAlt from "./ImageWithAlt";
import ValuesList from "./ValuesList";

function AboutUs() {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className="gap-2.5 self-stretch px-2.5 pt-16 pb-16 text-8xl text-center text-black uppercase max-md:max-w-full max-md:text-4xl">
        about us
      </div>
      <ImageWithAlt
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/b5dcf6fe1b98f09c8c92efddefd21a3f4b63b89aaf6d85874096b9de34aa9917?apiKey=9804d3a088fa478e8672485264720a14&"
        alt=""
        className="object-contain self-start w-full aspect-[1.77] max-w-[1911px] max-md:max-w-full"
      />
    <div className="max-w-[1273px] w-full mx-auto px-4 font-LibreFranklin">
        <ReusableTextBlock
          heading="Community"
          text="Lorem ipsum dolor sit amet consectetur. Ut fermentum dolor nec risus ut ipsum magna. Odio non dictumst curabitur neque fermentum praesent leo sit venenatis. Consectetur et mauris integer at ullamcorper suspendisse ullamcorper euismod dui. Maecenas mattis scelerisque eget nibh non laoreet euismod id sed. Iaculis sit viverra at enim. Dui fringilla ac augue turpis cursus duis. Sed orci quis tortor imperdiet dignissim. Sodales ipsum ipsum rhoncus turpis vivamus diam faucibus interdum. Nunc quam in vitae risus neque diam massa egestas eu. Dolor lectus porttitor diam mi magna. Eu quam sed neque feugiat. Faucibus eleifend suspendisse porta etiam porttitor mauris. Cras."
          headingClasses="text-5xl leading-[51px] font-LibreFranklin"
          textClasses="mt-20 text-lg font-light libreFranklin leading-7 text-justify text-black max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <div className="mt-44 max-w-full w-[1273px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ImageWithAlt
              src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/301853821410ddabf31b53aeda5d6dcec8e46ddd6993d29f97e535938f77c32a?apiKey=9804d3a088fa478e8672485264720a14&"
              alt=""
              className="object-contain grow w-full border border-black border-solid aspect-[0.86] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ReusableTextBlock
              heading="Our founder"
              text="Inspired by the extraordinary qualities of yak down—its inherent warmth, luxury, and softness—J. Ulziibodijav founded BODIOS to bring this unique material to life. With a passion for innovation, he devoted himself to refining yak down’s natural properties, crafting designs that honor both quality and nature’s elegance. By blending tradition with modern techniques, BODIOS has created a collection of yak down garments that are cherished both locally and internationally by those who appreciate unparalleled comfort, quality, and sustainability."
              headingClasses="mt-72 text-5xl text-black  leading-[51px]"
              textClasses="text-lg font-light leading-7 text-justify text-black max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <ReusableTextBlock
        heading="Philosophy"
        text="BODIOS crafts products from yak down, offering exceptional warmth, comfort, and environmental sustainability. Committed to ethical business principles that support herders, we strive to bring people closer to nature."
        headingClasses="text-5xl text-white  leading-[51px]"
        textClasses="z-10 mt-80 text-lg font-light leading-7 text-justify text-white max-md:mt-10 max-md:max-w-full"
      />
      <div className="flex flex-col self-stretch mt-0 w-full max-md:mt-0 max-md:max-w-full">
        <ImageWithAlt
          src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/298048f44cb87f8a912c8acdf1919739c268f331054c18a3a9d5fa2ee36ac044?apiKey=9804d3a088fa478e8672485264720a14&"
          alt=""
          className="object-contain w-full aspect-[2.62] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col mt-32 max-w-full text-black w-[1203px] max-md:mt-10">
        <div className="self-start text-5xl text-justify max-md:text-4xl">
          Our values
        </div>
        <div className="flex shrink-0 self-end mt-28 max-w-full border border-black border-solid h-[191px] w-[1128px] max-md:mt-10" />
        <ValuesList />
      </div>
    </div>
  );
}

export default AboutUs;