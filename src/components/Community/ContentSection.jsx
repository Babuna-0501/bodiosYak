import * as React from "react";

export function ContentSection({ title, description, className = "" }) {
  return (
    <div className={`text-lg font-light leading-7 text-justify text-black max-md:max-w-full ${className}`}>
      <h2 className="text-5xl leading-[51px]">{title}</h2>
      <br /> <br />
      <p className="text-xl leading-8 font-libreFranklin">{description}</p>
      <br /><br /><br /><br />
    </div>
  );
}