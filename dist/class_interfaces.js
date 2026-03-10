"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class lemonTea {
    tea = 4;
    water = 3;
    sugar = 44;
}
class chai {
    sugar = 32;
    water = 33;
    tea = "3";
}
const student = function (studentname, studentCourse) {
    console.log(studentCourse, studentname);
};
// or
const student2 = (studentname, studentCourse) => {
    return studentname;
};
console.log(student2("chandan", "html"));
// or
function student3(studentName, coursePrice) {
    return coursePrice;
}
console.log(student3("chandan", 6300));
// union / literal types
const value = "chandan"; // this is literall types
// I have literally mentioned all the types of mine that can be allowed over here
// but for union types I am declaring the type it can accept as value
let chandan; // this is union type
chandan = 32;
chandan = "44";
// chandan = true;  here you will see error because the accepted type is either number or string
// declaring array types
const arr = ["h", "a", "b"];
// or
const arr2 = ["h", "a", "b"];
const arrNum = [3, 3, 2, 0, 4, 5];
// or
const arrNum2 = [3, 2, 3, 4, 5];
const tupple = ["chandan", 3, 4, "chandan"];
const tuppleNum = ["3", 3, 3, 3, 4, 4, 5]; // this rest tupples in here
//Generic Types
function sayTupple(value) {
    return value[0];
}
// or
const sayTupple2 = (value) => {
    return value[0];
};
console.log(sayTupple2([3, 2, 3]));
const mochaCofee = (update) => {
    return update;
};
console.log(mochaCofee({ water: "32ml" }));
console.log(mochaCofee({ coffe: "32ml", water: "40ml" }));
//# sourceMappingURL=class_interfaces.js.map