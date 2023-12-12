//-----------------RIDE FUNCTION CHALLENGE------------------------------//
function RideFunction() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
//-----------------/RIDE FUNCTION CHALLENGE------------------------------//

//-----------------VOTE FUNCTION CHALLENGE------------------------------//
function VoteFunction() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}
//-----------------/VOTE FUNCTION CHALLENGE------------------------------//

//-----------------KEYWORDS AND CONSTRUCTORS-----------------------------//

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    ", manufactured in " + Erik.Vehicle_Year;
}

//-----------------/KEYWORDS AND CONSTRUCTORS-----------------------------//

//-----------------NESTED FUNCTION----------------------------------------//

function NESTED() {
    document.getElementById("NestedFunction").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

//------------------------------------------------------------------------//