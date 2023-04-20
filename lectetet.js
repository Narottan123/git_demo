function x(){
    var a=4;
    function y(){
        console.log(a);
    }
    return y;
}
let result=x();
result();