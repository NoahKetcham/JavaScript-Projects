function executeMaths() {
    var number1 = 7;
    var number2 = 19;
    var sum = number1 + number2; //addition
    document.getElementById("Math").innerText = "7 + 19= " + sum; 
}

function executeMinus() {
    var number1 = 21
    var number2 = 11
    var sum = number1 - number2;  //subtraction
    document.getElementById("MathSubtraction").innerText = "21 - 11 " + sum;
}

function executeMultiplication() {
    var number1 = 34234
    var number2 = 1323
    var sum = number1 * number2; //multiplication
    document.getElementById("MathMultiplication").innerText = "34234 * 1323= " + sum;
}

function executeDivision() {
    var number1 = 12322
    var number2 = 21
    var sum = number1 / number2; //division
    document.getElementById("MathDivision").innerText = "1232 / 21= " + sum;
}

function executeDivision1() {
    var simple_math = 12322 / 21; //division
    document.getElementById("MathDivision1").innerHTML = "12322 / 21= " + simple_math;
}

function Morecomplicatedmaths() {
    var Morecomplicatedmaths = (1+111) * 12 / 18 -11; //more complitated equation
    document.getElementById("Morecomplicatedmaths").innerHTML = "1 plus one hundred eleven multiplied by twelve, divided by eighteen and then subtracted by eleven equals:  " + Morecomplicatedmaths;
}

function Remainder() {
    var remainder = 35 % 6; //modulus operator
    document.getElementById("Remainder").innerHTML = "When you divide 35 by 6 you have a remainder of: " + remainder;
}

function Unary_Negation_Operator() {  //returns the variable in the negative
    var x = 10;
    document.getElementById("Unary_Operator").innerHTML =-x;
}

function Unary_Increment_Operator() {  //adds to the variable by 1
    var x = 10;
    x++;
    document.getElementById("Increment_Operator").innerHTML = (x);
}

function Unary_Decrement_Operator() {  //subtracts 1 from the variable
    var x = 10;
    x--;
    document.getElementById("Decrement_Operator").innerHTML = (x);
}

window.alert(Math.random()); // returns a random number between 0 and 1

window.alert(Math.random()*100); //returns a random number between 0 and 100