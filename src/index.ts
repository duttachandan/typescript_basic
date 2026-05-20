const firstVar: string = "Chandan";

console.log(firstVar);

// Function declaration: Define what data types are expected as parameters and what will be returned
// This function accepts a number and returns a string

const anyFunc = (key: number): string => {
  return `key ${key}`;
};

console.log(anyFunc(82));

// Union Types in TypeScript
// A union type allows a variable to accept one of several specific types
// The function below will only accept the exact values: "chandan", "Haran", or "Moumita"

const anyFunc2 = (key: "chandan" | "Haran" | "Moumita") => {
  console.log(key);
};
anyFunc2("Haran");

// Example using union types: accept either string or number
// This function's parameter can be either a string or a number

const sayString = (param: string | number): string => {
  return `${param}`;
};

console.log(sayString(32));
console.log(sayString("chandan"));

// The 'any' type accepts any data type (less safe, disables type checking)
// The 'unknown' type is safer - it requires type checking before use

const returnAny = (param: any): any => {
  return param;
};

console.log(returnAny(32));
console.log(returnAny("webskitters"));

const returnUnk = (param: unknown): unknown => {
  return param;
};

console.log(returnUnk(32));
console.log(returnUnk("webskitters"));

// Important: You cannot call methods on 'unknown' types without type checking first
// With 'any', TypeScript skips type checking and allows any operation (not recommended)
// With 'unknown', TypeScript requires you to verify the type before using methods

(returnUnk("chandan") as string).toUpperCase(); // used Forcefull type assertion discussed below

// Type guard: Check the type at runtime before using type-specific methods
// This ensures the operation is safe

if (typeof returnAny("chandan") === "string") {
  returnAny("chandan").toUppercase;
  // Type is verified as string before calling string methods
}

// Type Assertion: Tell TypeScript to treat a value as a specific type
// Use this when you know the type better than TypeScript can infer

const data: string = "432";

const typeAssertion: number = (data as string).length;

// Type assertion (using 'as') enables TypeScript's autocomplete for string methods

type book = {
  name: string;
};

const mutatingLocalstorageLike = '{"name": "chandan"}';
// Objects stored in localStorage are always strings and must be parsed as JSON
const parseObjectFromJson = JSON.parse(mutatingLocalstorageLike) as book;
// Type assertion tells TypeScript the parsed JSON matches the 'book' type

console.log(parseObjectFromJson);

// Example: Assert DOM elements to specific types for better type safety
const text = document.querySelector(".text") as HTMLElement;

console.log(text);




