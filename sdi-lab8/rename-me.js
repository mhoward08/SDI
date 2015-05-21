//alert("JavaScript works!");

/* Melanie Howard
SDI 1505
Lab 8 Working With Strings
5/21/15
 */

// Problem 1

// global variable

var myEmail = prompt("Please enter your email: ");
returnedString;

// functions

function strEmail(whatIsIt) {

    // local variables

    var atSymbol = whatIsIt.indexOf("@");
    var theSpace = whatIsIt.indexOf(" ");
    var theDot = whatIsIt.lastIndexOf(".");
    var correct;
    var atSymbolChecking = whatIsIt.lastIndexOf("@");


    // conditionals

    if((atSymbol >= 0 ) && (theSpace === -1) && (theDot >= 0) && (theDot > atSymbol) && (atSymbolChecking == atSymbol)) {
    correct = " That is a valid email."

    } else {

        correct = " That is invalid."

    }

    // return

    return correct;

}

// main code

var returnedString = strEmail(myEmail);
console.log(myEmail + returnedString);

