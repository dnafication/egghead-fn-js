// Impure functions come in a variety of shapes and sizes. Some typical examples would be:

// - Functions whose output depends on outside/global state
const COST_OF_ITEM = 67;
const cartTotal = quatity => COST_OF_ITEM * quatity;

// - Functions that return different outputs for the same inputs
const generateId = () => {
  Math.floor(Math.random * 100000);
};

// - Functions that modify application state
let id = 0;
const createFoodItem = name => ({
  id: ++id,
  name
});

// - Functions that modify the "outside world"
// a function containing console.log is an impure function
// as it modifies the outside world: terminal!
const sideEffect = () => {
  console.log("hey eggheads");
};

// Pure function
const f = x => x + 1;
