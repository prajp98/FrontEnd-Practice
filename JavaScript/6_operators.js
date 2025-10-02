//Assignment Operators
let x = 10;
let y = 5;
x = y;
console.log("x = y");
console.log("x = "+x+", y = "+y);

x = 10;
y = 5;
x += y;
console.log("x += y");
console.log("x = "+x+", y = "+y);

x = 10;
y = 5;
x -= y;
console.log("x -= y");
console.log("x = "+x+", y = "+y);

x = 10;
y = 5;
x *= y;
console.log("x *= y");
console.log("x = "+x+", y = "+y);

x = 10;
y = 5;
x /= y;
console.log("x /= y");
console.log("x = "+x+", y = "+y);

x = 10;
y = 5;
x %= y;
console.log("x %= y");
console.log("x = "+x+", y = "+y);

//The Spread (...) Operator
//The ... operator splits iterables into individual elements.
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
console.log("Min "+minValue+" Max "+maxValue);


//Arithmetic Operators
x = 10;
y = 5;
let z = x + y;
console.log("z = x + y");
console.log("z = "+z);

x = 10;
y = 5;
z = x - y;
console.log("z = x - y");
console.log("z = "+z);

x = 10;
y = 5;
z = x * y;
console.log("z = x * y");
console.log("z = "+z);

x = 10;
y = 5;
z = x ** y;
console.log("z = x ** y");
console.log("z = "+z);

x = 10;
y = 5;
z = x / y;
console.log("z = x / y");
console.log("z = "+z);

x = 10;
y = 5;
z = x % y;
console.log("z = x % y");
console.log("z = "+z);

x = 10;
y = 5;
z = x++;
console.log("z = x++");
console.log("z = "+z);

x = 10;
y = 5;
z = ++x;
console.log("z = ++x");
console.log("z = "+z);

x = 10;
y = 5;
z = x--;
console.log("z = x--");
console.log("z = "+z);

x = 10;
y = 5;
z = --x;
console.log("z = --x");
console.log("z = "+z);

x = true;
y = x &&= 10;
console.log("y = x &&= 10");
console.log("x = "+x+", y = "+y);

x = true;
y = x ||= 10;
console.log("y = x ||= 10");
console.log("x = "+x+", y = "+y);