/**
 * Created by melaniehoward on 5/14/15.
 */

//alert("JavaScript works!");

// fun with functions!

// Global variables
var globalName = "Bob";
var returnedValueVariable;
var checkedName;


// functions
function nameFetcher() {

    var myName = prompt("Enter your name: ", "Melanie");

    return myName;

}

function nameChecker(nameArgument) {

    var trueName;

    if (nameArgument === "Optimus") {
        return true;
    } else {
        return false;
    }

    return trueName;

    console.log("Hey! Look at me!");

}

// main code
returnedValueVariable = nameFetcher();

checkedName = nameChecker(returnedValueVariable);

if (checkedName) {

    console.log("Greetings and welcome!");

} else {

    console.log("Intruder alert!");

}









































// Problem 1

//var fullPrice = 12;
//var discount = 5;
//var age;
//
//age = parseInt(prompt("Enter the customer's age: "));
//
//if (age >= 55 || age < 10) {
//    console.log("Your discounted price is $" + (fullPrice - discount) + ".");
//
//} else {
//    console.log("No discount for you. Please pay $" + fullPrice + ".");
//
//}

//// Problem 2
//
//// tire variables
//var frontRight = parseFloat(prompt("Enter the PSI for the front right tire:"));
//var frontLeft  = parseFloat(prompt("Enter the PSI for the front left tire:"));
//var rearRight  = parseFloat(prompt("Enter the PSI for the rear right tire:"));
//var rearLeft   = parseFloat(prompt("Enter the PSI for the rear left tire:"));
//
//if (frontRight === frontLeft && rearRight === rearLeft) {
//    console.log("Your tire pressures are equal in the front and equal in the rear.");
//
//} else {
//    console.log("There is a problem with your tire pressures. Please check them.");
//
//}


//// Problem 2.0 LOOPS
//
//// tire variables
//
//var frontRight
//var frontLeft;
//var rearRight;
//var rearLeft;
//var tirePressure;
//var tireLocation;
//
//for (var i = 0; i < 4; i++) {
//
//    if (i === 0) {
//        // first time through the loop
//        tireLocation = "front right";
//
//    } else if (i === 1) {
//        // second time through the loop
//        tireLocation = "front left";
//
//    } else if (i === 2) {
//        //third time through the loop
//        tireLocation = "rear right";
//
//    } else {
//        // fourth time through the loop
//        tireLocation = "rear left";
//    }
//
//
//    tirePressure = parseFloat(prompt("What is the tire pressure of the " + tireLocation + " tire?"));
//
//    if (i === 0) {
//        // first time through the loop
//        frontRight = tirePressure;
//
//    } else if (i === 1) {
//        // second time through the loop
//        frontLeft = tirePressure;
//
//    } else if (i === 2) {
//        //third time through the loop
//        rearRight = tirePressure;
//
//    } else {
//        // fourth time through the loop
//        rearLeft = tirePressure;
//    }
//}
//
//if (frontRight === frontLeft && rearRight === rearLeft) {
//    console.log("The tire pressures are good to go!");
//} else {
//    console.log("The tire pressures need to be checked.");
//}

