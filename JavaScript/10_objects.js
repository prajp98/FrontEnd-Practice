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