// Immutable data

// mutable data is problematic for functional programming, because it breaks the purity of our functions. When we make updates to data, we want to return brand new data structures that contain all the elements of the previous state of the data structure, plus our updates.

let a = [1, 3, 5];
let b = a;

b.push(5);
console.log(a);

// --- Immutable

function push(arr, el) {
  return [...arr, el];
}

b = push(b, 89);
console.log(a);
console.log(b);
