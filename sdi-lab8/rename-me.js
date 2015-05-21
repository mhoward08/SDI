//alert("JavaScript works!");

/* Melanie Howard
SDI 1505
Lab 8 Working With Strings
5/21/15
 */

// Problem 1

// global variable

var myEmail = "melanieh2008@fullsail.edu";

// function

function charAtFunction(emailArg) {

    // local variables

    var atSymbol = emailArg.charAt(12);
    return atSymbol;

    console.log(charAtFunction(myEmail));


}