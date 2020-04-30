import { useState, useEffect } from 'react';
import { combinedThrottle } from '~/utils/throttle';

export const useScroll = (limit: number) => {
  const [isTop, setIsTop] = useState(true);
  const [isGoingDown, setIsGoingDown] = useState(false);
  const [prevTop, setPrevTop] = useState(0);

  useEffect(() => {
    let currTop = 0;

    const handleIsTop = () => setIsTop(currTop === 0);
    const handlePrevTop = () => setPrevTop(currTop);
    const handleIsGoingDown = () => {
      if (prevTop < currTop) {
        setIsGoingDown(false);
      } else if (prevTop > currTop) {
        setIsGoingDown(true);
      }
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const rect = doc.getBoundingClientRect();

      currTop = rect.top;

      handleIsTop();
      handlePrevTop();
      handleIsGoingDown();
    };

    const throttleScroll = combinedThrottle(onScroll, limit);

    window.addEventListener('scroll', throttleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttleScroll);
  }, [prevTop, limit]);

  return { isTop, isGoingDown };
};
