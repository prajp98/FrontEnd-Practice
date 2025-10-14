// An Array is an object type designed for storing data collections.
// Key characteristics of JavaScript arrays are:
//     Elements: An array is a list of values, known as elements.
//     Ordered: Array elements are ordered based on their index.
//     Zero indexed: The first element is at index 0, the second at index 1, and so on.
//     Dynamic size: Arrays can grow or shrink as elements are added or removed.
//     Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

//Method 1
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//Method 2
const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";

//Method 3 new
const cars2 = new Array("Saab", "Volvo", "BMW");

//Accessing Array Elements
const cars3 = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
console.log(cars.at(2))


//Changing an Array Element
cars[0] = "Opel";
console.log(cars);

//Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//Access the Full Array
console.log(cars);

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements". 
//Objects use names to access its "members".

let length = fruits.length;
console.log(length);
//Adding Array Elements
fruits.push("Lemon");

Array.isArray(fruits);
(fruits instanceof Array);

//Array join
console.log(fruits.join(" * "));

//The pop() method removes the last element from an array
//returns the value that was "popped out"
console.log(fruits.pop());

//The push() method adds a new element to an array (at the end)
//The push() method returns the new array length
console.log(fruits.push("Kiwi"));
console.log(fruits);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
//The shift() method returns the value that was "shifted out"
console.log(fruits.shift());
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
//The unshift() method returns the new array length
console.log(fruits.unshift("Lemon"));
console.log(fruits);

//concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const res = arr1.concat(arr2, arr3);
console.log(res);

//flat
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr.flatMap(x => [x, x * 10]);
console.log(newArr1);

//The splice() method can be used to add new items to an array
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (2) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items

console.log(fruits.splice(2, 2, "Lemon", "Banana"));
console.log(fruits);

//The difference between the new toSpliced() method and the old splice() 
// method is that the new method creates a new array, 
// keeping the original array unchanged, while the old method altered the original array.
const months = ["Jan", "Feb", "Mar", "Apr","May"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

//The slice() method slices out a piece of an array into a new array
console.log(fruits.slice(3));
console.log(fruits.slice(1, 3));

//The indexOf() method searches an array for an element value and returns its position
//Array.indexOf() returns -1 if the item is not found
console.log(fruits.indexOf("Apple"));
//Array.indexOf() returns the position of the last occurrence of the specified element.
console.log(fruits.lastIndexOf("Apple"));

//This allows us to check if an element is present in an array (including NaN, unlike indexOf)
console.log(fruits.includes("Mango"));

//The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 
console.log(first);

//The findIndex() method returns the index of the first array element that passes a test function.
let i = numbers.find(myFunction);
console.log(i);

// /findLast() method that will start from the 
// end of an array and return the value of the first element that satisfies a condition
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high);

//The findLastIndex() method finds the index of the last element that satisfies a condition.
let pos = temp.findLastIndex(x => x > 40); 
console.log(pos);

//The sort() method sorts an array alphabetically
fruits.sort();
console.log(fruits);

//The reverse() method reverses the elements in an array
fruits.reverse();
console.log(fruits);

//The toSorted() method as a safe way to sort 
// an array without altering the original array.
const sorted = months.toSorted();
console.log(sorted);
//The toReversed() method as a safe way to 
//reverse an array without altering the original array.
const reversed = months.toReversed();
console.log(reversed);

//By default, the sort() function sorts values as strings.
//So use this
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

//Min
console.log(Math.min.apply(null, points));
//Max
console.log(Math.max.apply(null, points));

const cars4 = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
]; 
cars4.sort(function(a, b){return a.year - b.year}); 
console.log(cars4);

//forEach()
const numbers1 = [45, 4, 9, 16, 25];
let txt = "";
numbers1.forEach(myFunction);

function myFunction(value) {
  txt += value+" ";
}
console.log(numbers1);

// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
const numbers3 = [45, 4, 9, 16, 25];
const numbers4 = numbers3.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers4);

//The flatMap() method first maps all elements of an array 
// and then creates a new array by flattening the array.
const arr = [1, 2, 3, 4, 5, 6];
const newArray = arr.flatMap((x) => x * 2);

//he filter() method creates a new array with array elements that pass a test.
const over18 = numbers.filter(myFunction);
function myFunction(value) {
  return value > 18;
} 
console.log(over18);

//The reduce() method runs a function on each array element to produce a single value.
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
} 

console.log(sum);

let sum1 = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
} 
console.log(sum1);

//The every() method checks if all array values pass a test.
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
} 
console.log(allOver18);

let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 
console.log(someOver18);

// The Array.from() method returns an Array object from:
//     Any iterable object
//     Any object with a length property
let text = "ABCDEFG";
console.log(Array.from(text));

const myNumbers = [1,2,3,4];
const myArr4 = Array.from(myNumbers, (x) => x * 2);

//The Array.keys() method returns an Array Iterator object with the keys of an array.
const keys = fruits.keys();

for (let x of keys) {
  text += x + " ";
}
console.log(text);

//The entries() method returns an Array Iterator object with key/value pairs
text="";
const f = fruits.entries();

for (let x of f) {
  text+= x;
}
console.log(text);

//Array with() method as a safe way to update elements in an array without altering the original array.

console.log(months.with(2, "March"));

//The ... operator expands an array into individual elements.
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];

const arr7 = [...arr1, ...arr2];
console.log(arr7);

const numbers2 = [23,55,21,87,56];
let minValue = Math.min(...numbers2);
let maxValue = Math.max(...numbers2);

//The rest operator (...) allows us to destruct an array and collect the leftovers:
let a, rest;
const arr8 = [1,2,3,4,5,6,7,8];

[a, ...rest] = arr8;
console.log(arr8);