// Exercise 1: Basic Type Annotations
// Objective: Get familiar with basic type annotations in TypeScript.

// Task:

// Create a TypeScript file and declare variables of different types (string, number, boolean, array, and any).

// Annotate these variables with their respective types.

// Write a simple function that takes typed parameters and returns a typed value. For example, a function that takes two numbers and returns their sum.

// Compile the TypeScript code to JavaScript and verify the types are enforced.

// Expected Outcome:

// Understanding of how to declare types for variables and function parameters/returns.

// Experience with TypeScript's basic type-checking.

var a = 1;
var b = "hi";
var c = "true";
let d = [a, b, c];
let e;

function addNumbers(a: number, b: number): number {
    return a + b;
}

const result = addNumbers(1, 2)
console.log(result);

// Exercise 2: Interfaces and Objects
// Objective: Learn to define and use interfaces.

// Task:

// Define an interface Person with properties like name, age, and occupation.

// Create objects that adhere to the Person interface.

// Write a function that takes a Person object as a parameter and logs a description of the person.

// Experiment with optional properties and readonly properties in the interface.

// Expected Outcome:

// Understanding of how interfaces are used to type-check object shapes.

// Ability to define and use optional and readonly properties in interfaces.

interface Person {
    name: string;
    age: number;
    occupation: string;
    // Optional property
    phoneNumber?: string;
    // Readonly property
    readonly address: string;
  }
  
  // Create objects adhering to the Person interface
  const person1: Person = {
    name: "Woo", 
    age: 37, 
    occupation: "scientist", 
    address: "Fabrikstrasse 34 3012",
  };
  
  const person2: Person = {
    name: "Jane Smith",
    age: 25,
    occupation: "Data Scientist",
    phoneNumber: "555-1234",
    address: "456 Oak St",
  };
  
  // Function that takes a Person object as a parameter and logs a description
  function logPerson(person: Person): void {
    console.log(
      `${person.name} is ${person.age} years old, works as a ${person.occupation}, and lives at ${person.address}.`
    );
    
    // Uncommenting the line below should result in a TypeScript compilation error
    // person.address = "789 Elm St";
  }
  
  // Testing the logPerson function
  logPerson(person1);
  logPerson(person2);
  
//   Exercise 3: Enums and Union Types
//   Objective: Explore the use of enums and union types.
  
//   Task:
  
//   Define an enum Color with a few color values.
  
//   Create a variable that can hold either a number or a string using a union type.
  
//   Write a function that takes the union type variable as an argument and behaves differently based on whether it's a number or a string.
  
//   Expected Outcome:
  
//   Familiarity with defining and using enums.
  
//   Understanding of how to create and use union types.

// Define the Color enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
  }
  
  // Create a variable that can hold either a number or a string using a union type
  let colorOrNumber: number | string;
  
  // Assign values to the variable
  colorOrNumber = Color.Red;
  console.log("Assigned color:", colorOrNumber);
  
  colorOrNumber = 42;
  console.log("Assigned number:", colorOrNumber);
  
  // Write a function that takes the union type variable as an argument
  function processColorOrNumber(input: number | string): void {
    // Behave differently based on the type
    if (typeof input === "number") {
      console.log("Processing number:", input);
    } else {
      console.log("Processing color:", input);
    }
  }
  
  // Test the function
  processColorOrNumber(Color.Green);
  processColorOrNumber(123);
  
//   Exercise 4: Generics
//   Objective: Understand and apply generics in TypeScript.
  
//   Task:
  
//   Write a generic function that takes an array of any type and returns an array of that type. For example, it should work with both an array of numbers and an array of strings.
  
//   Create a generic interface that represents a key-value pair.
  
//   Implement a simple class or function that demonstrates the use of the generic interface.
  
//   Expected Outcome:
  
//   Ability to write generic functions and interfaces.
  
//   Understanding of how generics provide type flexibility while maintaining type safety.

// Generic function that takes an array of any type and returns an array of that type
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }
  
  // Test the generic function with an array of numbers and an array of strings
  const numbersArray: number[] = [1, 2, 3, 4, 5];
  const reversedNumbers: number[] = reverseArray(numbersArray);
  console.log("Reversed Numbers:", reversedNumbers);
  
  const stringsArray: string[] = ["apple", "banana", "cherry"];
  const reversedStrings: string[] = reverseArray(stringsArray);
  console.log("Reversed Strings:", reversedStrings);
  
  // Generic interface representing a key-value pair
  interface KeyValuePair<K, V> {
    key: K;
    value: V;
  }
  
  // Simple class demonstrating the use of the generic interface
  class KeyValuePrinter<T, U> {
    printKeyValuePair(pair: KeyValuePair<T, U>): void {
      console.log(`Key: ${pair.key}, Value: ${pair.value}`);
    }
  }
  
  // Test the generic class
  const printer = new KeyValuePrinter<string, number>();
  const samplePair: KeyValuePair<string, number> = { key: "age", value: 25 };
  printer.printKeyValuePair(samplePair);
  
