// This is a detailed explanation about generics

function genericsBasic<T>(input: T): T[] {
  return [input];
}

console.log(genericsBasic("chandan")); // here as return expect an array of String
console.log(genericsBasic(2)); // as return expect an array of number

// so here I have used what type to expect as input and also what type to return from the function
// as we can see in the genericsBasic<T> function we are using <T> by mentioning this we are mentioning what
// type you want to use you will have to use that same type as input(as parameter) in the function
// and also you will also needs to return the array of that same type

// More Complex version of Generics

function genericsModerate<A, B>(value: { a: A; b: B }): { a: A; b: B }[] {
  return [value];
}

// here we have multiple values and multiple types of parameter
// so what we have done here is A, B both are basically types and we are taking value as parameter which is
// basically an object of a and b which follows the A and B type and also we are returning the array of that object

console.log(genericsModerate({ a: "chandan", b: 2 }));

// now we will see the most used version of the generics that we will use in the framework/ library mostly
// we will define an interface of data that we will pass as parameter in the funtion

interface AxiosType<T> {
  data: T;
}
const storeString: AxiosType<string> = { data: "I am a string" };
const storeNumber: AxiosType<number> = { data: 20 };

interface fetchData<T> {
  status: number;
  data: T;
}

const res: fetchData<{ flavour: string }> = {
  status: 200,
  data: { flavour: "choclate" },
};


