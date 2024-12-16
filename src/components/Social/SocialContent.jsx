import * as React from "react";

function SocialContent() {
  const paragraphs = [
    {
      text: "With a legacy spanning 30 years, BODIOS has been deeply connected with the people of the Gobi. Through their trust and collaboration, we have been privileged to source high-quality raw materials that form the foundation of our luxury products."
    },
    {
      text: "Here are some of the contributions we have made to support the herders of the Gobi:"
    },
    {
      text: [
        "2001-2003: Donated 1,600 goats to 40 households to replenish livestock lost in the devastating Zud.",
        "2001-2015: Enhanced rural living conditions by providing essential supplies to hospitals and schools.",
        "2009-2012: Built a deep well in Bayangobi village, delivering clean water to a community of 3,000—a legacy expected to last over a century.",
        "2003-2019: Launched initiatives to increase the camel population in Bayankhongor, leading to a 300% growth in the region’s camels, reversing a sharp decline.",
        "2015-2022: Established veterinary clinics in Bayangobi and Bayanlig, ensuring herder families had consistent access to animal care.",
        "2014-2019: Supported nature conservation efforts with contributions to the Snow Leopard Conservation Society and Hustai National Park.",
        "2018-2019: Created a community park with 2,000 trees, flower gardens, lawns, lighting, and a fountain, offering locals a beautiful space for leisure.",
        "2019-Present: Formed a cooperative with 532 families across five soums, advancing initiatives in pasture conservation, sustainable livelihoods, and sourcing premium cashmere for renowned global brands.",
        "Our commitment to the Gobi extends beyond business; we are dedicated to preserving its natural beauty and supporting the people whose traditions and lands sustain our work."
      ]
    }
  ];

  return (
    <article className="pt-0 text-justify text-black w-full sm:w-[1027px] mx-auto mt-[84px] p-4 sm:p-8 border-4 rounded-lg shadow-md">
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          {Array.isArray(paragraph.text) ? (
            paragraph.text.map((item, itemIndex) => (
              <div key={itemIndex} className="my-2 text-base sm:text-lg">
                ● {item}
              </div>
            ))
          ) : (
            <p className="my-2 text-base sm:text-lg">{paragraph.text}</p>
          )}
        </React.Fragment>
      ))}
    </article>
  );
}

export default SocialContent;
