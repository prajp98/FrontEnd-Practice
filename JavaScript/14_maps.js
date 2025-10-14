
// The Map Object

// A Map object holds key-value pairs where the keys can be any datatype.

// A Map also remembers the original insertion order of the keys.
// How to Create a Map

// You can create a JavaScript Map by:

//     Passing an Array to new Map()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits);
//     Create a Map and use Map.set()
// Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);
console.log(fruits1);

//The set() method can also be used to change existing Map values
fruits.set("apples", 200);
console.log(fruits);

//The get() method gets the value of a key in a Map
console.log(fruits.get("apples"));

console.log(typeof fruits);
console.log(fruits instanceof Map);

//Size
console.log(fruits.size);

fruits.delete("apples");
console.log(fruits);

fruits1.clear();
console.log(fruits1);

//The has() method returns true if a key exists in a map
console.log(fruits.has("apples"));

//The forEach() method invokes a callback for each key/value pair in a map
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
console.log(text);

//The entries() method returns an iterator object with the [key,values] in a map
text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text);

//The keys() method returns an iterator object with the keys in a map:
text = "";
for (const x of fruits.keys()) {
  text += x;
}
console.log(text);

//The values() method returns an iterator object with the values in a map
text = "";
for (const x of fruits.values()) {
  text += x;
}
console.log(text);

// Create a WeakMap
let myMap = new WeakMap();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};

// Set a WeakMap value
myMap.set(myObj, "player");

// Get the WeakMap value
let type = myMap.get(myObj);
console.log(type);

console.log();
console.log();
console.log();
console.log();
console.log();