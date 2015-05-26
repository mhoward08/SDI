/**
 * Created by melaniehoward on 5/26/15.
 */

/*
Melanie Howard
SDI 1505
Day Ten
Review of Everything!
 */

// Create a function to find the difference between two years.
// Global variables
var returnedNumber;

var numArray = [3, 6, 7, 9, 23, 42, 22, 50, 34];
var currentNum = 1;
var returnedNumber;

// Functions
function yearsBetween() {

    // local variable
    var yearEntered = parseInt(prompt("What year would you like to use?"));

    var today = new Date();

    today = today.getFullYear();

    var difference = today - yearEntered;


return difference;


}

// problem 2

function findNumber(argArray, argNumber)
{

    // local variables
    var nextGreatest = 0;
    argArray = argArray.sort();
    console.log(argArray);


    for (var i = 0; i < argArray.length; i++)
    {

        if (argNumber < argArray[i]);

        {

          return argArray[i];
        }
    }

    return nextGreatest;

}


// Main code
//returnedNumber = yearsBetween();
//console.log("The difference in years is " + returnedNumber);

// problem 2
returnedNumber = findNumber(numArray, currentNum);
console.log("The next highest number is " + returnedNumber);







































// global variables
//var firstNumber = prompt("Please enter a number to be converted: ");
//var returnedNumber;
//
//var numToFormat = parseFloat(prompt("Enter a number to format:"));
//var numOfDecimals = parseFloat(prompt("Enter the number of decimal places:"));

//// problem 3 variables and prompts
//var dateOne = new Date("5/23/2015");
//var dateTwo = new Date("5/23/2112");
//var hOrD
//
//// problem functions
//// problem 1 function: Format a number to a certain number of decimal places
//function decFormat(argNumber, decPlaces)
//{
//
//    return argNumber.toFixed(decPlaces);
//}
//
//
//// problem 2: Convert a string to a number
//function convertNumber(argNumber)
//{
//
//    while (isNaN(argNumber))
//    {
//
//        argNumber = prompt("No, I said enter a number:");
//    }
//
//    return parseFloat(argNumber);
//}
//
//// problem 3: Find the hours or days between two dates
//function dateDiff(firstDate, secondDate, hoursOrDays)
//{
//    var difference = Math.abs(firstDate - secondDate);
//
//    if (hoursOrDays === "hours")
//
//    {
//
//        difference = difference/1000/60/60;
//    }
//
//    else
//
//    {
//
//        difference = difference/1000/60/60/24;
//    }
//
//    return difference;
//
//}
//// main code
//// problem 1
////returnedNumber = decFormat(numToFormat, numOfDecimals);
////console.log("The formatted number is", returnedNumber);
////
//////problem 2
////returnedNumber = convertNumber(firstNumber);
////console.log("The returned number is ", returnedNumber);
//
//// problem 3 function call
//returnedNumber = dateDiff(dateOne, dateTwo, hOrD);
//
//
//
//    console.log("The difference in " + hOrD + " between " + dateOne.toDateString() + " and " + dateTwo.toDateString() returnedNumber);



