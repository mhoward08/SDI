// SDI 1311
//  Day 8 Lecture
//  Like cats, we're going to p

///**
// * Created by melaniehoward on 5/21/15.
// */

/* SDI 1505
 Lab 7 Review
 Day Eight: Playing with strings like cats
 */

// global variable
//var ourString;
//var returnedString;
//
//// functions
//function initialCaps(argString) {
//
//    // local variables
//    var newString;
//    var strArray;
//    var currentWord;
//    var newWord = "";
//
//    //uppercase everything
//    newString = argString.toUpperCase();
//
//    strArray = newString.split(" ");
//
//    for (var each in strArray) {
//
//        currentWord = strArray [each];
//
//        for (var char in strArray[each]) {
//
//
//            if (char != 0) {
//
//              currentChar = currentWord[char].toLowerCase();
//              newWord = newWord + currentChar;

//
//            } else {
//
//                newWord = newWord + currentWord[0];
//            }
//
//        }
//
//        newWord = newWord + " ";
//    }
//    return newWord;
//}
//
//ourString = prompt("Enter a string to initial cap: ", "i am batman");
//
//returnedString = initialCaps(ourString);
//
//console.log(returnedString);































//
//// Using .indexOf()
////  Find if the substring "Adam" appears in the string and where
//var myIndexOf = "Madam, I'm Adam.";
//
//// Using .lastIndexOf()
////  Find if the substring "time" appears in the string and where
//var myLastIndexOf = "There is a time and a place for everything, and this is neither the time nor the place";
//
//// Using substr()
////  Output the substring "Data" from the string
//var mysubStr = "This class is called Scalable Data Infrastructures";
//
//// Using substring()
////  Output the substring between two index numbers in the string
//var mySubString = "Life, the Universe, and Everything!";
//
//// Using charAt()
//// Returns the character at a specified index
//// Index is between 0 and (.length -1)
////  Find the character at index position 6
//var myEmail = "llewis@fullsail.com";
//
//// Using .split()
//// Splits the string into an array of substrings
//// separator specifies the character at which to split, such as a space or comma
//// limit can limit the number of elements returned by split
////  Split a string into an array and output each item individually
//var mySplit = "Now is the time for all good men to come to the aid of the party.";
//
//// toUpperCase () Method
//// Changes all letters in the specified string to uppercase
//// No parameter needed
//// "No Dogs Allowed" becomes "NO DOGS ALLOWED"
//
//// functions to do string manipulation
//function wheresAdam(whereIsIt) {
//
//    var where  = whereIsIt.lastIndexOf("dam");
//    var where2 = whereIsIt.indexOf("dam");
//    return [where, where2];
//
//}
//
//function subStrFunction(hitchArg) {
//
//    var theT = hitchArg.indexOf("t");
//    var theComma = hitchArg.indexOf(",", theT);
//
//    var theUniverse = hitchArg.substring(theT,theComma);
//    return theUniverse;
//}
//
//function substrFunction(hitchArg) {
//
//    var everything = hitchArg.substr(24,5);
//    return everything;
//}
//
//function charAtFunction(emailArg){
//
//    var atSymbol = emailArg.charAt(6);
//    return atSymbol;
//}
//
//function splitString(stringToSplit) {
//
//    var splitArray = stringToSplit.split(" ", 4);
//    return splitArray;
//}
//
//function changeCase(caseString) {
//
//    var newString = caseString.toLowerCase();
//    return newString;
//
//}
//
//function intialCap(argString) {
//
//}
//
//
//// main code
////console.log("The last and first indices are " + wheresAdam(myIndexOf));
////console.log("We've returned \"" + substrFunction(mySubString) + "\"");
////console.log("The character at index 6 is " + charAtFunction(myEmail));
////
////var returnedArray = splitString(mySplit);
////console.log(returnedArray);
////
////for (var each in returnedArray) {
////
////    console.log(returnedArray[each]);
////}
//console.log(changeCase(mySplit));

