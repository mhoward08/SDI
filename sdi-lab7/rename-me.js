//alert("JavaScript works!");

//Melanie Howard
//Day Seven
//SDI 1505
//Functions, Loops, and Arrays

// global variables

var numberArray1 = [10, 6, 7, 3, 12, 5];
var numberArray2 = [25, 100, 4, 22, 16, 105, 2, 7];
var numberArray3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
var returnedArray = [];


// function

 function compare(argArray) {

     // local variables
     var storeVarible;
     for (var x = 0; x < argArray.length; x++){



         for (var i = 0; i < argArray.length; i++) {
             if (argArray [i] > argArray [i + 1]) {

                 storeVarible = argArray [i];

                 argArray [i] = argArray[i + 1];

                 argArray [i + 1] = storeVarible;
             }
         }
     }
return argArray;

 }

// main code
returnedArray = compare(numberArray1);
console.log("That is correct." + returnedArray);

compare(numberArray1);
compare(numberArray2);
compare(numberArray3);






