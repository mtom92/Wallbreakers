var numJewelsInStones = function(J, S) {
    var jewels = {};
    var result = 0;
    for(var i=0;i<S.length;i++){
        if(jewels[S[i]]>0){
             jewels[S[i]]++
           }
        else{
            jewels[S[i]]=1
        }
    }

    for(var j=0; j<J.length; j++){
        if(jewels[J[j]]){
             result += jewels[J[j]]
           }
    }

    return result
};
