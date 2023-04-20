/*function checkeven(num){
    if(num%2==0){
        return "even number"
    }
    else{
        return "odd number"
    }
}
console.log(checkeven(24))*/

//pass by reference

let array=[1,2,3,4]
let sum=0;
function sumarray(array){
    for(let i=0;i<=array.length;i++){
        sum+=i;
    }
    return sum;
}
console.log(sumarray(array))

/*let student = [
    { name: "Smith", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "John", rollNumber: 16, marks: 35 },
    { name: "Tiger", rollNumber: 7, marks: 55 }
];
//marks greater than 60 and roll number greater than 15
//filter it
let result = student.filter(x => (x.marks > 60 && x.rollNumber > 15))
       
                    
console.log(result);*/

/*const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];

  let result=users.map(x=>`${x.firstName} ${x.lastName}`)
  console.log(result)*/
