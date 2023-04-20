//if else stateemeent
/*let a=25;
if(a>25){
    console.log("greather than")
}
else if(a<25){
    console.log("less than")
}
else if(a==25){
    console.log("equal to")
}*/

//switch case

/*let i=0;
while(i<5){
    console.log(i)
    i++
}*/

//destructuring asssignment

const person={
    name:"narottam",
    age:23,
    address:{
        city:"Malda",
        state:"west bengal"
    }
}
const {address:{city}}=person;
console.log(city)
console.log(Math.ceil(5))
let a="abc"
let b="gth"
console.log(...a,...b)

const numbers = [1, 2, 3, 4];

const result=numbers.map((num) => num);
console.log(result)