var nextGreaterElement = function(nums1, nums2) {
    var stack = [];
    var dic = {};
    var res = [];

    for(var num of nums2){
        while(stack != [] && num > stack[stack.length-1]){
               dic[stack.pop()] = num
              }
        stack.push(num)
    }

    for(var num of nums1){
        if(dic[num]){
           res.push(dic[num])
           }
        else{
            res.push(-1)
        }
    }

    return res
};
