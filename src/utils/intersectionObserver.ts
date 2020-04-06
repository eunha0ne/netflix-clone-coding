/**
 * Intersection Observer
 */

interface InObserverProps {
  entries: [];
  options: {
    root?: Element;
    rootMargin?: string;
    thresholds?: number;
  };
  callback: Function;
}

export const InObserver = ({ entries, options, callback }: InObserverProps) => {
  const iO = new IntersectionObserver(() => {
    entries.forEach(entry => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        callback && callback();
        iO.disconnect();
      }
    });
  }, options);

  return {
    observe: (entries: Element) => iO.observe(entries),
    disconnect: () => iO.disconnect(),
    takeRecords: () => iO.takeRecords(),
    unobserve: (element: Element) => iO.unobserve(element)
  };
};
