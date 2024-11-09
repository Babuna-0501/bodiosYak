import React from 'react';
import Video from '../../assets/Bodios_FW24_Main_1.mp4'

function VideoPlayer() {
  return (
    <div className='relative'>
        <video controls autoPlay  loop muted width="100%" className="videoPlayer" src={Video}></video>
        <div className="flex flex-col text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <header className="text-8xl uppercase max-md:max-w-full max-md:text-4xl">
                Yak down video
            </header>
            <section className="mt-5 text-lg font-semibold leading-none tracking-[9px] max-md:max-w-full">
                DISCOVER MORE
            </section>
        </div>
    </div>
  );
}

export default VideoPlayer;
