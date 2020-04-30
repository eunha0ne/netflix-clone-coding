export const throttle = (
  func: (a: IArguments) => void,
  limit: number = 1000
) => {
  let timeout: NodeJS.Timeout;
  let initialRunTime: number;

  return function(this: Window) {
    const context = this;
    const args = arguments;

    if (!initialRunTime) {
      initialRunTime = new Date().getTime();
      func.apply(context, [args]);
    } else {
      const currRunTime = new Date().getTime();
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
// 1

export const combinedThrottle = (
  func: (a: IArguments) => void,
  limit: number = 1000
) => {
  let timeout: NodeJS.Timeout;
  let initialRunTime: number | null;

  return function(this: Window) {
    const context = this;
    const args = arguments;

    if (!initialRunTime) {
      this.console.log('/s');
      initialRunTime = new Date().getTime(); // 1
    }

    const currRunTime = new Date().getTime();
    const totalRunTime = currRunTime - initialRunTime; // 500ms - 0
    const restTime = limit - totalRunTime; // 1000ms - 500ms
    this.console.log('/restTime', restTime);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const isOverLimit = totalRunTime <= limit;
      this.console.log('/check', totalRunTime, limit);

      if (isOverLimit) {
        func.apply(context, [args]);
        this.console.log('/e');
        initialRunTime = null;
      }
    }, restTime);
  };
};
