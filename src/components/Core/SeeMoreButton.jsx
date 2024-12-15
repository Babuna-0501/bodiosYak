import * as React from "react";

export function SeeMoreButton() {
  return (
    <div className="flex gap-3 justify-center items-center self-center mt-8 max-w-full text-sm font-light tracking-normal leading-none text-black w-[322px]">
      <div className="self-stretch my-auto">see more</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/e7bf063e0ed889ca231cbce297b600806c3f5bfa658791cdf77b74d16118ceb9?apiKey=9804d3a088fa478e8672485264720a14&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
      />
    </div>
  );
}