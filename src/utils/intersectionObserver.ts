/**
 * Intersection Observer
 */

interface InObserverProps {
  target: HTMLLIElement;
  options: {
    root?: Element;
    rootMargin?: string;
    threshold?: number;
  };
  callback: CallableFunction;
}

export interface InObserverClosure {
  observe: CallableFunction;
  disconnect: CallableFunction;
  takeRecords: CallableFunction;
  unobserve: CallableFunction;
}

export const InObserver = ({ target, options, callback }: InObserverProps) => {
  const interObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        callback();
        interObserver.disconnect();
      }
    });
  }, options);

  return {
    observe: () => interObserver.observe(target),
    disconnect: () => interObserver.disconnect(),
    takeRecords: () => interObserver.takeRecords(),
    unobserve: () => interObserver.unobserve(target)
  };
};
