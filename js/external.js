"use strict";

console.log("Hello from inline JavaScript");

alert("Welcome to my Website!");

var colorChoice = prompt("What is your favorite color?");

alert("Great, " + colorChoice + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet
// if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
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

// Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you
// receive in payment for this week? You worked 10 hours for Facebook, 6 hours
// for Google and 4 hours for Amazon.

var google = prompt("How many hours did you work at Google this week?") * 400;
var amazon = prompt("How many hours did you work at Amazon this week?") * 380;
var facebook = prompt("How many hours did you work at Facebook this week?") * 350;

alert("You earned a total of $" + (google + amazon + facebook) + " this week!");

// A student can be enrolled in a class only if the class
// is not full and the class schedule does not conflict with her current schedule.

var totalClassSeats = +prompt("What is the maximum capacity of the class?");
var currentlyEnrolled = +prompt("How many students are currently enrolled?");
var openSeats = (totalClassSeats - currentlyEnrolled);
var classDay = prompt("Which day of the week is the class held?");
var availability = ["monday", "wednesday"];
var checkSchedule = availability.includes(classDay.toLowerCase())
console.log(checkSchedule)
var isElegible = openSeats > 0 && checkSchedule;
console.log(isElegible);
alert("Eligeble to enroll: " + isElegible);

//A product offer can be applied only if a person
// buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

var premium = confirm("Are you a premium member?")
var items = prompt("How many items are you purchasing?")
var itemsForOffer = items > 2
var expirationDate = 15
var todayDate = prompt("What is today\'s date. Numbers only")
var isNotExpired = todayDate < expirationDate
var offerApplied = itemsForOffer && isNotExpired || premium && isNotExpired
alert("Offer Status: " +offerApplied)

// password example
var username = "codeup";
var password = "notastrongpassword";
var passwordCharCount = password.lenght >= 5;
var usernameNotInPassword = passwordCharCount = password.IndexOf(username) === -1;

var noUserName = !password.includes(username);
var userNameNotaParagraph = username.length <= 20















