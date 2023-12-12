document.write(typeof "word");  //outputs "string"

document.write(typeof 3);   //outputs "number"

document.write("199"+1);    //outputs 1991 (tags the 1 onto the end of the 199).

document.write(2E310); //outputs "infinity"

document.write(-3E310); //outputs "-infinity"

document.write(10>2); //Boolean logic, would output "true" because 10 is greater than 2

document.write(10<2);  //Boolean logic, would output "false" because 10 is not less than 2


//--------------------------FUNCTION TESTING-------------------------------------//
function Function1() {
    document.getElementById("Test").innerHTML = 0/0; //testing the answer of 0/0, result is NaN because you can't divide zero by zero. 
}

function Function2() {
    document.getElementById("Test2").innerHTML = isNaN('this is a string');  //testing if something is a number, would uotput "true" because this is not a number
}

function Function3() {
    document.getElementById("Test3").innerHTML = isNaN('008');  //testing if something is a number, would output "false" because this is a number
}
//---------------------------------------------------------------------------



//----------------------CONSOLE LOGS-----------------------------------//
console.log(2+2); // creates an output in the console, the output would be "4".

console.log(100<7); //console output "false"
//------------------------------------------------------------------------//

//----------------------DOUBLE EQUAL SIGN----------------------------------//
document.write(10==10);  // outputs "true" because 1o is eual to 10

document.write(10==17); // outputs "false" because 10 is not equal to 17

document.write(10+10==20);  //you can do equations also
//-------------------------------------------------------------------------//



//--------------------TRIPLE EQUAL SIGN-----------------------------------//
x = 4
y = 4
document.write(x === y); //outputs "true" because the data values are the same

c = 3
v = "3"
document.write(c === v); //outputs false because the data strings were not ecaxtly the same.

G = 4
H = 2
document.write(G === H);  // "FALSE"

x = 4
I = 4
document.write(4 === c);  // "FALSE"
//--------------------THIS WORKS FOR ALL DATA TYPES--------------------------//

//--------------------Logical operators-------------------------------------//

document.write(5>1 && 9>3);  // the && operator compares two statements and determines if both are true

document.write(5>10 && 10>4);  

document.write(5>10 || 10>4) //would return ttrue because one of the two values is true

//-----------------------------------------------------------------------------//

//-----------------------NOT OPERATOR---------------------------------------//

function NotFunction() {  // returns false if output is not true (negative)
    document.getElementById("Not").innerHTML = !(20>10);
}

function NotFunction2() {  //returns true if output is true (double negative)
    document.getElementById("Not2").innerHTML = !(5>10);
}

//-------------------------------------------------------------------//