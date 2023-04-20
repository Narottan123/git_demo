function a()
{
    var b=10;
    //console.log(b)//10
    function c()
    {
        console.log(b) //10
    }
    c();
}
console.log(b) //undefined

a();



