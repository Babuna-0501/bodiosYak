import * as React from "react";

function ReusableTextBlock({ heading, text, headingClasses, textClasses }) {
  return (
    <div className={textClasses}>
      <span className={headingClasses}>{heading}</span>
      <br />
      <br />
      <span className="text-xl leading-8 font-libreFranklin">{text}</span>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ReusableTextBlock;