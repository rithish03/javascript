//Local scope -> let => Temporarily hold the value till the block ends
//Block scope
//Global scope -> var
//local scope
for (var i=0;i<5;i++){
    console.log(i+11)
}
console.log(i)
//let concept
var a =10
console.log(a)
{
    let a = 5
    let b = 5
    console.log(a)
    console.log(b)
}
console.log(a)