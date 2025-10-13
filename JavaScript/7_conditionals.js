// if
if (new Date().getHours() < 18) {
    console.log("Good day!");
  }

// nested if
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
    if (age >= 16) {
        console.log("You can drive!");
    }
}

// else
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// else if
const time = new Date().getHours();
let greeting1;
if (time < 10) {
  greeting1 = "Good morning";
} else if (time < 20) {
  greeting1 = "Good day";
} else {
  greeting1 = "Good evening";
}
console.log(greeting1);

// Ternary 
let text1 = (age < 18) ? "Minor" : "Adult";
console.log(text1);

// Switch
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}
console.log(day);

switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
}
console.log(text);

switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
}
console.log(text);

//Loops
//For
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let s = "";
for (let i = 0; i < len; i++) {
  s += cars[i];
}

//While
let i = 0;
while (i < 5) {
  console.log(i)
  i++;
}

//do while
//The do while runs at least once,
//even if the condition is false from the start.
i = 0;
do {
    console.log(i);
    i++;
}while (i < 5); 


//Labeled
s = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    s += i;
   }
}
console.log(s);


s = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    s += i;
   }
}
console.log(s);


