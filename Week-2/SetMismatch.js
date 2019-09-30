var findErrorNums = function(nums) {
    var numsMap={}
    var max=nums.length
    var result = []
    for(var i=0;i<nums.length;i++){
        if(!numsMap[nums[i]]){
           numsMap[nums[i]]=1
           max = Math.max(nums[i],max)
           }
        else{
            numsMap[nums[i]]++
            result.push(nums[i])
        }
    }

    var init = 1
    while(init <=max){
         if(!numsMap[init] ){
             result.push(init)
             return result
                }
        init++
          }

};
