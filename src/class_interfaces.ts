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

enum chaiOrCode {
  SMALL = 101, // this value assignation is not mandatory but if would do the next enum property will increase the value by default
  LARGE, // after increase the value will be set to LARGE = 102, EXTRALARGE = 103
  EXTRALARGE,
}

// enum is basically stricting the user, here by declaring a enum I have simply said if you'd want to use this enum
// then you will have to select between this values only
// values are put in Capital Letter as this is the best practice

const cupSize = chaiOrCode.EXTRALARGE;

console.log(cupSize);

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

// here I am making a type from which we are using partial as generics
// so what will happen when we will call that function that function requires any of those water/coffe
// from that makeCoffe type benifits of using partial

type makeCoffe = {
  water: string;
  coffe: string;
};

const mochaCofee = (update: Partial<makeCoffe>) => {
  return update;
};

console.log(mochaCofee({ water: "32ml" }));
console.log(mochaCofee({ coffe: "32ml", water: "40ml" }));

// here I am using Required as generics so this will make all the property in type as required whether you have declared them as
// optional in type declaration

type coffeBasic = {
  coffee?: string; // by putting that ? we are making it optional
  water?: string;
  sugar?: number;
};

const CofeeMacroni = (update: Required<coffeBasic>) => {
  return update;
};

console.log(CofeeMacroni({ coffee: "32gm", water: "100ml", sugar: 20 }));
// here I have mentioned eveything in this

// there is other two ways to declare generics pick/omit

type coffeNew = Pick<coffeBasic, "coffee" | "water">;
// so here I am picking from anther type coffeBasic and also I have mentioned which properties we wants to pick in here

const makeNewCoffee = (value: coffeNew) => {
  return value;
};

console.log(makeNewCoffee({ coffee: "40gm", water: "300ml" }));

// now we will use omit by omit we will declare which are those properties that we don't want to
// inherit from an existing type

type coffeeOld = Omit<coffeBasic, "water" | "coffee">;

// here I have said we are not going use water and coffee from coffeBasic so the coffeOld takes only one value
// which is sugar

const makeOldCoffee = (value: coffeeOld) => {
  return value;
};

console.log(makeOldCoffee({ sugar: 30 }));
