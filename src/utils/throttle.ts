// ES6 code
// function throttled(delay, fn) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = (new Date).getTime();
//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return fn(...args);
//   }
// }

// export const throttle = (func, limit) => {
//   let lastFunc;
//   let lastRan;

//   return function() {
//     const context = this;
//     const args = arguments;

//     if (!lastRan) {
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(function() {
//         if (Date.now() - lastRan >= limit) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// };

export function throttle(func: CallableFunction, limit: number = 1000) {
  let lastFunc;
  let lastRunnigTime: number;

  console.log('/1', func, limit);

  return function(this: any) {
    const context = this;
    const args = arguments;

    console.log('/2', context, args);

    if (!lastRunnigTime) {
      lastRunnigTime = Date.now();
      func();
    }
  };
}
