import React, { useState } from 'react';

const Overlay = ({ children }: { children: React.ReactNode }) => {
  const [starsOn, setStarsOn] = useState(true);
  const [blobsOn, setBlobsOn] = useState(true);

  return (
    <div className="overlay-container">
      { starsOn && (<div id="stars"><div /></div>) }
      { blobsOn && (<div id="blobs"><div /></div>) }
      { children }
    </div>
  )
};

export default Overlay;
