/*
An Object is a variable that can hold many variables.
Objects are collections of key-value pairs, where each key (known as property names) has a value.
You should declare objects with the const keyword.
When an object is declared with const, you cannot later reassign it to point to a different variable.

*/
//Ways to to Create a JavaScript Object
//1. Object literal :An object literal is a list of key : value pairs inside curly braces { }
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
console.log("Person's name is " + person.firstName + " and age is "+ person.age+"\n");

//create an empty object, and add the properties later
const person1 = {};
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

//Create a new JavaScript object using new Object()
const person2 = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  });

//Two ways to access object properties : 
person.lastName;
person["lastName"];

//Adding New Properties
person.nationality = "English";

//Deleting Properties
delete person.age;

//Object Methods
//Object methods are actions that can be performed on objects.
//Object methods are function definitions stored as property values
const person3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log("Full name is "+person3.fullName());
//In the example above, this refers to the person object

//Displaying Object Properties
let text = person.name + "," + person.age + "," + person.city;

//Object Constructor Functions
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

// Create an Object:
const person4 = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(person4);
man.firstName = "Peter";
console.log(man);

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
  ];
  
  const myObj = Object.fromEntries(fruits);
  console.log(myObj);


// Create Target Object
const person5 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person6 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person5, person6);

//Object.values() creates an array from the property values
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// Stringify the Array
text = myArray.toString();
console.log(text);

//Object.entries() makes it simple to use objects in loops
const fruits1 = {Bananas:300, Oranges:200, Apples:500};

text = "";
for (let [fruit, value] of Object.entries(fruits1)) {
  text += fruit + ": " + value;
}
console.log(text);

//Using JSON.stringify()
text = JSON.stringify(person);
console.log(text);
