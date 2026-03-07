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


