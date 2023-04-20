/*store function into variable
let addition=function(a,b){
    return a+b;
}
console.log(addition(4,5));

//function treated as object
addition.xyz="naro"
console.log(addition.xyz)

//higher order function
let add=function(a,b){
    return a+b;
}
function operation(a,b,fn){
    let result=fn(a,b)
    console.log(result);
}
operation(4,5,add);*/
/*
function outer(){
    function inner(){
        console.log("inner");
    }
    return inner;
}
let result=outer();
console.log(result())*/

//we need to find addition,substruction,multiplication,division of two number

let addion=function(a,b){
    return a+b
}
console.log(addion(5,6))
let subs=function(a,b){
    return a-b
}
console.log(subs(5,6))
let mul=function(a,b){
    return a*b
}
console.log(mul(5,6))
let div=function(a,b){
    return a/b
}
console.log(div(5,6))

//But this process is not suitable here we copy paste samethings
//now create a function return a function from outer function to avoid
//code resuse
function calculation(a,b,myfunction)
{
    let result=myfunction(a,b)
    return result;
}
console.log(calculation(5,6,addion))
console.log(calculation(5,6,subs))
console.log(calculation(5,6,mul))
console.log(calculation(5,6,div))
 
