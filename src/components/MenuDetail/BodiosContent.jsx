import React from "react";

function AboutContent() {
  const paragraphs = [
    {
      text: "BODIOS, a distinguished family-owned Mongolian brand with a heritage spanning 30 years, is now proudly led by its second generation. With privileged access to 60% of Mongolia's yak down, we meticulously oversee each step of production to achieve extraordinary softness—a true embodiment of luxury. By blending traditional craftsmanship with contemporary design, BODIOS creates timeless pieces that resonate with refined taste and uncompromising quality."
    },
    {
      text: "Our clientele extends from Switzerland and Europe to Asia, Japan, and beyond, reflecting the global allure of our exquisite yak down garments. Native to Mongolia's rugged, high-altitude terrain, the yak produces naturally sumptuous fibers that repel moisture and provide exceptional warmth. Scientific studies confirm that yak down is inherently warmer than Merino wool and cashmere, making it a truly rare and precious textile. Crafted into 100% natural, organic garments, each piece from BODIOS is a unique statement of purity and luxury."
    },
    // {
    //   text: "BODIOS processes 130 tons of raw material and produces 120,000 pieces annually across three factories staffed by 127 dedicated employees."
    // }
  ];

  return (
    <article className="pt-0 text-lg leading-6 text-justify text-black max-md:max-w-[1920px] w-full mt-[84px] pl-2 pr-2 text-sm">
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p>{paragraph.text}</p>
          <br />
          <br />
        </React.Fragment>
      ))}
    </article>
  );
}

export default AboutContent;
