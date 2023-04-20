//let a="naro";
//console.log(Boolean(a)); //true
//let a="";
//console.log(Boolean(a));//false
//let a=" ";  //space also count as a string

//console.log(Boolean(a)); //true
//function scope-let
var b=6;
let d=8;
function fun()
{ 
    let temp=5;
    console.log(d)
    if(true)
    {
        var v1=10;
        let v2=20;
        console.log(v2);
        
    }
    console.log(v1);
    console.log(b)
    
}

fun();
console.log(b);
