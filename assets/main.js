// Question 1
var myNumber;

// Question 2
myNumber = 5;

// Question 3
var myOtherNumber = 5;

// Question 4
var myTotal = myNumber * myOtherNumber;

// Question 5
let myName = "Lance";
let myCombo = myNumber + myOtherNumber;

// Question 6
var myOtherCombo = myNumber + myOtherNumber;

// Question 7
var myRemainder = myNumber / 5;

// Question 8
var i = 2;

// Question 9
var int = 4;

// Question 10
let myBoolean = false;

const vars = ["myNumber", "myNumber", "myOtherNumber", "myTotal", "myName", "myCombo", "myOtherCombo", "myRemainder", "i", "int", "myBoolean"]
const questions = [myNumber, myNumber, myOtherNumber, myTotal, myName, myCombo, myOtherCombo, myRemainder, i, int, myBoolean];

let text = ""
for (let j = 1; j < 11; j++){
    console.log (j + ". " + vars[j] + " = " + questions[j] + "\n");
    text += j + ". " + vars[j] + " = " + questions[j] + "<br>";
}

document.getElementById("text").innerHTML = text;