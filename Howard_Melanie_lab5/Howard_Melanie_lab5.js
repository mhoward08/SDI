//alert("JavaScript works!");

// global variables and prompts
var num1 = parseFloat(prompt("Hey, the first number: "));
var num2 = parseFloat(prompt("Hey, the second number: "));
var op = prompt("what kind of math?");
var returnCatch;
var sumOfOperations;

// functions
function addition(add1, add2) {
    // addition

     sumOfOperations = (add1 + add2);
    return sumOfOperations;
}

function subtract(sub1, sub2) {
    // subtract

    sumOfOperations = (sub1 - sub2);
    return sumOfOperations;
}

function multiplication(multi1, multi2) {
    // multiplication

    sumOfOperations = (multi1 * multi2);
    return sumOfOperations;
}

function division(div1, div2) {
    // divide

    sumOfOperations = (div1 / div2);
    return sumOfOperations;
}

 //main codes

if(op === "+"){
    returnCatch = addition(num1, num2);
    console.log("hey the number is " + returnCatch + ".");

} else if(op === "-"){
    returnCatch = subtract(num1, num2);
    console.log("hey the number is " + returnCatch + ".");
//
} else if(op === "*"){
    returnCatch = multiplication(num1, num2);
    console.log("hey the number is " + returnCatch + ".");

} else if(op === "/"){
    //returnCatch = division(num1, num2);
    if(num1 === 0 || num2 === 0){
    console.log("Division can't be done. ");
    } else if ((num2 > 0)) {
        //(num1 > 0 && num2 > 0);
        returnCatch = division(num1, num2);
        console.log("hey the number is " + returnCatch + ".");
    }else{
        console.log("The division can't be done.");
    }
}else{
    console.log("That operation is not possible, try again!");
}



