"use strict";


// Konami code sequence
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let konamiIndex = 0;



// Event listener for keyup events
$(document).keyup(() => {
// Check if the key pressed matches the next key in the konami code sequence
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
// If the whole sequence is entered correctly, show the cheat button
        if (konamiIndex === konamiCode.length) {
            alert('You have earned 30 extra lives!')
            console.log(konamiCode);
            console.log(konamiIndex);
        }
    } else {
// If a wrong key is pressed, reset code index
        konamiIndex = 0;
        alert('Wrong!');



    }

});