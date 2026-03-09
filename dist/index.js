"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstVar = "Chandan";
console.log(firstVar);
// Function declaration (parameter type) :what kind of data you are expecting from the function
const anyFunc = (key) => {
    return `key ${key}`;
};
console.log(anyFunc(82));
// Union In Typescript
// you will have to pass chandan/haran or moumita as parameter,
// this function will not going to take anything else as parameter
const anyFunc2 = (key) => {
    console.log(key);
};
anyFunc2("Haran");
// or you can use
const sayString = (param) => {
    return `${param}`;
};
console.log(sayString(32));
console.log(sayString("chandan"));
// thpe any / unknow type(any means it will take anything as parameter)
const returnAny = (param) => {
    return param;
};
console.log(returnAny(32));
console.log(returnAny("webskitters"));
const returnUnk = (param) => {
    return param;
};
console.log(returnUnk(32));
console.log(returnUnk("webskitters"));
// returnUnk("chandan").toUpperCase();
// so you can't use toUppercase as this is unknown,
// whether if it was of "any" type then you can mention anything here-
// -it will not going to throw any error over here but as we are working with the unknown type
// so either you use this like this or like this
returnUnk("chandan").toUpperCase(); // used Forcefull type assertion discussed below
if (typeof returnAny("chandan") === "string") {
    returnAny("chandan").toUppercase;
    // in here it will not going to throw any error here
}
// ForceFull Type Assertion
const data = "432";
const typeAssertion = data.length;
const mutatingLocalstorageLike = '{"name": "chandan"}';
// obj are saved in the localstorage as string
const parseObjectFromJson = JSON.parse(mutatingLocalstorageLike);
// here we have used forcefull assertion
console.log(parseObjectFromJson);
// Another example with html element
const text = document.querySelector(".text");
console.log(text);
//# sourceMappingURL=index.js.map