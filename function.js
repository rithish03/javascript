//Functions
//Example1
function fun(){
    console.log("Example Function")
}
fun()
//Example2
function fun(a,b){
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("The number "+i+" is even")
        }
        else{
            console.log("The number "+i+" is Odd")
        }
    }
}
fun(1,10)
