import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const NUM_PHOTOS = 10;

const random = (max: number) => {
  return Math.floor(Math.random() * max);
};

const getRandomNImages = (n: number): JSX.Element[] => {
  const IMAGES_SIZE = 185;
  const ns: number[] = [];

  while (n > 0) {
    const r = random(IMAGES_SIZE) + 1;

    if (ns.includes(r)) {
      continue;
    }

    ns.push(r)
    n--;
  }

  const components = [];
  for (let i = 0; i < ns.length; i++) {
    components.push(
      <img src={require(`./images/pct/${ns[i]}.jpg`)} className="d-block w-100" alt={`${i}.jpg`} />
    );
  }
  return components;
};

const IMAGES: JSX.Element[] = getRandomNImages(NUM_PHOTOS);

const Gallery = ({ visible }: { visible: boolean }) => {
  console.log(visible);
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentIndex);
  if (currentIndex > (IMAGES.length - 3)) {
    Array.prototype.push.apply(IMAGES, getRandomNImages(NUM_PHOTOS));
    // Then holy shit they're actually looking at my photos
    // We should make this text me or somethign
    // that would be an ABOSLUTELY wild way to see who cares
    // ... wait that's what most websites just do don't they
    // ... breh

    // actually nah because of the autoscroll feature you FOOl
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="gallery">
        <Carousel interval={visible ? 5000 : null} activeIndex={currentIndex} onSelect={(index) => setCurrentIndex(index)}>
            { IMAGES.map((img, i) => <Carousel.Item> { img } </Carousel.Item>)}
        </Carousel>
      </div>
    </div>
  )
};

export default Gallery;
