var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    var result = [];

    for(var i=0; i< strs[0].length ; i++){
        for(var j=1; j < strs.length; j++){
            if(strs[j][i] != (strs[0][i]))  return result.join("")
        }
        result.push(strs[0][i])
    }

    return result.join("")
};
