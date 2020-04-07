export const debounce = (
  callback: CallableFunction,
  delay: number = 1000,
  isPrevent: boolean
) => {
  let timeout: NodeJS.Timeout | null;

  return () => {
    if (isPrevent) {
      return;
    }

    clearTimeout(timeout!);
    timeout = setTimeout(() => {
      callback();
      timeout = null;
    }, delay);
  };
};
