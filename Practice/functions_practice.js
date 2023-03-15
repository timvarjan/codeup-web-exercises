
"use strict";
//Write a function that accepts and multiplies 3 numbers and alerts the browser with the result
// function multiply(numOne, numTwo, numThree) {
//     //3-4:
//     var result = numOne * numTwo * numThree
//         alert("my result is: " + result);
//
// }
//
// console.log(multiply(5, 5, 9));

// *********************

//EXAMPLES FROM CURRICULUM

//
// function increment(x) {
//     return x + 1;
// }
//
// var four = increment(x: 3);
//
// var six = increment(increment(increment(x)))

// *********************

//ANONYMOUS FUNCTIONS
// use when we are looping through something
//functions w/out names

// var increment = function(x) {
//     return x + 1;
// };
//
// var two = increment(1);
//
// var numbers = [2, 3, 5, 9];
//
// numbers.forEach(function(num){
//     console.log(num +=5);
// })

// *********************

//ARGUMENTS AND PARAMETERS
// Write a function that accepts users inp[ut and alerts a welcome message with their name

//Start:
// ✅write a function
// ✅function accepts 1 parameter (userName)
// ✅alert("welcome" + userName)
// ✅prompt user for name and store in variable
// ✅execute the function

function sayHello(userName){
    alert("Welcome, " + userName);
}

var nameInput = prompt("What\'s your name?");

sayHello(nameInput);

console.log(nameInput);


// *********************


// write a function that accepts a string and converts it to lowercase
// 1. write the function
// 2. accept 1 parameter
// 3. convert parameter -> lowercase
// 4. return the result (after lowercased)
// 5. execute the function
//

// function convertToLowerCase(param) {
//    var lowerCase = param.toLowerCase();
//    return lowerCase;
//
// }
// console.log(convertToLowerCase("Welcome TO CODEUP!!!"));

// function scopeExample() {
//     var localVar = ("Strawbery");  //declare local variable
// }
// function localScopeCheck(){
//     console.log(localVar);
// }
// scopeExample();
// localScopeCheck();
// alert(localVar); //not accessible here and will produce error

// *********************
//
// var favoriteVeggie = "Carrot ";
// function favoriteFoods(){
//     var favoritFruit = "Mango "
//
//     console.log("My favorit foods are: " + favoritFruit + favoriteVeggie);
// }
//
// favoriteFoods();
