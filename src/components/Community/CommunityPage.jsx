import * as React from "react";
import { DividerLine } from "./DividerLine";
import { ContentSection } from "./ContentSection";

const communityContent = {
  title: "Community",
  description: `Lorem ipsum dolor sit amet consectetur. Ut fermentum dolor nec risus ut ipsum magna. Odio non dictumst curabitur neque fermentum praesent leo sit venenatis. Consectetur et mauris integer at ullamcorper suspendisse ullamcorper euismod dui. Maecenas mattis scelerisque eget nibh non laoreet euismod id sed. Iaculis sit viverra at enim. Dui fringilla ac augue turpis cursus duis. Sed orci quis tortor imperdiet dignissim. Sodales ipsum ipsum rhoncus turpis vivamus diam faucibus interdum. Nunc quam in vitae risus neque diam massa egestas eu. Dolor lectus porttitor diam mi magna. Eu quam sed neque feugiat. Faucibus eleifend suspendisse porta etiam porttitor mauris. Cras.`
};

const founderContent = {
  title: "Our Founder",
  description: `Inspired by the extraordinary qualities of yak down—its inherent warmth, luxury, and softness—J. Ulziibodijav founded BODIOS to bring this unique material to life. With a passion for innovation, he devoted himself to refining yak down's natural properties, crafting designs that honor both quality and nature's elegance. By blending tradition with modern techniques, BODIOS has created a collection of yak down garments that are cherished both locally and internationally by those who appreciate unparalleled comfort, quality, and sustainability.`
};

function CommunityPage() {
  return (
    <main className="flex flex-col px-10 py-8 w-[1270px] mx-auto mt-20 max-md:w-full max-md:px-6 max-md:py-6 max-md:mt-10">
      <ContentSection 
        title={communityContent.title}
        description={communityContent.description}
      />
      <DividerLine />
      <section className="mt-28 w-full max-md:mt-8 max-md:max-w-full">
        <div className="flex gap-8 max-md:flex-col max-md:gap-6">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc7ce7013b577f890e8fd3d15ba335e940cc2b43d9676922c433ba6d519b1170?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
              alt="Founder portrait"
              className="object-contain w-full aspect-[0.86] max-md:mt-5 max-md:aspect-auto max-md:h-auto"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ContentSection 
              title={founderContent.title}
              description={founderContent.description}
              className="mt-72 max-md:mt-6"
            />
          </div>
        </div>
      </section>
      <DividerLine />
    </main>
  );
}

export default CommunityPage;
