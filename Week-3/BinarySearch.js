var search = function(nums, target) {
   var start = 0;
   var end = nums.length-1;
   return binary(0,end,nums,target)

    function binary(init,finish,arr,target){

        var pivot = Math.floor((init+finish)/2)

        if(arr[pivot]===target){
           return pivot
           }
        else if(pivot<init || pivot>finish) {
            return -1
             }
        else if(arr[pivot] < target){
                return binary(pivot+1,finish,arr,target)
                }
        else if(arr[pivot] > target){
            return binary(init,pivot-1,arr,target)
        }
    }

};
