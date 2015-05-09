/**
 * Created by melaniehoward on 5/9/15.
 */

//alert("JavaScript works!");

// initial variable
var myName = "Melanie";
var mySchoolName = "\"Full Sail University\"";
var myDrive = 0;
var milesToSchool = 1.5;
var attending = true;

// these are my outputs
console.log("My name is " + myName);
console.log("It's true that I attend " + mySchoolName);
console.log("It's only " + milesToSchool + " miles to school.");



// prompt for user input
myDrive = parseFloat(prompt("Please enter the miles to school."));

// create my first conditional
if (myDrive === milesToSchool) {

    mySchoolName = prompt("Please enter the school you are going to.");

    if (mySchoolName === "Full Sail University") {

        // if miles to school correct and where you are going is correct
        console.log("You're Great!");

    } else {

        // if miles to school is incorrect and where you are going is incorrect
        console.log("The number of miles is different from " + myDrive + milesToSchool );

    }

} else {
    attending = confirm("Do you attend Full Sail University? Click Ok for yes, Cancel for No");

    if (attending === true) {
        console.log("Congrats on attending Full Sail!");

    } else {
        console.log("Sorry to hear that.");
    }
}

