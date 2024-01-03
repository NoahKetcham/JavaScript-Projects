function call_loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

/* Loop function */
var CarBrands = ["Honda", "Nissan", "Toyota", "BMW", "Mercedes", "Audi", "Volkswagen"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < CarBrands.length; Y++) {
    Content += CarBrands[Y] + "<br>";
    }
    document.getElementById("CAR_BRANDS").innerHTML = Content;
}


/** array function */
function array_function() {
    var car_picture = [];
    car_picture[1] = "Honda";
    car_picture[2] = "Toyota";
    car_picture[3] = "Subaru";
    car_picture[4] = "Nissan";
    document.getElementById("Array").innerHTML = "In this picture, the cars brans is " + car_picture[3] + ".";
}


/** Constant Function */
function constant_function() {
    const Power_Tool = {type: "impact drill", brand: "Milwaulie", color: "red"};
    Power_Tool.color = "black";
    Power_Tool.price = "$200";
    document.getElementById("Constant").innerHTML = "The cost of the " + Power_Tool.type + " was " + Power_Tool.price + " in 2021.";
 }

 /** LET KEYWORD */

 var Y = 100;
 document.write(Y);
 {
    let Y = 21;                     /** LETS Y = something else within the {} */
    document.write ("<br>" + Y);
 }
 document.write("<br>" + Y);

 /** CREATING AN OBJECT */

 let energyDrink = {
    brand: "Guayaki ",
    flavor: "revel berry ",
    color: "yellow ",
    type: "yerba mate ",
    description : function() {
        return "The energy drink is called " + this.type + this.flavor + this.brand + this.color;
    }
 };
 document.getElementById("Drink_Object").innerHTML = energyDrink.description();

 function displayDescription() {  /** FUNCTION ADDED SO THAT THE OBJECT COULD BE DISPLAYED WITH A BUTTON */
    document.getElementById("Drink_Object").innerHTML = energyDrink.description();
}

