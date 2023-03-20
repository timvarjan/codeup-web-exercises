//WHILE LOOPS
while (/*condition*/) {
    // body
}

    //WHILE LOOP EXAMPLE 1
var i = 0; // 0 -> 1 -> 2 -> 3 -> 4 ->.... key to push forward // i stands for iterator

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++; // same as i = i + 1
}
var i = 10;

    //WHILE LOOP EXAMPLE 2
while (i < 10) {
     console.log('while loop iteration #' + i);
     i++;
}

    //DO WHILE

do {
    //body
} while(/*condition*/);



//BREAKING OUT OF A LOOP
var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}

