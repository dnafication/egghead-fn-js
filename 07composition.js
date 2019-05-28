// Composition

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

// console.log(repeat(exclaim(scream("bhago"))));

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(
  repeat,
  exclaim,
  scream
);

console.log(withExuberance("bhago"));

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const withExuberance2 = pipe(
  scream,
  exclaim,
  repeat
);
console.log(withExuberance2("bhago"));
