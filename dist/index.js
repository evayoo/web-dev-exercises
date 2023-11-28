"use strict";
var a = 1;
var b = "hi";
var c = "true";
let d = [a, b, c];
let e;
function addNumbers(a, b) {
    return a + b;
}
const result = addNumbers(1, 2);
console.log(result);
const person1 = {
    name: "Woo",
    age: 37,
    occupation: "scientist",
    address: "Fabrikstrasse 34 3012",
};
const person2 = {
    name: "Jane Smith",
    age: 25,
    occupation: "Data Scientist",
    phoneNumber: "555-1234",
    address: "456 Oak St",
};
function logPerson(person) {
    console.log(`${person.name} is ${person.age} years old, works as a ${person.occupation}, and lives at ${person.address}.`);
}
logPerson(person1);
logPerson(person2);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let colorOrNumber;
colorOrNumber = Color.Red;
console.log("Assigned color:", colorOrNumber);
colorOrNumber = 42;
console.log("Assigned number:", colorOrNumber);
function processColorOrNumber(input) {
    if (typeof input === "number") {
        console.log("Processing number:", input);
    }
    else {
        console.log("Processing color:", input);
    }
}
processColorOrNumber(Color.Green);
processColorOrNumber(123);
function reverseArray(arr) {
    return arr.reverse();
}
const numbersArray = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbersArray);
console.log("Reversed Numbers:", reversedNumbers);
const stringsArray = ["apple", "banana", "cherry"];
const reversedStrings = reverseArray(stringsArray);
console.log("Reversed Strings:", reversedStrings);
class KeyValuePrinter {
    printKeyValuePair(pair) {
        console.log(`Key: ${pair.key}, Value: ${pair.value}`);
    }
}
const printer = new KeyValuePrinter();
const samplePair = { key: "age", value: 25 };
printer.printKeyValuePair(samplePair);
//# sourceMappingURL=index.js.map