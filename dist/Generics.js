// This is a detailed explanation about generics
function genericsBasic(input) {
    return [input];
}
console.log(genericsBasic("chandan")); // here as return expect an array of String
console.log(genericsBasic(2)); // as return expect an array of number
// so here I have used what type to expect as input and also what type to return from the function
// as we can see in the genericsBasic<T> function we are using <T> by mentioning this we are mentioning what
// type you want to use you will have to use that same type as input(as parameter) in the function
// and also you will also needs to return the array of that same type
// More Complex version of Generics
function genericsModerate(value) {
    return [value];
}
// here we have multiple values and multiple types of parameter
// so what we have done here is A, B both are basically types and we are taking value as parameter which is
// basically an object of a and b which follows the A and B type and also we are returning the array of that object
console.log(genericsModerate({ a: "chandan", b: 2 }));
const storeString = { data: "I am a string" };
const storeNumber = { data: 20 };
const res = {
    status: 200,
    data: { flavour: "choclate" },
};
export {};
// After learning this see the axiosThroughFetch.ts file 
//# sourceMappingURL=Generics.js.map