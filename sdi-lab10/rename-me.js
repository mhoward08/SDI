//alert("JavaScript works!");

/*
Melanie Howard
SDI 1505
Lab Ten: Problem - Solving
5/26/15
 */

// global variable
var returnedLottery;
var userChoice;

// function
function lotteryNumbers(lotteryType) {

    // local variables
    var powerBall;
    //var randomNumbers;
    //var floridaBall;
    var a;
    var b;

    // if statement
    if (lotteryType == 1) {

        for(i = 0; i < 5; i++) {

            powerBall = Math.floor((Math.random() * 59 + 1));
            console.log("Powerball is " + powerBall);

        }

        powerBall = Math.floor((Math.random() * ))


    } else if(lotteryType == 2) {
        powerBall = Math.floor((Math.random() * 53 + 1));
        console.log("Florida is " + powerBall);
    }

    // powerBall 1-59




    // floridaBall

    // return
    return powerBall;
}



// main code
userChoice = prompt("Type 1 for Powerball or 2 for FloriaBall: ");
returnedLottery = lotteryNumbers(userChoice);
console.log("The number is " + returnedLottery);
