//Objects -> How will you declare objects
//1st way:
var customerdetails = {
    "name":"Rithish",
    "age":20,
    "phone":6369547878,//comma is optioal at last
}
customerdetails["id"]="20ECR168"
console.log(customerdetails)
//Why key does not hold any quotes? -> It does hold internally but we can't see in output

//2nd way:
var customerdetails = {}
customerdetails["name"]="Rithishh"
customerdetails["age"]="20"
customerdetails["phone"]="6369547878"
console.log(customerdetails)

//3rd way:
var kongu = new Object()
kongu["ambience"] = "good"
kongu["food"] = "decent"
kongu["accomodation"] = "decent"
console.log(kongu)
//The path of accesing the value for the key is dot
console.log(kongu.food)
console.log(kongu["accomodation"])