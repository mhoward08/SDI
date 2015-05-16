/**
 * Created by melaniehoward on 5/16/15.
 */

// Melanie Howard
// Day Six
// SDI 1505
// Arrays and more functions

//alert("JavaScript works!");

// global variable
var returnedAverage;


// function
function myAverageFunction(){



    // local variables
    var average     = 0;
    var addNum      = 0;
    var numberArray = [ 5,6, 12, 14, 23,35,50 ];

    // for loop to loop through the elements of the array
    for(var i = 0; i < numberArray.length; i++) {

        addNum += numberArray[i];
    }

    // average of the total
    average = addNum / numberArray.length;

    // return the final average
    return Math.round(average);

}


returnedAverage = myAverageFunction();

console.log("The average is " + returnedAverage + ".");





































//// global variables
//var num1;
//var num2;
//var operation;
//var finalAnswer;
//
//
//// math functions
//function add (add1, add2) {
//
//    return add1 + add2;
//
//
//}
//
//function subtract(sub1, sub2) {
//
//    return sub1 - sub2;
//
//
//}
//
//function multiply(mult1, mult2) {
//
//    return mult1 * mult2;
//
//
//}
//
//function divide(div1, div2) {
//
//    var outcome;
//
//    if (div2 === 0) {
//        outcome = "Error: can't divide by 0";
//
//    } else {
//        outcome = div1 / div2;
//
//    }
//
//    return outcome;
//
//
//}
//
//function finalOutput() {
//
//    console.log(num1 + " " + operation + " " + num2 + " = " + finalAnswer);
//}
//
//// main code
//num1      = parseFloat(prompt("Enter your first number: "));
//num2      = parseFloat(prompt("Enter your second number: "));
//operation = prompt("Enter the math operation you would like to perform:", "+, -, *, /");
//
//if (operation === "+") {
//
//   finalAnswer = add(num1, num2);
//    finalOutput();
//
//} else if (operation === "-") {
//
//   finalAnswer = subtract(num1, num2);
//    finalOutput();
//
//} else if (operation === "*") {
//
//   finalAnswer = multiply(num1, num2);
//    finalOutput();
//
//} else if (operation === "/") {
//
//    finalAnswer = divide(num1, num2);
//    finalOutput();
//
//} else {
//    console.log("Sorry, I didn't understand that. Try again.");
//}


//function myFirstArray() {
//
//
//   var pirateNames = ["Blackbeard", "Captain Kidd", "Captain Morgan", "Captain Jack Sparrow"];
//
//    // for loop (combine all variables
//
//  for (var i = 0; i < pirateNames.length; i++) {
//
//      if (pirateNames[i] === "Captain Morgan") {
//          console.log(pirateNames[i] + " is my favorite pirate.");
//      }
//
//
//  }
//
//    // adding items to your array
//
//console.log("The length of the array is " + pirateNames.length);
//
////// brings added items to the beginning of array
//    pirateNames.unshift("Barbosa", "Black Bart", "Davy Jones");
//
////// allows as many elements we need on the array.. pushes on the end
////    pirateNames.push("Barbosa", "Black Bart", "Davy Jones");
//
//// output
//    console.log(pirateNames);
//
//    pirateNames.pop();
//
//    console.log(pirateNames);
//
//
//
//}
//
//myFirstArray();


//    // array example 1
//
//var myArray = [];
//myArray[0] = "Jeremy";
//myArray[1] = "Paul";
//myArray[2] = "John";
//
//document.write("myArray[0] = " + myArray[0] + "<br/>");
//document.write("myArray[2] = " + myArray[2] + "<br/>");
//document.write("myArray[1] = " + myArray[1] + "<br/>");
//
//myArray[1] = "Mike";
//document.write("myArray[1] changed to " + myArray[1]);
//


//// array example 2
//
//var personnel = [];
//
//personnel[0] = [];
//personnel[0][0] = "Name0";
//personnel[0][1] = "Age0";
//personnel[0][2] = "Address0";
//
//personnel[1] = [];
//personnel[1][0] = "Name1";
//personnel[1][1] = "Age1";
//personnel[1][2] = "Address1";
//
//personnel[2] = [];
//personnel[2][0] = "Name2";
//personnel[2][1] = "Age2";
//personnel[2][2] = "Address2";
//
//document.write("Name : " + personnel[1][0] + "<br/>");
//document.write("Age : " + personnel[1][1] + "<br/>");
//document.write("Address : " + personnel[1][2]);

//// array constructor
//
//var myArray1 = new Array (1,3,5,7,9);
//var myArray2 = new Array (100);
//var myArray3 = new Array ();







