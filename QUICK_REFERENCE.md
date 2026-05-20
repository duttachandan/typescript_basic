# TypeScript Concepts Quick Reference

A quick lookup guide for all TypeScript concepts covered in this project.

---

## Type Annotations

```typescript
// Basic annotations
const name: string = "Chandan";
const age: number = 25;
const active: boolean = true;

// Function annotations
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Arrow function annotations
const add = (a: number, b: number): number => a + b;
```

---

## Union Types

```typescript
// Specific value options (Literal Types)
type Size = "small" | "medium" | "large";
const cupSize: Size = "medium";

// Multiple type options
type StringOrNumber = string | number;
const value: StringOrNumber = 42; // ✓ or "42"

// Function parameter
function process(input: string | number): void {
  // Must handle both string and number
}
```

---

## Intersection Types

```typescript
type A = { name: string };
type B = { age: number };

type Combined = A & B;
// Combined must have BOTH name (string) AND age (number)

const person: Combined = {
  name: "John",
  age: 30
}; // ✓ Both properties required
```

---

## Interfaces

```typescript
// Basic interface
interface User {
  name: string;
  email: string;
  age?: number; // Optional
}

// Readonly properties
interface Config {
  readonly apiUrl: string;
}

// Function interface
interface Logger {
  (message: string): void;
}

// Extending interfaces
interface Admin extends User {
  role: "admin" | "user";
}

// Implementing in class
class UserImpl implements User {
  name = "John";
  email = "john@example.com";
}
```

---

## Type Assertion

```typescript
// Using 'as' keyword
const data: unknown = "123";
const str: string = data as string;
const length: number = (data as string).length;

// With DOM elements
const button = document.querySelector("button") as HTMLButtonElement;

// With JSON parsing
interface Person { name: string; }
const json = '{"name": "John"}';
const person = JSON.parse(json) as Person;
```

---

## Any vs Unknown

```typescript
// Any: No type checking (dangerous)
const anyValue: any = "test";
anyValue.toUpperCase(); // ✓ No error (even if wrong)
anyValue.randomMethod(); // ✓ No error (type checking disabled)

// Unknown: Requires type checking (safe)
const unknownValue: unknown = "test";
unknownValue.toUpperCase(); // ✗ Error - must check type first

if (typeof unknownValue === "string") {
  unknownValue.toUpperCase(); // ✓ Safe after type check
}
```

---

## Arrays and Tuples

```typescript
// Array types
const strings: string[] = ["a", "b"];
const numbers: Array<number> = [1, 2, 3];
const mixed: (string | number)[] = ["a", 1];

// Tuple: Fixed length with specific types per position
const tuple: [string, number] = ["hello", 42];
const tuple2: [string, number, boolean] = ["x", 1, true];

// Tuple with rest elements
const varTuple: [string, number, ...boolean[]] = ["a", 1, true, false, true];
```

---

## Enums

```typescript
// Numeric enum
enum Status {
  Pending = 0,
  Active = 1,
  Inactive = 2
}

// String enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// Auto-increment
enum Level {
  Low = 1,
  Medium,     // 2
  High        // 3
}

// Usage
const current: Status = Status.Active;
const dir: Direction = Direction.Up;
```

---

## Generics

```typescript
// Basic generic
function identity<T>(value: T): T {
  return value;
}

const num: number = identity<number>(42);
const str: string = identity<string>("hello");

// Multiple type parameters
function combine<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

combine<string, number>("age", 25);

// Generic interfaces
interface Container<T> {
  value: T;
}

const stringContainer: Container<string> = { value: "hello" };
const numberContainer: Container<number> = { value: 42 };

// Generic constraints
interface HasName {
  name: string;
}

function getName<T extends HasName>(obj: T): string {
  return obj.name;
}

// Generic class
class Stack<T> {
  items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
}
```

---

## Utility Types

### Partial<T>
Make all properties optional
```typescript
type User = { name: string; age: number; };
type PartialUser = Partial<User>;
// Same as: { name?: string; age?: number; }

const update: PartialUser = { name: "John" }; // ✓
```

### Required<T>
Make all properties required
```typescript
type OptionalUser = { name?: string; age?: number; };
type RequiredUser = Required<OptionalUser>;
// Same as: { name: string; age: number; }
```

### Pick<T, K>
Select specific properties
```typescript
type User = { name: string; age: number; email: string; };
type UserPreview = Pick<User, "name" | "age">;
// Same as: { name: string; age: number; }
```

### Omit<T, K>
Exclude specific properties
```typescript
type User = { name: string; age: number; email: string; };
type UserWithoutEmail = Omit<User, "email">;
// Same as: { name: string; age: number; }
```

### Record<K, T>
Create object with specific keys
```typescript
type Role = "admin" | "user" | "guest";
type Permissions = Record<Role, boolean>;
// Same as: { admin: boolean; user: boolean; guest: boolean; }
```

---

## Type Guards

```typescript
// typeof guard
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✓ String method
  } else {
    console.log(value.toFixed(2)); // ✓ Number method
  }
}

// instanceof guard
class Dog {}
class Cat {}

function pet(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    // animal is Dog
  } else {
    // animal is Cat
  }
}

// Custom type guard
function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string";
}

if (isUser(data)) {
  console.log(data.name); // ✓ data is User
}
```

---

## Discriminated Unions

```typescript
type Success = { status: "success"; data: string; };
type Error = { status: "error"; message: string; };
type Response = Success | Error;

function handle(response: Response) {
  if (response.status === "success") {
    console.log(response.data); // ✓ data available
  } else {
    console.log(response.message); // ✓ message available
  }
}
```

---

## Common Patterns

### Optional Chaining & Nullish Coalescing
```typescript
// Optional chaining (?.)
const user: User | null = getUser();
const name: string | undefined = user?.name;

// Nullish coalescing (??)
const displayName = name ?? "Anonymous";
```

### API Response Pattern
```typescript
interface ApiResponse<T> {
  status: number;
  data: T;
  error?: string;
}

interface User { id: number; name: string; }

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  // ...
}
```

### Configuration Pattern
```typescript
interface Config {
  readonly timeout: number;
  readonly retries: number;
  readonly cache?: boolean;
}

const config: Readonly<Config> = {
  timeout: 5000,
  retries: 3,
  cache: true
};
```

---

## Frequently Used Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| `Type \| null` | Optional value | `const name: string \| null = ...` |
| `Type[]` | Array of type | `const items: string[]` |
| `readonly Prop: Type` | Immutable property | `readonly id: number` |
| `T extends U` | Generic constraint | `<T extends HasId>` |
| `keyof T` | Keys of type | `type Keys = keyof User` |
| `T[K]` | Property access | `const value: T[K]` |
| `Partial<T>` | All optional | `type Draft = Partial<User>` |
| `Pick<T, K>` | Select props | `type Preview = Pick<User, "name">` |

---

## File References

| Concept | File | Lines |
|---------|------|-------|
| Type Annotations | `index.ts` | 5-11 |
| Union Types | `index.ts` | 13-20 |
| Type Assertion | `index.ts` | 47-86 |
| Interfaces | `class_interfaces.ts` | 1-46 |
| Generics | `Generics.ts` | All |
| API Integration | `axiosThroughFetch.ts` | All |

---

## Tips for Writing Better Types

1. **Be Specific**: Use specific types instead of `any`
   - ❌ `const data: any`
   - ✓ `const data: User`

2. **Use Interfaces for Contracts**: Define expected structure
   - ✓ `interface User { name: string; email: string; }`

3. **Leverage Union Types**: Express multiple possibilities
   - ✓ `type Status = "pending" | "done" | "error"`

4. **Use Generics for Reusability**: Write flexible code
   - ✓ `function process<T>(data: T[]): T[] { ... }`

5. **Document Complex Types**: Add comments for clarity
   - ✓ Comments explaining "why" not just "what"

---

**Keep this guide handy while working with TypeScript!**
