import * as React from "react";
import BoutiqueText from "./BoutiqueText";

const textContent = [
  { text: "Yak" },
  { text: "Boutique" },
  { text: "we are bodios" }
];

function BoutiqueHeader() {
  return (
    <header className="flex flex-col text-8xl text-center text-black uppercase max-md:text-4xl" role="banner">
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-stone-200 max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col items-start mb-0 max-w-full w-[1015px] max-md:mb-2.5 max-md:text-4xl text-center cursor-pointer">
          {textContent.map((item, index) => (
            <BoutiqueText key={index} text={item.text} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default BoutiqueHeader;