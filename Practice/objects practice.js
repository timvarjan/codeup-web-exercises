"use strict;"

var waterBottle = {
    color: "green",
    material: ["plastic", "aluminum"],
    capacity: "24 ounces",
    reusable: true,
    brand: "Hydroflask"
}

console.log(waterBottle);
// "my water bottle is: "color"
console.log("my water bottle is: " + waterBottle.color);

// declaring objects using the new Object method

var school = new Object();

console.log(school);
school.name = "codeup";
console.log(school);
school.cities =['San Antonio', 'Dallas', 'remote']
console.log(school);
school.numStudents = 50;
console.log(school.numStudents);

