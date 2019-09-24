var singleNumber = function(nums) {
    numbers={}
    for(var i=0;i<nums.length;i++){
        if(numbers[nums[i]]){
            numbers[nums[i]]++
           }
        else{
            numbers[nums[i]]=1
        }
    }

    for(var num in numbers){
        if(numbers[num]==1){
           return num
           }
    }
};
