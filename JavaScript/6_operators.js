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
//When comparing two strings, "2" will be greater than "12".
// When comparing a string with a number, 
// JavaScript will convert the string to a number when doing the comparison. 
// An empty string converts to 0. 
// A non-numeric string converts to NaN which is always false.
// Strings are compared alphabetically
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

//Nullish operator ??
let name1 = null;
let text = "missing";
let result = name1 ?? text;
console.log("name1 = "+name1+" text = "+text);
console.log("name1 ?? text = "+result);


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


//Logical Assignment Operators
//ES2020 features
//0, null, undefined are considered false
//If the first value is true, the second value is assigned.

//&&= Operator
x = true;
y = x &&= 10;
console.log("x = "+x);
console.log("y = x &&= 10;");
console.log("x = "+x+", y = "+y+"\n");

x = false;
y = x &&= 10;
console.log("x = "+x);
console.log("y = x &&= 10;");
console.log("x = "+x+", y = "+y+"\n");

//If the first value is false, the second value is assigned
//||= Operator
x = true;
y = x ||= 10;
console.log("x = "+x);
console.log("y = x ||= 10;");
console.log("x = "+x+", y = "+y+"\n");

x = false;
y = x ||= 10;
console.log("x = "+x);
console.log("y = x ||= 10;");
console.log("x = "+x+", y = "+y+"\n");

//If the first value is undefined or null, the second value is assigned.
//??= Operator
x = false;
y = x ??= 10;
console.log("x = "+x);
console.log("y = x ??= 10;");
console.log("x = "+x+", y = "+y+"\n");

x = null;
y = x ??= 10;
console.log("x = "+x);
console.log("y = x ??= 10;");
console.log("x = "+x+", y = "+y+"\n");