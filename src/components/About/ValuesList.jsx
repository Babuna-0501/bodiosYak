import * as React from "react";

const values = [
  "BODIOS is dedicated to being a positive and supportive force for all stakeholders and the environment.",
  "Yak down is regarded as a rare raw material, not just in Mongolia, but across the globe.",
  "BODIOS offers a warm, low-maintenance material characterized by its timeless design.",
];

function ValuesList() {
  return (
    <div className="flex flex-wrap gap-10 font-libreFranklin self-center mt-16 max-w-full text-lg font-light leading-7 w-[1055px] max-md:mt-10">
      {values.map((value, index) => (
        <div key={index} className="grow shrink w-[231px]">
          {value}
        </div>
      ))}
    </div>
  );
}

export default ValuesList;