var arrayPairSum = function(nums) {
   nums.sort(function(a,b){return a-b})
   var res = 0

   for(var j=0;j<nums.length;j+=2){
       res+=nums[j]
   }

    return res
};
