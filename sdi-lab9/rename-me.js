//alert("JavaScript works!");

/*
Melanie Howard
SDI 1505
Lab 9 - Number and Date Objects
 */

// global variables

var num = 2.44494837587389475983;
var returnedNum;
var newNum = (prompt("Enter a number please:"));
var returnedVariable;




// functions declarations
// format a number

function numberMethods(argPrompt, argPrompt2) {

    var num1 = argPrompt.toFixed(argPrompt2);

    return num1;






}

function numString(argPrompt) {

    var results;


    if (isNaN(argPrompt)) {
         results = ("This is not a number.")

    } else {
      results = parseInt(argPrompt);


    }

    return results;
}



// main code

////var returnedNum = numberMethods(num, amount);
//var amount = parseInt(prompt("What is the number? "));
////console.log(returnedNum);

// main code problem 2

var returnedVariable = numString(newNum);
console.log(returnedVariable);




