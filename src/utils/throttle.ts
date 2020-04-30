export const throttle = (
  func: (a: IArguments) => void,
  limit: number = 1000
) => {
  let timeout: NodeJS.Timeout;
  let initialRunTime: number;

  return function(this: Window) {
    const context = this;
    const args = arguments;
    const currTime = new Date().getTime();

    if (!initialRunTime) {
      initialRunTime = currTime;
      func.apply(context, [args]);
    } else {
      const currRunTime = currTime;
      const totalRunTime = currRunTime - initialRunTime;
      const restTime = limit - totalRunTime;

      clearTimeout(timeout);
      timeout = setTimeout(function() {
        const isOverLimit = totalRunTime >= limit;
        if (isOverLimit) {
          func.apply(context, [args]);
          initialRunTime = new Date().getTime();
        }
      }, restTime);
    }
  };
};

// |-------->| throttle
// |---|--|-------->| debounce
// |---|--|->| combinedThrottle

export const combinedThrottle = (
  func: (a: IArguments) => void,
  limit: number = 1000
) => {
  let timeout: NodeJS.Timeout;
  let initialRunTime: number | null;

  return function(this: Window) {
    const context = this;
    const args = arguments;
    const currTime = new Date().getTime();

    if (!initialRunTime) {
      initialRunTime = currTime;
    }

    const currRunTime = currTime;
    const totalRunTime = currRunTime - initialRunTime;
    const restTime = limit - totalRunTime;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const isOverLimit = totalRunTime <= limit;
      if (isOverLimit) {
        func.apply(context, [args]);
        initialRunTime = null;
      }
    }, restTime);
  };
};
