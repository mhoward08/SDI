//alert("JavaScript works!");

/*
Melanie Howard
SDI 1505
Lab Ten: Problem - Solving
5/26/15
 */

// global variable
var returnedLottery;

// function
function lotteryNumbers() {

    // local variables
    var powerBall;
    var floridaBall;

    // powerBall 1-59

    powerBall = Math.floor((Math.random()* 59 + 1));
    console.log(powerBall);

    return powerBall;

    // 


}



// main code

returnedLottery = lotteryNumbers();
console.log("The number is " + returnedLottery);
