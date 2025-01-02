import * as React from "react";
import Card from "./Card";

const cardsData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c29b944f16497136c6ef6e8d9dfebefc2041c52d3a111c23e83c99e88869d1b2?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
    title: "OUR\nMATERIALS",
    // description: "Discover our selection of natural and responsible materials",
    hasDescription: true
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c42325283746038bbae8b1a9942632728980d1357d9d6990d203d4cd68570a90?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
    title: "BODIOS",
    hasDescription: false
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/284cba58b5682a779411955b54e7af3d56dad3792e61263b921a3458b631eb80?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
    title: "BOUTIQUE",
    hasDescription: false
  }
];

function Triple() {
  return (
    <div className="flex flex-col mt-3">
      {/* Grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {cardsData.map((card, index) => (
          <div key={index} className="flex justify-center">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Triple;
