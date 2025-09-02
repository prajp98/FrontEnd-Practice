//Variables are Containers for Data
let x = 5;
let y = 6;
let z = x + y;

const x1 = 5;
const y1 = 6;
const z1 = x1 + y1;

let person = "John Doe", carName = "Volvo", price = 200; 

/*
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope

Variables declared with the var always have Global Scope.
Variables declared with the var keyword can NOT have block scope
Variables defined with var can be redeclared.

A variable defined with the const keyword cannot be reassigned:
JavaScript const variables must be assigned a value when they are declared:
Use const when you declare:
    A new Array
    A new Object
    A new Function
    A new RegExp
*/

/*
String	A text of characters enclosed in quotes
Number	A number representing a mathematical value
Bigint	A number representing a large integer
Boolean	A data type representing true or false
Undefined	A primitive variable with no assigned value
Null	A primitive value representing object absence
Symbol	A unique and primitive identifier
Object	A collection of key-value pairs of data
*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x2 = true;
let y2 = false;

// Object:
const person2 = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25"); 


let x3 = "5" + 2 + 3; //523
let x4 = 2 + 3 + "5"; //55