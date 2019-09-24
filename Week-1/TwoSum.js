var twoSum = function(nums, target) {
    var mapN = {} ;
    for(var i=0; i<nums.length;i++){
                if(mapN[target - nums[i]] > -1){
                   return [mapN[target - nums[i]],i]
                   }
                else{
                    mapN[nums[i]] = i
                }
    }
};
