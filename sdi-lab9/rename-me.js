//alert("JavaScript works!");

/*
Melanie Howard
SDI 1505
Lab 9 - Number and Date Objects
 */

// global variables

var num = 2.44494837587389475983;
var amount = parseInt(prompt("What is the number? "));
var returnedNum;



// functions declarations
// format a number

function numberMethods(argPrompt, argPrompt2) {

    var num1 = argPrompt.toFixed(argPrompt2);

    return num1;






}



// main code

var returnedNum = numberMethods(num, amount);
console.log(returnedNum);


