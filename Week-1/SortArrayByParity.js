var sortArrayByParity = function(A) {
    var start = 0 , end=1,help;

    while(end< A.length){
        if(A[start]%2 === 0){
           start++
           end++
           }
        else {
                if(A[end]%2 === 0){
                    help = A[start];
                    A[start]=A[end];
                    A[end]=help;
                }
                else{
                    end++
                }
           }
    }

    return A
};
