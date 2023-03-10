"use strict"; // reads JS in a mor strict manner

console.log(`hey this is my js file`);

var mySchool = "codeup";

console.log("mySchool is awesome!!");

console.log(mySchool, "is awesome");

console.log(mySchool, + "is awesome!");

alert("Hey! Stop!");

var likesPizza = confirm("Do you like pizza?");
// confirm message return boolean, so its a value we can store and use again.
console.log(likesPizza);

var bestToppings = prompt  ("what toppings do you like on you pizza?");
//return a string

console.log(bestToppings);

var person1 = prompt("what's your name?");
var personAge = Number(prompt("what is your age?"));
var clubAgeLimit = 21;
var canGetIn = false;


canGetIn = personAge > clubAgeLimit; // string > number?
console.log("can " + person1 + " get into the club: ", canGetIn);




