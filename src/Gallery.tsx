import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { random } from './helper';
import captions from './captions';

const INITIAL_PHOTOS = 5;
const NUM_FETCH_PHOTOS = 10;

type Image = {
  image: JSX.Element;
  caption: JSX.Element;
}

const getRandomNImages = (n: number, keyStart: number = 0): Image[] => {
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

  const images: Image[] = [];
  for (let i = 0; i < ns.length; i++) {
    const e = ns[i];

    images.push({
      image: (
        <Carousel.Item key={i + keyStart}>
          <img src={require(`./images/pct/${e}.jpg`)} className="d-block w-100" alt={`${i}.jpg`} />
        </Carousel.Item>
      ),
      caption: captions[e in captions ? e : 0],
    });
  }
  return images;
};

const IMAGES: Image[] = getRandomNImages(INITIAL_PHOTOS);

const Gallery = ({ visible }: { visible: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (currentIndex > (IMAGES.length - 3)) {
    Array.prototype.push.apply(IMAGES, getRandomNImages(NUM_FETCH_PHOTOS, IMAGES.length));
    // Then holy shit they're actually looking at my photos
    // We should make this text me or somethign
    // that would be an ABOSLUTELY wild way to see who cares
    // ... wait that's what most websites just do don't they
    // ... breh

    // actually nah because of the autoscroll feature you FOOl
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="gallery">
          <Carousel
            interval={visible ? 5000 : null}
            fade
            activeIndex={currentIndex}
            onSelect={(index) => setCurrentIndex(index)}
          >
            { IMAGES.map(image => image.image) }
          </Carousel>
        </div>
      </div>
      <div> { IMAGES[currentIndex].caption } </div>
    </div>
  )
};

export default Gallery;
