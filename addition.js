/*let a="1+2";
let b=eval(a);
console.log(b)
let num="4/2"
let result=eval(num)
console.log(result)*/


//without eval() function split converts the string into array.
let a="1+2";
let b=a.split("+")
console.log(parseInt(b[0])+parseInt(b[1]))
