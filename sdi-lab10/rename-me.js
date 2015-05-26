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
var array = [];

// function
function lotteryNumbers(lotteryType)

{

    // local variables
    var powerBall = [];
    //var randomNumbers;
    //var floridaBall;
    var finalNumber = [];
    var a;
    var b;

    // if statement
    if (lotteryType == 1)
    {
        for(var i = 0; i < 5; i++)

        {

            // powerBall 1-59

            array[i] = Math.floor((Math.random() * 59 + 1));
            //console.log("Power ball is " + array);


            finalNumber[i] = array[i];

        }

        // random number
        array[i] = Math.floor((Math.random() * 35 + 1));
        //console.log("The random number is " + array);


        finalNumber[i] = array[i];

    }
    // floridaBall 1-53

    else if(lotteryType == 2)

    for(i = 0; i < 6; i++)

    {
        powerBall[i] = Math.floor((Math.random() * 53 + 1));
        //console.log("Florida is " + powerBall);
        finalNumber[i] = powerBall[i];
    }
    //console.log(finalNumber)
    // return
    return finalNumber;
}



// main code
userChoice = prompt("Type 1 for Power Ball or 2 for Floria Ball: ");
array = lotteryNumbers(userChoice);
//console.log(array);


if(userChoice === "1") {
    console.log("The Quick Pick is " + array[0] + "," + array[1] + "," + array[2] + "," + array[3] + "," + array[4] + " Powerball: " + array[5]);
}else if(userChoice === "2"){
    console.log("The Florida Ball is " + array[0] + "," + array[1] + "," + array[2] + "," + array[3] + "," + array[4] + "," + array[5]);
}
