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
      <section className="image-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/6df5c2e921975cf53202a065bfd807a53d3af281253386a3915dec1fc6d70fd9?apiKey=9804d3a088fa478e8672485264720a14&"
          alt="Decorative"  
          className="object-contain w-full aspect-[2.42]"
          loading="lazy"
        />
      </section>
    </header>
  );
}

export default CenterTitle;
