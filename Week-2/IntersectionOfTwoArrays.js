var intersection = function(nums1, nums2) {
    var hashNum1 = tohash(nums1)

    function tohash(arr){
        result = {}
        for(var i=0;i<arr.length;i++){
            if(!result[arr[i]]){
                result[arr[i]]=1
            }
        }
         return result
    }

    return nums2.filter(num =>{
        if(hashNum1[num]){
           delete hashNum1[num]
           return  true
        }
        return false
    })


};
