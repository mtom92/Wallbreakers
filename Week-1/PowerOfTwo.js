var isPowerOfTwo = function(n) {

    var start = 1
    while(true){
    if(start < n){
       start *= 2
       }
    else if(start > n){
         return false
            }
     else{
         return true
     }
    }
};
