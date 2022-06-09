import { useEffect, useState } from 'react';

const handleTouchY = (handler: (touchY: number) => void) => (event: TouchEvent) => {
  handler(event.touches[0].clientY);
};

export default (active: boolean) => {
  const [timesTouched, setTimesTouched] = useState<number>(0);
  const [startTouchY, setStartTouchY] = useState<number | null>(null);
  const [lastTouchY, setLastTouchY] = useState<number | null>(null);

  // const onScroll = () => {
    // window.scrollBy({
    //   behavior: "smooth",
    //   top: 20,
    // });
    // console.log(window.scrollY);
  // };

  useEffect(() => {
    const touchStart = handleTouchY((y) => { setStartTouchY(y); setLastTouchY(y) });
    const touchMove = handleTouchY(setLastTouchY);
    const touchEnd = () => setTimesTouched(n => n + 1);

    const add = () => {
      window.addEventListener('touchstart', touchStart, true);
      window.addEventListener('touchmove', touchMove, true);
      window.addEventListener('touchend', touchEnd, true);
    }
    const remove = () => {
      window.removeEventListener('touchstart', touchStart, true);
      window.removeEventListener('touchmove', touchMove, true);
      window.removeEventListener('touchend', touchEnd, true);
    };

    // clean up code
    remove();

    if (active) {
      add();
    }

    return remove;
  }, [active]);

  useEffect(() => {
    console.log(`START TOUCH Y: ${startTouchY}`);
    console.log(`LAST TOUCH Y: ${lastTouchY}`);
  }, [startTouchY, lastTouchY]);

  useEffect(() => {
    console.log(`START TOUCH Y: ${startTouchY}`);
    console.log(`LAST TOUCH Y: ${lastTouchY}`);
    console.log(`Touched ${timesTouched} times`)
    if (startTouchY && lastTouchY) {
      const dist = (lastTouchY - startTouchY) / 5;
      console.log(`THROW ${dist}`)
      window.scrollBy({
        behavior: "smooth",
        top: Math.pow(dist, 2) * (Math.abs(dist) / dist),
      });
    }
  }, [timesTouched]);
};
