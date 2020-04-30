export const throttle = (
  func: (a: IArguments) => void,
  limit: number = 1000
) => {
  let timeout: NodeJS.Timeout | null;
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

      clearTimeout(timeout!);
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
