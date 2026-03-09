const firstVar: string = "Chandan";

console.log(firstVar);

// Function declaration (parameter type) :what kind of data you are expecting from the function

const anyFunc = (key: number): string => {
  return `key ${key}`;
};

console.log(anyFunc(82));

// Union In Typescript
// you will have to pass chandan/haran or moumita as parameter,
// this function will not going to take anything else as parameter

const anyFunc2 = (key: "chandan" | "Haran" | "Moumita") => {
  console.log(key);
};
anyFunc2("Haran");

// or you can use

const sayString = (param: string | number): string => {
  return `${param}`;
};

console.log(sayString(32));
console.log(sayString("chandan"));

// thpe any / unknow type(any means it will take anything as parameter)

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

// returnUnk("chandan").toUpperCase();

// so you can't use toUppercase as this is unknown,
// whether if it was of "any" type then you can mention anything here-
// -it will not going to throw any error over here but as we are working with the unknown type
// so either you use this like this or like this

(returnUnk("chandan") as string).toUpperCase(); // used Forcefull type assertion discussed below

if (typeof returnAny("chandan") === "string") {
  returnAny("chandan").toUppercase;
  // in here it will not going to throw any error here
}

// ForceFull Type Assertion

const data: string = "432";

const typeAssertion: number = (data as string).length;

// Forcefully I am telling the tsc that the data is a string so show us all the methods for string
// if we don't use forcefull Type Assertion then we will not going to get the suggestion of all the methods
// another example

type book = {
  name: string;
};

const mutatingLocalstorageLike = '{"name": "chandan"}';
// obj are saved in the localstorage as string
const parseObjectFromJson = JSON.parse(mutatingLocalstorageLike) as book;
// here we have used forcefull assertion

console.log(parseObjectFromJson);

// Another example with html element

const text = document.querySelector(".text") as HTMLElement;

console.log(text);




