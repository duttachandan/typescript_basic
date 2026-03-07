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
//# sourceMappingURL=index.js.map