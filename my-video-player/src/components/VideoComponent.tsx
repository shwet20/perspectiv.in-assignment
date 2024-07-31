import React, { forwardRef } from 'react';
import video from "../assets/demo.mp4"

const VideoComponent = forwardRef<HTMLVideoElement>((props, ref) => (
  <div className="video-container">
    <video ref={ref} controls muted autoPlay className="w-full">
      {/* <source src="/video.mp4" type="video/mp4" /> */}
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/gf0ieGILP_I?si=zLAkwLxx8B7QcQJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <source src={video} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
));

export default VideoComponent;
