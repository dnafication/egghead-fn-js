// A higher order function does at least one of the following things, often both:

// Accepts a function as an argument
// Returns a new function

const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`call count: ${++count}`);
    return fn(...args);
  };
};

const add = (a, b) => a + b;

const countedAdd = withCount(add);

console.log(countedAdd(3, 5));
console.log(countedAdd(3, 7));
console.log(countedAdd(3, 2));
