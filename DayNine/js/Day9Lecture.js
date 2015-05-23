//alert("JavaScript works!");

/*
Melanie Howard
SDI 1505
5/23/15
Day Nine
Numbers and Date Objects
 */

// function declarations
// Date objects
function goodDates() {

    var myDate = "5/23/2016";

    console.log(myDate);

    var newDate = new Date(2015, 4, 23);
    var secondDate = new Date(myDate);

    console.log(newDate);
    console.log(secondDate);

    dateDiff = newDate - secondDate;

    dateDiff = Math.abs(dateDiff / 1000 / 60 / 60 / 24);

    console.log(dateDiff);

}







function mathMethods(argPrompt) {

    while (isNaN(argPrompt)) {

        argPrompt = prompt("Enter a number please:");

    }


        var newAge = parseInt(argPrompt);

        console.log(newAge);

}

// main codes
goodDates();

//var myPrompt = prompt("Enter your age:");
//
//mathMethods(myPrompt);
