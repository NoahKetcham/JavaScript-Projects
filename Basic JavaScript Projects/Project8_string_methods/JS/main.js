//------------------CONCATENATE---------------------------------------------
function myCONCATENATION() {
    var part_1 = "Hello ";
    var part_2 = "World, ";
    var part_3 = "I have done some ";
    var part_4 = "Concatenating!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);  //var whole_sentence = part_1.concat(part_2, part_3, part_4); COMBINES ALL PARTS IN ORDER TO CONCATENATE
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//------------------/CONCATENATE---------------------------------------------

//-----------------SLICE() METHOD--------------------------------------------------------------

function slice_method() {
    var Sentence = "You won the lottery!!!";
    var Section = Sentence.slice(12,20);
    document.getElementById("Slice").innerHTML = Section;
}

//-------------------/SLICE() METHOD-----------------------------------------

//--------------------NUMBER METHODS---------------------------------------------------------------

function stringFUNK() {
    var X =879798;
    document.getElementById("stringingNumbers").innerHTML = X.toString();
}

//----------------------/NUMBER METHODS------------------------------------------------------------


//---------------------TOPRECISION METHOD---------------------------------------
function precisionMethod() {
    var X = 122232.787678323432;
    document.getElementById("precision").innerHTML = X.toPrecision(15);
}
//---------------------/TOPRECISION METHOD---------------------------------------