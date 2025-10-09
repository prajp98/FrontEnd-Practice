let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes 

//Quotes inside quotes
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';


let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

text= 'It\'s alright.';
console.log(text);

text = "The character \\ is called backslash.";
console.log(text);

// \b 	Backspace
// \f 	Form Feed
// \n 	New Line
// \r 	Carriage Return
// \t 	Horizontal Tabulator
// \v 	Vertical Tabulator

text = "Hello " + "Dolly!";
console.log(text);

// Do not create String objects.
// The new keyword complicates the code and slows down execution speed.
// String objects can produce unexpected results
let x = "John";
let y = new String("John");
console.log("x==y : " + x==y);
console.log("x===y : " + x===y);

//JavaScript objects cannot be compared.
//Comparing two JavaScript objects always returns false.
x = new String("John");
y = new String("John");
console.log("x==y : " + x==y);
console.log("x===y : " + x===y);

//Template Strings use back-ticks (``)
//Template Strings allow both single and double quotes inside a string
// Template Strings allow variables in strings.
// Template strings provide an easy way to interpolate variables in strings.
let firstName = "John";
let lastName = "Doe";
s = `Welcome ${firstName}, ${lastName}!`;
console.log(s);

//Template Strings allow interpolation of expressions in strings
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

//HTML templates
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html);

//Methods
text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Length
console.log(text.length);
//charAt()
console.log(text.charAt(0));
//charCodeAt() - The method returns a UTF-16 code
console.log(text.charCodeAt(0));
//codePointAt()
console.log(text.codePointAt(0));
//at() - allows negative indices instead of charAt(myString.length-1)
console.log(text.at(-1));

//Read only 
// text[0]="P" does not work
console.log(text[0]);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);
// same as
text3 = "Hello" + " " + "World!";
console.log(text3);
// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.

//Slice
text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13));
//If you omit the second parameter, the method will slice out the rest of the string
console.log(text.slice(7));
//If a parameter is negative, the position is counted from the end of the string
console.log(text.slice(-12));
console.log(text.slice(-12, -6));

//Substring
console.log(text.substring(7, 13));
console.log(text.substring(7, 13));

text1 = "Hello World!";
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

console.log(text1.isWellFormed());

//Trim
text1 = "      Hello World!      "
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());

//Padding
//It pads a string with another string (multiple times)
//  until it reaches a given length.(Total length of string)
text = "55";
console.log(text.padStart(4,"0"));
console.log(text.padEnd(4,"0"));

//Repeat
text = "Hello World!";
console.log(text.repeat(3));

//Replace
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set.
console.log(text.replace("World", "You"));

text = "Please visit Microsoft and Microsoft!";
console.log(text.replace("Microsoft", "W3Schools"));
//Case-sensitive
console.log(text.replace("MICROSOFT", "W3Schools"));
//Ignore case
console.log(text.replace(/MICROSOFT/i, "W3Schools"));
//Replace all occurences 
console.log(text.replace(/MICROSOFT/g, "W3Schools"));

//Replace all
text = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(text.replaceAll("Cats","Dogs"));
//Can use regular expressions
console.log(text.replaceAll(/Cats/g,"Dogs"));


//Split
//A string can be converted to an array
text = "a,b,c,d,e,f";
console.log(text.split(","));

text = "Hello";
console.log(text.split(""));

//Index of
//returns the index (position) of the first occurrence of a string in a string,
//  or it returns -1 if the string is not found
text = "Please locate where 'locate' occurs!"
console.log(text.indexOf("locate"));
// last index of
console.log(text.lastIndexOf("locate"));
//start searching from
console.log(text.indexOf("locate", 15));
console.log(text.lastIndexOf("locate", 15));

//search()
//The search() method returns the position of the first occurrence of a string in a string
console.log(text.search("locate"));
console.log(text.search(/locate/));


// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

//match()
// /returns an array containing the results of matching a string 
// against a string (or a regular expression).
//If a regular expression does not include the g modifier (global search),
//  match() will return only the first match in the string.
text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));
console.log(text.match(/ain/));
console.log(text.match(/ain/g));
console.log(text.match(/ain/gi));

text = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(text.matchAll("Cats"));
console.log(text.matchAll(/Cats/g));
console.log(text.matchAll(/Cats/gi));

//includes()
//returns true if a string contains a specified value
text = "Hello world, welcome to the universe.";
console.log(text.includes("world"));
console.log(text.includes("world", 12));

// startsWith()
// returns true if a string begins with a specified value.
console.log(text.startsWith("Hello"));
console.log(text.startsWith("world", 6));

//endsWith()
console.log(text.endsWith("verse."));
//0-11
console.log(text.endsWith("world", 11));
