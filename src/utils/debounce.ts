export const debounce = <F extends (...args: any[]) => any>(
  callback: F,
  delay: number = 1000,
  isPrevent: boolean
) => {
  let timeout: NodeJS.Timeout | null;

  return (...args: any[]) => {
    if (isPrevent) {
      return;
    }

    clearTimeout(timeout!);
    timeout = setTimeout(() => {
      callback(...args);
      timeout = null;
    }, delay);
  };
};
