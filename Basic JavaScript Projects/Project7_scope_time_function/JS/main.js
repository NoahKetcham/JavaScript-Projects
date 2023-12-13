        var X = 10;
//        function ADDFUNCTION() {
//            document.write(20 + X + "<br>");
//        }
//        function ADDFUNCTION2() {
//            document.write(X + 100);
//        }
//        ADDFUNCTION();
//        ADDFUNCTION2();

function ADDFUNCTION() {
    var X = 10;
    console.log(20 + X + "<br>");             //document.write
}
function ADDFUNCTION2() {
    console.log(X + 100);          //document.write
}
ADDFUNCTION();
ADDFUNCTION2();

function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML + "How are you today?";
    }
}

if (2>1) {                              // if the statement is true print "HELLO WORLD!"
    document.write("HELLO WORLD!");
}

function Offer_Function() {
    Age = document.getElementById("Offer").value;  //retreives users input
    if (Age >= 17000) {
        Vote = "Your offer exceeds our ask!";
    }
    else {
        Vote = "Your offer is too low.";
    }
    document.getElementById("What_is_your_offer?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";  // if time is less than 12 but greater than 0 it must be morning
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon."; // if time past 12 but less than 18 it must be afternoon
    }
    else {
        Reply = "It is evening time.";  //if not morning or afternoon it must be evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // outputs the time of day
}