import * as React from "react";

function YakContent() {
  const paragraphs = [
    {
      text: "Wild yaks still thrive in the Himalayas and differ from domestic yaks in size and color. Domestic yaks display a variety of hues, from marbled and gray-blue to rare, light colors. Mongolia is home to about a million yaks, with most residing in provinces like Arkhangai, Uburkhangai, and Zavkhan."
    },
    {
      text: "Renowned for its insulation, yak down has been shown by CCMI laboratory tests to retain warmth 17% better than cashmere and 40% better than sheep wool, making it a superior choice for cold climates. The fiber’s hollow structure allows for airflow, ensuring it remains breathable and comfortable year-round. Moisture-resistant, it’s also well-suited for rainy days and has a low-maintenance charm due to its resistance to dirt and odors."
    },
    {
      text: "At BODIOS, we honor the fiber’s natural beauty by keeping yak wool undyed, offering wearers a connection to nature’s authentic palette. Lightweight, soft, and hypoallergenic, yak wool is ideal for sensitive skin. In the Himalayas, Tibetans incorporate yak wool into tents for wintering, relying on its warmth and smoke-repelling properties. Eastern medicine also attributes health benefits to yak wool, viewing it as an energy-boosting material."
    },
    {
      text: "Yak down garments maintain their shape without shrinking or stretching and are significantly stronger than other natural fibers. This durability makes them a favorite among climbers and adventurers, with yak down socks acclaimed as the ultimate high-altitude gear."
    },
    {
      text: "Despite their rugged appearance, yaks produce virtually odorless down—a rare trait that makes BODIOS garments naturally scent-resistant, ideal for both everyday and active lifestyles. This exceptional fiber needs less frequent washing, combining elegance with longevity."
    },
    {
      text: "Each spring, yak down is meticulously combed and collected by hand, yielding approximately 300-400 grams of raw down per animal. This raw material is then carefully sorted to separate the fine fiber down from the coarser hairs, which are subsequently used to create the final product. Notably, only about 40% of the initial 400 grams comprises the fine fiber down suitable for production. BODIOS invites you to experience the luxury of yak down—a textile embodying warmth, beauty, and sustainability. By choosing BODIOS, you support ethical practices that preserve Mongolia's nomadic heritage."
    }
  ];

  return (
    <article className="pt-0 text-justify text-black w-full sm:w-[1027px] mx-auto mt-[84px] px-4 sm:px-0">
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p className="text-base sm:text-lg leading-6 sm:leading-8">{paragraph.text}</p>
          <br />
        </React.Fragment>
      ))}
    </article>
  );
}

export default YakContent;
