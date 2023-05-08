"use strict";

fetch(  'https://api.github.com/users/timvarjan/events/public'
, {headers: {'Authorization': 'GITHUB_KEY'}
})
    .then(response => response.json())
    .then(res => console.log(res[0]));


function wait(milSeconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved in: ${milSeconds} milliseconds')
        }, milSeconds)
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
