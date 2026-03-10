interface chaiGoods {
  sugar?: number;
  tea: number;
  water: number;
}

class lemonTea implements chaiGoods {
  tea = 4;
  water = 3;
  sugar = 44;
}

// here we are implementing interfaces into the class means
// we are creating a map that the class should follow and the property that the interface is having currently the class should have them too

// we can also set readOnly values also in interfaces

interface makeChai {
  readonly sugar: number;
  water: number;
  tea: "3" | "4" | "5"; // this is also called as literals type
}

class chai implements makeChai {
  sugar = 32;
  water = 33;
  tea: "3" | "4" | "5" = "3";
}

// Interfaces for Functions

interface makeStudent {
  (strudentName: string, studentCourse: string): void;
}

const student: makeStudent = function (studentname, studentCourse) {
  console.log(studentCourse, studentname);
};

// or

const student2: makeStudent = (studentname, studentCourse) => {
  return studentname;
};

console.log(student2("chandan", "html"));

// or

function student3(studentName: string, coursePrice: number): number {
  return coursePrice;
}

console.log(student3("chandan", 6300));

// union / literal types

const value: "chandan" | "dutta" = "chandan"; // this is literall types
// I have literally mentioned all the types of mine that can be allowed over here

// but for union types I am declaring the type it can accept as value

let chandan: string | number; // this is union type

chandan = 32;
chandan = "44";
// chandan = true;  here you will see error because the accepted type is either number or string

// declaring array types

const arr: string[] = ["h", "a", "b"];
// or
const arr2: Array<string> = ["h", "a", "b"];

const arrNum: number[] = [3, 3, 2, 0, 4, 5];
// or
const arrNum2: Array<number> = [3, 2, 3, 4, 5];

const tupple: [string, number, number, string] = ["chandan", 3, 4, "chandan"];

const tuppleNum: [string, number, ...number[]] = ["3", 3, 3, 3, 4, 4, 5]; // this rest tupples in here


//Generic Types


function sayTupple<T>(value: T[]): T | undefined {
  return value[0];
}

// or

const sayTupple2 = <T>(value: T[]): T | undefined => {
  return value[0];
};

console.log(sayTupple2<number>([3, 2, 3])); 

// Here I am mentioning the value that the function should accept
// also return the same value this are helpfull for reusable component in react js




