let arr=[1,2,3,4,5]
//find sum,average,maxvaalue,minvalue,
let sum=function(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
         sum+=array[i];
    }
    return sum;
}
console.log(sum(arr))

let average=function(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
         sum+=array[i];
    }
    return sum/array.length;
}
console.log(average(arr))

let max=function(array){
    return Math.max(...array)
}
console.log(max(arr))

let min=function(array){
    return Math.min(...array)
}
console.log(min(arr))

//Using higher order function

function calculate(array,myfunction){
    return myfunction(array)
}
console.log(calculate(arr,sum))
console.log(calculate(arr,average))
console.log(calculate(arr,max))
console.log(calculate(arr,min))