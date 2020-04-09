const curry = fn => (a, ...args) =>
  args.length ? fn(a, ...args) : (...args) => fn(a, ...args);

export const reduce = (fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = fn(acc, a);
  }

  return acc;
};

export const go = (...args) => reduce((a, fn) => fn(a), args);

export const take = curry((limit, iter) => {
  let res = [];

  for (const a of iter) {
    res.push(a);

    if (res.length === limit) {
      return res;
    }
  }

  return res;
});

export const log = console.log;
