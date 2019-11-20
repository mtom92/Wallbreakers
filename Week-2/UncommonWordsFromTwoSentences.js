var uncommonFromSentences = function(A, B) {
    var A = toHash(A.split(" "))
    var B = toHash(B.split(" "))
    var aHash = {}
    var result = []

    function toHash(arr){
        result = {}
        for(var i=0; i<arr.length;i++){
            if(result[arr[i]]){
                result[arr[i]]++
            }
            else{
                result[arr[i]]=1
            }
        }
        return result
    }

    for(var word in A){
        if(B[word]){
           B[word]=0
           }
        else if(A[word]===1){
             result.push(word)
                }
    }

    for(var word in B){
        if(B[word]===1){
           result.push(word)
           }
    }

    return result
};
