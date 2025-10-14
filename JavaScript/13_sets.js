// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

//Create a Set
//Pass an array to the new Set() constructor
const letters = new Set(["a","b","c"]); 
console.log(letters);

//Create a Set and add values:
// Create a Set
const letters1 = new Set();

// Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");

console.log(letters1);

//Add
letters.add("d");
console.log(letters);

//If you add equal elements, only the first will be saved
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
console.log(letters);

let text = "";
for (const x of letters) {
  text += x;
}
console.log(text);

console.log(typeof letters);
console.log(letters instanceof Set);

//Size
console.log(letters.size);

//Has
//The has() method returns true if a specified value exists in a set.
console.log(letters.has("d"));

text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text);

//The values() method returns an Iterator object with the values in a Set
text = "";
for (const entry of letters.values()) {
  text += entry;
}

//The keys() method returns an Iterator object with the values in a Set
text = "";
for (const x of letters.keys()) {
  text += x;
}

//The entries() method returns an Iterator with [value,value] pairs from a Set.
text = "";
for (const entry of letters.entries()) {
  text += entry;
}
console.log(text);


// The union() method returns the union of two sets.
// The union() method returns a new set containing 
// the elements which are in this set, or in the argument set, or in both:
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
console.log(C);

// The intersection() method returns the intersection of two sets.

// The intersection() method returns a new set containing 
// the elements which are in this set and in the argument set
const D = A.intersection(B);
console.log(D);


// The difference() method returns the difference between two sets.

// The difference() method returns a new set containing elements 
// which are in this set but not in the argument set
const E = A.difference(B);
console.log(E);


// The symmetricDifference() method returns the symmetric difference between to sets.

// The symmetricDifference() method returns a new set containing elements which are 
// in this set or in the argument set, but not in both
const F = A.symetricDifference(B);
console.log(F);


// The isSubsetOf() method returns true if all elements in this set is also elements in the argument set
let sub = A.isSubsetOf(B);
console.log(sub);

//The isSupersetOf() method returns true if all elements in the argument set are also in this set
let sup = A.isSupersetOf(B);
console.log(sup);

//The isDisjointFrom() method returns true if this set has no elements in common with the argument set
let dis = A.isDisjointFrom(B);
console.log(dis);

// A JavaScript WeakSet is a collection of values where the values must be objects.

// A WeakSet holds weak references to its values.
// Create a WeakSet
let mySet = new WeakSet();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};

// Add the Object
mySet.add(myObj);

// Do I have myObj in the mySet?
let answer = mySet.has(myObj);