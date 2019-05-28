// Currying

// currying is the act of taking a function that normally receives more than one argument such as add and refactoring it so that it becomes a higher-order function that returns a series of functions each accepting only one argument and only evaluating once we receive our final argument.

const add = a => b => a + b;

const addThree = add(3);

console.log(addThree(5)); // 8

// Arity: Arity describes the number of arguments a function receives. Depending on the number it receives, there are specific words to describe these functions.

// A function that receives one is called a unary function. A function that receives two arguments is called a binary, three equals a ternary, and four equals a quaternary, so forth and so on. Thus the act of currying can be described as taking a multivariate function and turning it into a series of unary functions.
