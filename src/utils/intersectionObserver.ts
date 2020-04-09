/**
 * Intersection Observer
 */

interface IObserverProps {
  target: HTMLLIElement;
  options: {
    root?: Element;
    rootMargin?: string;
    threshold?: number;
  };
  callback: CallableFunction;
}

export interface IObserverClosure {
  observe: CallableFunction;
  disconnect: CallableFunction;
  takeRecords: CallableFunction;
  unobserve: CallableFunction;
}

export const IObserver = ({ target, options, callback }: IObserverProps) => {
  const iObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        callback();
        iObserver.disconnect();
      }
    });
  }, options);

  return {
    observe: () => iObserver.observe(target),
    disconnect: () => iObserver.disconnect(),
    takeRecords: () => iObserver.takeRecords(),
    unobserve: () => iObserver.unobserve(target)
  };
};
