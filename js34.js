function sum(){
    function add(a,b){
        return  a+b;
    }
    return add;
}
const result=sum() //it returns add function
console.log(result(2,3))