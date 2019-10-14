var isAnagram = function(s, t) {

    if(s.length === t.length){
        var sMap= mapping(s)
        var tMap= mapping(t)

            function mapping(word){
            var result={}
            for(var i=0;i<word.length;i++){
                if(result[word[i]]){
                    result[word[i]]++
                   }
                else{
                    result[word[i]]=1
                }
            }
            return result
        }

        for(var letter in sMap){
            if(sMap[letter] != tMap[letter]){
                  return false
               }
        }
        return true
       }
    else{
        return false
    }

};
