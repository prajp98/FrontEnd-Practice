//Assignment Operators
//Assignment operators assign values to variables.
let x = 10;
let y = 5;
x = y;
console.log("x = y");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x += y;
console.log("x += y");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x -= y;
console.log("x -= y");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x *= y;
console.log("x *= y");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x /= y;
console.log("x /= y");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x %= y;
console.log("x %= y");
console.log("x = "+x+", y = "+y+"\n");

//The Spread (...) Operator
//The ... operator splits iterables into individual elements.
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
console.log("Min "+minValue+" Max "+maxValue+"\n");


//Arithmetic Operators
x = 10;
y = 5;
x = y + 2;
console.log("x = y + 2");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x = y - 2;
console.log("x = y - 2");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x = y * 2;
console.log("x = y * 2");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x = y / 2;
console.log("x = y / 2");
console.log("x = "+x+", y = "+y+"\n");

x = 10;
y = 5;
x = y % 2;
console.log("x = y % 2");
console.log("x = "+x+", y = "+y+"\n");

//Exponent
x = 10;
y = 5;
x = y ** 2;
console.log("x = y ** 2");
console.log("x = "+x+", y = "+y+"\n");

//Pre-Increment
x = 10;
y = 5;
x = y++ ;
console.log("x = y++");
console.log("x = "+x+", y = "+y+"\n");

//Post-Increment
x = 10;
y = 5;
x = ++y ;
console.log("x = y++");
console.log("x = "+x+", y = "+y+"\n");

//Pre-Decrement
x = 10;
y = 5;
x = y-- ;
console.log("x = y--");
console.log("x = "+x+", y = "+y+"\n");

//Post-Decrement
x = 10;
y = 5;
x = --y ;
console.log("x = --y");
console.log("x = "+x+", y = "+y+"\n");


//Comparison Operators
x = 10;
y = 5;
console.log("x == y  "+ (x == y));

//Value and type
x = 10;
y = 5;
console.log("x === 10  "+ (x === 10));

x = 10;
y = 5;
console.log("x != y  "+ (x != y));

//not equal value or type
x = 10;
y = 5;
console.log("x !== y  "+ (x !== y));

x = 10;
y = 5;
console.log("x > y  "+ (x > y));

x = 10;
y = 5;
console.log("x >= y  "+ (x >= y));

x = 10;
y = 5;
console.log("x < y  "+ (x < y));

x = 10;
y = 5;
console.log("x <= y  "+ (x <= y)+"\n");


//Logical Operators
x = 10;
y = 5;
console.log("x < 10 && y > 1  "+ (x < 10 && y > 1));

x = 10;
y = 5;
console.log("x == 10 || y == 1  "+ (x == 10 || y == 1));

x = 10;
y = 5;
console.log("!(x == y)  "+ (!(x == y)));

//Ternary operator
let age = 20;
let voteable = (age < 18) ? "Too young":"Old enough";
console.log("Age is "+voteable);


//Bitwise Operators
x = 5 & 1;
console.log("5 & 1 = "+ (x)+"\n");

x = 5 | 1;
console.log("5 | 1 = "+ (x)+"\n");

x = ~5;
console.log("~5 = "+ (x)+"\n");

x = 5 ^ 1;
console.log("5 ^ 1 = "+ (x)+"\n");

x = 5 << 1;
console.log("5 << 1 = "+ (x)+"\n");

x = 5 >> 1;
console.log("5 >> 1 = "+ (x)+"\n");

x = 5 >>> 1;
console.log("5 >>> 1 = "+ (x)+"\n");
