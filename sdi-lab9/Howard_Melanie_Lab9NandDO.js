//alert("JavaScript works!");

/*
Melanie Howard
SDI 1505
Lab 9 - Number and Date Objects
 */

// global variables

var num = 2.44494837587389475983;
var returnedNum;
var returnedVariable;

var returnedDates;






// functions declarations
// format a number

function numberMethods(argPrompt, argPrompt2) {

    var num1 = argPrompt.toFixed(argPrompt2);

    return num1;

}

// problem 2 function

function numString(argPrompt)
{

    var results;


    if (isNaN(argPrompt))
    {
         results = ("This is not a number.")

    } else

    {
      results = parseFloat(argPrompt);


    }

    return results;
}

// problem 3 function

function dateDifferences(dateOne, dateTwo)
{

    var date1 = new Date(dateOne);
    var date2 = new Date(dateTwo);

   var diffOfDates = date1 - date2;


    if (hoursOrDays === "hours")
    {

        diffOfDates = Math.abs(diffOfDates / 1000 / 60 / 60);
    }

    else if ((hoursOrDays === "days"))
    {

        diffOfDates = Math.abs(diffOfDates / 1000 / 60 / 60 / 24);
    }
    return diffOfDates;


}





// main code

////var returnedNum = numberMethods(num, amount);
//var amount = parseInt(prompt("What is the number? "));
////console.log(returnedNum);

// main code problem 2

var newNum = (prompt("Enter a number please:"));
var returnedVariable = numString(newNum);
console.log(returnedVariable);


// main code problem 3

//var dateOne = prompt("Please enter the correct date: ", "1/5/2015");
//var dateTwo = prompt("What are the two dates?", "1/13/1976")
//var hoursOrDays = prompt("Please enter hours or days: ","hours");
//returnedDates = dateDifferences(dateOne,dateTwo);
//console.log(returnedDates);






