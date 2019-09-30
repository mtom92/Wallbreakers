var firstUniqChar = function(s) {
    var characters = {}
    var sArr = s.split("")
    for(var i=0; i<sArr.length;i++){
        if(!characters[sArr[i]]){
           characters[sArr[i]] = [1,i]
           }
        else{
           characters[sArr[i]][0]++
           characters[sArr[i]][1]=false
        }
    }

    for(var char in characters){
        if(characters[char][0]===1){
           return characters[char][1]
           }
    }

    return -1
};
