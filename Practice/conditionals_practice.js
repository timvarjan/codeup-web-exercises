"use strict";

//print the console "bring a sweater" if the weather is belo 50 degrees and print "bring sunglasses"
// if the weather is above 50 degrees.

// var temp = 20;
//
// if (temp > 50) {
//     console.log("bring sunglasses");
// }   else {
//     console.log("bring a sweater");
// }
//70+, bring sunnies
//50-70, bring sweater
//50- stay home

var weather = Math.floor(Math.random() * 100);
console.log('the temp outside is ' + weather + " degrees fahrenheit")

if (weather >= 70){
    console.log('bring sunnies');
} else if(weather >= 50 && weather < 70) {
    console.log('bring a sweater');
} else if(weather < 50) {
    console.log('stay home');
}
//*********************

var pass = "theSecretPassword";

var userGuess = prompt("guess the pass");

if (userGuess == pass) {
    alert("You are the winner");
} else {
    alert("try again next time");
}

// if the user guesses correctly, alert "you are a winner"
// if the user guesses incorrectly, alert "try again next time"


