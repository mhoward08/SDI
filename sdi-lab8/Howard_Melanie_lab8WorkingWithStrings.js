//alert("JavaScript works!");

/* Melanie Howard
SDI 1505
Lab 8 Working With Strings
5/21/15
 */

// Problem 1

// global variable

//var myEmail = prompt("Please enter your email: ");
//returnedString;
//
//// functions
//
//function strEmail(whatIsIt) {
//
//    // local variables
//
//    var atSymbol = whatIsIt.indexOf("@");
//    var theSpace = whatIsIt.indexOf(" ");
//    var theDot = whatIsIt.lastIndexOf(".");
//    var correct;
//    var atSymbolChecking = whatIsIt.lastIndexOf("@");
//
//
//    // conditionals
//
//    if((atSymbol >= 0 ) && (theSpace === -1) && (theDot >= 0) && (theDot > atSymbol) && (atSymbolChecking == atSymbol)) {
//    correct = " That is a valid email."
//
//    } else {
//
//        correct = " That is invalid."
//
//    }
//
//    // return
//
//    return correct;
//
//}
//
//// main code
//
//var returnedString = strEmail(myEmail);
//console.log(myEmail + returnedString);


// Problem 2

//global variable

var firstString = "cookies,crackers,pretzels,chips";
var secondString = ",";
var thirdString = "_";
var returnedString;

// function

function snacks(firstArg, secondArg, thirdArg){

    // local variables

    var newString;
    var newSnack = "";

    newString = firstArg.split(secondArg);

    // loops

    for(var x = 0; x < newString.length; x++){

        if(x === newString.length -1) {

            newSnack = newSnack + newString[x];
        } else {

            newSnack = newSnack + newString[x] + thirdArg;

        }
    }

    return newSnack;

}

// main code
returnedString = snacks(firstString, secondString, thirdString);
console.log("When I have house parties I buy " + returnedString + ".");






