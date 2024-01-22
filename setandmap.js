// //Set 
// //Example1
// setexample = new Set("lambo","ferrari","rollsroyce")
// console.log(setexample)//Doesnot Throws error instead it prints the first string in a set separated by characters. By using square bracket we can assign the calues to the set.
// //Example2
// setexample = new Set(["lambo","ferrari","rollsroyce"])
// setexample.add("porsche")
// console.log(setexample)
// //Using for in
// for(key in setexample){
//     console.log(key)
// }//Error throws as there is no indexing value in set
// //Using for of
// for(key of setexample){
//     console.log(key)
// }

// //Key
// mapexample = new Map([
//     ["name","rithish"],["id","21ecr168"]
// ])
// console.log(mapexample)
// //for in
// for(key in mapexample){
//     console.log(key,mapexample(key))
// }
// //for of
// for(key of mapexample){
//     console.log(key)
// }
// //has -> shows if the string or variable is present
// console.log(mapexample.has("name"))

mapexample = new Map([
    ["name","rithish"],["id","21ecr168"],["phone","6369547878"]
])
console.log(mapexample)
mapexample.delete("phone")
console.log(mapexample)
mapexample.set("place","salem")
console.log(mapexample)