import React, { useRef } from 'react';
import VideoComponent from './components/VideoComponent';
import SeekComponent from './components/SeekComponent';

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  return (
    <div className="app">
      <VideoComponent ref={videoRef} />
      <SeekComponent onSeek={handleSeek} />
    </div>
  );
};

export default App;
