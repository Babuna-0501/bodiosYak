import React from 'react';
import TextBlock from './TextBlock';

function CenterTitle() {
  const textBlocks = [
    { text: 'Yak', className: 'text-8xl max-md:text-4xl' },
    { text: 'we are bodios', className: 'mt-5 text-8xl max-md:text-4xl' },
    { text: 'Boutique', className: 'mt-5 text-8xl max-md:text-4xl' }
  ];

  return (
    <header className="flex flex-col items-center text-center text-black uppercase mt-[67px]">
      {textBlocks.map((block, index) => (
        <TextBlock key={index} text={block.text} className={block.className} />
      ))}
    </header>
  );
}

export default CenterTitle;