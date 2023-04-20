let a=[0,1,2,2,3,0,4,2]
let val=2;
var removeElement = function(nums, val) {
    let i=0
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=val){
            nums[i]=nums[j]
            i++;
        }
       
    }
    nums.length=i
    return nums;
    
};
console.log(removeElement(a,val))