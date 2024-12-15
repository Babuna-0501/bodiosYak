import * as React from "react";
import ImageCard from "./ImageCard";

function BodiosLayout() {
  const cards = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/eca9e17e66b088a18b38f16c0b6e10e7f684f72de8432d8f359d2b2d1b06dc38?apiKey=9804d3a088fa478e8672485264720a14&",
      title: "BODIOS"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/b110ec9b2c930715327306f18db0a648bcb52d19491bdc9f52fd0bf177dad4b6?apiKey=9804d3a088fa478e8672485264720a14&",
      title: "Boutique"
    }
  ];

  return (
    <div>
      <div className="flex mt-2 max-md:flex-col">
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

export default BodiosLayout;