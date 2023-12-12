function MyDictionary() {   //Function
    var Car = {        //Variable
        Make:"BMW",     //Make=KEY BMW=Value
        Color:"White",
        Model:"E36",
        Trim:"M3",
        Year:"1998"
    };
delete Car.Make;  //deletes the value
document.getElementById("Dictionary").innerHTML = Car.Model;  //Key+Value to recieve value output
}

