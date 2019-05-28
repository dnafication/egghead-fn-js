// Pointfree programming is passing a named function as an argument to avoid writing an anonymous function with interim variables instead.

// Pointfree programming:
// increases code legibility,
// decreases the surface area for bugs, and
// makes our code more composable and unit testable.

const array = [1, 3, 5, 6];
const double = x => x * 2;

array.map(double);
