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
function lotteryNumbers(lotteryType)

{

    // local variables
    var powerBall;
    //var randomNumbers;
    //var floridaBall;
    var a;
    var b;

    // if statement
    if (lotteryType == 1)
    {
        for(i = 0; i < 5; i++)

        {

            // powerBall 1-59

            powerBall = Math.floor((Math.random() * 59 + 1));
            console.log("Powerball is " + powerBall);

        }

        // random number
        powerBall = Math.floor((Math.random() * 35 + 1));
        console.log("The random number is " + powerBall);


    }
    // floridaBall 1-53

    else if(lotteryType == 2)

    for(i = 0; i < 5; i++)

    {
        powerBall = Math.floor((Math.random() * 53 + 1));
        console.log("Florida is " + powerBall);
    }

    // return
    return powerBall;
}



// main code
userChoice = prompt("Type 1 for Power Ball or 2 for Floria Ball: ");
returnedLottery = lotteryNumbers(userChoice);
//console.log("The number is " + returnedLottery);
