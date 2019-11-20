var findTheDifference = function(s, t) {
    var sMap = hash(s.split(""))
    var tMap = hash(t.split(""))

    function hash(arr){
        var result = {}
        for(var i=0;i<arr.length;i++){
            if(!result[arr[i]]){
                result[arr[i]]=1
            }
            else{
             result[arr[i]]++
            }
        }
            return result
    }

    for(var letter in tMap){
        if(!sMap[letter]){
            return letter
        }
        else if(sMap[letter] != tMap[letter]){
                return letter
                }
    }
};
