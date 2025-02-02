import * as React from "react";

export function SeeMoreButton() {
  return (
    <button 
      className="flex gap-3 justify-center font-libreFranklin items-center self-center mt-11 max-w-full text-xs tracking-[2.4px] w-[322px] max-md:mt-10"
      onClick={() => {}}
      aria-label="See more about BODIOS"
    >
      <span className="self-stretch my-auto">see more</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      
      <span className="flex shrink-0 self-stretch my-auto h-[19px] w-[19px]" aria-hidden="true" />
    </button>
  );
}