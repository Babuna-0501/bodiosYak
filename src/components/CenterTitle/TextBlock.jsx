import React from 'react';

function TextBlock({ text, className }) {
  return (
    <h2 className={`${className} max-md:max-w-full`}>
      {text}
    </h2>
  );
}

export default TextBlock;