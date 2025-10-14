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
const months = ["Jan", "Feb", "Mar", "Apr"];
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
