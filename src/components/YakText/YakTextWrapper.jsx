import React from 'react';
import Head from './Head';
import ImageSection from './ImageSection';
import ContentSection from './ContentSection';

function YakTextWrapper() {
  return (
    <main className="flex flex-col items-center pb-2 text-center text-black rounded-3xl mt-[200px] pb-[190px]">
      <Head />
      <ImageSection />
      <ContentSection />
    </main>
  );
}

export default YakTextWrapper;