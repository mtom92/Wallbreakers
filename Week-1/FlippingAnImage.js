var flipAndInvertImage = function(A) {
   var left,right;

    for(var i=0;i<A.length;i++){
        left=0
        right=A[i].length-1
        while(left<=right){
                if(left == right){
                    A[i][left] = (A[i][left]===1) ?  0 :  1;
                   }
                else{
                  A[i][left] = (A[i][left]===1) ?  0 :  1;
                  A[i][right] = (A[i][right]===1) ?  0 :  1;
                  [A[i][left],A[i][right]]=[A[i][right],A[i][left]];
                }

               left++
               right--
              }
    }

    return A
};
