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
let myFunction = function(a, b) {return a * b};
let result = myFunction(4, 3);
console.log("Result is "+result);

//With arrow
myFunction = (a, b) => a * b;
result = myFunction(4, 3);
console.log("Result is "+result);

// Parameters are the names listed in the function definition.
// Parameters are the names of the values that will be passed.
// Arguments are the values passed to the function when it is invoked or called.
// Arguments are the values received by the function.