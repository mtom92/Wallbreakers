var frequencySort = function(s) {
    var sArr = s.split("")
    var sMap = {}
    var max = 0
    var result =""
    for(var i=0;i<sArr.length;i++){
        if(!sMap[sArr[i]]){
           sMap[sArr[i]]=1
           }
        else{
            sMap[sArr[i]]++
        }
    }


    var wMap={}

    for(var letter in sMap){
        if(!wMap[sMap[letter]]){
           wMap[sMap[letter]]=[letter]
           max = Math.max(max,Number(sMap[letter],10))
           }
        else{
            wMap[sMap[letter]].push(letter)
        }
    }


    for(var j=max;j>=0;j--){
            if(wMap[j]){
                    wMap[j].forEach(letter => {
                            result += letter.repeat(j)
                    })
               }
    }

    return result
};
