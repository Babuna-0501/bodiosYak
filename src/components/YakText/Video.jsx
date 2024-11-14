import React from 'react';
import Video from '../../assets/bodios.mp4'

function VideoPlayer() {
  return (
    <div className='relative'>
        <video controls autoPlay  loop muted width="100%" className="videoPlayer" src={Video}></video>
    </div>
  );
}

export default VideoPlayer;
