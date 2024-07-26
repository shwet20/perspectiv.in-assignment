import React, { forwardRef } from 'react';

const VideoComponent = forwardRef<HTMLVideoElement>((props, ref) => (
  <div className="video-container">
    <video ref={ref} controls className="w-full">
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
));

export default VideoComponent;
