interface chaiGoods {
  sugar?: number; // Optional property
  tea: number;
  water: number;
}

class lemonTea implements chaiGoods {
  tea = 4;
  water = 3;
  sugar = 44;
}

// Implementing an interface creates a contract: the class must include all required properties
// If a property is optional (marked with ?), it can be omitted

// Interfaces can enforce readonly properties - values that cannot be changed after initialization

interface makeChai {
  readonly sugar: number;
  water: number;
  tea: "3" | "4" | "5"; // Literal types: only these exact values are allowed
}

class chai implements makeChai {
  sugar = 32;
  water = 33;
  tea: "3" | "4" | "5" = "3";
}

// Interfaces can define function signatures
// This ensures functions match the expected parameter and return types

interface makeStudent {
  (strudentName: string, studentCourse: string): void;
}

const student: makeStudent = function (studentname, studentCourse) {
  console.log(studentCourse, studentname);
};

// Both arrow functions and regular functions can implement interfaces
// Function parameters and return types are checked against the interface

const student2: makeStudent = (studentname, studentCourse) => {
  return studentname;
};

console.log(student2("chandan", "html"));

// Function with explicit type annotations (alternative to using interfaces)

function student3(studentName: string, coursePrice: number): number {
  return coursePrice;
}

console.log(student3("chandan", 6300));

// Literal Types: Explicitly list the exact values that are allowed
// More restrictive than simple string or number types

const value: "chandan" | "dutta" = "chandan"; // Only these two values are permitted

// Union Types: Allow different types but not specific values
// More flexible than literal types

let chandan: string | number; // Can be either a string OR a number

chandan = 32;
chandan = "44";
// chandan = true;  // This would cause an error - boolean is not allowed

// Array Type Declaration: Multiple ways to declare array types

const arr: string[] = ["h", "a", "b"];
// Alternative syntax: Array<string>
const arr2: Array<string> = ["h", "a", "b"];

const arrNum: number[] = [3, 3, 2, 0, 4, 5];
// Alternative syntax: Array<number>
const arrNum2: Array<number> = [3, 2, 3, 4, 5];

// Tuples: Fixed-length arrays where each position has a specific type
// Position 1 is string, position 2 is number, position 3 is number, position 4 is string

const tupple: [string, number, number, string] = ["chandan", 3, 4, "chandan"];

// Tuples with rest elements: Fixed positions followed by variable-length same type
// First element is string, second is number, then any number of additional numbers

const tuppleNum: [string, number, ...number[]] = ["3", 3, 3, 3, 4, 4, 5];

// Enums: Restrict variables to a specific set of named constants
// Useful for representing states like size, status, or priority

enum chaiOrCode {
  SMALL = 101, // Optional: assign specific values (next value increments automatically)
  LARGE,       // Automatically set to 102
  EXTRALARGE,  // Automatically set to 103
}

// Enums enforce type safety by limiting values to predefined options
// Always use UPPERCASE for enum values (TypeScript convention)

const cupSize = chaiOrCode.EXTRALARGE;

console.log(cupSize);

// Generic Types: Allow functions/types to work with any data type while maintaining type safety

function sayTupple<T>(value: T[]): T | undefined {
  return value[0];
}

// Alternative syntax using arrow function
// <T> is a type parameter that gets replaced with the actual type when called

const sayTupple2 = <T>(value: T[]): T | undefined => {
  return value[0];
};

console.log(sayTupple2<number>([3, 2, 3]));
// The generic T is replaced with 'number' - function accepts number[] and returns a number

// Generic types are essential for reusable components in React and other frameworks

// Partial<T> Generic Utility: Makes all properties optional
// Useful when you want to allow partial updates

type makeCoffe = {
  water: string;
  coffe: string;
};

const mochaCofee = (update: Partial<makeCoffe>) => {
  return update;
};

console.log(mochaCofee({ water: "32ml" }));
console.log(mochaCofee({ coffe: "32ml", water: "40ml" }));

// Required<T> Generic Utility: Makes all properties required
// Converts optional properties to required ones

type coffeBasic = {
  coffee?: string;  // Optional property
  water?: string;   // Optional property
  sugar?: number;   // Optional property
};

const CofeeMacroni = (update: Required<coffeBasic>) => {
  return update;
};

console.log(CofeeMacroni({ coffee: "32gm", water: "100ml", sugar: 20 }));
// All properties must be provided when using Required<>

// Pick<T, Keys> Generic Utility: Select specific properties from a type
// Useful when you only need certain properties

type coffeNew = Pick<coffeBasic, "coffee" | "water">;
// Only 'coffee' and 'water' are included; 'sugar' is excluded

const makeNewCoffee = (value: coffeNew) => {
  return value;
};

console.log(makeNewCoffee({ coffee: "40gm", water: "300ml" }));

// Omit<T, Keys> Generic Utility: Exclude specific properties from a type
// Useful when you want all properties except a few

type coffeeOld = Omit<coffeBasic, "water" | "coffee">;
// All properties from coffeBasic are included except 'water' and 'coffee'
// Only 'sugar' remains in coffeeOld

const makeOldCoffee = (value: coffeeOld) => {
  return value;
};

console.log(makeOldCoffee({ sugar: 30 }));
