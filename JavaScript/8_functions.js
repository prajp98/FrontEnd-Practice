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

myFunction = (a, b) => a * b;
result = myFunction(4, 3);
console.log("Result is "+result);