"use strict";

console.log("Hello from inline JavaScript");

// alert("Welcome to my Website!");
//
// var colorChoice = prompt("What is your favorite color?");

alert("Great, " + colorChoice + " is my favorite color too!");


var dailyCharge = 3

var littleMermaid = prompt("How many days did you rent The Little Mermaid for?") * dailyCharge;

alert("The cost for this rental is $" + littleMermaid);

var brotherBear = prompt("How many days did you rent The Brother Bears for?") * dailyCharge;

alert("The cost for this rental is $" + brotherBear);

var hercules = prompt("How many days did you rent Hercules for?") * dailyCharge;

alert("The cost for this rental is $" + hercules);

var grandTotal = (littleMermaid + brotherBear + hercules);

var price = alert("The total amount you have to pay is $" + grandTotal);

console.log(typeof grandTotal);




