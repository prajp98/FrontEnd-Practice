/* 
Functions are fundamental building blocks in all programming.
Functions enable better code organization, modularity, and efficiency.
Functions are reusable block of code designed to perform a particular task.
Functions execute when they are "called" or "invoked".
*/

function myFunction(p1, p2) {
    return p1 * p2;
  }
  
let p = myFunction(4, 3);
console.log("Result is "+p);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius; 
  console.log("F to C is "+value);

//Before arrow:
let myFunction1 = function(a, b) {return a * b};
let result = myFunction1(4, 3);
console.log("Result is "+result);

//With arrow
myFunction = (a, b) => a * b;
result = myFunction(4, 3);
console.log("Result is "+result);

// Parameters are the names listed in the function definition.
// Parameters are the names of the values that will be passed.
// Arguments are the values passed to the function when it is invoked or called.
// Arguments are the values received by the function.

//A self-invoking expression is invoked (started) automatically, without being called.
(function () {
  console.log("Hello")  // I will invoke myself
})();

console.log(typeof myFunction);
console.log(myFunction.toString());

// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
let hello = () => "Hello World!"; 
console.log(hello);

hello = (val) => "Hello " + val; 
console.log(hello(7));

// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// Default Parameters
// If a function is called with missing arguments (less than declared), the missing values are set to undefined.
// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter
function myFunction2(x, y) {
  if (y === undefined) {
    y = 2;
  }  
  return x * y;
}
console.log(myFunction2(4));

//allows function parameters to have default values.
function myFunction3(x, y = 10) {
  return x + y;
}
console.log(myFunction3(5));

//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);

// Arguments are Passed by Value
// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value.
// Changes to arguments are not visible (reflected) outside the function.

// Objects are Passed by Reference
// In JavaScript, object references are values.
// Because of this, objects will behave like they are passed by reference:
// If a function changes an object property, it changes the original value.
// Changes to object properties are visible (reflected) outside the function.

//Invoking a Function as a Method
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(myObject.fullName());

//Invoking a Function with the Constructor
function myFunction4(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction4("John", "Doe");

// This will return "John"
console.log(myObj.firstName);

// this Alone
// When used alone, this refers to the global object.
// Because this is in the global scope.
// In a browser window the global object is [object Window]

// this in a Function (Default)
// In a function, by default, this is the global object.
// In a browser window, the global object is [object Window]

// this in a Function (Strict)
// JavaScript strict mode does not allow default binding.
// When used in a function, in strict mode, this is undefined

// this in Event Handlers
// In HTML event handlers, this refers to the HTML element that received the event


// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an object as an argument (parameter).
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person1));


const person3 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person4 = {
  firstName:"John",
  lastName: "Doe"
}
console.log(person3.fullName.call(person4, "Oslo", "Norway"));

//With the apply() method, you can write a method that can be used on different objects.
console.log(person.fullName.apply(person1));

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// The apply() method accepts arguments in an array
console.log(person3.fullName.apply(person4, ["Oslo", "Norway"]));

// Function Borrowing
// With the bind() method, an object can borrow a method from another object.
// The example below creates 2 objects (person and member).
// The member object borrows the fullname method from the person object
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}
console.log(person.fullName.bind(member));

//Preserving this
// Sometimes the bind() method has to be used to prevent losing this.
// In the following example, the person object has a display method. In the display method, this refers to the person object

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();