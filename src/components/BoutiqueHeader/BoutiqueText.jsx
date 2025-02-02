import * as React from "react";

function BoutiqueText({ text, isFirst }) {
  const Element = isFirst ? 'h1' : 'div';
  
  return (
    <Element 
      className={`${!isFirst ? 'mt-5' : ''} max-md:max-w-full max-md:text-4xl text-center mx-auto`}
    >
      {text}
    </Element>
  );
}

export default BoutiqueText;
