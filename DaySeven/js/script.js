/**
 * Created by melaniehoward on 5/19/15.
 */

// Melanie Howard
// Day Seven
// SDI 1505
// More arrays, loops, and functions

// global variables
var numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
var returnedArray = [];
var userPrompt = prompt("Enter 'odd' to return odd numbers or 'even' to return even numbers.");


while (userPrompt != "odd" && userPrompt != "even") {

    userPrompt = prompt("Hey, stupid! Enter 'odd or 'even'");


}

// function
function evenArray(argArray, oddOrEven) {

    // local variables
    var newArray = [];
    var modNum;
    var zeroOrOne;

    if (oddOrEven === "odd") {

        zeroOrOne = 1;

    } else {

        zeroOrOne = 0

    }


    for (var i = 0; i < argArray.length; i++) {

        modNum = argArray[i] % 2;

        if (modNum === numberArray) {

            newArray.push(numberArray[i]);


        }


    }

    argArray.pop();
    //console.log("argArray: " +  argArray);
    //console.log("newArgArray: " + newArgArray);
    return newArray;


}

// main code
returnedArray = evenArray(numberArray, userPrompt);

console.log("The " + userPrompt + " numbers array is " + returnedArray);

console.log("numberArray: " + numberArray);





































//alert("JavaScript works!");

// Lab six review

// function
//function authorFunction() {
//
//    // local arrays
//    var authors = [ "Charles Dickens", "William Shakespeare", "Mark Twain", "Hunter S. Thompson"];
//    var titles  = [ "Oliver Twist", "Hamlet", "Tom Sawyer", "Fear and Loathing in Las Vegas"];
//
//    // for loop to go through the array items
//    // output each element
//    for (var i = 0; i < authors.length; i++) {
//
//        console.log(authors[i] + " wrote " + titles[i] + ".");
//
//    }
//    // use an array method to alter the arrays
//    authors.push("Dorothy Allison");
//    titles.push("Bastard Out of Carolina");
//
//    // do final output of the change
//    console.log("I added " + authors[i] + " who wrote " + titles[i] + "." );
//
//
//}
//
//// main code
//
//authorFunction();