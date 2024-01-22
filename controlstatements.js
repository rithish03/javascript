//For loop
sum=0
for(var i = 0; i < 10 ; i++){
    sum+=i
}
console.log(sum)
//While loop
var i = 0
while(i<10){
    sum+=i
    i++
}
console.log(sum)
//Do...while loop
do{
    sum+=i
    i++
}while(i<10);
console.log(sum)

//example1
arr = [10,20,30]
console.log(arr.length)
for( var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

//example2
arr = [10,20,30.3]
for(var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

//example3
arr = [10,200,true,false]
for(var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

//example4
arr = [10,20,"string",true,20.9]
for(var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

All the 4 examples are valid because we didn't mention any data type infront of 'arr'. In JS it can hold all the datatypes including functions inside an array
For in 
example1
arr = [10,20,"string",true]
for(const value of arr){
    console.log(value)
}

//example2
kongu = {}
kongu["name"] = "Rithish"
kongu["rollno"] = "21ECR168"
for(key in kongu){
    console.log(key,kongu[key])
}

//for in works only with the index value
//for of and each works directly with the values