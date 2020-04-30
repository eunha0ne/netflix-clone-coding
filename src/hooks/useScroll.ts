import { useState, useEffect } from 'react';
import { combinedThrottle } from '~/utils/throttle';

export const useScroll = (limit: number) => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleIsTop = () => {
      const doc = document.documentElement;
      const rect = doc.getBoundingClientRect();
      const isRectTop = rect.top === 0;

      setIsTop(isRectTop);
    };

    const throttleScroll = combinedThrottle(handleIsTop, limit);

    window.addEventListener('scroll', throttleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttleScroll);
  }, [isTop, limit]);

  return isTop;
};
