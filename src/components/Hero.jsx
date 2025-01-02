/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import HeroVideo from '../assets/bodios_hero_video.mp4';

const ImageComponent = () => {
  return (
    <section className="video-container">
      <video
        src={HeroVideo}
        className="object-cover w-full aspect-[4/4] sm:aspect-[16/9]"
        loading="lazy"
        autoPlay
        muted
        loop
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default ImageComponent;
