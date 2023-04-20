const prompt=require("prompt-sync")()
let year=prompt("enter year");
if(year%100==0){
    if(year%400==0){
        console.log("leap year")
    }
    else{
        console.log("not leap year")
    }
}
if(year%100!=0){
    if(year%4==0){
        console.log("leap year")
    }
    else{
        console.log("not a leap year")
    }
}