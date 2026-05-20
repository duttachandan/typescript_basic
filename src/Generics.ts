// Generics: Allow functions and types to work with any data type while maintaining type safety
// <T> is a type parameter that acts as a placeholder for any type

function genericsBasic<T>(input: T): T[] {
  return [input];
}

console.log(genericsBasic("chandan")); // Returns: ["chandan"]
console.log(genericsBasic(2));         // Returns: [2]

// The <T> parameter means: "Whatever type is passed as input will be the same type returned in an array"
// This provides type safety without manually specifying the type each time

// Advanced Generics: Using multiple type parameters for complex scenarios

function genericsModerate<A, B>(value: { a: A; b: B }): { a: A; b: B }[] {
  return [value];
}

// <A, B> means: Define two separate type parameters
// The function accepts an object with properties 'a' (type A) and 'b' (type B)
// It returns an array of objects with the same structure

console.log(genericsModerate({ a: "chandan", b: 2 }));

// Real-world Generic Interfaces: Used with APIs and libraries like Axios
// These interfaces show how to handle responses from API calls

interface AxiosType<T> {
  data: T;
}

const storeString: AxiosType<string> = { data: "I am a string" };
const storeNumber: AxiosType<number> = { data: 20 };

// Practical Example: Fetch API response structure with generic data

interface fetchData<T> {
  status: number;
  data: T;
}

const res: fetchData<{ flavour: string }> = {
  status: 200,
  data: { flavour: "choclate" },
};

// After learning these concepts, see the axiosThroughFetch.ts file for a complete example 

