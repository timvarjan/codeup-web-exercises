"use strict";


// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// console.log('showMultiplicationTable for-Loop')

const showMultiplicationTable = function(num) {
    for(let i = 1; i <= 10; i++) {
        const result = i * num
        console.log(`${num} x ${i} = ${result}`)
    }
}

showMultiplicationTable(7)


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:



for(var i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 180) + 20;
    console.log(randomNumber);
    if(randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even') }
    else {
        console.log(randomNumber + ' is odd')
    }
}


//Create a for loop that uses console.log to create the output shown below.




for(var row = 1; row <= 9; row++){
    var output = "";
    for (var column = 1; column <= row; column++){
        output = output + row
    }

    console.log(output)
}




//Create a for loop that uses console.log to create the output shown below. decreases each line by 5

console.log('Decrease number by 5')

for (var i = 100; i >= 5 ; i-=5){
    console.log(i);
}