// Order of arguments matter in curried function and so in fn programming

const map = cb => array => array.map(cb);

const prop = x => obj => obj[x];
const propName = prop("name");

const people = [
  { name: "Mohini" },
  { name: "Nirmal" },
  { name: "Marco" },
  { name: "Mohan" }
];

console.log(map(propName)(people));
